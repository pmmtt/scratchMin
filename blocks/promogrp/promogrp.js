import { registerBlockType } from '@wordpress/blocks';
import { InnerBlocks } from '@wordpress/block-editor';

registerBlockType('celorgscratch/promogroup', {
     title: 'Promo Group',
     icon: 'smiley',
     category: 'text',
     edit: (props) => {
          return (
               <InnerBlocks
                    allowedBlocks={['celorgscratch/promocard', 'core/group']}
                    template={[
                         ['core/group',
                              { className: 'promo_wrap', tagName: 'section' },
                              [
                                   ['celorgscratch/promocard',
                                        { className: 'featured_promo has-primary-background-color has-background', query: {} }
                                   ],
                                   ['core/group',
                                        { className: 'promo_grid' },
                                        [
                                             ['core/group',
                                                  { className: 'promo_wrap_inner' },
                                                  [
                                                       ['celorgscratch/promocard', {}]
                                                  ]
                                             ]
                                        ]
                                   ]
                              ]
                         ]
                    ]}
               />
          );
     },
     save: (props) => {
          return (
               <InnerBlocks.Content />
          );
     },
});
