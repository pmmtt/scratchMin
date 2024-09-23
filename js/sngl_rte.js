// Get site domian
let url = window.location.href.split('/')[2];



if(document.body.contains(document.querySelector('.single-route'))){

     // Adding dynamic PDF - Use page title
     let getPDFschedLnk = document.querySelector('.single-route .wp-block-file a');
     
     getPDFschedLnk.innerText = "Download PDF";
     
     let pageTitle = document.querySelector('.entry-header h2');
     pageTitle = pageTitle.innerHTML;
     pageTitle = pageTitle.split(' ').join('_');
     
     let schdlUrl = `https://${url}/wp-content/themes/omni2024updt/timetables/rte_pdf/${pageTitle}.pdf`;
     
     getPDFschedLnk.setAttribute('href', schdlUrl);
     getPDFschedLnk.setAttribute('target', '_blank');
     
     pageTitle = pageTitle.match(/\d+/);
// Adding dynamic PDF - Use page title - END
}else{
}

//  Archive pages
// Append Gride
$('.archv_sngl_wrap').prependTo('.route_list_grid');


//  Prepend headr
$('.entry-header').prependTo('.lght_blue:first-of-type');

// Trip Planner routes
$('.entry-header h2').each(function () {
     let rteNumHdr = $(this).text().match(/\d+/);
     rteNumHdr = parseInt(rteNumHdr);

     $('<span class="rte_nmbr">' + rteNumHdr + '</span>').prependTo(this);
});

$('.route-sbx-green-line .rte_nmbr').remove();
$('<span class="rte_nmbr sbx">sbX</span>').prependTo('.route-sbx-green-line .entry-header h2');

$('.route-ontconnect .rte_nmbr').remove();
$('<span class="rte_nmbr">ONT Connect</span>').prependTo('.route-ontconnect .entry-header h2');

$('.route-route-300 .rte_nmbr').remove();
$('<span class="rte_nmbr">SB Connect</span>').prependTo('.route-route-300 .entry-header h2');



// Categories after headr
$('.single-route .sngl_rte_interest').appendTo('.entry-header');

$('.sngl_rte_interest li, .rte_key li').each(function () {
     let intrstLst = $(this).text().toLowerCase().split(' ').join('_').split('_&').join('');

     $(this).addClass(intrstLst);
});

$('.rte_key li').each(function () {
     $(this).wrapInner('<span></span>');
});

