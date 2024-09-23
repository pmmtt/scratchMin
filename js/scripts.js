$('.tribe-common a').each(function () {
     let calText = $(this).text().toLowerCase().split(' ').join('_');
});

// Search Form
//$('input.search-submit').attr('Search');
document.querySelector('#colophon .search-form input.search-submit').value = 'Search';
//  Search form End

//  Scrolling to header
var headerHeight = $('#masthead').outerHeight();

$('p').each(function () {
     if ($(this).is(':empty')) {
          $(this).remove();
     }
});

//  post restructuring
$('.sngl_cat_post .blog_header').remove();

$('.single-post main#primary > .wp-block-group > .wp-block-group__inner-container > *').unwrap();

$('.single-post main#primary > .wp-block-group > *').not('.comments_pt').unwrap();

$('.single-post main#primary > *').not('.comments_pt').wrapAll('<div class="wp-block-group"></div>');

$('.single-post h5.blog_header').next().addClass('frst_blog_item');

$('.single-post .blog_header').insertAfter('.single-post main#primary > .wp-block-group > figure.frst_blog_item');

$('.cat_type:contains("Uncategorized"), .cat_type:contains("Featured Post")').each(function () {
     $(this).remove();
});

$('.first_cat_nav').each(function () {
     let cat_info = $(this).text();

     $('.last_cat_nav').append(cat_info);
});
//  post restructuring - END


$('.entry-content > .wp-block-group:last-of-type').addClass('last_page_group');

//Sub Nav Lowercase & Trip planner nav
let trpPlnrBtn = document.querySelector('.trp_pnr_nv_wrap button');
let trpPlnrWrap = document.querySelector('.trp_pnr_nv_wrap');

let navBtn = document.querySelector('.menu-toggle');
let navWrap = document.querySelector('#site-navigation');
let mastActive = document.querySelector('#masthead');

let navMainLnk = document.querySelectorAll('.menu-item-has-children > a');
let navMainSubMenu = document.querySelectorAll('.menu-item-has-children > .sub-menu');

window.onresize = function () {
     if (mastActive.classList.contains('active')) {
          mastActive.classList.remove('active');
     }

     navMainLnk.forEach(function (navMainLnk) {
          if (navMainLnk.classList.contains('actv_brdr')) {
               navMainLnk.classList.remove('actv_brdr');
          }
     });

     navMainSubMenu.forEach(function (navMainSubMenu) {
          if (navMainSubMenu.classList.contains('active')) {
               navMainSubMenu.classList.remove('active');
          }
     });
};

navBtn.onclick = function (event) {
     event.preventDefault();

     navWrap.classList.toggle('active');
     trpPlnrWrap.classList.remove('active');
     document.querySelector('.menu-toggle').classList.toggle('active');
}

if (document.body.contains(document.querySelector('.trp_pnr_nv_wrap button'))) {
     trpPlnrBtn.onclick = function (event) {
          event.preventDefault();

          navWrap.classList.remove('active');
          trpPlnrWrap.classList.toggle('active');
          document.querySelector('.mainhead_wrap .sub-menu.active').classList.remove('active');
          document.querySelector('.menu-item-has-children > a.actv_brdr').classList.remove('actv_brdr');
          document.querySelector('.menu-toggle').classList.remove('active');

          if (mastActive.classList.contains('active')) {
               mastActive.classList.remove('active');
          }
     }
} else {
}

navMainLnk.forEach(function (navActive) {
     let subNavActive = navActive.nextElementSibling;

     navActive.addEventListener('click', (event) => {
          event.preventDefault();
          let mainNavActive = document.querySelector('.mainhead_wrap .sub-menu.active');
          let activeNavSngl = document.querySelector('.menu-item-has-children > a.actv_brdr');

          if (!navActive.classList.contains('actv_brdr')) {
               // Add class 'active' to mastActive if it doesn't have it already
               if (!mastActive.classList.contains('active')) {
                    mastActive.classList.add('active');
               }
          } else {
               // Remove class 'active' from mastActive if navActive has class 'actv_brdr'
               mastActive.classList.remove('active');
          }

          navActive.classList.toggle('actv_brdr');
          subNavActive.classList.toggle('active');

          if (mainNavActive || activeNavSngl) {
               mainNavActive.classList.remove('active');
               activeNavSngl.classList.remove('actv_brdr');
          }
     });

     document.querySelector('.trp_pnr_nv_wrap button').addEventListener("click", (event) => {
          event.preventDefault();
          let mainNavActive = document.querySelector('.menu-item-has-children.active');

          if (mainNavActive) {
               mainNavActive.classList.remove('active');
          }
     });
});


