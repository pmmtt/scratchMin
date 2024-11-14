import { registerBlockType } from '@wordpress/blocks';
import { PlainText, useBlockProps } from '@wordpress/block-editor';
import { __ } from '@wordpress/i18n';

registerBlockType('celorgscratch/custbtn', {
     title: __('Custom Button', 'text-domain'),
     icon: 'button',
     category: 'design',
     attributes: {
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

          return (
               <button {...blockProps}>
                    <PlainText
                         tagName="button"
                         placeholder={__('Add button text...', 'text-domain')}
                         value={attributes.text}
                         onChange={(value) => setAttributes({ text: value })}
                         style={{ textAlign: attributes.align }}
                         aria-label={attributes.text || attributes.ariaLabel}
                    />
               </button>
          );
     },
     save: (props) => {
          const { attributes } = props;
          const blockProps = useBlockProps.save();

          return (
               <button
                    {...blockProps}
                    aria-label={attributes.text || attributes.ariaLabel}
                    style={{ textAlign: attributes.align }}
               >
                    {attributes.text || __('Button', 'text-domain')}
               </button>
          );
     },
});
