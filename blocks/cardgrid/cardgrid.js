import { registerBlockType } from '@wordpress/blocks';
import { InnerBlocks, BlockControls } from '@wordpress/block-editor';
import { select, subscribe } from '@wordpress/data';
import { ToolbarGroup, ToolbarButton } from '@wordpress/components';

let blockLimit = 8;
let blockName = 'celorgscratch/gridcard';

registerBlockType('celorgscratch/cardgrid', {
     title: 'Cards',
     icon: 'grid-view',
     category: 'layout',
     attributes: {
          imageCards: {
               type: 'string',
               default: 'image-quick-links', // Set default to 'image-quick-links'
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
          let { imageCards, gridType2 } = attributes;

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
                                   style={{
                                        backgroundColor: imageCards === 'portrait-card-links' ? 'black' : 'transparent',
                                        color: imageCards === 'portrait-card-links' ? 'white' : 'inherit',
                                   }}
                                   onClick={() => setAttributes({ imageCards: 'portrait-card-links' })}
                              >
                                   Portrait Card
                              </ToolbarButton>
                              <ToolbarButton
                                   style={{
                                        backgroundColor: imageCards === 'image-quick-links' ? 'black' : 'transparent',
                                        color: imageCards === 'image-quick-links' ? 'white' : 'inherit',
                                   }}
                                   onClick={() => setAttributes({ imageCards: 'image-quick-links' })}
                              >
                                   Image Quick Links
                              </ToolbarButton>
                              <ToolbarButton
                                   style={{
                                        backgroundColor: imageCards === 'grid-width-card' ? 'black' : 'transparent',
                                        color: imageCards === 'grid-width-card' ? 'white' : 'inherit',
                                   }}
                                   onClick={() => setAttributes({ imageCards: 'grid-width-card' })}
                              >
                                   Hero Card
                              </ToolbarButton>
                              <ToolbarButton
                                   style={{
                                        backgroundColor: imageCards === 'carousel-card' ? 'black' : 'transparent',
                                        color: imageCards === 'carousel-card' ? 'white' : 'inherit',
                                   }}
                                   onClick={() => setAttributes({ imageCards: 'carousel-card' })}
                              >
                                   Hero Carousel Card
                              </ToolbarButton>
                         </ToolbarGroup>
                    </BlockControls>
                    <section className={`card_grid ${imageCards} ${gridType2}`}>
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
          let { imageCards } = props.attributes;

          return (
               <section className={`card_grid ${imageCards}`}>
                    <InnerBlocks.Content />
               </section>
          );
     },
});
