import { registerBlockType } from '@wordpress/blocks';
import { InnerBlocks, BlockControls } from '@wordpress/block-editor';
import { select, subscribe } from '@wordpress/data';
import { ToolbarGroup, ToolbarButton } from '@wordpress/components';

let blockLimit = 8;
let blockName = 'omnifseupdt/gridcard';

registerBlockType('omnifseupdt/cardgrid', {
     title: 'Card Grid',
     icon: 'grid-view',
     category: 'layout',
     attributes: {
          gridType1: {
               type: 'string',
               default: 'quick-links', // Set default to 'quick-links'
          },
          gridType2: {
               type: 'string',
               default: '', // Set default to empty string
          },
     },
     supports: {
          color: {
               text: false,
               link: false,
               background: true
          }
     },
     edit: function (props) {
          let blockClientId = props.clientId;
          let { attributes, setAttributes } = props;
          let { gridType1, gridType2 } = attributes;

          subscribe(() => {
               let innerBlocks = select('core/block-editor').getBlocks(blockClientId);
               let innerBlockCount = innerBlocks.reduce((count, block) => block.name === blockName ? count + 1 : count, 0);

               if (innerBlockCount > blockLimit) {
                    let lastInnerBlock = innerBlocks[innerBlocks.length - 1];
                    if (lastInnerBlock.name === blockName) {
                         wp.data.dispatch('core/block-editor').removeBlock(lastInnerBlock.clientId);
                    }
               }
          });

          return (
               <>
                    <BlockControls>
                         <ToolbarGroup>
                              <ToolbarButton
                                   className={gridType1 === 'quick-links' ? 'is-active' : ''}
                                   onClick={() => setAttributes({ gridType1: 'quick-links' })}
                              >
                                   Quick Links
                              </ToolbarButton>
                              <ToolbarButton
                                   className={gridType1 === 'link-grid' ? 'is-active' : ''}
                                   onClick={() => setAttributes({ gridType1: 'link-grid' })}
                              >
                                   Link Grid
                              </ToolbarButton>
                              <ToolbarButton
                                   className={gridType1 === 'icon-grid' ? 'is-active' : ''}
                                   onClick={() => setAttributes({ gridType1: 'icon-grid' })}
                              >
                                   Icon Grid
                              </ToolbarButton>
                         </ToolbarGroup>
                         <ToolbarGroup>
                              <ToolbarButton
                                   className={gridType2 === 'add-sub-head' ? 'is-active' : ''}
                                   onClick={() => setAttributes({ gridType2: 'add-sub-head' })}
                              >
                                   Add block description
                              </ToolbarButton>
                              <ToolbarButton
                                   className={gridType2 === 'rmv-sub-head' ? 'is-active' : ''}
                                   onClick={() => setAttributes({ gridType2: 'rmv-sub-head' })}
                              >
                                   Remove block description
                              </ToolbarButton>
                         </ToolbarGroup>
                    </BlockControls>
                    <section className={`card_grid ${gridType1} ${gridType2}`}>
                         <InnerBlocks
                              className={['card_grid']}
                              allowedBlocks={[blockName]}
                              template={[
                                   [blockName]
                              ]}
                              templateInsertUpdatesSelection={false}
                         />
                    </section>
               </>
          );
     },
     save: function (props) {
          let { gridType1 } = props.attributes;
          let { gridType2 } = props.attributes;

          return (
               <section className={`card_grid ${gridType1} ${gridType2}`}>
                    <InnerBlocks.Content />
               </section>
          );
     },
});