// Importing necessary components from the WordPress block and editor libraries
import { registerBlockType } from '@wordpress/blocks';
import { InnerBlocks } from '@wordpress/block-editor';

// Allowed blocks
const GUIDEDESTINATION = [
     ['core/paragraph', {
          placeholder: 'Destination Name',
          className: 'dest_name has-h-3-font-size',
     }],
     ['core/paragraph', {
          placeholder: 'Address',
          className: 'dest_address',
     }],
     ['core/paragraph', {
          placeholder: 'Short description of destination',
          className: 'dest_descript',
     }]
];

// Registering the block
registerBlockType('omnifseupdt/guidesaddress', {
     title: 'Guides Destination',
     icon: 'location',
     category: 'common',
     parent: 'omnifseupdt/guidesmap',
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
               <div className="guidesmap_dest">
                    <InnerBlocks template={GUIDEDESTINATION} templateLock="all"/>
               </div>
          );
     },

     save: () => {
          return (
               <div className="guidesmap_dest">
                    <InnerBlocks.Content />
               </div>
          );
     },
});