let subNavClass = document.querySelectorAll('.menu-item-has-children > a');

subNavClass.forEach(subNavClass => {

     var html = subNavClass.innerHTML.toLowerCase().split(' ').join('_');
     let sibAddCls = subNavClass.nextElementSibling;

     subNavClass.classList.add(html);
     sibAddCls.classList.add(html);
});

$('.sub-menu li a').click(function () {
     $('.sub-menu').removeClass('active');
});

//  Sub Nav for large screens

/*
     //Adding Fares to Menu
     $('.head_fare_box').prependTo('.sub-menu.buy_a_pass');

     // Define our viewportWidth variable
     var viewportWidth;

     // Set/update the viewportWidth value
     var setViewportWidth = function () {
          viewportWidth = window.innerWidth || document.documentElement.clientWidth;
     }

     // Log the viewport width into the console
     $('#site-navigation').addClass('nav_resize');

     var logWidth = function () {
          let navSubMenu = document.querySelectorAll('.menu-item-has-children .sub-menu');
          let navSubMenuLink = document.querySelectorAll('.menu-item-has-children .sub-menu');
          
          if (viewportWidth > 880) {
               $('.nav_resize .sub-menu').insertAfter('#site-navigation');

               if ($('.sub_nav_icon_wrap').length) {
               } else {
                    $('.mainhead_wrap .sub-menu').each(function () {
                         $('.icon_nav_sngl', this).wrapAll('<li class="sub_nav_icon_wrap"></li>');
                         $('.drpdwn_nav_lnk ', this).wrapAll('<li class="sub_nav_list_wrap"></li>');
                    });
               }

               $('.sub_nav_list_wrap li a, .sub_nav_icon_wrap li a').unwrap();
               $('.sub_nav_icon_wrap a').addClass('icon_nav_sngl');
          } else {
               if ($('.nav_resize').length) {
                    $('#site-navigation').removeClass('nav_resize');
               } else {
               }
          }
     }


     // Set our initial width and log it
     setViewportWidth();
     logWidth();

     // On resize events, recalculate and log
     window.addEventListener('resize', function () {
          setViewportWidth();
          logWidth();
     }, false);
     //  Sub Nav for large screens - end
*/

// General
$('.attachment-thumbnail').removeClass();

// Adding button to first blog
$('<a href="" class="green_btn">Read more</a>').insertAfter('.blog #primary > .wp-block-group .entry-title');
$('.blog #primary > .wp-block-group .entry-title a').each(function () {
     let blogFirstLink = $(this).attr('href');

     $('.blog #primary > .wp-block-group .green_btn').attr('href', blogFirstLink);
});

// Wrap Blog
$('.blog #primary article').wrapAll('<div class="blog_post_wrapper"></div>');

//  Adding form to blog
$('#blog_signup_form').insertBefore('.blog_post_wrapper');
$('#blog_filtr_wrap').insertAfter('#blog_signup_form');

$('.blog_post_wrapper article').addClass('show_all');

// Service Alerts
$('.service_notifications a').addClass('orange_bckgnd');

//  Icons
$('a.icon_nav_sngl').each(function () {
     let iconTextNav = $(this).text().toLowerCase().split(' ').join('_').split(':').join('').split('_&').join('');

     $(this).addClass(iconTextNav);
});

//  Header with thumbnail
$('.hdr_info_box').appendTo('.thumbnail_header');

//  Light blue
$('.lght_blue').each(function () {
     $(this).wrap('<div class="lght_blue"></div>').removeClass('lght_blue');
});

//  Dark blue
$('.blue_bckgrnd').each(function () {
     $(this).wrap('<div class="blue_bckgrnd"></div>').removeClass('blue_bckgrnd');
});

// Green
$('.bckgrnd_green').each(function () {
     $(this).wrap('<div class="bckgrnd_green"></div>').removeClass('bckgrnd_green');
});

// Accordians
$('.accrd_grn_btn').each(function () {
     $('.wp-block-button__link', this).each(function () {
          $(this).wrapInner('<span></span>');
          $('<span class="plus"></span>').appendTo(this);
     });

     $(':not(.wp-block-buttons, .wp-block-buttons *, a)', this).wrapAll('<div class="accord_cntnt"></div>');

     $('.wp-block-button__link', this).click(function () {
          $(this).closest('.wp-block-buttons').siblings().toggleClass('actv_accrd');
          $(this).toggleClass('actv_accrd');
     });
});