$('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 300"><path class="svg_blue" d="M140.87,42.62A109.27,109.27,0,1,0,250.13,151.89,109.27,109.27,0,0,0,140.87,42.62Z"/><polygon class="svg_white" points="136.5 91.29 141.5 91.29 141.5 79.69 165.25 79.69 165.25 62.46 136.44 62.46 136.44 79.69 136.5 79.69 136.5 91.29"/><path class="svg_white" d="M150.84,187.71a6,6,0,0,0-6,6V234H156.8V193.67A6,6,0,0,0,150.84,187.71Z"/><path class="svg_white" d="M129.47,187.71a6,6,0,0,0-6,6V234h11.92V193.67A6,6,0,0,0,129.47,187.71Z"/><path class="svg_white" d="M108.1,187.71a6,6,0,0,0-6,6V234h11.93V193.67A6,6,0,0,0,108.1,187.71Z"/><path class="svg_white" d="M172.21,187.71a6,6,0,0,0-6,6V234h11.93V193.67A6,6,0,0,0,172.21,187.71Z"/><path class="svg_white" d="M198.62,161.65H83.12l.5,72.35h18.52V193.67a6,6,0,0,1,11.93,0V234h9.44V193.67a6,6,0,0,1,11.92,0V234h9.45V193.67a6,6,0,0,1,11.92,0V234h9.44V193.67a6,6,0,0,1,11.93,0V234h20.45Z"/><path class="svg_white" d="M98.08,128.87c.54,0,.46,17.78.38,27l36.14-27Z"/><path class="svg_white" d="M179.88,128.87h-36.5l36.5,26.31Z"/><polygon class="svg_white" points="105.73 156.71 173.44 156.71 138.96 131.85 105.73 156.71"/><path class="svg_white" d="M138.42,93.25A31.38,31.38,0,0,0,107,124.63H169.8A31.38,31.38,0,0,0,138.42,93.25Z"/></svg>').insertAfter('.sngl_rte_interest .civic .screen-reader-text, .rte_key .civic span');
$('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 300"><g class="svg_blue" data-name="Path 329"><path class="svg_blue" d="M150,41.19A109.27,109.27,0,1,1,40.71,150.46h0A109.27,109.27,0,0,1,150,41.19Z"/></g><path class="svg_white" d="M99.24,169a16,16,0,0,1-10.69,15.1v15.78a9.17,9.17,0,0,0,9.16,9.16h98a9.17,9.17,0,0,0,9.16-9.16V184.22a16,16,0,0,1,0-30.38v-16.5a9.16,9.16,0,0,0-9.16-9.15h-98a9.16,9.16,0,0,0-9.16,9.15v16.59A16,16,0,0,1,99.24,169Z"/><polygon points="148.72 144.99 155.92 159.57 172.01 161.91 160.36 173.26 163.11 189.29 148.72 181.72 134.33 189.29 137.07 173.26 125.43 161.91 141.52 159.57 148.72 144.99"/><circle cx="109.45" cy="143.21" r="3.1"/><circle cx="109.45" cy="159.46" r="3.1"/><circle cx="110.05" cy="191.96" r="3.1"/><circle cx="110.05" cy="175.71" r="3.1"/><path class="svg_white" d="M97.71,124.41h30.82l5.32-2.57,2.47-16.07,11.25,11.73,16.05-2.62-5.11,9.53h36a16,16,0,0,1-2-27.14l-5-15.73a9.16,9.16,0,0,0-11.48-6L82.61,105.13a9.16,9.16,0,0,0-6,11.48l5,15.82a15.88,15.88,0,0,1,3.89.62A12.93,12.93,0,0,1,97.71,124.41Z"/><circle cx="98.34" cy="115.91" r="3.1"/><polygon points="147.57 117.5 136.31 105.77 133.85 121.84 128.53 124.41 158.51 124.41 163.62 114.88 147.57 117.5"/></svg>').insertAfter('.sngl_rte_interest .entertainment .screen-reader-text, .rte_key .entertainment span');
$('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 300"><g class="svg_blue" data-name="Path 329"><path class="svg_blue" d="M149.72,41.19A109.27,109.27,0,1,1,40.46,150.46h0A109.27,109.27,0,0,1,149.72,41.19Z"/></g><path class="svg_white" d="M230.52,95.25H190c0-4.64,1.06-15.6,9.86-22.88a2.35,2.35,0,1,0-3-3.62c-10.39,8.58-11.6,21-11.59,26.5H146.08V100h7.3l1.18,16.65,4.69-.33-1.14-16H218L207.78,207.92H192.43v4.7h19.63L222.78,100h7.74Z"/><path class="svg_white" d="M88.66,169.72l20,0h20.68l33,0H183.1c4.54,0,7.88-1.29,10.2-3.93s3.18-6.18,2.59-10.77a39.46,39.46,0,0,0-11.49-23.32,72.11,72.11,0,0,0-50-20.69,63.81,63.81,0,0,0-39.57,13.58c-8.73,6.8-17.19,14.85-20,27.59-1.4,6.34.46,10.36,2.27,12.62S82.33,169.7,88.66,169.72Z"/><path class="svg_white" d="M75.33,204.52c.69,3.89,2.79,15.69,15.55,15.69H91q43.52-.14,87-.3c10.59,0,15.83-4.93,17-15.84l.73-7H74Z"/><path class="svg_white" d="M82.78,191.12h-.71c-18.58-.63-18.79-15.36-18.79-15.51a2.35,2.35,0,0,1,4.7,0c0,1.07.55,10.36,14.25,10.83,5.57.19,7.73-2.55,10.45-6s6.3-8,14.12-8c7.37,0,10.85,3.74,13.93,7s6.23,6.69,14.08,6.69c8.06,0,11.07-3.3,14.25-6.79,2.85-3.12,6.07-6.66,12.63-6.66,7.33,0,10.55,4.45,13.14,8,2.31,3.18,4.13,5.7,8.43,5.7,5.13,0,9-1.29,11.44-3.82a11.3,11.3,0,0,0,3-7.47,2.35,2.35,0,0,1,4.7-.18,16,16,0,0,1-4.27,10.87c-3.38,3.52-8.39,5.3-14.88,5.3-6.7,0-9.77-4.24-12.24-7.65s-4.4-6.07-9.33-6.07c-4.48,0-6.44,2.14-9.15,5.12-3.38,3.7-7.6,8.32-17.73,8.32-9.9,0-14.13-4.54-17.52-8.18-2.89-3.1-5.17-5.54-10.49-5.54-5.54,0-7.69,2.74-10.42,6.2C93.49,187,90.23,191.12,82.78,191.12ZM68,175.6h0Z"/><circle cx="137.58" cy="125.02" r="4.11"/><circle cx="103.26" cy="145.73" r="4.11"/><circle cx="156.65" cy="150.63" r="4.11"/></svg>').insertAfter('.sngl_rte_interest .food_drinks .screen-reader-text, .rte_key .food_drinks span');
$('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 300"><path class="svg_blue" data-name="Path 329" d="M146.19,45.53A109.26,109.26,0,1,1,36.93,154.79h0A109.26,109.26,0,0,1,146.19,45.53Z"/><path class="svg_white" d="M102.61,111.08a65.45,65.45,0,0,1,8.65-7A65.45,65.45,0,0,0,102.61,111.08Z"/><path class="svg_white" d="M97.23,200.83a62.89,62.89,0,0,1-3.8-5.09A62.89,62.89,0,0,0,97.23,200.83Z"/><path class="svg_white" d="M197.32,114.76a66.56,66.56,0,0,1,4.52,5.65A66.56,66.56,0,0,0,197.32,114.76Z"/><path class="svg_white" d="M207.19,129.25c.64,1.27,1.25,2.56,1.81,3.88C208.44,131.81,207.83,130.52,207.19,129.25Z"/><path class="svg_white" d="M182.4,102.37a66,66,0,0,0-66.87-.91,66,66,0,0,1,66.87.91Z"/><path class="svg_white" d="M90.12,127.36a66.12,66.12,0,0,0,0,62.94,66.12,66.12,0,0,1,0-62.94Z"/><path class="svg_white" d="M185.08,104.09a66.44,66.44,0,0,1,7.59,6A66.44,66.44,0,0,0,185.08,104.09Z"/><path class="svg_white" d="M93.43,121.92a66.77,66.77,0,0,1,6.94-8.6A66.77,66.77,0,0,0,93.43,121.92Z"/><path class="svg_white" d="M86.71,98.72l-1.52,1.52a4.21,4.21,0,0,0,0,6l4,4a75.27,75.27,0,0,1,7.28-7.66l-3.79-3.79A4.21,4.21,0,0,0,86.71,98.72Z"/><path class="svg_blue" d="M197.32,114.76c-1.48-1.64-3-3.21-4.65-4.7C194.3,111.55,195.84,113.12,197.32,114.76Z"/><path class="svg_blue" d="M102.61,111.08c-.77.73-1.51,1.48-2.24,2.24C101.1,112.56,101.84,111.81,102.61,111.08Z"/><path class="svg_blue" d="M201.84,120.41a66.38,66.38,0,0,1,5.35,8.84A66.38,66.38,0,0,0,201.84,120.41Z"/><path class="svg_blue" d="M111.26,104.09c1.38-.94,2.81-1.8,4.27-2.63C114.07,102.29,112.64,103.15,111.26,104.09Z"/><path class="svg_blue" d="M99.3,203.22c1.42,1.56,2.92,3.06,4.48,4.48C102.22,206.28,100.72,204.78,99.3,203.22Z"/><path class="svg_blue" d="M207.68,187.45a65.36,65.36,0,0,1-6.61,10.88A65.36,65.36,0,0,0,207.68,187.45Z"/><path class="svg_blue" d="M190.17,209.78a66.91,66.91,0,0,0,8.94-8.95A66.91,66.91,0,0,1,190.17,209.78Z"/><path class="svg_white" d="M153.31,82.51V74.19h5a5.61,5.61,0,0,0,0-11.22H137.08a5.61,5.61,0,0,0,0,11.22h5v8.39A76,76,0,0,0,105.3,95.49l-4.7-4.71a15.47,15.47,0,0,0-21.83,0L77.25,92.3a15.44,15.44,0,0,0,0,21.83l5.34,5.34a76.5,76.5,0,1,0,70.72-37ZM85.19,100.24l1.52-1.52a4.21,4.21,0,0,1,6,0l3.79,3.79a75.27,75.27,0,0,0-7.28,7.66l-4-4a4.21,4.21,0,0,1,0-6Zm115.88,98.09c-.63.85-1.28,1.68-2,2.5a66.91,66.91,0,0,1-8.94,8.95,66,66,0,0,1-22.37,12.1,63.62,63.62,0,0,1-6.32,1.63,66.32,66.32,0,0,1-13.31,1.34h0a65.78,65.78,0,0,1-36.91-11.27,66.49,66.49,0,0,1-7.48-5.88c-1.56-1.42-3.06-2.92-4.48-4.48-.71-.78-1.4-1.58-2.07-2.39a62.89,62.89,0,0,1-3.8-5.09c-1.19-1.75-2.29-3.57-3.31-5.44a66.12,66.12,0,0,1,0-62.94q1.53-2.81,3.31-5.44a66.77,66.77,0,0,1,6.94-8.6c.73-.76,1.47-1.51,2.24-2.24a65.45,65.45,0,0,1,8.65-7c1.38-.94,2.81-1.8,4.27-2.63a66,66,0,0,1,66.87.91c.91.55,1.8,1.12,2.68,1.72a65.35,65.35,0,0,1,7.59,6c1.63,1.49,3.17,3.06,4.65,4.7a67.36,67.36,0,0,1,9.87,14.49c.64,1.27,1.25,2.56,1.81,3.88a65.9,65.9,0,0,1-7.93,65.2Z"/><path class="svg_white" d="M188,158.93a5.61,5.61,0,0,1,5.61-5.61h2.88a48.67,48.67,0,0,0-43.2-42.87V113a5.61,5.61,0,0,1-11.22,0v-2.43a48.67,48.67,0,0,0-42.26,42.75h1.94a5.61,5.61,0,0,1,0,11.22H99.86a48.67,48.67,0,0,0,42.23,42.56v-2.24a5.61,5.61,0,1,1,11.22,0v2.35a48.65,48.65,0,0,0,43.17-42.67h-2.85A5.61,5.61,0,0,1,188,158.93Zm-22.14,9.35H149.12a7.53,7.53,0,0,1-7-5.87V134.15a5.61,5.61,0,1,1,11.22,0v22.91h12.57a5.61,5.61,0,1,1,0,11.22Z"/></svg>').insertAfter('.sngl_rte_interest .frequent_services .screen-reader-text, .rte_key .frequent_service span');
$('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 300"><g class="svg_blue" data-name="Path 329"><path class="svg_blue" d="M147.68,52A109.26,109.26,0,1,1,38.42,161.22h0A109.26,109.26,0,0,1,147.68,52Z"/></g><polygon class="svg_white" points="124.67 233.29 124.67 189.52 84.8 189.52 84.8 137.82 124.67 137.82 124.67 94.29 172.34 94.29 172.34 137.82 212.21 137.82 212.21 189.52 172.34 189.52 172.34 233.29 124.67 233.29"/></svg>').insertAfter('.sngl_rte_interest .medical .screen-reader-text, .rte_key .medical span');
$('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 300"><path class="svg_blue" d="M153.62,42.07A109.27,109.27,0,1,0,262.88,151.34,109.27,109.27,0,0,0,153.62,42.07Z"/><path class="svg_white" d="M175.58,132.3a2.66,2.66,0,0,0,.15-.85V97.61a2.5,2.5,0,1,0-5,0v33.84a2.67,2.67,0,0,0,.16.85H135.53a2.42,2.42,0,0,0,.16-.85V97.61a2.5,2.5,0,0,0-5,0v33.84a2.66,2.66,0,0,0,.15.85H113.1v43.09a12.13,12.13,0,0,0,12.13,12.13h20v73.23q4,.28,8,.29t8-.29V187.52h20a12.14,12.14,0,0,0,12.14-12.13V132.3Z"/></svg>').insertAfter('.sngl_rte_interest .electrical_outlets .screen-reader-text, .rte_key .electric_outlets span');
$('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 300"><path class="svg_blue" d="M152.17,42.62A109.27,109.27,0,1,0,261.43,151.89,109.27,109.27,0,0,0,152.17,42.62Z"/><path class="svg_blue" d="M194.08,131.09a2.49,2.49,0,0,0,0-4.21,2.58,2.58,0,0,1,0,.39Z"/><path class="svg_white" d="M177.65,62.46H148.83V79.69h.06v11.6h5V79.69h23.76Z"/><path class="svg_white" d="M150.24,193a8.46,8.46,0,0,0-8.45,8.45v27.09h16.9V201.45A8.46,8.46,0,0,0,150.24,193Z"/><path class="svg_white" d="M194,126.88a2.47,2.47,0,0,0-.91-1.57L153.38,94.1a2.51,2.51,0,0,0-3,0l-42.45,31.2a2.56,2.56,0,0,0-.88,1.24h85.7A2.51,2.51,0,0,1,194,126.88Z"/><path class="svg_white" d="M194.08,228.54V131.09a2.53,2.53,0,0,1-1.36.41H106.88v97l.09,0H86.35v5H214v-5Zm-35.39,0h-16.9V201.45a8.45,8.45,0,1,1,16.9,0Z"/><path class="svg_blue" d="M107,126.5h-.77a2.5,2.5,0,0,0,0,5h.63v-4.23A2.5,2.5,0,0,1,107,126.5Z"/><rect class="svg_white" x="149.29" y="76.86" width="5" height="18.44"/><circle cx="150.86" cy="161.78" r="10.35"/></svg>').insertAfter('.sngl_rte_interest .schools_universities .screen-reader-text, .rte_key .schools_universities span');
$('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 300"><path class="svg_blue" data-name="Path 329" d="M154.31,45.53A109.26,109.26,0,1,1,45,154.79h0A109.27,109.27,0,0,1,154.31,45.53Z"/><path class="svg_white" d="M89.24,177.6a14.18,14.18,0,0,0,6.14,1.52c2.55,0,3.89-1.05,3.89-2.65s-1.16-2.4-4.1-3.46c-4.08-1.41-6.73-3.67-6.73-7.23,0-4.18,3.49-7.38,9.27-7.38a15.13,15.13,0,0,1,6.26,1.23l-1.24,4.48a11.54,11.54,0,0,0-5.13-1.17c-2.4,0-3.56,1.09-3.56,2.37,0,1.56,1.38,2.25,4.54,3.45,4.33,1.6,6.37,3.85,6.37,7.31,0,4.11-3.17,7.6-9.89,7.6a16.11,16.11,0,0,1-7-1.49Z"/><path class="svg_white" d="M114.55,158.8v14.11c0,4.21,1.59,6.36,4.43,6.36s4.51-2,4.51-6.36V158.8H129v13.74c0,7.57-3.82,11.16-10.22,11.16-6.18,0-9.82-3.41-9.82-11.23V158.8Z"/><path class="svg_white" d="M134.14,183.3V158.8h6.47l5.1,9a72.63,72.63,0,0,1,4,8.4h.1a92,92,0,0,1-.47-10.22V158.8h5.09v24.5h-5.82l-5.23-9.45a90.22,90.22,0,0,1-4.26-8.65l-.11,0c.15,3.24.22,6.69.22,10.69v7.38Z"/><path class="svg_white" d="M159.56,159.12a50.47,50.47,0,0,1,7.49-.5c4.65,0,7.67.83,10,2.61,2.55,1.89,4.15,4.91,4.15,9.24,0,4.69-1.71,7.93-4.07,9.93-2.59,2.14-6.51,3.16-11.31,3.16a48.47,48.47,0,0,1-6.29-.36Zm5.56,20a10.14,10.14,0,0,0,1.93.11c5,0,8.29-2.72,8.29-8.58,0-5.09-3-7.78-7.71-7.78a11.4,11.4,0,0,0-2.51.22Z"/><path class="svg_white" d="M190.32,177l-1.75,6.29h-5.74l7.49-24.5h7.27l7.6,24.5h-6L197.34,177Zm6.22-4.14-1.53-5.2c-.44-1.45-.87-3.27-1.24-4.73h-.07c-.36,1.46-.73,3.31-1.13,4.73l-1.45,5.2Z"/><path class="svg_white" d="M211,183.3v-10l-7.75-14.47h6.33l2.51,5.89c.76,1.78,1.27,3.09,1.89,4.69h.07c.55-1.53,1.13-2.95,1.86-4.69l2.47-5.89h6.22l-8.08,14.29V183.3Z"/><path class="svg_white" d="M224,224.3H84.65a12.09,12.09,0,0,1-12.07-12.08V123.49H236v88.73A12.09,12.09,0,0,1,224,224.3ZM77.28,128.19v84a7.39,7.39,0,0,0,7.37,7.38H224a7.38,7.38,0,0,0,7.37-7.38v-84Z"/><path class="svg_white" d="M224,103.14H84.65a9.73,9.73,0,0,0-9.72,9.73v13H233.69v-13A9.73,9.73,0,0,0,224,103.14Z"/><path class="svg_white" d="M236,128.19H72.58V112.87a12.09,12.09,0,0,1,12.07-12.08H224A12.09,12.09,0,0,1,236,112.87Zm-158.76-4.7H231.33V112.87a7.38,7.38,0,0,0-7.37-7.38H84.65a7.39,7.39,0,0,0-7.37,7.38Z"/><rect class="svg_blue" x="98.69" y="101.65" width="23.88" height="9.86" rx="4.93" transform="translate(4.05 217.2) rotate(-90)"/><path class="svg_white" d="M110.62,94.64a4.94,4.94,0,0,1,4.94,4.93v14a4.94,4.94,0,0,1-9.87,0v-14a4.93,4.93,0,0,1,4.93-4.93m0-4.92a9.85,9.85,0,0,0-9.84,9.85v14a9.85,9.85,0,0,0,19.69,0v-14a9.86,9.86,0,0,0-9.85-9.85Z"/><rect class="svg_blue" x="185.86" y="101.65" width="23.88" height="9.86" rx="4.93" transform="translate(91.22 304.37) rotate(-90)"/><path class="svg_white" d="M197.8,94.64a4.93,4.93,0,0,1,4.93,4.93v14a4.94,4.94,0,0,1-9.87,0v-14a4.94,4.94,0,0,1,4.94-4.93m0-4.92A9.86,9.86,0,0,0,188,99.57v14a9.85,9.85,0,0,0,19.69,0v-14a9.85,9.85,0,0,0-9.84-9.85Z"/></svg>').insertAfter('.sngl_rte_interest .sunday_service .screen-reader-text, .rte_key .sunday_service span');


