// Importing necessary components from the WordPress block and editor libraries
import { registerBlockType } from '@wordpress/blocks';
import { InnerBlocks } from '@wordpress/block-editor';

// Allowed blocks
const GUIDEINTRO = [
     ['core/group', {
          className: 'guides_intro',
     }, [
          ['core/heading', { placeholder: "Heading" }],
          ['core/paragraph', { placeholder: "Byline" }]
     ]],
     ['core/group', {
               className: 'guides_list',
          }
     ],
     ['celtisorg/googlemap']
];

const ALLOWEDGUIDSBLOCKS = [ 'celorgscratch/guidesdestsec', 'celorgscratch/guidesaddress', 'celtisorg/googlemap' ];
// Registering the block
registerBlockType('celorgscratch/guidesmap', {
     title: 'Neighborhood Guides Info & Map',
     icon: 'location',
     category: 'common',

     edit: () => {
          return (
               <div className="guidesmap_wrap">
                    <div class="guides_info_wrap">
                         <InnerBlocks template={GUIDEINTRO} allowedBlocks={ALLOWEDGUIDSBLOCKS} />
                    </div>
               </div>
          );
     },

     save: () => {
          return (
               <div className="guidesmap_wrap">
                    <InnerBlocks.Content />
               </div>
          );
     },
});