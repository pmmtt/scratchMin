(()=>{"use strict";const e=window.wp.blocks,s=window.wp.blockEditor,a=window.ReactJSXRuntime,t=[["core/paragraph",{placeholder:"Destination Name",className:"dest_name has-h-3-font-size"}],["core/paragraph",{placeholder:"Address",className:"dest_address"}],["core/paragraph",{placeholder:"Short description of destination",className:"dest_descript"}]];(0,e.registerBlockType)("celorgscratch/guidesaddress",{title:"Guides Destination",icon:"location",category:"common",parent:"celorgscratch/guidesmap",attributes:{content:{type:"array",source:"children",selector:"address",placeholder:"Add destination address"}},edit:()=>(0,a.jsx)("div",{className:"guidesmap_dest",children:(0,a.jsx)(s.InnerBlocks,{template:t,templateLock:"all"})}),save:()=>(0,a.jsx)("div",{className:"guidesmap_dest",children:(0,a.jsx)(s.InnerBlocks.Content,{})})})})();