$('.accrd_wht_btn').each(function () {

     $('.wp-block-button__link', this).each(function () {
          $(this).wrapInner('<span></span>');
          $('<span class="plus"></span>').appendTo(this);
     });

     $(':not(.wp-block-buttons, .wp-block-buttons *)', this).wrapAll('<div class="accord_cntnt"></div>');

     $('.wp-block-button__link', this).click(function () {
          $(this).closest('.wp-block-buttons').siblings().toggleClass('actv_accrd');
          $(this).toggleClass('actv_accrd');
     });
});

// Tool Tips
$('.tooltip_wrap').each(function () {
     let toolTipAmend = $(this).prev('p');

     $(this).appendTo(toolTipAmend);
});

$('button.mobility_device_num_5').click(function () {
     $('.mobility_device_num_5 .wp-block-group.tooltip_inner').addClass('tool_active');
});

$('.tooltip_button').click(function () {
     $(this).siblings().addClass('tool_active');
});

$('.tooltip_close').click(function () {
     $(this).closest('.tooltip_inner').removeClass('tool_active');
});

$('button.tooltip_close').click(function () {
     $('.mobility_device_num_5 .wp-block-group.tooltip_inner').removeClass('tool_active');
});

//  Tabbed Nav
$('.tabbed_menu ul li a').each(function () {
     $(this).click(function () {
          $(this).parent().addClass('active').siblings().removeClass('active');
     });
});


//  Download Buttons
$('.wp-block-file__button').remove();
$('.wp-block-file > a').wrapInner('<span class="dwnld_txt"></span>');

$('<span class="file_download"><?xml version="1.0" encoding="utf-8"?> <svg version="1.1" id="pdf_x5F_dwnld" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 25 25" style="enable-background:new 0 0 25 25;" xml:space="preserve"><style type="text/css">.bckgnd{fill:#69A52B;}.forgrnd{fill:#FFFFFF;}</style><path id="bckgnd" class="bckgnd" d="M12.5,0C5.6,0,0,5.6,0,12.5S5.6,25,12.5,25S25,19.4,25,12.5S19.4,0,12.5,0z M19.5,11.2h-1.2V7.6 c0-1.1-0.9-2-2-2h-7c-1.1,0-2,0.9-2,2v10.1c0,1.1,0.9,2,2,2h0.8v1.2H9.4c-0.7,0-1.3-0.2-1.8-0.5c0,0,0,0,0,0c-0.2-0.1-0.3-0.2-0.5-0.4c-0.6-0.6-0.9-1.4-0.9-2.2V7.6c0-1.7,1.4-3.2,3.2-3.2h7c1.8,0,3.2,1.4,3.2,3.2V11.2z"/><path id="doc" class="forgrnd" d="M16.3,4.4h-7c-1.7,0-3.2,1.4-3.2,3.2v10.1c0,0.9,0.3,1.7,0.9,2.2c0.1,0.1,0.3,0.3,0.5,0.4c0,0,0,0,0,0c0.5,0.3,1.1,0.5,1.8,0.5h0.8v-1.2H9.4c-1.1,0-2-0.9-2-2V7.6c0-1.1,0.9-2,2-2h7c1.1,0,2,0.9,2,2v3.7h1.2V7.6C19.5,5.8,18.1,4.4,16.3,4.4z"/><path id="arrow" class="forgrnd" d="M20.8,15.2l-1-1l-3.9,3.9V9.5h-1.5v8.6l-3.9-3.9l-1,1l5.7,5.7L20.8,15.2z"/></svg></span>').appendTo('.dwnld_txt');

// Footer social Nav
let fbIcon = '<svg id="facebook" xmlns="http://www.w3.org/2000/svg" width="12.788" height="24.488" viewBox="0 0 12.788 24.488"><path id="Path_1" data-name="Path 1" d="M88.3,24.488V13.332h3.809l.544-4.353H88.3V6.258c0-1.224.408-2.177,2.177-2.177h2.313V.136c-.544,0-1.9-.136-3.4-.136-3.265,0-5.578,2.041-5.578,5.714V8.979H80v4.353h3.809V24.488Z" transform="translate(-80)" fill="#fff" fill-rule="evenodd"/></svg>';

