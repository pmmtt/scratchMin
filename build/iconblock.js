(()=>{"use strict";const t=window.wp.blocks,e=window.wp.components,o=window.wp.blockEditor,s=(window.wp.element,window.ReactJSXRuntime),n={star:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M12 2l3 7h7l-5.6 4.1L19 21l-7-5-7 5 2-7.9L2 9h7l3-7z"/></svg>',heart:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/></svg>',check:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M9 16.17l-3.17-3.17-1.41 1.41L9 19 20.59 7.41l-1.41-1.41z"/></svg>'};(0,t.registerBlockType)("celorgscratch/iconblock",{title:"Custom Icon Block",icon:"smiley",category:"design",attributes:{selectedIcon:{type:"string",default:"star"},withBackground:{type:"boolean",default:!1}},edit:({attributes:t,setAttributes:r})=>{const{selectedIcon:l,withBackground:c}=t,i=t=>{r({selectedIcon:t})};return(0,s.jsxs)("div",{children:[(0,s.jsx)(o.BlockControls,{children:(0,s.jsxs)(e.Toolbar,{children:[(0,s.jsx)(e.ToolbarButton,{label:"Star Icon",icon:"star-filled",onClick:()=>i("star"),isPressed:"star"===l}),(0,s.jsx)(e.ToolbarButton,{label:"Heart Icon",icon:"heart",onClick:()=>i("heart"),isPressed:"heart"===l}),(0,s.jsx)(e.ToolbarButton,{label:"Check Icon",icon:"yes",onClick:()=>i("check"),isPressed:"check"===l}),(0,s.jsx)(e.ToolbarButton,{label:"With Background",icon:"admin-customizer",onClick:()=>{r({withBackground:!c})},isPressed:c})]})}),(0,s.jsx)("div",{style:{backgroundColor:c?"lightgrey":"transparent",padding:c?"10px":"0"},dangerouslySetInnerHTML:{__html:n[l]}})]})},save:({attributes:t})=>{const{selectedIcon:e,withBackground:o}=t;return(0,s.jsx)("div",{style:{backgroundColor:o?"lightgrey":"transparent",padding:o?"10px":"0"},dangerouslySetInnerHTML:{__html:n[e]}})}})})();