//  Single Page
// Replacing table headers
$(".stop-name:contains('Riverside Metro Link Sb Lat')").each(function () {
     $(this).replaceWith('<th classs="stop-header"><div class="stop-name">Riverside <br>Metro Link</div></th>');
});
$(".stop-name:contains('San Bernardino Transit Center')").each(function () {
     $(this).replaceWith('<th classs="stop-header"><div class="stop-name">San Bernardino <br>Transit Center</div></th>');
});

//  Map Placement
$('#map').prependTo('.route_map_img');

//  Route Tabs
$('#wk_nrth').appendTo('.week_nrth');
$('#wk_sth').appendTo('.week_sth');
$('#sat_nrth').appendTo('.sat_nrth');
$('#sat_sth').appendTo('.sat_sth');
$('#sun_nrth').appendTo('.sun_nrth');
$('#sun_sth').appendTo('.sun_sth');

$('.description, .timetable-page-label').closest('.row').remove();
$('.single-route .cntnt_grp th, .single-route .cntnt_grp td').each(function () {
     $(this).removeAttr('width');
});

$('.tab_group_sngl').wrapAll('<div class="rte_accord_wrap"></div>');

// Route information
$('.tab_group_sngl').wrapAll('<div class="rte_cntnr"></div>');

$('.stop-code').remove();