let twttrIcon = '<svg id="twitter" xmlns="http://www.w3.org/2000/svg" width="24.488" height="25" viewBox="0 0 24.488 25"><rect id="Rectangle_393" data-name="Rectangle 393" width="24" height="24" transform="translate(0 0)" fill="none"/><path id="Path_2" data-name="Path 2" d="M45.754,21.862A14.158,14.158,0,0,0,60.039,7.578V6.9a11.058,11.058,0,0,0,2.449-2.585,11.293,11.293,0,0,1-2.857.816,5.293,5.293,0,0,0,2.177-2.721,12.478,12.478,0,0,1-3.129,1.224A4.859,4.859,0,0,0,55.005,2a5.111,5.111,0,0,0-5.034,5.034,2.652,2.652,0,0,0,.136,1.088A14.065,14.065,0,0,1,39.769,2.816a5.21,5.21,0,0,0-.68,2.585,5.405,5.405,0,0,0,2.177,4.217,4.586,4.586,0,0,1-2.313-.68h0a4.972,4.972,0,0,0,4.081,4.9,4.194,4.194,0,0,1-1.36.136,2.315,2.315,0,0,1-.952-.136,5.154,5.154,0,0,0,4.762,3.537,10.272,10.272,0,0,1-6.258,2.177A3.766,3.766,0,0,1,38,19.414a12.841,12.841,0,0,0,7.754,2.449" transform="translate(-38 1.059)" fill="#fff" fill-rule="evenodd"/></svg>';

let instaIcon = '<svg id="insta" xmlns="http://www.w3.org/2000/svg" width="24.488" height="25" viewBox="0 0 24.488 25"><path id="Path_3" data-name="Path 3" d="M12.244,2.177a37.542,37.542,0,0,1,4.9.136,6.31,6.31,0,0,1,2.313.408,4.778,4.778,0,0,1,2.313,2.313,6.31,6.31,0,0,1,.408,2.313c0,1.224.136,1.633.136,4.9a37.542,37.542,0,0,1-.136,4.9,6.31,6.31,0,0,1-.408,2.313,4.778,4.778,0,0,1-2.313,2.313,6.31,6.31,0,0,1-2.313.408c-1.224,0-1.633.136-4.9.136a37.542,37.542,0,0,1-4.9-.136,6.31,6.31,0,0,1-2.313-.408,4.778,4.778,0,0,1-2.313-2.313,6.31,6.31,0,0,1-.408-2.313c0-1.224-.136-1.633-.136-4.9a37.542,37.542,0,0,1,.136-4.9,6.31,6.31,0,0,1,.408-2.313,4.886,4.886,0,0,1,.952-1.36,2.3,2.3,0,0,1,1.36-.952,6.31,6.31,0,0,1,2.313-.408,37.542,37.542,0,0,1,4.9-.136m0-2.177A40.2,40.2,0,0,0,7.21.136,8.4,8.4,0,0,0,4.217.68a5.326,5.326,0,0,0-2.177,1.36A5.326,5.326,0,0,0,.68,4.217,6.2,6.2,0,0,0,.136,7.21,40.2,40.2,0,0,0,0,12.244a40.2,40.2,0,0,0,.136,5.034A8.4,8.4,0,0,0,.68,20.27a5.326,5.326,0,0,0,1.36,2.177,5.326,5.326,0,0,0,2.177,1.36,8.4,8.4,0,0,0,2.993.544,40.2,40.2,0,0,0,5.034.136,40.2,40.2,0,0,0,5.034-.136,8.4,8.4,0,0,0,2.993-.544,5.708,5.708,0,0,0,3.537-3.537,8.4,8.4,0,0,0,.544-2.993c0-1.36.136-1.769.136-5.034a40.2,40.2,0,0,0-.136-5.034,8.4,8.4,0,0,0-.544-2.993,5.326,5.326,0,0,0-1.36-2.177A5.326,5.326,0,0,0,20.27.68,8.4,8.4,0,0,0,17.277.136,40.2,40.2,0,0,0,12.244,0m0,5.986a6.157,6.157,0,0,0-6.258,6.258,6.258,6.258,0,1,0,6.258-6.258m0,10.339a4.008,4.008,0,0,1-4.081-4.081,4.008,4.008,0,0,1,4.081-4.081,4.008,4.008,0,0,1,4.081,4.081,4.008,4.008,0,0,1-4.081,4.081m6.53-12.108a1.5,1.5,0,1,0,1.5,1.5,1.51,1.51,0,0,0-1.5-1.5" fill="#fff" fill-rule="evenodd"/></svg>';

