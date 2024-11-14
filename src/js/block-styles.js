wp.domReady(() => {
     wp.blocks.registerBlockStyle('core/button', {
          name: 'ghost',
          label: 'Ghost',
          className: 'ghost-btn',
          isDefault: false
     });
     
     wp.blocks.registerBlockStyle('core/button', {
          name: 'arrow',
          label: 'Arrow',
          className: 'arrow-btn',
          isDefault: false
     });

     wp.hooks.addFilter(
          'editor.BlockEdit',
          'mytheme/limit-heading-characters',
          function (BlockEdit) {
               return function (props) {
                    const { name, attributes, setAttributes } = props;

                    // Only apply the limit to core/heading blocks
                    if (name === 'core/heading') {
                         const maxChars = 50; // Set your character limit here

                         const handleInputChange = (content) => {
                              if (content.length > maxChars) {
                                   setAttributes({ content: content.slice(0, maxChars) });
                                   alert('Character limit exceeded. Trimming content.');
                              } else {
                                   setAttributes({ content });
                              }
                         };

                         return (
                              <>
                                   <BlockEdit {...props} />
                                   {props.isSelected && (
                                        <div className="heading-char-count">
                                             {attributes.content.length}/{maxChars} characters
                                        </div>
                                   )}
                              </>
                         );
                    }

                    return <BlockEdit {...props} />;
               };
          }
     );

});