$('th div.stop-name:contains(" @ ")').html(function (_, html) {
     return html.replace(/( @ )/g, '/<br> ');
});

$('th div.stop-name:contains("@")').html(function (_, html) {
     return html.replace(/(@)/g, '/<br> ');
});

//  Route filter
$('#community option').each(function () {
     let rteSlctFltr = $(this).text().toLowerCase().split(' ').join('_');

     $(this).attr('value', rteSlctFltr);
});

$('.sngl_rte_community li, .sngl_rte_type li').each(function () {
     let rteComnty = $(this).text().toLowerCase().split(' ').join('_');

     $(this).closest('.archv_sngl_wrap').addClass(rteComnty);
});

// Dropdown filter
$('#community').change(function () {
     var filterValue = $(this).val();
     var row = $('.archv_sngl_wrap');

     row.hide()
     row.each(function (i, el) {
          if ($(el).hasClass(filterValue)) {
               $(el).show();
          }
     })

});

//On Page Load
$(document).ready(function () {

     var amount = 50;
     $('.table-container').each(function () {
          $('.bck_btn').hide();

          $('.mre_btn').on('click', function () {
               $('.active .table-container').scrollLeft(amount);
               amount += 50;

               $('.bck_btn').show();
          });

          $('.bck_btn').on('click', function () {
               $('.active .table-container').scrollLeft(amount);
               amount += -50;
          });
     });

     $('input[type="radio"]').each(function () {
          $(this).prop('checked', false);
     });

});

