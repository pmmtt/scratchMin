import { registerBlockType } from '@wordpress/blocks';

registerBlockType('custscratchblock/siteheader', {
     title: 'Site Header',
     icon: 'admin-site',
     category: 'layout',
     edit() {
          return <div>UPDATED This is your site header. It will be rendered dynamically. UPDATED</div>;
     },
     save() {
          return null; // This is rendered dynamically via PHP, so no need to save static HTML.
     },
});
