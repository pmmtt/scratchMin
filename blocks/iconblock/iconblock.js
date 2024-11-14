import { registerBlockType } from '@wordpress/blocks';
import { Toolbar, ToolbarButton } from '@wordpress/components';
import { BlockControls } from '@wordpress/block-editor';
import { useState } from '@wordpress/element';

// Sample SVG icons
const ICONS = {
     star: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M12 2l3 7h7l-5.6 4.1L19 21l-7-5-7 5 2-7.9L2 9h7l3-7z"/></svg>',
     heart: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/></svg>',
     check: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M9 16.17l-3.17-3.17-1.41 1.41L9 19 20.59 7.41l-1.41-1.41z"/></svg>',
};

registerBlockType('celorgscratch/iconblock', {
     title: 'Custom Icon Block',
     icon: 'smiley',
     category: 'design',
     attributes: {
          selectedIcon: {
               type: 'string',
               default: 'star',
          },
          withBackground: {
               type: 'boolean',
               default: false,
          },
     },
     edit: ({ attributes, setAttributes }) => {
          const { selectedIcon, withBackground } = attributes;

          const setIcon = (icon) => {
               setAttributes({ selectedIcon: icon });
          };

          const toggleBackground = () => {
               setAttributes({ withBackground: !withBackground });
          };

          return (
               <div>
                    {/* Toolbar to select icon and toggle background */}
                    <BlockControls>
                         <Toolbar>
                              <ToolbarButton
                                   label="Star Icon"
                                   icon="star-filled"
                                   onClick={() => setIcon('star')}
                                   isPressed={selectedIcon === 'star'}
                              />
                              <ToolbarButton
                                   label="Heart Icon"
                                   icon="heart"
                                   onClick={() => setIcon('heart')}
                                   isPressed={selectedIcon === 'heart'}
                              />
                              <ToolbarButton
                                   label="Check Icon"
                                   icon="yes"
                                   onClick={() => setIcon('check')}
                                   isPressed={selectedIcon === 'check'}
                              />
                              {/* Add the 'With Background' button */}
                              <ToolbarButton
                                   label="With Background"
                                   icon="admin-customizer"
                                   onClick={toggleBackground}
                                   isPressed={withBackground}
                              />
                         </Toolbar>
                    </BlockControls>

                    {/* Display the selected icon, with optional background */}
                    <div
                         style={{
                              backgroundColor: withBackground ? 'lightgrey' : 'transparent',
                              padding: withBackground ? '10px' : '0',
                         }}
                         dangerouslySetInnerHTML={{ __html: ICONS[selectedIcon] }}
                    />
               </div>
          );
     },
     save: ({ attributes }) => {
          const { selectedIcon, withBackground } = attributes;
          return (
               <div
                    style={{
                         backgroundColor: withBackground ? 'lightgrey' : 'transparent',
                         padding: withBackground ? '10px' : '0',
                    }}
                    dangerouslySetInnerHTML={{ __html: ICONS[selectedIcon] }}
               />
          );
     },
});
