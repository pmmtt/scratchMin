import { registerBlockType } from '@wordpress/blocks';
import { Fragment, createElement } from '@wordpress/element';
import { InspectorControls, InnerBlocks } from '@wordpress/blockEditor';
import { PanelBody, SelectControl } from '@wordpress/components';

registerBlockType('omnifseupdt/custgroup', {
     title: 'Custom Group',
     icon: {
          // SVG icon
          src: 'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" fill="#AAD572"/></svg>',
     },
     category: 'common',
     attributes: {
          widthOption: {
               type: 'string',
               default: 'full-width',
          },
     },
     supports: {
          color: {
               text: false,
               link: true,
               background: true
          }
     },
     edit: (props) => {
          const widthOptions = [
               { label: 'Full Width', value: 'full-width' },
               { label: 'Content Width', value: 'limit-width' },
               { label: 'Limit Width', value: 'small-width' },
               { label: 'Limit Mobile, Full Desktop', value: 'limit-mobile-full-desktop' },
               { label: 'Full Mobile, Limit Desktop', value: 'full-mobile-limit-desktop' },
               { label: 'Single Column Indent', value: 'single-column-indent' },
          ];

          return createElement(
               Fragment,
               {},
               createElement(
                    InspectorControls,
                    {},
                    createElement(
                         PanelBody,
                         { title: 'Width Options', initialOpen: true },
                         createElement(
                              SelectControl,
                              {
                                   label: 'Select Width',
                                   value: props.attributes.widthOption,
                                   options: widthOptions,
                                   onChange: (selectedOption) => {
                                        props.setAttributes({ widthOption: selectedOption });
                                   },
                              }
                         )
                    )
               ),
               createElement(
                    InnerBlocks,
                    {
                         tagName: 'section',
                         className: props.attributes.widthOption,
                    }
               )
          );
     },
     save: (props) => {
          return createElement(
               'section',
               { className: `${props.attributes.widthOption} custgroup` },
               createElement(InnerBlocks.Content)
          );
     },
});