let lnkdnIcon = '<svg id="linkedin" xmlns="http://www.w3.org/2000/svg" width="24.76" height="24.907" viewBox="0 0 24.76 24.907"><g id="Group_2047" data-name="Group 2047" transform="translate(0 0)"><g id="Group_2047-2" data-name="Group 2047" transform="translate(0 0)"><path id="Path_446" data-name="Path 446" d="M699.377-432.982h-5.143v-16.6h5.143Zm.513-21.895a3.012,3.012,0,0,0-3.01-3.012,3.011,3.011,0,0,0-3.014,3.012,3.011,3.011,0,0,0,3.014,3.013A3.013,3.013,0,0,0,699.89-454.877Zm18.736,12.76c0-4.457-.942-7.763-6.149-7.763a5.337,5.337,0,0,0-4.867,2.553h0v-2.259h-5v16.6h5v-8.244c0-2.159.55-4.251,3.226-4.251,2.64,0,2.725,2.469,2.725,4.388v8.107h5.07Z" transform="translate(-693.866 457.889)" fill="#fff"/></g></g></svg>';

let ytIcon = '<svg class="youtube" xmlns="http://www.w3.org/2000/svg" width="34.269" height="22.422" viewBox="0 0 34.269 22.422"><path id="Path_447" data-name="Path 447" d="M40.539,114.705c-.687,2.616-.622,8.248-.622,8.3v.041a41.572,41.572,0,0,0,.622,8.228,3.016,3.016,0,0,0,2.123,2.116c2.207.6,10.808.785,13.952.807,3.152-.022,11.765-.2,13.956-.778a3.017,3.017,0,0,0,2.119-2.116,41.709,41.709,0,0,0,.622-8.228c0-.016,0-.033,0-.049a40.265,40.265,0,0,0-.619-8.317l0-.006a3.018,3.018,0,0,0-2.124-2.121c-2.186-.6-10.8-.785-13.952-.807-3.149.022-11.754.2-13.952.777A3.1,3.1,0,0,0,40.539,114.705Zm33.644,17h0Zm-21.511-2.453V116.729L63.5,122.992Z" transform="translate(-39.914 -111.781)" fill="#fff"/></svg>';

$('#menu-social-nav a').wrapInner('<span class="screen-reader-text"></span>');

$('#menu-social-nav a:contains("Facebook")').each(function () {
     $(fbIcon).appendTo(this);
});

$('#menu-social-nav a:contains("Twitter")').each(function () {
     $(twttrIcon).appendTo(this);
});

$('#menu-social-nav a:contains("Instagram")').each(function () {
     $(instaIcon).appendTo(this);
});

$('#menu-social-nav a:contains("LinkedIn")').each(function () {
     $(lnkdnIcon).appendTo(this);
});

$('#menu-social-nav a:contains("YouTube")').each(function () {
     $(ytIcon).appendTo(this);
});

$('.block_link').each(function () {
     $(this).wrapInner('<span class="arw_blk_txt"></span>');
});

$('.arw_blk_txt').each(function () {
     $('<span class="arrow"><?xml version="1.0" encoding="utf-8"?><svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 22 22" style="enable-background:new 0 0 22 22;" xml:space="preserve"><g id="Forward_arrow" transform="translate(0 2)"><path id="Path_10" class="blck_lnk_arrow" d="M11-2L9,0l7.57,7.57H0v2.86h16.57L9,18l2,2L22,9L11-2z"/></g></svg></span>').appendTo(this);
});

//$('.lght_blue .promo_single_wrap').wrapAll('<div class="promo_inner_wrap"></div>');

//$('.promo_wrap_last .promo_single_wrap').wrapAll('<div class="promo_inner_wrap"></div>');

$('.promo_wrap_inner .block_link > .arrow').remove();

//  BLOG
$('.single #comments .comment-notes').insertAfter('p.comment-form-comment label');

$('.comment-form-comment label, .comment-form-url').remove();

$('#author').attr('placeholder', 'Name');
$('#email').attr('placeholder', 'joe@gmail.com');

$('.comment-form-email label, .comment-form-author label').hide();

$('.post-navigation ').insertAfter('.blog_nextprev_nav h3');

// Trip Planner Alerts
$('.tweet_feed').prependTo('.trppln_alerts');

