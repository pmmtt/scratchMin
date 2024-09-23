import { registerBlockType } from '@wordpress/blocks';
import { InnerBlocks, BlockControls, URLInput } from '@wordpress/block-editor';
import { ToolbarGroup, ToolbarButton } from '@wordpress/components';
import { useState } from '@wordpress/element'; // Import useState

registerBlockType('omnifseupdt/gridcard', {
     title: 'Grid Card',
     category: 'layout',
     parent: ['omnifseupdt/cardgrid'],
     attributes: {
          url: {
               type: 'string',
               default: '',
          },
     },
     supports: {
          color: {
               text: false,
               link: true,
               background: true
          },
          url: {
               type: 'string',
               source: 'attribute',
          }
     },
     edit: function (props) {
          const { attributes, setAttributes } = props;
          const [isURLInputVisible, setURLInputVisibility] = useState(false); // Correct use of useState

          return (
               <div className="grid_card">
                    <BlockControls>
                         <ToolbarGroup>
                              <ToolbarButton
                                   icon="admin-links"
                                   label="Add URL"
                                   onClick={() => setURLInputVisibility(!isURLInputVisible)}
                              />
                         </ToolbarGroup>
                    </BlockControls>
                    {isURLInputVisible && (
                         <div style={{ position: 'absolute', zIndex: '100', padding: '10px', background: 'white', top: '40px' }}>
                              <URLInput
                                   value={attributes.url}
                                   onChange={(newURL) => setAttributes({ url: newURL })}
                                   autoFocus={false}
                              />
                         </div>
                    )}
                    <InnerBlocks
                         allowedBlocks={['core/image', 'core/paragraph']}
                         template={[
                              ['core/image', {}],
                              ['core/paragraph', { placeholder: 'Card Headline', className: 'h4' }],
                              ['core/paragraph', { placeholder: 'Card Byline', className: 'card_byline' }]
                         ]}
                         templateLock="all"
                    />
                    <span>
                         <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                              viewBox="0 0 22 22" style={{ enableBackground: 'new 0 0 22 22' }} xmlSpace="preserve">
                              <g transform="translate(0 2)">
                                   <path className="white_lnk_arrow" d="M11-2L9,0l7.57,7.57H0v2.86h16.57L9,18l2,2L22,9L11-2z"></path>
                              </g>
                         </svg>
                    </span>
               </div>
          );
     },
     save: function ({ attributes }) {
          return (
               <a href={attributes.url} className="grid_card">
                    <InnerBlocks.Content />
                    <span>
                         <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                              viewBox="0 0 22 22" style={{ enableBackground: 'new 0 0 22 22' }} xmlSpace="preserve">
                              <g transform="translate(0 2)">
                                   <path className="white_lnk_arrow" d="M11-2L9,0l7.57,7.57H0v2.86h16.57L9,18l2,2L22,9L11-2z"></path>
                              </g>
                         </svg>
                    </span>
               </a>
          );
     }
});
