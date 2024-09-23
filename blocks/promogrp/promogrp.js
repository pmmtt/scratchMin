import { registerBlockType } from '@wordpress/blocks';
import { InnerBlocks } from '@wordpress/block-editor';

registerBlockType('omnifseupdt/promogroup', {
     title: 'Promo Group',
     icon: 'smiley',
     category: 'text',
     edit: (props) => {
          return (
               <InnerBlocks
                    allowedBlocks={['omnifseupdt/promocard', 'core/group']}
                    template={[
                         ['core/group',
                              { className: 'promo_wrap', tagName: 'section' },
                              [
                                   ['omnifseupdt/promocard',
                                        { className: 'featured_promo has-primary-background-color has-background', query: {} }
                                   ],
                                   ['core/group',
                                        { className: 'promo_grid' },
                                        [
                                             ['core/group',
                                                  { className: 'promo_wrap_inner' },
                                                  [
                                                       ['omnifseupdt/promocard', {}]
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