//  Single route tabbing and filters
$('.rte_accord_wrap .tab_group_sngl:first-of-type').addClass('active');

// Route information
$('.rte_accord_wrap .wp-block-button__link').wrapAll('<nav class="rte_nav_wrap"></nav>');
$('.rte_nav_wrap').prependTo('.rte_accord_wrap');


$('.rte_nav_wrap a:first-of-type').addClass('active');

$('.tab_group_sngl a.wp-block-button__link').each(function () {
     $(this).click(function (event) {
          event.preventDefault();
          $(this).closest('.tab_group_sngl').addClass('active').siblings().removeClass('active');
     });
});

$('.rte_nav_wrap > a').click(function (event) {
     event.preventDefault();
     let index = $(this).index();

     $(this).addClass('active').siblings().removeClass('active');

     $(this).closest('.rte_accord_wrap').each(function () {
          $('.rte_cntnr', this).each(function () {
               $('.tab_group_sngl', this).eq(index).addClass('active').siblings().removeClass('active');
          });
     });
});

// Breaking Button Content

$('.rte_nav_wrap a:contains("Southbound")').html(function (_, html) {
     return html.replace(/(Southbound)/g, '<br> Southbound');
});

$('.rte_nav_wrap a:contains("Northbound")').html(function (_, html) {
     return html.replace(/(Northbound)/g, '<br> Northbound');
});

