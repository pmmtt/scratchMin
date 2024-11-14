import { registerBlockType } from '@wordpress/blocks';
import { InnerBlocks } from '@wordpress/block-editor';

registerBlockType('celorgscratch/arrowlink', {
     title: 'Block Level/Arrow Link - Update',
     icon: 'button',
     category: 'design',
     edit: () => {
          return (
               <div>
                    <InnerBlocks
                         allowedBlocks={['core/button']}
                         template={[['core/button', {className: 'updt_arrow_link'}]]}
                         templateLock="all"
                    />
               </div>
          );
     },
     save: () => {
          return (
               <div>
                    <InnerBlocks.Content />
               </div>
          );
     },
});