//  Wrapping fares in links
/*
$('.fare_box, .fare_box_best_value').each(function(){
     $(this).wrapInner('<a href="" class="fare_link_wrap"></a>');

     let fareLink = $('p a', this).attr('href');

     $(this).closest('.fare_link_wrap').attr('href', fareLink);

     $('.tooltip_wrap', this).insertAfter(fareLink, this);
});
*/

//  Home page


$('.calener_flex_wrap .arrow').each(function () {
     $(this).appendTo('.calener_flex_wrap .arw_blk_txt');
});

// Nav Active
var newURL = window.location.protocol + "//" + window.location.host + "/" + window.location.pathname + window.location.search
var pathArray = window.location.pathname.split('/');
var secondLevelLocation = pathArray[0];

var newPathname = "";
for (i = 2; i < pathArray.length; i++) {
     newPathname += "/";
     newPathname += pathArray[i];
}

$("a[href*=\\#]:not([href=\\#])").click(function () {
     if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '')
          || location.hostname == this.hostname) {

          scrollToAnchor(this.hash);
     }
});


$('.page-alerts .service_notifications ul li .wp-block-latest-posts__post-excerpt').addClass('orange_bckgnd');

$('.accrd_wht_btn .accord_cntnt ol li, ol.crcl_list li').wrapInner('<span></span>');


// Social Icons
$('.pub_soc_icon_second .wp-block-column.lnkdIn').appendTo('.pub_soc_icon_frst');

// Blog
$('.blog .blog_post_wrapper > article .sngl_post_info_wrap').addClass('bckgrnd_green');

$('.blog .blog_post_wrapper .entry-header > *').each(function () {
     let blogPgeInfo = $(this).closest('.entry-content');

     $(this).appendTo(blogPgeInfo);
});

$('.blog .blog_post_wrapper .sngl_post_info_wrap').remove();

// Blog Filtering
$('.blog_fltr_nav ul li a').click(function () {
     var filterValue = $(this).attr('class');
     var row = $('.blog_post_wrapper article');

     row.hide()
     row.each(function (i, el) {
          if ($(el).hasClass(filterValue)) {
               $(el).show();
          }
     })
});


$('.navigation li a:contains("« Previous Page")').html(function (_, html) {
     return html.replace(/(« Previous Page)/g, '<span class="screen-reader-text">Previous Page</span><svg class="blog_prev_nav" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 221.22 221.22"><defs><style>.cls-1{fill:#84ad40;}.cls-2{fill:#fff;fill-rule:evenodd;opacity:1;isolation:isolate;}</style></defs><g id="Layer_2" data-name="Layer 2"><g id="ART"><circle id="Ellipse_232" data-name="Ellipse 232" class="cls-1" cx="110.61" cy="110.61" r="110.61"/><path id="path" class="cls-2" d="M87.69,73.15,100.15,60.7l53.35,53.36-53.35,53.36L87.69,155l40.91-40.91Z"/></g></g></svg>');
});

$('.navigation li a:contains("Next Page »")').html(function (_, html) {
     return html.replace(/(Next Page »)/g, '<span class="screen-reader-text">Next Page</span><svg class="blog_nxt_nav" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 221.22 221.22"><defs><style>.cls-1{fill:#84ad40;}.cls-2{fill:#fff;fill-rule:evenodd;opacity:1;isolation:isolate;}</style></defs><g id="Layer_2" data-name="Layer 2"><g id="ART"><circle id="Ellipse_232" data-name="Ellipse 232" class="cls-1" cx="110.61" cy="110.61" r="110.61"/><path id="path" class="cls-2" d="M87.69,73.15,100.15,60.7l53.35,53.36-53.35,53.36L87.69,155l40.91-40.91Z"/></g></g></svg>');
});


$('.blog_head_vid').appendTo('.blog #primary > header');

$('<img src="https://omnitrans.org/wp-content/uploads/2020/09/question_mark.png" alt="Tool Tip Marker" class="tooltip_img">').prependTo('.tooltip_button');

$('.wp-block-latest-posts .wp-block-latest-posts__post-excerpt').each(function (index, value) {
     $(this).html($(this).html().substring(0, 50)); // number of characters

     $('<span>...</span> <span class="arrow"><?xml version="1.0" encoding="utf-8"?><svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 22 22" style="enable-background:new 0 0 22 22;" xml:space="preserve"><g id="Forward_arrow" transform="translate(0 2)"><path id="Path_10" class="blck_lnk_arrow" d="M11-2L9,0l7.57,7.57H0v2.86h16.57L9,18l2,2L22,9L11-2z"/></g></svg></span>').appendTo(this);
});