$('.rte_nav_wrap a:contains("Eastbound")').html(function (_, html) {
     return html.replace(/(Eastbound)/g, '<br> Eastbound');
});

$('.rte_nav_wrap a:contains("Westbound")').html(function (_, html) {
     return html.replace(/(Westbound)/g, '<br> Westbound');
});

$('.rte_nav_wrap a:contains("Counter-Clockwise")').html(function (_, html) {
     return html.replace(/(Counter-Clockwise)/g, 'Counter-<br>Clockwise');
});

$('.rte_nav_wrap a:contains("Clockwise")').html(function (_, html) {
     return html.replace(/(Clockwise)/g, '<br>Clockwise');
});

$('.rte_nav_wrap a:contains("Soutbound")').html(function (_, html) {
     return html.replace(/(Soutbound)/g, '<br> Southbound');
});

$('.rte_nav_wrap a:contains("Southbound")').each(function () {
     $(this).addClass('rte_sth').text().replace("Southbound", "<br> Southbound");
});

$('.rte_nav_wrap a:contains("Northbound")').each(function () {
     $(this).addClass('rte_nrth');
});


//  Placeing map filter
$('.tab_group_sngl').each(function () {
     $('#primary > .route_fltr_wrapper').clone().prependTo(this);
});


$('#primary > .route_fltr_wrapper').hide();

