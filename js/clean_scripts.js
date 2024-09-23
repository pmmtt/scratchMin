document.addEventListener('DOMContentLoaded', function () {
     const siteHead = document.querySelector('#masthead');
     const menuToggle = document.querySelector('.menu-toggle');
     const menuItems = document.querySelectorAll('.menu-item-has-children > a');

     menuToggle.addEventListener('click', function () {
          siteHead.classList.toggle('active');
     });

     menuItems.forEach(item => {
          item.addEventListener('click', function (event) {
               if(!siteHead.classList.contains('active')){
                    siteHead.classList.add('active');
               }

               const expanded = this.getAttribute('aria-expanded') === 'true' || false;
               this.setAttribute('aria-expanded', !expanded);
               const submenu = this.nextElementSibling;
               submenu.setAttribute('aria-hidden', expanded);

               event.preventDefault();
          });
     });
});
