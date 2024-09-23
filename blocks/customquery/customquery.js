(function (blocks, editor, element, components, apiFetch) {
     var el = element.createElement;
     var registerBlockType = blocks.registerBlockType;
     var InspectorControls = editor.InspectorControls;
     var PanelBody = components.PanelBody;
     var RangeControl = components.RangeControl;
     var ToggleControl = components.ToggleControl;

     registerBlockType('omnifseupdt/posts-display', {
          title: 'Posts Display',
          icon: 'admin-post',
          category: 'widgets',
          attributes: {
               numberOfPosts: {
                    type: 'number',
                    default: 2,
               },
               showStickyPosts: {
                    type: 'boolean',
                    default: false,
               },
          },

          edit: function (props) {
               var attributes = props.attributes;
               var setAttributes = props.setAttributes;

               return [
                    el(InspectorControls, {},
                         el(PanelBody, { title: 'Settings', initialOpen: true },
                              el(RangeControl, {
                                   label: 'Number of posts',
                                   value: attributes.numberOfPosts,
                                   onChange: function (value) {
                                        setAttributes({ numberOfPosts: value });
                                   },
                                   min: 2,
                                   max: 4,
                              }),
                              el(ToggleControl, {
                                   label: 'Display Sticky Posts',
                                   checked: attributes.showStickyPosts,
                                   onChange: function (value) {
                                        setAttributes({ showStickyPosts: value });
                                   },
                              })
                         )
                    ),
                    el('div', { className: props.className },
                         el('div', { className: props.className },
                              'Posts will be displayed here in the editor.'
                         )
                    )
               ];
          },

          save: function () {
               return null;
          },
     });
})(window.wp.blocks, window.wp.blockEditor, window.wp.element, window.wp.components, window.wp.apiFetch);