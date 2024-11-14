// Importing necessary components from the WordPress block and editor libraries
import { registerBlockType } from '@wordpress/blocks';
import { InnerBlocks } from '@wordpress/block-editor';

// Allowed blocks
const GUIDEDESTINATIONSECTION = [
     ['core/button', {
          placeholder: 'Destination Section Header',
          className: 'accord_btn',
     }],
     ['celorgscratch/guidesaddress']
];

const ALLOWEDGUIDSSECTION = [ 'celorgscratch/guidesaddress' ];
// Registering the block
registerBlockType('celorgscratch/guidesdestsec', {
     title: 'Guides destination section',
     icon: 'location',
     category: 'common',
     parent: 'celorgscratch/guidesmap',
     attributes: {
          content: {
               type: 'array',
               source: 'children',
               selector: 'address',
               placeholder: 'Add destination address',
          },
     },

     edit: () => {
          return (
               <div className="accord_sec_wrap">
                    <InnerBlocks template={GUIDEDESTINATIONSECTION} allowedBlocks={ALLOWEDGUIDSSECTION} />
               </div>
          );
     },

     save: () => {
          return (
               <div className="accord_sec_wrap">
                    <InnerBlocks.Content />
               </div>
          );
     },
});