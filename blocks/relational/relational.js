import { registerBlockType } from '@wordpress/blocks';
import { __ } from '@wordpress/i18n';
import { InspectorControls, MediaUpload, MediaUploadCheck } from '@wordpress/block-editor';
import { PanelBody, SelectControl, Button } from '@wordpress/components';
import { useSelect, useDispatch } from '@wordpress/data';
import { useState } from '@wordpress/element';

registerBlockType('celorgscratch/promocard', {
     title: __('Promo Card', 'textdomain'),
     icon: 'index-card',
     category: 'common',
     attributes: {
          postId: {
               type: 'number',
               default: 0,
          },
          postType: {
               type: 'string',
               default: 'post',
          },
          postTitle: {
               type: 'string',
               default: '',
          },
          postExcerpt: {
               type: 'string',
               default: '',
          },
          customImage: {
               type: 'string',
               default: '',
          },
          postLink: {
               type: 'string',
               default: '',
          },
     },
     edit: ({ attributes, setAttributes }) => {
          const { postId, postType, customImage } = attributes;

          const [updatedPostExcerpt, setUpdatedPostExcerpt] = useState(attributes.postExcerpt);

          useDispatch('core');
          const posts = useSelect(select => {
               return select('core').getEntityRecords('postType', postType, { per_page: 100 });
          }, [postType]);

          const postOptions = posts ? posts.map(post => ({ label: post.title.rendered, value: post.id })) : [];

          useSelect(select => {
               const post = select('core').getEntityRecord('postType', 'post', attributes.postId);
               if (post && post.excerpt.rendered !== updatedPostExcerpt) {
                    setUpdatedPostExcerpt(post.excerpt.rendered);
               }
          });

          const updatePostDetails = async (newPostId) => {
               if (newPostId !== postId) {
                    if (newPostId !== undefined && newPostId !== null) {
                         const selectedPost = posts.find(post => post.id.toString() === newPostId.toString());
                         if (selectedPost) {
                              setAttributes({
                                   postId: selectedPost.id,
                                   postTitle: selectedPost.title.rendered,
                                   postExcerpt: selectedPost.excerpt.rendered,
                                   postLink: selectedPost.link,
                              });
                         }
                    }
               }
          };

          return (
               <div>
                    <InspectorControls>
                         <PanelBody title={__('Post Settings', 'textdomain')}>
                              <SelectControl
                                   label={__('Post Type', 'textdomain')}
                                   value={postType}
                                   options={[
                                        { label: 'Post', value: 'post' },
                                        { label: 'Page', value: 'page' },
                                        { label: 'Promotions', value: 'scratch_promos' },
                                        { label: 'Routes', value: 'route' },
                                        { label: 'GoSmart', value: 'go_smart' },
                                   ]}
                                   onChange={(value) => setAttributes({ postType: value })}
                              />
                              <SelectControl
                                   label={__('Post', 'textdomain')}
                                   value={postId.toString()}
                                   options={[
                                        { label: 'Select a post', value: '' },
                                        ...postOptions
                                   ]}
                                   onChange={(value) => updatePostDetails(value)}
                              />
                         </PanelBody>
                         <PanelBody title={__('Custom Image', 'textdomain')}>
                              <MediaUploadCheck>
                                   <MediaUpload
                                        onSelect={(media) => setAttributes({ customImage: media.url })}
                                        allowedTypes={['image']}
                                        render={({ open }) => (
                                             <Button onClick={open} isDefault isLarge>
                                                  {customImage ? __('Change Image', 'textdomain') : __('Select Image', 'textdomain')}
                                             </Button>
                                        )}
                                   />
                              </MediaUploadCheck>
                              {customImage && (
                                   <div style={{ marginTop: '20px' }}>
                                        <img src={customImage} alt={__('Selected image', 'textdomain')} style={{ width: '100%' }} />
                                        <Button onClick={() => setAttributes({ customImage: '' })} isLink isDestructive>
                                             {__('Remove Image', 'textdomain')}
                                        </Button>
                                   </div>
                              )}
                         </PanelBody>
                    </InspectorControls>
                    <div className="custom-card-block">
                         {postId ? (
                              <>
                                   <figure>
                                        {customImage && <img src={customImage} alt={attributes.postTitle} />}
                                   </figure>
                                   <div class="promo_excerpt_wrap">
                                        <p class="h3">{attributes.postTitle}</p>
                                        <p className="promo_excerpt" dangerouslySetInnerHTML={{ __html: updatedPostExcerpt + ' <span class="arrow"><svg version="1.1" class="arrow_svg link_arrow" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 22 22" style="enable-background:new 0 0 22 22;" xml:space="preserve"><g class="Forward_arrow" transform="translate(0 2)"><path class="blck_lnk_arrow" d="M11-2L9,0l7.57,7.57H0v2.86h16.57L9,18l2,2L22,9L11-2z"></path></g></svg></span>' }} />
                                   </div>
                              </>
                         ) : (
                              <p>Select a post to display its card</p>
                         )}
                    </div>
               </div>
          );
     },
     save: ({ attributes }) => {
          const { customImage, postLink } = attributes;
          return (
               <div className="custom-card-block">
                    <figure>
                         {customImage && <img src={customImage} alt={attributes.postTitle} />}
                    </figure>
                    <div class="promo_excerpt_wrap">
                         <a href={postLink}>
                              <p class="h3">{attributes.postTitle}</p>
                              <p className="promo_excerpt" dangerouslySetInnerHTML={{ __html: attributes.postExcerpt + ' <span class="arrow"><svg version="1.1" class="arrow_svg link_arrow" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 22 22" style="enable-background:new 0 0 22 22;" xml:space="preserve"><g class="Forward_arrow" transform="translate(0 2)"><path class="blck_lnk_arrow" d="M11-2L9,0l7.57,7.57H0v2.86h16.57L9,18l2,2L22,9L11-2z"></path></g></svg></span>' }} />
                         </a>
                    </div>
               </div>
          );
     },
});
