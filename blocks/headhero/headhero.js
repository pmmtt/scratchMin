import { registerBlockType } from '@wordpress/blocks';
import { MediaUpload, MediaUploadCheck, BlockControls, InnerBlocks } from '@wordpress/block-editor';
import { Button, ToolbarGroup, ToolbarButton } from '@wordpress/components';

const celtisIcon = (
     <svg version="1.1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 50 50">
          <g>
               <g>
                    <path fill="#174F84" d="M25,0C16.48,0,8.96,4.26,4.44,10.77c5.58,0.8,10.94,0.28,10.94,0.28c-0.9-1.11-3.08-1.24-3.08-1.24c1.5-1.28,5.6-1.37,5.6-1.37l0.86,1.5c0.86,0,2.86,0.72,2.86,0.72c1.37-1.58,8.9-3.34,8.9-3.34c4.02-0.47,6.24-2.69,6.24-2.69c0.86,3.25-5.9,5.64-5.9,5.64c-3.04,1.2-5.82,2.78-5.82,2.78c2.57,2.66,1.07,3.98,1.07,3.98c-2.18-3.98-12.53-2.87-12.53-2.87c-5.06-0.29-8.18-1.08-10.11-1.91C1.27,15.99,0,20.35,0,25c0,4.18,1.03,8.11,2.84,11.57c6.9,3.64,13.28,5.62,22.87,4.21c5.44-0.8,15.1-3.87,23.03-7.89C49.55,30.41,50,27.76,50,25C50,11.19,38.81,0,25,0z"/>
                    <path fill="#174F84" d="M5.56,40.72C10.15,46.38,17.15,50,25,50c8.01,0,15.14-3.77,19.72-9.63c-5.58,2.36-11.4,3.66-17.15,3.96C19.17,44.77,12.31,43.51,5.56,40.72z"/>
                    <path fill="#174F84" d="M0.46,9.94c0,0,0.37,1.19,3.02,2.32c0.3-0.51,0.62-1,0.96-1.49C3.11,10.58,1.76,10.31,0.46,9.94z"/>
               </g>
          </g>
     </svg>
);

// Register Block
registerBlockType('celorgscratch/hero', {
     title: 'Hero',
     icon: celtisIcon,
     category: 'celtis-custom-category',
     attributes: {
          imgURL: {
               type: 'string',
               source: 'attribute',
               selector: 'section', // Changed to 'section'
               attribute: 'data-img-url',
          },
          styleOption: {
               type: 'string',
               default: 'styleOne',
          },
     },
     supports: {
          color: {
               text: false,
               link: false,
               background: true
          }
     },
     edit: ({ attributes, setAttributes }) => {
          const { imgURL, styleOption } = attributes;

          const onSelectImage = (media) => {
               setAttributes({ imgURL: media.url });
          };

          return (
               <section className={`hero-block ${styleOption}`} data-img-url={imgURL} style={{ backgroundImage: `url(${imgURL})` }}>
                    <BlockControls>
                         <ToolbarGroup>
                              <ToolbarButton
                                   isPressed={styleOption === 'styleOne'}
                                   onClick={() => setAttributes({ styleOption: 'styleOne' })}
                              >
                                   Box Tall - 500px
                              </ToolbarButton>
                              <ToolbarButton
                                   isPressed={styleOption === 'styleTwo'}
                                   onClick={() => setAttributes({ styleOption: 'styleTwo' })}
                              >
                                   Box Short - 350px
                              </ToolbarButton>
                              <ToolbarButton
                                   isPressed={styleOption === 'styleThree'}
                                   onClick={() => setAttributes({ styleOption: 'styleThree' })}
                              >
                                   Gradient Cover
                              </ToolbarButton>
                         </ToolbarGroup>
                    </BlockControls>

                    <MediaUploadCheck>
                         <MediaUpload
                              onSelect={onSelectImage}
                              allowedTypes={['image']}
                              render={({ open }) => (
                                   <Button onClick={open} isSecondary>
                                        {imgURL ? 'Replace Image' : 'Upload Image'}
                                   </Button>
                              )}
                         />
                    </MediaUploadCheck>
                    <div class="hero-inner-wrap">
                         <InnerBlocks
                              allowedBlocks={['core/heading', 'core/paragraph', 'core/buttons', 'core/button', 'celorgscratch/tabaccordgroup']}
                              templateLock={false}
                         />
                    </div>
               </section>
          );
     },
     save: ({ attributes }) => {
          const { imgURL, styleOption } = attributes;

          return (
               <section className={`hero-block ${styleOption}`} data-img-url={imgURL}>
                    <div class="hero-inner-wrap">
                         <InnerBlocks.Content />
                    </div>
                    <figure>
                         <img src={imgURL} class="hero-img" alt="Hero Background Image" loading="lazy" />
                    </figure>
               </section>
          );
     },
});
