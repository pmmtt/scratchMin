(()=>{"use strict";const t=window.wp.blocks,e=window.wp.blockEditor,n=window.wp.i18n,a=window.ReactJSXRuntime;(0,t.registerBlockType)("celorgscratch/custbtn",{title:(0,n.__)("Custom Button","text-domain"),icon:"button",category:"design",attributes:{text:{type:"string",default:""},align:{type:"string",default:"center"},ariaLabel:{type:"string",default:(0,n.__)("Button","text-domain")}},edit:t=>{const{attributes:i,setAttributes:o}=t,l=(0,e.useBlockProps)();return(0,a.jsx)("button",{...l,children:(0,a.jsx)(e.PlainText,{tagName:"button",placeholder:(0,n.__)("Add button text...","text-domain"),value:i.text,onChange:t=>o({text:t}),style:{textAlign:i.align},"aria-label":i.text||i.ariaLabel})})},save:t=>{const{attributes:i}=t,o=e.useBlockProps.save();return(0,a.jsx)("button",{...o,"aria-label":i.text||i.ariaLabel,style:{textAlign:i.align},children:i.text||(0,n.__)("Button","text-domain")})}})})();