//Addtion Option Classes
$('.tab_group_sngl td').each(function () {
     let theadIndex = $(this).index();

     $(this).addClass('index_num' + theadIndex);
});

$('.tab_group_sngl th').each(function () {
     let theadIndex = $(this).index();

     $(this).addClass('index_num' + theadIndex);
});

$('.tab_group_sngl').each(function () {
     let grpIndex = $(this).index();

     $(this).addClass('index_num_wrap' + grpIndex);
});

$('.index_num_wrap0 th').each(function () {
     let theadIndex = $(this).index();

     $(this).each(function () {
          $(this).clone().appendTo('.index_num_wrap0 #bus_start', this).wrapAll('<option value="index_num' + theadIndex + '"></option>');
          $(this).clone().appendTo('.index_num_wrap0 #bus_arrive', this).wrapAll('<option value="index_num' + theadIndex + '"></option>');
     });
});

$('.index_num_wrap1 th').each(function () {
     let theadIndex = $(this).index();

     $(this).each(function () {
          $(this).clone().appendTo('.index_num_wrap1 #bus_start', this).wrapAll('<option value="index_num' + theadIndex + '"></option>');
          $(this).clone().appendTo('.index_num_wrap1 #bus_arrive', this).wrapAll('<option value="index_num' + theadIndex + '"></option>');
     });
});

$('.index_num_wrap2 th').each(function () {
     let theadIndex = $(this).index();

     $(this).each(function () {
          $(this).clone().appendTo('.index_num_wrap2 #bus_start', this).wrapAll('<option value="index_num' + theadIndex + '"></option>');
          $(this).clone().appendTo('.index_num_wrap2 #bus_arrive', this).wrapAll('<option value="index_num' + theadIndex + '"></option>');
     });
});

$('.index_num_wrap3 th').each(function () {
     let theadIndex = $(this).index();

     $(this).each(function () {
          $(this).clone().appendTo('.index_num_wrap3 #bus_start', this).wrapAll('<option value="index_num' + theadIndex + '"></option>');
          $(this).clone().appendTo('.index_num_wrap3 #bus_arrive', this).wrapAll('<option value="index_num' + theadIndex + '"></option>');
     });
});

$('.index_num_wrap4 th').each(function () {
     let theadIndex = $(this).index();

     $(this).each(function () {
          $(this).clone().appendTo('.index_num_wrap4 #bus_start', this).wrapAll('<option value="index_num' + theadIndex + '"></option>');
          $(this).clone().appendTo('.index_num_wrap4 #bus_arrive', this).wrapAll('<option value="index_num' + theadIndex + '"></option>');
     });
});

$('.index_num_wrap5 th').each(function () {
     let theadIndex = $(this).index();

     $(this).each(function () {
          $(this).clone().appendTo('.index_num_wrap5 #bus_start', this).wrapAll('<option value="index_num' + theadIndex + '"></option>');
          $(this).clone().appendTo('.index_num_wrap5 #bus_arrive', this).wrapAll('<option value="index_num' + theadIndex + '"></option>');
     });
});

$('.index_num_wrap6 th').each(function () {
     let theadIndex = $(this).index();

     $(this).each(function () {
          $(this).clone().appendTo('.index_num_wrap6 #bus_start', this).wrapAll('<option value="index_num' + theadIndex + '"></option>');
          $(this).clone().appendTo('.index_num_wrap6 #bus_arrive', this).wrapAll('<option value="index_num' + theadIndex + '"></option>');
     });
});

// Single Route Filter
$('.index_num_wrap0 #bus_start').change(function () {
     var filterValue = $(this).val();
     var showStart = $('.index_num_wrap0.active .stop-header, .index_num_wrap0.active .stop-time');

     showStart.hide()
     showStart.each(function (i, el) {
          if ($(el).hasClass(filterValue)) {
               $(el).show();
          }
     })
});

$('.index_num_wrap1 #bus_start').change(function () {
     var filterValue = $(this).val();
     var showStart = $('.index_num_wrap1.active .stop-header, .index_num_wrap1.active .stop-time');

     showStart.hide()
     showStart.each(function (i, el) {
          if ($(el).hasClass(filterValue)) {
               $(el).show();
          }
     })
});

