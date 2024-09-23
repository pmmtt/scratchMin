// Imports
import { registerBlockType } from '@wordpress/blocks';
import { InnerBlocks, InspectorControls, useBlockProps, ButtonBlockAppender } from '@wordpress/block-editor';
import { PanelBody, PanelRow, RadioControl } from "@wordpress/components";
// Imports - END

const celtisIcon = (
     <svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 100 100"><g><path fill="#0057a7" d="M95.7,32.2c-7.8-15.4-25.3-26.1-45.7-26.1S2.4,23.8.2,46.3c23.9-8.5,52.3-13.7,83-14.2,4.2,0,8.4,0,12.6.2" /><path fill="#75b02e" d="M0,49c17.2-4.8,34.8-7.4,52.6-7.7-4.9,4-10.6,8.9-17.1,14.7-8.9,8-17.7,16.3-23.8,22.2C4.3,70.7,0,60.6,0,50c0-.3,0-.6,0-1" /><path fill="#75b02e" d="M63.9,41.5c12.1.3,24.1,1.6,35.9,4.1.2,1.5.2,3,.2,4.4,0,24.2-22.4,43.9-50,43.9-3.5,0-6.9-.4-10.3-1,3.1-9.6,6.8-19,11-28.2,3.7-8.1,8.1-15.8,13.1-23.2" /></g></svg>
);

// Register Page Intro
registerBlockType('celorgscratch/tabaccordgroup', {
     title: 'Tab/Accordion Group',
     icon: celtisIcon,
     category: 'celtis-custom-category',
     supports: {
          align: ['full'],
     },
     attributes: {
          align: {
               type: 'string',
               default: 'full',
          },
          tabAccordWrap: {
               type: "string",
               default: "tabWrap",
          },
          tabWrap: {
               default: {
                    type: "string",
               },
          },
          accordionWrap: {
               default: {
                    type: "string",
               },
          },
     },
     edit: editComponent,
     save: saveComponent,
});

const CELTIS_TABACCORD_TEMPLATE = [
     ['celorgscratch/tabaccord',
          {}
     ]
]

function editComponent({ attributes, setAttributes}) {
     return (
          <div {...useBlockProps()} className={attributes.tabAccordWrap}>
               <InnerBlocks template={CELTIS_TABACCORD_TEMPLATE} allowedBlocks={['celorgscratch/tabaccord']}/>

               <InspectorControls style={{ marginBottom: "40px" }}>
                    <PanelBody>
                         <PanelRow>
                              <RadioControl
                                   label="Tab/Accordion Content"
                                   help="Select for tab content or and accordion"
                                   selected={attributes.tabAccordWrap}
                                   options={[
                                        { label: "Tab", value: "tabWrap" },
                                        { label: "Accordion", value: "accordionWrap" },
                                   ]}
                                   onChange={(value) => setAttributes({ tabAccordWrap: value })}
                              />
                         </PanelRow>
                    </PanelBody>
               </InspectorControls>
          </div>
     );
}

function saveComponent({ attributes }) {
     return (
          <div className={attributes.tabAccordWrap}>
               <InnerBlocks.Content />
          </div>
     );
}
