// Home Page - Trip Planner Box
// Tripl Planner
$('.trppln_btn_wrap > button').click(function (event) {
     event.preventDefault();
     let index = $(this).index();
     //console.log(index);

     $(this).addClass('disp_active').siblings().removeClass('disp_active');

     $('#trip_planner_wrapper').each(function () {
          $('.trip_plnr_sec_wrap', this).each(function () {
               $('.tbbd_cntnt_single', this).eq(index).addClass('disp_active').siblings().removeClass('disp_active');
          });
     });
});

$(document).ready(function () {
     let rmvRoleHead = document.querySelectorAll('.tribe-common');
     let rmvRoleRow = document.querySelectorAll('.tribe-common *');

     rmvRoleHead.forEach(function (rmvRoleHead) {
          if (rmvRoleHead) {
               rmvRoleHead.removeAttribute('role');
               rmvRoleHead.removeAttribute('aria-labelledby');
               rmvRoleHead.removeAttribute('aria-readonly');
          }
     });

     rmvRoleRow.forEach(function (rmvRoleRow) {
          if (rmvRoleRow) {
               rmvRoleRow.removeAttribute('role');
               rmvRoleRow.removeAttribute('aria-labelledby');
               rmvRoleRow.removeAttribute('aria-readonly');
          }
     });

     //  Route directions

     $('#trppln_route_select').on('change', (function () {
          let trpplnrSelectRoute = $(this).children(':selected').text().toLowerCase().split(' ').join('-').split('-&-').join('-').split('sb-connect-').join('');
          let trpplnrSelectLink = 'https://omnitrans.org/routes/' + trpplnrSelectRoute;

          $('.trppln_schedules .green_btn').attr('href', trpplnrSelectLink);
     }));

     $('.home .blue_bckgrnd .promo_wrap_inner a > .arrow').remove();
});