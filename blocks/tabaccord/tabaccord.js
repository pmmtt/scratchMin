// Imports
import { registerBlockType } from '@wordpress/blocks';
import { InnerBlocks, useBlockProps, PlainText } from '@wordpress/block-editor';
import { __ } from '@wordpress/i18n';

// Imports - END

const celtisIcon = (
     <svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 100 100">
          <g>
               <path fill="#0057a7" d="M95.7,32.2c-7.8-15.4-25.3-26.1-45.7-26.1S2.4,23.8.2,46.3c23.9-8.5,52.3-13.7,83-14.2,4.2,0,8.4,0,12.6.2" />
               <path fill="#75b02e" d="M0,49c17.2-4.8,34.8-7.4,52.6-7.7-4.9,4-10.6,8.9-17.1,14.7-8.9,8-17.7,16.3-23.8,22.2C4.3,70.7,0,60.6,0,50c0-.3,0-.6,0-1" />
               <path fill="#75b02e" d="M63.9,41.5c12.1.3,24.1,1.6,35.9,4.1.2,1.5.2,3,.2,4.4,0,24.2-22.4,43.9-50,43.9-3.5,0-6.9-.4-10.3-1,3.1-9.6,6.8-19,11-28.2,3.7-8.1,8.1-15.8,13.1-23.2" />
          </g>
     </svg>
);

const CELTIS_TABACCORDSNGL_TEMPLATE = [
     ['core/group', {
          className: 'tab-content',
          'aria-labelledby': 'tab-content-1', // Example id
          'aria-hidden': 'true',
     }],
];

// Register Block
registerBlockType('celorgscratch/tabaccord', {
     title: 'Tab/Accordion Drawer',
     icon: celtisIcon,
     category: 'celtis-custom-category',
     parent: ['celorgscratch/tabaccordgroup'],
     attributes: {
          title: {
               type: 'string',
               default: '',
          },
          text: {
               type: 'string',
               default: '',
          },
          align: {
               type: 'string',
               default: 'center',
          },
          ariaLabel: {
               type: 'string',
               default: __('Button', 'text-domain'),
          },
     },
     edit: (props) => {
          const { attributes, setAttributes } = props;
          const blockProps = useBlockProps();
          const maxChars = 35;

          const onLabelChange = (value) => {
               if (value.length <= maxChars) {
                    setAttributes({ text: value });
               }
          };

          return (
               <div {...blockProps} className={`single-tab-wrap`} role="tablist">
                    <div {...blockProps}>
                         <PlainText
                              tagName="button"
                              placeholder={__('Add button text...', 'text-domain')}
                              value={attributes.text}
                              onChange={onLabelChange}
                              style={{ textAlign: attributes.align }}
                              aria-label={attributes.text || attributes.ariaLabel}
                         />
                    </div>

                    <InnerBlocks
                         template={CELTIS_TABACCORDSNGL_TEMPLATE}
                         allowedBlocks={['celorgscratch/custbtn', 'core/group']}
                    />
               </div>
          );
     },
     save: (props) => {
          const { attributes } = props;
          const blockProps = useBlockProps.save();
          const { text } = attributes;
          const setTabClass = text.toLowerCase().replace(/[^a-z0-9-]/g, '-');

          return (
               <div {...blockProps} id={setTabClass} className={`single-tab-wrap content-${setTabClass}`} role="tablist">
                    <button
                         id={`tab-${setTabClass}-button`}
                         aria-controls={`panel-${attributes.text || 'button'}`}
                         aria-expanded="false"
                         aria-label={attributes.ariaLabel || attributes.text}
                    >
                         <span>
                              {attributes.text || __('Button', 'text-domain')}
                         </span>
                    </button>
                    <div
                         id={`panel-${setTabClass}-content`}
                         className="tab-content"
                         role="tabpanel"
                         aria-hidden="true"
                         aria-labelledby={`tab-${attributes.text || 'button'}`}
                    >
                         <InnerBlocks.Content />
                    </div>
               </div>

          );
     }
});