$('.index_num_wrap2 #bus_start').change(function () {
     var filterValue = $(this).val();
     var showStart = $('.index_num_wrap2.active .stop-header, .index_num_wrap2.active .stop-time');

     showStart.hide()
     showStart.each(function (i, el) {
          if ($(el).hasClass(filterValue)) {
               $(el).show();
          }
     })
});

$('.index_num_wrap3 #bus_start').change(function () {
     var filterValue = $(this).val();
     var showStart = $('.index_num_wrap3.active .stop-header, .index_num_wrap3.active .stop-time');

     showStart.hide()
     showStart.each(function (i, el) {
          if ($(el).hasClass(filterValue)) {
               $(el).show();
          }
     })
});

$('.index_num_wrap4 #bus_start').change(function () {
     var filterValue = $(this).val();
     var showStart = $('.index_num_wrap4.active .stop-header, .index_num_wrap4.active .stop-time');

     showStart.hide()
     showStart.each(function (i, el) {
          if ($(el).hasClass(filterValue)) {
               $(el).show();
          }
     })
});

$('.index_num_wrap5 #bus_start').change(function () {
     var filterValue = $(this).val();
     var showStart = $('.index_num_wrap5.active .stop-header, .index_num_wrap5.active .stop-time');

     showStart.hide()
     showStart.each(function (i, el) {
          if ($(el).hasClass(filterValue)) {
               $(el).show();
          }
     })
});

$('.index_num_wrap6 #bus_start').change(function () {
     var filterValue = $(this).val();
     var showStart = $('.index_num_wrap6.active .stop-header, .index_num_wrap6.active .stop-time');

     showStart.hide()
     showStart.each(function (i, el) {
          if ($(el).hasClass(filterValue)) {
               $(el).show();
          }
     })
});

$('.index_num_wrap0 #bus_arrive').change(function () {
     var filterValue = $(this).val();
     var showStart = $('.index_num_wrap0.active .stop-header, .index_num_wrap0.active .stop-time');

     showStart.each(function (i, el) {
          if ($(el).hasClass(filterValue)) {
               $(el).show();
          }
     })
});

$('.index_num_wrap1 #bus_arrive').change(function () {
     var filterValue = $(this).val();
     var showStart = $('.index_num_wrap1.active .stop-header, .index_num_wrap1.active .stop-time');

     showStart.each(function (i, el) {
          if ($(el).hasClass(filterValue)) {
               $(el).show();
          }
     })
});

$('.index_num_wrap2 #bus_arrive').change(function () {
     var filterValue = $(this).val();
     var showStart = $('.index_num_wrap2.active .stop-header, .index_num_wrap2.active .stop-time');

     showStart.each(function (i, el) {
          if ($(el).hasClass(filterValue)) {
               $(el).show();
          }
     })
});

$('.index_num_wrap3 #bus_arrive').change(function () {
     var filterValue = $(this).val();
     var showStart = $('.index_num_wrap3.active .stop-header, .index_num_wrap3.active .stop-time');

     showStart.each(function (i, el) {
          if ($(el).hasClass(filterValue)) {
               $(el).show();
          }
     })
});

$('.index_num_wrap4 #bus_arrive').change(function () {
     var filterValue = $(this).val();
     var showStart = $('.index_num_wrap4.active .stop-header, .index_num_wrap4.active .stop-time');

     showStart.each(function (i, el) {
          if ($(el).hasClass(filterValue)) {
               $(el).show();
          }
     })
});

$('.index_num_wrap5 #bus_arrive').change(function () {
     var filterValue = $(this).val();
     var showStart = $('.index_num_wrap5.active .stop-header, .index_num_wrap5.active .stop-time');

     showStart.each(function (i, el) {
          if ($(el).hasClass(filterValue)) {
               $(el).show();
          }
     })
});

$('.index_num_wrap6 #bus_arrive').change(function () {
     var filterValue = $(this).val();
     var showStart = $('.index_num_wrap6.active .stop-header, .index_num_wrap6.active .stop-time');

     showStart.each(function (i, el) {
          if ($(el).hasClass(filterValue)) {
               $(el).show();
          }
     })
});

$('th, td').addClass('show_all');

$('#bus_start, #bus_arrive').change(function () {
     var filterValue = $(this).attr('class', 'show_all');
     var showAll = $('.active .stop-header, .active .stop-time');

     showAll.each(function (i, el) {
          if ($(el).hasClass(filterValue)) {
               $(el).show();
          }
     })
});

//Removing stop information
$('.adp-substep b:contains("Wb Fs")').html(function (_, html) {
     return html.replace(/(Wb Fs)/g, '');
});