$('.single-post .wp-block-group__inner-container > h2').addClass('screen-reader-text');

$('.single-post .wp-block-latest-posts__list').remove();


//  Service busses
$('.page-overview .wp-block-group h3').each(function () {
     let svc_bs_hdr = $(this).text().toLowerCase().split(' ').join('_');

     $(this).closest('.wp-block-group').addClass(svc_bs_hdr);
});


$(document).ready(function () {
     $(".fixed_route").addClass("svc_bs_sctv");

     //  Adding search label
     $('.search-field').each(function () {
          $(this).attr('id', 'search_form_pt');
          $('<label for="search_form_pt" class="screen-reader-text">Search Form</label>').insertBefore(this);
     });

     //  FFFS Update
     $('.route_list_grid').appendTo('#fffs_schools');

     $('.fffs_grid p').each(function () {
          $(this).html(function (i, v) {
               return '<p class="fffs_schl_rte">' + v.split(',').join('</p><p class="fffs_schl_rte">') + '</p>'; // update the html content
          })
               .children().unwrap();
     });

     $('.fffs_grid p.fffs_schl_rte').each(function () {
          let fffs_rte_num = $(this).text();

          $(this).wrapInner('<a href="https://omnitrans.org/routes/route-' + fffs_rte_num + '" target="_blank"></a>');
     });

     $('.fffs_schl_rte a:contains("No route options"), .fffs_schl_rte a:contains("No routes available"), .fffs_schl_rte a:contains("No route optons"), .fffs_schl_rte a:contains("No available route"), .fffs_schl_rte a:contains("none"), .fffs_schl_rte a:contains("None")').each(function () {
          $(this).closest('.fffs_grid').remove();
     });

     $('a[href*="https://omnitrans.org/routes/route-%20sbX"]').each(function () {
          $(this).attr("href", 'https://omnitrans.org/routes/sbx-green-line/');
     });

     $('.fffs_rte_srvc_info .screen-reader-text').each(function () {
          $('p a', this).contents().unwrap();

          $('.screen-reader-text p:first-of-type').addClass('fffs_district');
          $('.screen-reader-text p:nth-of-type(2)').addClass('fffs_city');
          $('.screen-reader-text p:last-of-type').addClass('fffs_entity_type');
     });

     $('a[href="https://omnitrans.org/routes/route- sbX"]').attr('href', 'https://omnitrans.org/routes/sbx-green-line/');

     // FFFS Filter
     // Adding Datlis
     //  Adding Datalist - END 
     $('.fffs_schl_name').each(function () {
          let ffs_full_schl_nme = $(this).text();
          let fffs_schl_val = $(this).text().toLowerCase().split('.').join('').split(' ').join('_');

          $(this).parent().addClass(fffs_schl_val);

          $('#fffs_schl_datalst').append('<option value="' + ffs_full_schl_nme + '">' + ffs_full_schl_nme + '</option>');
     });

     $('.fffs_district').each(function () {
          let ffs_full_district_nme = $(this).text();
          let fffs_dist_val = $(this).text().toLowerCase().split('.').join('').split(' ').join('_').split('(').join('_').split(')').join('_').split('/').join('_');

          $(this).closest('.fffs_grid').addClass(fffs_dist_val);

          $('#fffs_district_datalst').append('<option value="' + ffs_full_district_nme + '" class="' + fffs_dist_val + '">' + ffs_full_district_nme + '</option>');
     });

     $('.fffs_city').each(function () {
          let ffs_full_city_nme = $(this).text();
          let fffs_city_val = $(this).text().toLowerCase().split('.').join('').split(' ').join('_').split('(').join('_').split(')').join('_').split('/').join('_');

          $(this).closest('.fffs_grid').addClass(fffs_city_val);

          $('#fffs_city_datalst').append('<option value="' + ffs_full_city_nme + '" class="' + fffs_city_val + '">' + ffs_full_city_nme + '</option>');

          $('#fffs_city_datalst option').filter(function () {
               return !this.value || $.trim(this.value).length == 0 || $.trim(this.text).length == 0;
          }).remove();
     });

     $('.fffs_entity_type').each(function () {
          let ffs_full_entity_type = $(this).text();
          let fffs_entity_val = $(this).text().toLowerCase().split('.').join('').split(' ').join('_').split('(').join('_').split(')').join('_').split('/').join('_');

          $(this).closest('.fffs_grid').addClass(fffs_entity_val);

          $('#fffs_entity_datalst').append('<option value="' + ffs_full_entity_type + '" class="' + fffs_entity_val + '">' + ffs_full_entity_type + '</option>');
     });

     $('#fffs_schools datalist option').each(function () {
          let optionVal = $(this).attr('class');
          $('option.' + optionVal + ':not(:first)').remove();
     });

     $('#fffsFilterAnchor a').click(function (event) {
          event.preventDefault();

          $('html,body').animate({
               scrollTop: $('#ffffsFltrWrap').offset().top - 160
          }, 1000);
     });

     //  FFFS FIltering

     $('#fffs_schools form input').change(function () {
          let fltrItmVal = $(this).val().toLowerCase().split('.').join('').split(' ').join('_').split('(').join('_').split(')').join('_').split('/').join('_');

          $('.' + fltrItmVal).siblings().not('.' + fltrItmVal).addClass('screen-reader-text');
     });

     $('.fffs_fltr').click(function (event) {
          event.preventDefault();

          $('.fffs_clear_fltr').removeClass('fffs_hidden');
     });

     $('.fffs_clear_fltr').click(function (event) {
          event.preventDefault();
          $('.fffs_grid').removeClass('screen-reader-text');
          $("form")[0].reset();
          $('datalist option').removeClass('screen-reader-text');

          $(this).addClass('fffs_hidden');
     });

     //$("form")[0].reset();
});

