// Imports
import { registerBlockType } from '@wordpress/blocks';
import { InnerBlocks, InspectorControls, useBlockProps } from '@wordpress/block-editor';
import { PanelBody, PanelRow, SelectControl } from "@wordpress/components";
import { useEffect } from '@wordpress/element';
import { useSelect, useDispatch } from '@wordpress/data';
// Imports - END

const celtisIcon = (
     <svg id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 180 180">
          <path fill="#ffcd00" stroke-width="0px" d="M92.53,146.81c19.58-2.88,54.35-13.93,82.89-28.41,2.97-8.93,4.58-18.47,4.58-28.4C180,40.29,139.71,0,90,0S0,40.29,0,90c0,15.03,3.69,29.2,10.21,41.66,24.85,13.11,47.82,20.23,82.33,15.15Z"/>
          <g>
               <path fill="#1590cd" stroke-width="0px" d="M20.02,146.59c16.5,20.38,41.71,33.41,69.98,33.41s54.5-13.56,70.97-34.66c-20.09,8.5-41.04,13.18-61.74,14.27-30.22,1.55-54.91-2.97-79.21-13.02Z"/>
               <path fill="#fff" d="M92.53,146.81c-34.5,5.08-57.47-2.04-82.33-15.15,2.78,5.31,6.07,10.31,9.82,14.94,24.29,10.05,48.99,14.57,79.21,13.02,20.71-1.09,41.66-5.77,61.74-14.27,6.25-8.01,11.18-17.1,14.45-26.94-28.54,14.48-63.31,25.53-82.89,28.41Z"/>
          </g>
          <path fill="#316195" d="M111.14,36.99c-10.95,4.32-20.95,10.01-20.95,10.01,9.24,9.56,3.85,14.33,3.85,14.33-7.85-14.33-45.09-10.33-45.09-10.33C5.69,48.54,1.67,35.77,1.67,35.77c24.03,6.93,53.73,4,53.73,4-3.23-4-11.07-4.47-11.07-4.47,5.39-4.62,20.16-4.92,20.16-4.92l3.08,5.39c3.08,0,10.3,2.61,10.3,2.61,4.94-5.68,32.03-12.01,32.03-12.01,14.47-1.69,22.47-9.69,22.47-9.69,3.08,11.69-21.23,20.31-21.23,20.31Z"/>
     </svg>
);

// Register Page Intro
registerBlockType('celorgscratch/tabblockgroup', {
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
     },
     edit: editComponent,
     save: saveComponent,
});

function editComponent({ attributes, setAttributes, clientId }) {
     const { replaceInnerBlocks } = useDispatch('core/block-editor');
     const innerBlocks = useSelect((select) => select('core/block-editor').getBlocks(clientId), [clientId]);

     const allowedBlocks = 
          attributes.tabAccordWrap === "tabWrap" ? ['celorgscratch/tabblock'] :
          attributes.tabAccordWrap === "accordionWrap" ? ['celorgscratch/accordblock'] :
          attributes.tabAccordWrap === "toggleTabWrap" ? ['celorgscratch/toggletab'] :
          attributes.tabAccordWrap === "coverTabsWrap" ? ['celorgscratch/covertabs'] :
          undefined;

     const blockProps = useBlockProps({
          className: attributes.tabAccordWrap,
          templateLock: attributes.tabAccordWrap === "toggleTabWrap" ? "all" : false
     });

     useEffect(() => {
          const createDefaultBlocks = () => {
               if (attributes.tabAccordWrap === "tabWrap") {
                    return [
                         wp.blocks.createBlock('celorgscratch/tabblock'),
                         wp.blocks.createBlock('celorgscratch/tabblock')
                    ];
               } else if (attributes.tabAccordWrap === "accordionWrap") {
                    return [
                         wp.blocks.createBlock('celorgscratch/accordblock'),
                         wp.blocks.createBlock('celorgscratch/accordblock')
                    ];
               } else if (attributes.tabAccordWrap === "toggleTabWrap") {
                    return [
                         wp.blocks.createBlock('celorgscratch/toggletab'),
                         wp.blocks.createBlock('celorgscratch/toggletab')
                    ];
               } else if (attributes.tabAccordWrap === "coverTabsWrap") {
                    return [
                         wp.blocks.createBlock('celorgscratch/covertabs')
                    ];
               }
               return [];
          };

          replaceInnerBlocks(clientId, createDefaultBlocks(), false);
     }, [attributes.tabAccordWrap, clientId, replaceInnerBlocks]);

     return (
          <div {...blockProps}>
               <InnerBlocks allowedBlocks={allowedBlocks} />

               <InspectorControls style={{ marginBottom: "40px" }}>
                    <PanelBody>
                         <PanelRow>
                              <SelectControl
                                   label="Tab/Accordion Content"
                                   help="Select for tab content or an accordion"
                                   value={attributes.tabAccordWrap}
                                   options={[
                                        { label: "Tabbed Content", value: "tabWrap" },
                                        { label: "Accordion Content", value: "accordionWrap" },
                                        { label: "Toggle Tabs Content", value: "toggleTabWrap" },
                                        { label: "Cover Tabs", value: "coverTabsWrap" },
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
          <div className={`tab-accord-wrap ${attributes.tabAccordWrap}`}>
               <InnerBlocks.Content />
          </div>
     );
}