window.addEventListener('scroll', function () {
     document.querySelectorAll('.wp-block-group').forEach(function (element) {
          var rect = element.getBoundingClientRect();
          var top_of_element = rect.top;
          var bottom_of_element = rect.bottom;

          var mid_of_element = (top_of_element + bottom_of_element) / 2; // middle of the element
          var point_of_interest = window.innerHeight * 0.90; // 75% of the viewport height

          if (mid_of_element <= point_of_interest) {
               element.classList.add('svc_bs_sctv');
          }
     });
});

// External Links
$('a[href^="http://"], a[href^="https://"]').not('a[href*=omnitrans]').attr('target', '_blank');
//  Ecternal Links END

//  Nav underline
$(function () {
     $('nav a[href^="/' + location.pathname.split("/")[0] + '"]').addClass('actv_brdr');
});

// Nav Active
var newURL = window.location.protocol + "//" + window.location.host + "/" + window.location.pathname + window.location.search
var pathArray = window.location.pathname.split('/');
var secondLevelLocation = pathArray[0];

var newPathname = "";
for (i = 1; i < pathArray.length; i++) {
     newPathname += "/";
     newPathname += pathArray[i];
}


//  Removing home Blog is 4
$('.home .blog_crsl_inner > a:nth-of-type(4)').remove();


$('.mapboxgl-ctrl-compass, .mapboxgl-ctrl-zoom-out, .mapboxgl-ctrl-zoom-in').remove();

$('#primary-menu > .menu-item-has-children > a').each(function () {
     $(this).attr('rel', 'nofollow');
});


//  Adding Spanish Translation
window.addEventListener('load', function (event) {
     $('a.mexico').attr('ID', 'mex_flag');

     if (window.location.href.indexOf('summer-youth-fare') > 0) {
     }

     let lstNavRmv = document.querySelectorAll('a.list_nav');

     lstNavRmv.forEach(function (lstNavRmv) {
          lstNavRmv.remove();
     });

     document.addEventListener('click', function (event) {
          if (window.innerWidth > 880) {
               if (!event.target.closest('.menu-item-has-children a, #masthead, .sub-menu, .sub-menu a')) {
                    document.querySelectorAll('.menu-item-has-children a').forEach(function (el) {
                         el.classList.remove('actv_brdr');
                    });
                    document.querySelector('#masthead').classList.remove('active');
                    document.querySelectorAll('.sub-menu').forEach(function (el) {
                         el.classList.remove('active');
                    });
               }
          }
     });
});

if (document.querySelector('.clse_trp_plnr')) {
     let trpPlnrClsBtn = document.querySelector('.clse_trp_plnr');

     trpPlnrClsBtn.addEventListener("click", (event) => {
          console.log('clicked');
          event.preventDefault();
          document.querySelector('#hme_trp_pln_wrap').classList.remove('hm_trp_pln_actv');
     });
} else {
}