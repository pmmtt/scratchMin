const amznLoc = document.querySelector('#amazon_loc');
const amznLocSelect = document.querySelector('#select_location');

const closeLocationInfo = document.querySelector('.infClsBtn');
const singStopInfo = document.querySelectorAll('.info_sngle');

const formWrap = document.querySelector('#guide_wrapper');
//const introContent = document.querySelector('.intro_content');

const googMap = document.querySelector('#map');

const formMapOuterWrap = document.querySelector('.location_outer_wrap');

const viewportForMap = window.innerWidth || document.documentElement.clientWidth;

window.addEventListener('load', (event) => {
     document.querySelector('form').reset();

     //formMapOuterWrap.prepend(googMap);
     //introContent.parentNode.insertBefore(formWrap, introContent.nextSibling);

     amznLocSelect.addEventListener('click', (event) => {
          event.preventDefault();
     });

     /* Reposition map on load */
     let mainElement = document.querySelector('#primary');

     if (viewportForMap > 1024) {
          formWrap.append(googMap);
          
          //mapLargeActive();

          //clickCenterMap();
     } else {
          scrollCenterMap();
     }
     /* Reposition map on load - END */

     /* Remove active info */

     $(closeLocationInfo).click(function(){
          $(singStopInfo).removeClass('active');
          $(this).removeClass('active');
     });
});



function initMap() {
     let getSnglLatLng = document.querySelectorAll('.rte_point_wrap.active .info_sngle');

     getSnglLatLng.forEach(function(getSnglLatLng){

          let getIdLatLng = getSnglLatLng.querySelector('.lat_lng');
          let spanCoords = getIdLatLng.innerHTML;
          let selIdLatLng = spanCoords.split(',');

          let getFigCap = getSnglLatLng.querySelector('.loc_img_wrap figcaption');
          let infoWinActive = getFigCap.innerHTML;

          // Route 83 Points
          let rte83mrkrs = [
               [infoWinActive, selIdLatLng[0], selIdLatLng[1]],      
          ];

          // Display multiple rte83mrkrs on a map
          let infoWindow = new google.maps.InfoWindow(), marker, i;

          if(getSnglLatLng.classList.contains('blue')){

               // Loop through our array of rte83mrkrs & place each one on the map  
               for (let i = 0; i < rte83mrkrs.length; i++) {
                    let position = new google.maps.LatLng(rte83mrkrs[i][1], rte83mrkrs[i][2]);
                    // Info Window Content
                    const rte83infoWin = [
                         ['<div class="info_content blue">' + '<p>' + rte83mrkrs[i][0] + '</p>' + '</div>'],
                    ];
                    
                    let marker = new google.maps.Marker({
                         position: position,
                         map: map,
                         title: rte83mrkrs[i][0],
                         icon: {
                              path: google.maps.SymbolPath.CIRCLE,
                              scale: 12,
                              strokeColor: '#005aa8',
                              fillColor: '#ffffff',
                              fillOpacity: 1,
                              strokeWeight: 5,
                              anchor: new google.maps.Point(0, 0),
                         },
                    });
     
                    // Each marker to have an info window    
                    google.maps.event.addListener(marker, 'mouseover', (function (marker, i) {
                         return function () {
                              infoWindow.setContent(rte83infoWin[i][0]);
                              infoWindow.open(map, marker);
                         }
                    })(marker, i));
     
                    marker.addListener('mouseout', function() {
                         infoWindow.close();
                    });
     
                     //  Show Infow window on hover
                    if(viewportForMap > 1024){
     
                         getSnglLatLng.addEventListener('mouseover', (function (marker, i) {
                              return function () {
                                   infoWindow.setContent(rte83infoWin[i][0]);
                                   infoWindow.open(map, marker);
                              }
                         })(marker, i));
     
                         getSnglLatLng.addEventListener('mouseout', function() {
                              infoWindow.close();
                         });
     
                    }else{
     
                    }
                     //  Show infow window on hover - END
               }
          }else if(getSnglLatLng.classList.contains('green')){

               // Loop through our array of rte83mrkrs & place each one on the map  
               for (let i = 0; i < rte83mrkrs.length; i++) {
                    let position = new google.maps.LatLng(rte83mrkrs[i][1], rte83mrkrs[i][2]);
                    // Info Window Content
                    const rte83infoWin = [
                         ['<div class="info_content green">' + '<p>' + rte83mrkrs[i][0] + '</p>' + '</div>'],
                    ];
                    
                    let marker = new google.maps.Marker({
                         position: position,
                         map: map,
                         title: rte83mrkrs[i][0],
                         icon: {
                              path: google.maps.SymbolPath.CIRCLE,
                              scale: 12,
                              strokeColor: '#69A52B',
                              fillColor: '#ffffff',
                              fillOpacity: 1,
                              strokeWeight: 5,
                              anchor: new google.maps.Point(0, 0),
                         },
                    });
     
                    // Each marker to have an info window    
                    google.maps.event.addListener(marker, 'mouseover', (function (marker, i) {
                         return function () {
                              infoWindow.setContent(rte83infoWin[i][0]);
                              infoWindow.open(map, marker);
                         }
                    })(marker, i));
     
                    marker.addListener('mouseout', function() {
                         infoWindow.close();
                    });
     
                     //  Show Infow window on hover
                    if(viewportForMap > 1024){
     
                         getSnglLatLng.addEventListener('mouseover', (function (marker, i) {
                              return function () {
                                   infoWindow.setContent(rte83infoWin[i][0]);
                                   infoWindow.open(map, marker);
                              }
                         })(marker, i));
     
                         getSnglLatLng.addEventListener('mouseout', function() {
                              infoWindow.close();
                         });
     
                    }else{
     
                    }
                     //  Show infow window on hover - END
               }
          }else if(getSnglLatLng.classList.contains('orange')){

               // Loop through our array of rte83mrkrs & place each one on the map  
               for (let i = 0; i < rte83mrkrs.length; i++) {
                    let position = new google.maps.LatLng(rte83mrkrs[i][1], rte83mrkrs[i][2]);
                    // Info Window Content
                    const rte83infoWin = [
                         ['<div class="info_content orange">' + '<p>' + rte83mrkrs[i][0] + '</p>' + '</div>'],
                    ];
                    
                    let marker = new google.maps.Marker({
                         position: position,
                         map: map,
                         title: rte83mrkrs[i][0],
                         icon: {
                              path: google.maps.SymbolPath.CIRCLE,
                              scale: 12,
                              strokeColor: '#F77E0F',
                              fillColor: '#ffffff',
                              fillOpacity: 1,
                              strokeWeight: 5,
                              anchor: new google.maps.Point(0, 0),
                         },
                    });
     
                    // Each marker to have an info window    
                    google.maps.event.addListener(marker, 'mouseover', (function (marker, i) {
                         return function () {
                              infoWindow.setContent(rte83infoWin[i][0]);
                              infoWindow.open(map, marker);
                         }
                    })(marker, i));
     
                    marker.addListener('mouseout', function() {
                         infoWindow.close();
                    });
     
                     //  Show Infow window on hover
                    if(viewportForMap > 1024){
     
                         getSnglLatLng.addEventListener('mouseover', (function (marker, i) {
                              return function () {
                                   infoWindow.setContent(rte83infoWin[i][0]);
                                   infoWindow.open(map, marker);
                              }
                         })(marker, i));
     
                         getSnglLatLng.addEventListener('mouseout', function() {
                              infoWindow.close();
                         });
     
                    }else{
     
                    }
                     //  Show infow window on hover - END
               }
          }else if(getSnglLatLng.classList.contains('cadblue')){

               // Loop through our array of rte83mrkrs & place each one on the map  
               for (let i = 0; i < rte83mrkrs.length; i++) {
                    let position = new google.maps.LatLng(rte83mrkrs[i][1], rte83mrkrs[i][2]);
                    // Info Window Content
                    const rte83infoWin = [
                         ['<div class="info_content cadblue">' + '<p>' + rte83mrkrs[i][0] + '</p>' + '</div>'],
                    ];
                    
                    let marker = new google.maps.Marker({
                         position: position,
                         map: map,
                         title: rte83mrkrs[i][0],
                         icon: {
                              path: google.maps.SymbolPath.CIRCLE,
                              scale: 12,
                              strokeColor: 'cadetblue',
                              fillColor: '#ffffff',
                              fillOpacity: 1,
                              strokeWeight: 5,
                              anchor: new google.maps.Point(0, 0),
                         },
                    });
     
                    // Each marker to have an info window    
                    google.maps.event.addListener(marker, 'mouseover', (function (marker, i) {
                         return function () {
                              infoWindow.setContent(rte83infoWin[i][0]);
                              infoWindow.open(map, marker);
                         }
                    })(marker, i));
     
                    marker.addListener('mouseout', function() {
                         infoWindow.close();
                    });
     
                     //  Show Infow window on hover
                    if(viewportForMap > 1024){
     
                         getSnglLatLng.addEventListener('mouseover', (function (marker, i) {
                              return function () {
                                   infoWindow.setContent(rte83infoWin[i][0]);
                                   infoWindow.open(map, marker);
                              }
                         })(marker, i));
     
                         getSnglLatLng.addEventListener('mouseout', function() {
                              infoWindow.close();
                         });
     
                    }else{
     
                    }
                     //  Show infow window on hover - END
               }
          }else{

               // Loop through our array of rte83mrkrs & place each one on the map  
               for (let i = 0; i < rte83mrkrs.length; i++) {
                    let position = new google.maps.LatLng(rte83mrkrs[i][1], rte83mrkrs[i][2]);
                    // Info Window Content
                    const rte83infoWin = [
                         ['<div class="info_content">' + '<p>' + rte83mrkrs[i][0] + '</p>' + '</div>'],
                    ];
                    
                    let marker = new google.maps.Marker({
                         position: position,
                         map: map,
                         title: rte83mrkrs[i][0],
                         icon: {
                              path: google.maps.SymbolPath.CIRCLE,
                              scale: 12,
                              strokeColor: '#005aa8',
                              fillColor: '#ffffff',
                              fillOpacity: 1,
                              strokeWeight: 5,
                              anchor: new google.maps.Point(0, 0),
                         },
                    });
     
                    // Each marker to have an info window    
                    google.maps.event.addListener(marker, 'mouseover', (function (marker, i) {
                         return function () {
                              infoWindow.setContent(rte83infoWin[i][0]);
                              infoWindow.open(map, marker);
                         }
                    })(marker, i));
     
                    marker.addListener('mouseout', function() {
                         infoWindow.close();
                    });
     
                     //  Show Infow window on hover
                    if(viewportForMap > 1024){
     
                         getSnglLatLng.addEventListener('mouseover', (function (marker, i) {
                              return function () {
                                   infoWindow.setContent(rte83infoWin[i][0]);
                                   infoWindow.open(map, marker);
                              }
                         })(marker, i));
     
                         getSnglLatLng.addEventListener('mouseout', function() {
                              infoWindow.close();
                         });
     
                    }else{
     
                    }
                     //  Show infow window on hover - END
               }
          }
     });
     //  Route 83 - END

     // Add Polyline to map using coords above
     //for (let i = 0; i < 2; i++) {
     //     let route83path = new google.maps.Polyline({
     //          path: route83coord,
     //          geodesic: true,
     //          strokeColor: '#005aa8',
     //          strokeOpacity: 1.0,
     //          strokeWeight: 5,
     //     });
     //     route83path.setMap(map);
     //}

     //for (let i = 0; i < 2; i++) {
     //     let route15path = new google.maps.Polyline({
     //          path: route15coord,
     //          geodesic: true,
     //          strokeColor: 'red',
     //          strokeOpacity: 1.0,
     //          strokeWeight: 5,
     //     });
     //     route15path.setMap(map);
     //}
     // Add Polyline to map using coords above


     //  Temp Get Loacations

               const getLatLng = { lat: -25.363, lng: 131.044 };


               // Create the initial InfoWindow.
               let infoWindow = new google.maps.InfoWindow({
                    content: "Click the map to get Lat/Lng!",
                    position: getLatLng,
               });
               
               // Configure the click listener.
               map.addListener("click", (mapsMouseEvent) => {
                    //console.log(JSON.stringify(mapsMouseEvent.latLng.toJSON(), null, 2));
               });

     //  Temp Get Locations - END

}

// Amazon Pan and Zoon
     amznLoc.addEventListener('change', (event) => {
          event.preventDefault();
          
          let myLatlng = amznLoc.value;
          let selLatLng = myLatlng;
          let selLatLngArr = selLatLng.split(',');
          let latLng = new google.maps.LatLng(selLatLngArr[0], selLatLngArr[1]);

          amznLoc.className = myLatlng;

          amznLocSelect.addEventListener('click', (event) => {
               let ele = document.querySelector('#map');
               let headerHeaight = document.querySelector('.head_wrapper').offsetHeight;
               let formTop = 0;

               $(singStopInfo).each(function(){
                    $(this).removeClass('active');
               });

               document.querySelector('.infClsBtn').classList.remove('active');
     
               while(ele.tagName != "BODY") {
                    formTop += ele.offsetTop;
                    ele = ele.offsetParent;
               }

               $([document.documentElement, document.body]).animate({
                    scrollTop: $('body').offset().top + formTop - headerHeaight
               }, 750);

               //map = new google.maps.Map(document.getElementById("map"), {
               //     mapId: 'f17945e40543a040',
               //     center: {lat:34.0918832, lng:-117.4388469},
               //     zoom: 8,
               //});

               //  Coordibnates
               const route83coord = [
                    { lat: 34.01191954811137, lng: -117.69173747998244 },
                    { lat: 34.01280385117064, lng: -117.69174754968707 },
                    { lat: 34.01286526668002, lng: -117.69175556391808 },
                    { lat: 34.01290868092272, lng: -117.69177751734655 },
                    { lat: 34.012945573851866, lng: -117.6918004582698 },
                    { lat: 34.0129866440674, lng: -117.6918149197835 },
                    { lat: 34.01301159871758, lng: -117.6918114349846 },
                    { lat: 34.01303625344549, lng: -117.69181404354109 },
                    { lat: 34.01305622343449, lng: -117.69182205334002 },
                    { lat: 34.01307246148639, lng: -117.69183393722835 },
                    { lat: 34.01308961270584, lng: -117.69185396076998 },
                    { lat: 34.0131050964398, lng: -117.69188638952849 },
                    { lat: 34.01311222529525, lng: -117.69192655890969 },
                    { lat: 34.01310672233052, lng: -117.69196722014749 },
                    { lat: 34.01309100216529, lng: -117.6920037656169 },
                    { lat: 34.013070628847586, lng: -117.69202719104844 },
                    { lat: 34.013038591307776, lng: -117.69204376704039 },
                    { lat: 34.013007, lng: -117.692045 },
                    { lat: 34.0129740548245, lng: -117.69203761612287 },
                    { lat: 34.01294780332569, lng: -117.69201731179835 },
                    { lat: 34.01292876876955, lng: -117.69198585513355 },
                    { lat: 34.01291822913021, lng: -117.69194831820509 },
                    { lat: 34.01291860632281, lng: -117.69190923580626 },
                    { lat: 34.01287081506632, lng: -117.69185750075412 },
                    { lat: 34.01282547814061, lng: -117.69184022023293 },
                    { lat: 34.01277359729904, lng: -117.69183264462596 },
                    { lat: 34.01191855188847, lng: -117.69182011283812 },
                    { lat: 34.01196073177437, lng: -117.68933275700104 },
                    { lat: 34.011113610347124, lng: -117.68932061693002 },
                    { lat: 34.0109843905581, lng: -117.6892378189252 },
                    { lat: 34.00952, lng: -117.68924 },
                    { lat: 34.005539, lng: -117.68918 },
                    { lat: 34.003839, lng: -117.68918 },
                    { lat: 34.00223, lng: -117.68915 },
                    { lat: 33.995729, lng: -117.689109 },
                    { lat: 33.9947, lng: -117.689079 },
                    { lat: 33.99262, lng: -117.68906 },
                    { lat: 33.99224, lng: -117.688479 },
                    { lat: 33.99225, lng: -117.687049 },
                    { lat: 33.99234, lng: -117.686049 },
                    { lat: 33.992369, lng: -117.68537 },
                    { lat: 33.99227, lng: -117.68383 },
                    { lat: 33.99226, lng: -117.683359 },
                    { lat: 33.992289, lng: -117.68262 },
                    { lat: 33.99235, lng: -117.68222 },
                    { lat: 33.992499, lng: -117.68168 },
                    { lat: 33.99261, lng: -117.6814 },
                    { lat: 33.99289, lng: -117.680849 },
                    { lat: 33.99316, lng: -117.680489 },
                    { lat: 33.993489, lng: -117.68015 },
                    { lat: 33.993819, lng: -117.679839 },
                    { lat: 33.99396, lng: -117.679669 },
                    { lat: 33.99414, lng: -117.67937 },
                    { lat: 33.99423, lng: -117.67916 },
                    { lat: 33.994289, lng: -117.67893 },
                    { lat: 33.99432, lng: -117.678679 },
                    { lat: 33.994349, lng: -117.676739 },
                    { lat: 33.994279, lng: -117.67622 },
                    { lat: 33.994199, lng: -117.676119 },
                    { lat: 33.994169, lng: -117.675989 },
                    { lat: 33.994179, lng: -117.675879 },
                    { lat: 33.99415, lng: -117.675839 },
                    { lat: 33.990779, lng: -117.672389 },
                    { lat: 33.990509, lng: -117.67208 },
                    { lat: 33.99038, lng: -117.671889 },
                    { lat: 33.990229, lng: -117.671559 },
                    { lat: 33.9901, lng: -117.671159 },
                    { lat: 33.990039, lng: -117.670679 },
                    { lat: 33.990049, lng: -117.663739 },
                    { lat: 33.99008, lng: -117.661889 },
                    { lat: 33.990139, lng: -117.654509 },
                    { lat: 33.9902, lng: -117.65354 },
                    { lat: 33.990263879451746, lng: -117.65069892048852 },
                    { lat: 33.993299, lng: -117.650689 },
                    { lat: 33.99755, lng: -117.650689 },
                    { lat: 34.0025, lng: -117.650729 },
                    { lat: 34.00944, lng: -117.650739 },
                    { lat: 34.01007, lng: -117.65072 },
                    { lat: 34.011489, lng: -117.650599 },
                    { lat: 34.014249, lng: -117.650609 },
                    { lat: 34.019019, lng: -117.65066 },
                    { lat: 34.02008, lng: -117.650639 },
                    { lat: 34.023449, lng: -117.650639 },
                    { lat: 34.02448, lng: -117.65066 },
                    { lat: 34.02654, lng: -117.65066 },
                    { lat: 34.02761, lng: -117.650679 },
                    { lat: 34.030529, lng: -117.65067 },
                    { lat: 34.031099, lng: -117.650689 },
                    { lat: 34.033149, lng: -117.650689 },
                    { lat: 34.03743, lng: -117.650729 },
                    { lat: 34.043779, lng: -117.65075 },
                    { lat: 34.047399, lng: -117.650779 },
                    { lat: 34.05038, lng: -117.650779 },
                    { lat: 34.053579, lng: -117.6508 },
                    { lat: 34.05786, lng: -117.650789 },
                    { lat: 34.05896, lng: -117.650819 },
                    { lat: 34.0594, lng: -117.650879 },
                    { lat: 34.060339, lng: -117.650909 },
                    { lat: 34.061259, lng: -117.6509 },
                    { lat: 34.061609, lng: -117.650869 },
                    { lat: 34.06209, lng: -117.650869 },
                    { lat: 34.06264, lng: -117.650829 },
                    { lat: 34.06336, lng: -117.65081 },
                    { lat: 34.064559, lng: -117.650829 },
                    { lat: 34.066989, lng: -117.650819 },
                    { lat: 34.069419, lng: -117.650829 },
                    { lat: 34.07335, lng: -117.65089 },
                    { lat: 34.07973, lng: -117.650909 },
                    { lat: 34.08154, lng: -117.65093 },
                    { lat: 34.082939, lng: -117.650919 },
                    { lat: 34.086079, lng: -117.65094 },
                    { lat: 34.08783, lng: -117.65093 },
                    { lat: 34.08882, lng: -117.650949 },
                    { lat: 34.09064, lng: -117.650949 },
                    { lat: 34.092209, lng: -117.650969 },
                    { lat: 34.09494, lng: -117.650969 },
                    { lat: 34.096599, lng: -117.650999 },
                    { lat: 34.0979, lng: -117.650999 },
                    { lat: 34.09846, lng: -117.65102 },
                    { lat: 34.099749, lng: -117.651009 },
                    { lat: 34.110649, lng: -117.651039 }
               ];

               const route15coord = [
                    {lat:34.095558, lng:-117.437053},
                    {lat:34.09545, lng:-117.437101},
                    {lat:34.095385, lng:-117.437099},
                    {lat:34.095324, lng:-117.437064},
                    {lat:34.095306, lng:-117.436961},
                    {lat:34.095331, lng:-117.436891},
                    {lat:34.095437, lng:-117.436833},
                    {lat:34.095898, lng:-117.436894},
                    {lat:34.095896, lng:-117.43631},
                    {lat:34.095892, lng:-117.435731},
                    {lat:34.095759, lng:-117.435798},
                    {lat:34.094359, lng:-117.435789},
                    {lat:34.094246, lng:-117.435749},
                    {lat:34.092141, lng:-117.435703},
                    {lat:34.092129, lng:-117.433519},
                    {lat:34.09224, lng:-117.403459},
                    {lat:34.09225, lng:-117.382949},
                    {lat:34.092269, lng:-117.380819},
                    {lat:34.092309, lng:-117.357239},
                    {lat:34.093709, lng:-117.35723},
                    {lat:34.099551, lng:-117.357245},
                    {lat:34.099543, lng:-117.352863},
                    {lat:34.09953, lng:-117.349739},
                    {lat:34.09955, lng:-117.348689},
                    {lat:34.09954, lng:-117.34602},
                    {lat:34.09962, lng:-117.335322},
                    {lat:34.0997, lng:-117.332978},
                    {lat:34.099367, lng:-117.333014},
                    {lat:34.09854, lng:-117.3331},
                    {lat:34.09639, lng:-117.333299},
                    {lat:34.093189, lng:-117.333569},
                    {lat:34.092316, lng:-117.333646},
                    {lat:34.092293, lng:-117.333184},
                    {lat:34.092192, lng:-117.331961},
                    {lat:34.092172, lng:-117.330909},
                    {lat:34.09215, lng:-117.325829},
                    {lat:34.092189, lng:-117.3251},
                    {lat:34.092189, lng:-117.32464},
                    {lat:34.09214, lng:-117.32415},
                    {lat:34.09208, lng:-117.323809},
                    {lat:34.09178, lng:-117.32258},
                    {lat:34.091669, lng:-117.321969},
                    {lat:34.0916, lng:-117.32135},
                    {lat:34.091559, lng:-117.32051},
                    {lat:34.091579, lng:-117.31979},
                    {lat:34.091659, lng:-117.318959},
                    {lat:34.091769, lng:-117.31829},
                    {lat:34.092089, lng:-117.316929},
                    {lat:34.092129, lng:-117.31658},
                    {lat:34.09214, lng:-117.31632},
                    {lat:34.09214, lng:-117.3107},
                    {lat:34.09216, lng:-117.306529},
                    {lat:34.092155, lng:-117.297422},
                    {lat:34.092319, lng:-117.297396},
                    {lat:34.092502, lng:-117.297406},
                    {lat:34.092637, lng:-117.297432},
                    {lat:34.092845, lng:-117.29749},
                    {lat:34.092947, lng:-117.297632},
                    {lat:34.093084, lng:-117.297722},
                    {lat:34.09355, lng:-117.298272},
                    {lat:34.09378, lng:-117.298469},
                    {lat:34.09405, lng:-117.29859},
                    {lat:34.094211, lng:-117.298637},
                    {lat:34.094333, lng:-117.298643},
                    {lat:34.095365, lng:-117.298639},
                    {lat:34.097517, lng:-117.298644},
                    {lat:34.098315, lng:-117.298663},
                    {lat:34.098388, lng:-117.298619},
                    {lat:34.100737, lng:-117.298611},
                    {lat:34.100855, lng:-117.298649},
                    {lat:34.100854, lng:-117.296398},
                    {lat:34.100859, lng:-117.2949},
                    {lat:34.100865, lng:-117.294821},
                    {lat:34.100849, lng:-117.29189},
                    {lat:34.10456, lng:-117.291909},
                    {lat:34.10459, lng:-117.28513},
                    {lat:34.10459, lng:-117.278759},
                    {lat:34.106459, lng:-117.278802},
                    {lat:34.10645, lng:-117.277189},
                    {lat:34.106439, lng:-117.27163},
                    {lat:34.104327, lng:-117.271613},
                    {lat:34.10429, lng:-117.261789},
                    {lat:34.1043, lng:-117.261179},
                    {lat:34.104349, lng:-117.260819},
                    {lat:34.104549, lng:-117.260079},
                    {lat:34.104585, lng:-117.259711},
                    {lat:34.104436, lng:-117.259746},
                    {lat:34.098092, lng:-117.259754},
                    {lat:34.098233, lng:-117.258552},
                    {lat:34.098455, lng:-117.257152},
                    {lat:34.098479, lng:-117.25588},
                    {lat:34.098521, lng:-117.251538},
                    {lat:34.098466, lng:-117.251351},
                    {lat:34.098459, lng:-117.251151},
                    {lat:34.098939, lng:-117.25115},
                    {lat:34.100036, lng:-117.251149},
                    {lat:34.100171, lng:-117.251177},
                    {lat:34.104089, lng:-117.251189},
                    {lat:34.1044, lng:-117.2512},
                    {lat:34.104539, lng:-117.251309},
                    {lat:34.106169, lng:-117.251279},
                    {lat:34.10871, lng:-117.251259},
                    {lat:34.109099, lng:-117.251319},
                    {lat:34.109299, lng:-117.251369},
                    {lat:34.10961, lng:-117.25148},
                    {lat:34.10989, lng:-117.251619},
                    {lat:34.110839, lng:-117.25214},
                    {lat:34.11133, lng:-117.25233},
                    {lat:34.11187, lng:-117.252449},
                    {lat:34.11574, lng:-117.252479},
                    {lat:34.11573, lng:-117.237478},
                    {lat:34.115699, lng:-117.231119},
                    {lat:34.115699, lng:-117.221799},
                    {lat:34.115679, lng:-117.217509},
                    {lat:34.11124, lng:-117.217509},
                    {lat:34.10844, lng:-117.217559},
                    {lat:34.107939, lng:-117.209999},
                    {lat:34.107879, lng:-117.208799},
                    {lat:34.113285, lng:-117.208761},
                    {lat:34.113376, lng:-117.208726},
                    {lat:34.116688, lng:-117.208734},
                    {lat:34.116808, lng:-117.208779},
                    {lat:34.119245, lng:-117.208761},
                    {lat:34.121201, lng:-117.208749},
                    {lat:34.121196, lng:-117.202707},
                    {lat:34.121158, lng:-117.201687},
                    {lat:34.12122, lng:-117.201553},
                    {lat:34.121218, lng:-117.199008},
                    {lat:34.121166, lng:-117.198859},
                    {lat:34.121163, lng:-117.197378},
                    {lat:34.121164, lng:-117.195799},
                    {lat:34.121211, lng:-117.195633},
                    {lat:34.12122, lng:-117.18739},
                    {lat:34.121131, lng:-117.17667},
                    {lat:34.121096, lng:-117.176556},
                    {lat:34.121068, lng:-117.173843},
                    {lat:34.119469, lng:-117.173779},
                    {lat:34.111269, lng:-117.17375},
                    {lat:34.110919, lng:-117.17371},
                    {lat:34.11077, lng:-117.17367},
                    {lat:34.110489, lng:-117.17358},
                    {lat:34.10989, lng:-117.173319},
                    {lat:34.109669, lng:-117.17393},
                    {lat:34.10952, lng:-117.174239},
                    {lat:34.10916, lng:-117.174869},
                    {lat:34.108949, lng:-117.17529},
                    {lat:34.108649, lng:-117.176159},
                    {lat:34.108559, lng:-117.17651},
                    {lat:34.108479, lng:-117.176979},
                    {lat:34.10843, lng:-117.17744},
                    {lat:34.108405, lng:-117.178215},
                    {lat:34.108353, lng:-117.178316},
                    {lat:34.10835, lng:-117.17948},
                    {lat:34.108276, lng:-117.181956},
                    {lat:34.108247, lng:-117.184978},
                    {lat:34.108247, lng:-117.185186},
                    {lat:34.107947, lng:-117.184959},
                    {lat:34.10774, lng:-117.184759},
                    {lat:34.107339, lng:-117.184399},
                    {lat:34.106967, lng:-117.184017},
                    {lat:34.106931, lng:-117.183905},
                    {lat:34.106159, lng:-117.183179},
                    {lat:34.105856, lng:-117.182938},
                    {lat:34.105609, lng:-117.182769},
                    {lat:34.10519, lng:-117.18258},
                    {lat:34.10501, lng:-117.182519},
                    {lat:34.104789, lng:-117.182469},
                    {lat:34.10456, lng:-117.18244},
                    {lat:34.098939, lng:-117.182409},
                    {lat:34.092389, lng:-117.182409},
                    {lat:34.0892, lng:-117.18239},
                    {lat:34.087169, lng:-117.1824},
                    {lat:34.080579, lng:-117.182379},
                    {lat:34.077273, lng:-117.182362},
                    {lat:34.077266, lng:-117.185582},
                    {lat:34.07731, lng:-117.18879},
                    {lat:34.077402, lng:-117.200846},
                    {lat:34.077415, lng:-117.20182},
                    {lat:34.07746, lng:-117.202031},
                    {lat:34.077466, lng:-117.204945},
                    {lat:34.077519, lng:-117.207609},
                    {lat:34.07757, lng:-117.20854},
                    {lat:34.077525, lng:-117.208701},
                    {lat:34.077529, lng:-117.208851},
                    {lat:34.073319, lng:-117.208901},
                    {lat:34.071189, lng:-117.208881},
                    {lat:34.070333, lng:-117.208885},
                    {lat:34.07028, lng:-117.205769},
                    {lat:34.070159, lng:-117.19787},
                    {lat:34.0701, lng:-117.192719},
                    {lat:34.070059, lng:-117.18523},
                    {lat:34.070043, lng:-117.182472},
                    {lat:34.062851, lng:-117.18253},
                    {lat:34.062838, lng:-117.183435},
                    {lat:34.062841, lng:-117.186465},
                    {lat:34.06144, lng:-117.186461},
                    {lat:34.061394, lng:-117.186506},
                    {lat:34.05995, lng:-117.186509},
                    {lat:34.058879, lng:-117.18641},
                    {lat:34.05878, lng:-117.186389},
                    {lat:34.058539, lng:-117.186289},
                    {lat:34.05798, lng:-117.18595},
                    {lat:34.05779, lng:-117.18587},
                    {lat:34.057699, lng:-117.18579},
                    {lat:34.057551, lng:-117.185767},
                    {lat:34.057273, lng:-117.18577},
                    {lat:34.057261, lng:-117.183393},
               ];

               const route19coord = [
                    {lat:34.034622,lng:-117.057337},
                    {lat:34.034489,lng:-117.057339},
                    {lat:34.034415,lng:-117.057353},
                    {lat:34.034383,lng:-117.057381},
                    {lat:34.034362,lng:-117.057416},
                    {lat:34.034353,lng:-117.057473},
                    {lat:34.034353,lng:-117.057606},
                    {lat:34.034316,lng:-117.057625},
                    {lat:34.034225,lng:-117.057636},
                    {lat:34.034149,lng:-117.057661},
                    {lat:34.033953,lng:-117.057661},
                    {lat:34.033952,lng:-117.06205},
                    {lat:34.034052,lng:-117.066539},
                    {lat:34.034013,lng:-117.068159},
                    {lat:34.034032,lng:-117.072119},
                    {lat:34.033952,lng:-117.076129},
                    {lat:34.033952,lng:-117.08005},
                    {lat:34.033933,lng:-117.08235},
                    {lat:34.033952,lng:-117.086329},
                    {lat:34.033933,lng:-117.09009},
                    {lat:34.033943,lng:-117.095424},
                    {lat:34.034432,lng:-117.09545},
                    {lat:34.034813,lng:-117.0955},
                    {lat:34.035152,lng:-117.09563},
                    {lat:34.035312,lng:-117.09572},
                    {lat:34.035543,lng:-117.095879},
                    {lat:34.035823,lng:-117.09613},
                    {lat:34.036153,lng:-117.096559},
                    {lat:34.036333,lng:-117.096899},
                    {lat:34.036443,lng:-117.097169},
                    {lat:34.036513,lng:-117.09739},
                    {lat:34.036562,lng:-117.097589},
                    {lat:34.036592,lng:-117.09783},
                    {lat:34.036613,lng:-117.098079},
                    {lat:34.036623,lng:-117.09865},
                    {lat:34.036603,lng:-117.09963},
                    {lat:34.036603,lng:-117.10282},
                    {lat:34.036642,lng:-117.103389},
                    {lat:34.036672,lng:-117.10359},
                    {lat:34.036742,lng:-117.103889},
                    {lat:34.036952,lng:-117.10441},
                    {lat:34.037202,lng:-117.104829},
                    {lat:34.037482,lng:-117.10522},
                    {lat:34.037632,lng:-117.105379},
                    {lat:34.037812,lng:-117.105539},
                    {lat:34.038073,lng:-117.105729},
                    {lat:34.038442,lng:-117.105919},
                    {lat:34.038732,lng:-117.10603},
                    {lat:34.039612,lng:-117.106319},
                    {lat:34.03994,lng:-117.106431},
                    {lat:34.040338,lng:-117.106636},
                    {lat:34.040483,lng:-117.106259},
                    {lat:34.040532,lng:-117.10607},
                    {lat:34.040552,lng:-117.105869},
                    {lat:34.040532,lng:-117.1054},
                    {lat:34.040493,lng:-117.10513},
                    {lat:34.040234,lng:-117.103969},
                    {lat:34.040173,lng:-117.103699},
                    {lat:34.040154,lng:-117.103316},
                    {lat:34.040303,lng:-117.102203},
                    {lat:34.040262,lng:-117.100721},
                    {lat:34.039826,lng:-117.100669},
                    {lat:34.039722,lng:-117.100559},
                    {lat:34.039712,lng:-117.100139},
                    {lat:34.039773,lng:-117.10004},
                    {lat:34.040306,lng:-117.100225},
                    {lat:34.040326,lng:-117.102209},
                    {lat:34.040245,lng:-117.102757},
                    {lat:34.040166,lng:-117.103303},
                    {lat:34.040249,lng:-117.103972},
                    {lat:34.040555,lng:-117.105928},
                    {lat:34.040341,lng:-117.106636},
                    {lat:34.040996,lng:-117.107255},
                    {lat:34.041267,lng:-117.107682},
                    {lat:34.041434,lng:-117.108013},
                    {lat:34.041603,lng:-117.108555},
                    {lat:34.041819,lng:-117.109692},
                    {lat:34.042201,lng:-117.111192},
                    {lat:34.0425,lng:-117.111995},
                    {lat:34.042917,lng:-117.112688},
                    {lat:34.043449,lng:-117.113302},
                    {lat:34.044065,lng:-117.113975},
                    {lat:34.045143,lng:-117.115387},
                    {lat:34.046247,lng:-117.116179},
                    {lat:34.047317,lng:-117.117025},
                    {lat:34.047746,lng:-117.117665},
                    {lat:34.048161,lng:-117.118607},
                    {lat:34.048279,lng:-117.119299},
                    {lat:34.048303,lng:-117.11999},
                    {lat:34.048237,lng:-117.12139},
                    {lat:34.048436,lng:-117.139009},
                    {lat:34.055472,lng:-117.139034},
                    {lat:34.055489,lng:-117.139352},
                    {lat:34.05561,lng:-117.140089},
                    {lat:34.055624,lng:-117.156445},
                    {lat:34.055537,lng:-117.17571},
                    {lat:34.056189,lng:-117.176252},
                    {lat:34.05641,lng:-117.176482},
                    {lat:34.056501,lng:-117.176524},
                    {lat:34.056578,lng:-117.176577},
                    {lat:34.056839,lng:-117.176935},
                    {lat:34.057016,lng:-117.17731},
                    {lat:34.05715,lng:-117.177667},
                    {lat:34.057291,lng:-117.17829},
                    {lat:34.057346,lng:-117.178697},
                    {lat:34.057369,lng:-117.182572},
                    {lat:34.057381,lng:-117.185763},
                    {lat:34.055839,lng:-117.18577},
                    {lat:34.055749,lng:-117.185749},
                    {lat:34.055659,lng:-117.185699},
                    {lat:34.055489,lng:-117.185569},
                    {lat:34.0549,lng:-117.18663},
                    {lat:34.054409,lng:-117.187469},
                    {lat:34.054049,lng:-117.188169},
                    {lat:34.053069,lng:-117.189899},
                    {lat:34.049289,lng:-117.196769},
                    {lat:34.048459,lng:-117.19824},
                    {lat:34.047999,lng:-117.199119},
                    {lat:34.047489,lng:-117.200009},
                    {lat:34.047279,lng:-117.20044},
                    {lat:34.047089,lng:-117.200879},
                    {lat:34.04688,lng:-117.20156},
                    {lat:34.0467,lng:-117.202359},
                    {lat:34.046659,lng:-117.20265},
                    {lat:34.04662,lng:-117.203309},
                    {lat:34.04662,lng:-117.20552},
                    {lat:34.04663,lng:-117.205869},
                    {lat:34.046669,lng:-117.206259},
                    {lat:34.046729,lng:-117.206629},
                    {lat:34.04687,lng:-117.207309},
                    {lat:34.04696,lng:-117.20759},
                    {lat:34.048019,lng:-117.21048},
                    {lat:34.04825,lng:-117.21142},
                    {lat:34.04831,lng:-117.21197},
                    {lat:34.04834,lng:-117.2126},
                    {lat:34.04834,lng:-117.21372},
                    {lat:34.04832,lng:-117.214199},
                    {lat:34.048269,lng:-117.21444},
                    {lat:34.04825,lng:-117.218833},
                    {lat:34.048314,lng:-117.219043},
                    {lat:34.048252,lng:-117.22441},
                    {lat:34.04824,lng:-117.225269},
                    {lat:34.048268,lng:-117.226122},
                    {lat:34.048234,lng:-117.226304},
                    {lat:34.048369,lng:-117.227199},
                    {lat:34.0486,lng:-117.228009},
                    {lat:34.048919,lng:-117.229029},
                    {lat:34.049079,lng:-117.229709},
                    {lat:34.04914,lng:-117.230039},
                    {lat:34.04922,lng:-117.23122},
                    {lat:34.049189,lng:-117.2318},
                    {lat:34.049165,lng:-117.232402},
                    {lat:34.049061,lng:-117.233025},
                    {lat:34.048827,lng:-117.23392},
                    {lat:34.048719,lng:-117.23408},
                    {lat:34.0484,lng:-117.2355},
                    {lat:34.04834,lng:-117.236109},
                    {lat:34.04833,lng:-117.23729},
                    {lat:34.04834,lng:-117.23788},
                    {lat:34.048349,lng:-117.238373},
                    {lat:34.048425,lng:-117.238517},
                    {lat:34.048449,lng:-117.24049},
                    {lat:34.048469,lng:-117.24311},
                    {lat:34.048459,lng:-117.248929},
                    {lat:34.048439,lng:-117.252399},
                    {lat:34.04842,lng:-117.26259},
                    {lat:34.048412,lng:-117.263861},
                    {lat:34.048261,lng:-117.265667},
                    {lat:34.048459,lng:-117.265669},
                    {lat:34.049799,lng:-117.26565},
                    {lat:34.05022,lng:-117.265669},
                    {lat:34.051989,lng:-117.265679},
                    {lat:34.052,lng:-117.269459},
                    {lat:34.051979,lng:-117.272949},
                    {lat:34.051989,lng:-117.273179},
                    {lat:34.052039,lng:-117.27334},
                    {lat:34.05227,lng:-117.273819},
                    {lat:34.0523,lng:-117.273949},
                    {lat:34.05228,lng:-117.27407},
                    {lat:34.052187,lng:-117.274142},
                    {lat:34.052062,lng:-117.274189},
                    {lat:34.052089,lng:-117.274375},
                    {lat:34.052086,lng:-117.27456},
                    {lat:34.052053,lng:-117.277391},
                    {lat:34.051979,lng:-117.278136},
                    {lat:34.05191,lng:-117.278719},
                    {lat:34.05175,lng:-117.279569},
                    {lat:34.05119,lng:-117.281499},
                    {lat:34.050989,lng:-117.282239},
                    {lat:34.050819,lng:-117.282989},
                    {lat:34.050709,lng:-117.28379},
                    {lat:34.050539,lng:-117.28585},
                    {lat:34.050419,lng:-117.28679},
                    {lat:34.050179,lng:-117.28788},
                    {lat:34.049879,lng:-117.288939},
                    {lat:34.04967,lng:-117.28958},
                    {lat:34.04907,lng:-117.291269},
                    {lat:34.04888,lng:-117.291939},
                    {lat:34.048645,lng:-117.293109},
                    {lat:34.04844,lng:-117.294449},
                    {lat:34.04842,lng:-117.29549},
                    {lat:34.0484,lng:-117.304109},
                    {lat:34.048359,lng:-117.30435},
                    {lat:34.04831,lng:-117.304509},
                    {lat:34.048199,lng:-117.304729},
                    {lat:34.047479,lng:-117.30584},
                    {lat:34.047279,lng:-117.306219},
                    {lat:34.04724,lng:-117.30641},
                    {lat:34.04723,lng:-117.3066},
                    {lat:34.047269,lng:-117.306939},
                    {lat:34.04779,lng:-117.307959},
                    {lat:34.047919,lng:-117.308239},
                    {lat:34.048009,lng:-117.30849},
                    {lat:34.048469,lng:-117.30899},
                    {lat:34.04861,lng:-117.30903},
                    {lat:34.049919,lng:-117.30907},
                    {lat:34.051719,lng:-117.309089},
                    {lat:34.054509,lng:-117.309089},
                    {lat:34.05464,lng:-117.30911},
                    {lat:34.055769,lng:-117.309099},
                    {lat:34.05587,lng:-117.30916},
                    {lat:34.05653,lng:-117.30917},
                    {lat:34.056719,lng:-117.309189},
                    {lat:34.056899,lng:-117.30925},
                    {lat:34.05707,lng:-117.309329},
                    {lat:34.05725,lng:-117.309449},
                    {lat:34.05911,lng:-117.311029},
                    {lat:34.059719,lng:-117.311529},
                    {lat:34.059899,lng:-117.311649},
                    {lat:34.060049,lng:-117.31169},
                    {lat:34.06021,lng:-117.311709},
                    {lat:34.06039,lng:-117.311709},
                    {lat:34.060539,lng:-117.31168},
                    {lat:34.06074,lng:-117.311609},
                    {lat:34.060889,lng:-117.31151},
                    {lat:34.060979,lng:-117.311739},
                    {lat:34.060979,lng:-117.312109},
                    {lat:34.06091,lng:-117.312289},
                    {lat:34.06058,lng:-117.3128},
                    {lat:34.06047,lng:-117.313049},
                    {lat:34.060429,lng:-117.313229},
                    {lat:34.060409,lng:-117.313419},
                    {lat:34.061466,lng:-117.320647},
                    {lat:34.060349,lng:-117.320879},
                    {lat:34.059349,lng:-117.321069},
                    {lat:34.06001,lng:-117.326059},
                    {lat:34.061049,lng:-117.32563},
                    {lat:34.062129,lng:-117.32532},
                    {lat:34.063209,lng:-117.3251},
                    {lat:34.066299,lng:-117.324429},
                    {lat:34.066999,lng:-117.324309},
                    {lat:34.06931,lng:-117.323799},
                    {lat:34.070139,lng:-117.323629},
                    {lat:34.0712,lng:-117.323439},
                    {lat:34.07227,lng:-117.323179},
                    {lat:34.073379,lng:-117.322949},
                    {lat:34.073569,lng:-117.32419},
                    {lat:34.07363,lng:-117.325789},
                    {lat:34.0737,lng:-117.326279},
                    {lat:34.073929,lng:-117.32747},
                    {lat:34.073939,lng:-117.327599},
                    {lat:34.073929,lng:-117.327689},
                    {lat:34.073949,lng:-117.328029},
                    {lat:34.07396,lng:-117.333259},
                    {lat:34.074359,lng:-117.335199},
                    {lat:34.075269,lng:-117.335139},
                    {lat:34.07758,lng:-117.334929},
                    {lat:34.077689,lng:-117.337119},
                    {lat:34.077809,lng:-117.338979},
                    {lat:34.07786,lng:-117.34021},
                    {lat:34.078049,lng:-117.3434},
                    {lat:34.07804,lng:-117.343569},
                    {lat:34.07786,lng:-117.34436},
                    {lat:34.07776,lng:-117.344879},
                    {lat:34.07774,lng:-117.345099},
                    {lat:34.077729,lng:-117.348509},
                    {lat:34.072829,lng:-117.34849},
                    {lat:34.0719,lng:-117.350979},
                    {lat:34.071896,lng:-117.351419},
                    {lat:34.071898,lng:-117.351837},
                    {lat:34.07251,lng:-117.351847},
                    {lat:34.072479,lng:-117.35282},
                    {lat:34.0728,lng:-117.35281},
                    {lat:34.07633,lng:-117.352829},
                    {lat:34.077674,lng:-117.352842},
                    {lat:34.077762,lng:-117.35292},
                    {lat:34.07775,lng:-117.374649},
                    {lat:34.077737,lng:-117.386697},
                    {lat:34.077769,lng:-117.387047},
                    {lat:34.077773,lng:-117.389092},
                    {lat:34.077724,lng:-117.389475},
                    {lat:34.07768,lng:-117.40082},
                    {lat:34.077609,lng:-117.426959},
                    {lat:34.074009,lng:-117.42697},
                    {lat:34.07399,lng:-117.4286},
                    {lat:34.074003,lng:-117.429998},
                    {lat:34.074031,lng:-117.430156},
                    {lat:34.07402,lng:-117.432125},
                    {lat:34.073986,lng:-117.432201},
                    {lat:34.07399,lng:-117.4325},
                    {lat:34.073996,lng:-117.434522},
                    {lat:34.074002,lng:-117.435604},
                    {lat:34.077483,lng:-117.435644},
                    {lat:34.077591,lng:-117.435704},
                    {lat:34.082109,lng:-117.435689},
                    {lat:34.08849,lng:-117.435729},
                    {lat:34.094242,lng:-117.435751},
                    {lat:34.094375,lng:-117.435683},
                    {lat:34.095743,lng:-117.435679},
                    {lat:34.095894,lng:-117.435731},
                    {lat:34.095898,lng:-117.436894},
                    {lat:34.09563,lng:-117.43703},
                    {lat:34.095449,lng:-117.437103},
                    {lat:34.095404,lng:-117.437102}
               ];

               const route61coord = [
                    {lat:34.095511,lng:-117.436842},
                    {lat:34.095901,lng:-117.436891},
                    {lat:34.095891,lng:-117.435733},
                    {lat:34.08849,lng:-117.435729},
                    {lat:34.082109,lng:-117.435689},
                    {lat:34.073991,lng:-117.4356},
                    {lat:34.074028,lng:-117.440049},
                    {lat:34.077549,lng:-117.44006},
                    {lat:34.07756,lng:-117.44169},
                    {lat:34.077539,lng:-117.443339},
                    {lat:34.077549,lng:-117.44615},
                    {lat:34.077529,lng:-117.4479},
                    {lat:34.07748,lng:-117.469199},
                    {lat:34.077439,lng:-117.47724},
                    {lat:34.077419,lng:-117.47831},
                    {lat:34.077439,lng:-117.48057},
                    {lat:34.077439,lng:-117.485079},
                    {lat:34.07738,lng:-117.48777},
                    {lat:34.07741,lng:-117.4889},
                    {lat:34.07741,lng:-117.49092},
                    {lat:34.077369,lng:-117.49317},
                    {lat:34.077369,lng:-117.50189},
                    {lat:34.077329,lng:-117.50743},
                    {lat:34.07731,lng:-117.507639},
                    {lat:34.077269,lng:-117.507729},
                    {lat:34.077239,lng:-117.50816},
                    {lat:34.07721,lng:-117.514979},
                    {lat:34.077259,lng:-117.51567},
                    {lat:34.077259,lng:-117.515919},
                    {lat:34.07723,lng:-117.518399},
                    {lat:34.07722,lng:-117.52377},
                    {lat:34.077149,lng:-117.524019},
                    {lat:34.077189,lng:-117.527619},
                    {lat:34.07722,lng:-117.542589},
                    {lat:34.07732,lng:-117.54464},
                    {lat:34.07731,lng:-117.54533},
                    {lat:34.07732,lng:-117.55149},
                    {lat:34.077339,lng:-117.55544},
                    {lat:34.07738,lng:-117.558404},
                    {lat:34.07705,lng:-117.558415},
                    {lat:34.076727,lng:-117.558367},
                    {lat:34.07633,lng:-117.55828},
                    {lat:34.07559,lng:-117.55796},
                    {lat:34.07516,lng:-117.55784},
                    {lat:34.07495,lng:-117.557809},
                    {lat:34.074469,lng:-117.55778},
                    {lat:34.07372,lng:-117.557769},
                    {lat:34.073489,lng:-117.55779},
                    {lat:34.071942,lng:-117.558093},
                    {lat:34.071779,lng:-117.558129},
                    {lat:34.07174,lng:-117.556359},
                    {lat:34.074613,lng:-117.55636},
                    {lat:34.07462,lng:-117.55662},
                    {lat:34.074604,lng:-117.557793},
                    {lat:34.07243,lng:-117.55801},
                    {lat:34.072311,lng:-117.558039},
                    {lat:34.072119,lng:-117.5582},
                    {lat:34.072039,lng:-117.558339},
                    {lat:34.071969,lng:-117.5586},
                    {lat:34.07198,lng:-117.559019},
                    {lat:34.07192,lng:-117.55946},
                    {lat:34.071789,lng:-117.5599},
                    {lat:34.07165,lng:-117.560239},
                    {lat:34.07135,lng:-117.560699},
                    {lat:34.07111,lng:-117.560969},
                    {lat:34.06982,lng:-117.56201},
                    {lat:34.06956,lng:-117.56224},
                    {lat:34.069449,lng:-117.56237},
                    {lat:34.06931,lng:-117.562589},
                    {lat:34.069149,lng:-117.56291},
                    {lat:34.06902,lng:-117.563259},
                    {lat:34.068959,lng:-117.563529},
                    {lat:34.068899,lng:-117.563979},
                    {lat:34.068779,lng:-117.568709},
                    {lat:34.068799,lng:-117.569329},
                    {lat:34.068889,lng:-117.569819},
                    {lat:34.069159,lng:-117.570509},
                    {lat:34.069519,lng:-117.571129},
                    {lat:34.06974,lng:-117.571399},
                    {lat:34.07003,lng:-117.571629},
                    {lat:34.070789,lng:-117.57237},
                    {lat:34.070979,lng:-117.572579},
                    {lat:34.071219,lng:-117.572889},
                    {lat:34.07153,lng:-117.57341},
                    {lat:34.07162,lng:-117.573569},
                    {lat:34.07173,lng:-117.573829},
                    {lat:34.071779,lng:-117.574009},
                    {lat:34.0719,lng:-117.57461},
                    {lat:34.071939,lng:-117.57494},
                    {lat:34.071949,lng:-117.577079},
                    {lat:34.07198,lng:-117.578679},
                    {lat:34.071929,lng:-117.57916},
                    {lat:34.07189,lng:-117.579369},
                    {lat:34.071749,lng:-117.579859},
                    {lat:34.071509,lng:-117.580449},
                    {lat:34.070699,lng:-117.582019},
                    {lat:34.070489,lng:-117.58258},
                    {lat:34.07038,lng:-117.583009},
                    {lat:34.0703,lng:-117.58349},
                    {lat:34.070259,lng:-117.58388},
                    {lat:34.070229,lng:-117.584399},
                    {lat:34.070219,lng:-117.5878},
                    {lat:34.070286,lng:-117.593473},
                    {lat:34.06984,lng:-117.593489},
                    {lat:34.06748,lng:-117.593489},
                    {lat:34.06622,lng:-117.59351},
                    {lat:34.0649,lng:-117.593489},
                    {lat:34.06397,lng:-117.59351},
                    {lat:34.06263,lng:-117.59348},
                    {lat:34.06263,lng:-117.59441},
                    {lat:34.06265,lng:-117.59487},
                    {lat:34.06264,lng:-117.59555},
                    {lat:34.062507,lng:-117.600519},
                    {lat:34.062364,lng:-117.600513},
                    {lat:34.062096,lng:-117.600511},
                    {lat:34.061259,lng:-117.6005},
                    {lat:34.0611,lng:-117.600479},
                    {lat:34.060989,lng:-117.600419},
                    {lat:34.06091,lng:-117.600339},
                    {lat:34.06084,lng:-117.600209},
                    {lat:34.06083,lng:-117.596549},
                    {lat:34.06085,lng:-117.58523},
                    {lat:34.060869,lng:-117.585039},
                    {lat:34.06092,lng:-117.58492},
                    {lat:34.061,lng:-117.58483},
                    {lat:34.061079,lng:-117.58478},
                    {lat:34.06137,lng:-117.584759},
                    {lat:34.061859,lng:-117.584769},
                    {lat:34.061979,lng:-117.58474},
                    {lat:34.06254,lng:-117.584719},
                    {lat:34.06265,lng:-117.58474},
                    {lat:34.062869,lng:-117.584819},
                    {lat:34.06272,lng:-117.591159},
                    {lat:34.062669,lng:-117.59181},
                    {lat:34.06263,lng:-117.59348},
                    {lat:34.062498,lng:-117.60058},
                    {lat:34.062329,lng:-117.60791},
                    {lat:34.06228,lng:-117.608579},
                    {lat:34.062086,lng:-117.610987},
                    {lat:34.06246,lng:-117.61098},
                    {lat:34.063419,lng:-117.610989},
                    {lat:34.063569,lng:-117.61197},
                    {lat:34.06354,lng:-117.612839},
                    {lat:34.063469,lng:-117.613059},
                    {lat:34.06346,lng:-117.613419},
                    {lat:34.06345,lng:-117.623239},
                    {lat:34.063399,lng:-117.63514},
                    {lat:34.063379,lng:-117.63672},
                    {lat:34.063379,lng:-117.647219},
                    {lat:34.06335,lng:-117.65238},
                    {lat:34.06334,lng:-117.657269},
                    {lat:34.06335,lng:-117.659139},
                    {lat:34.063329,lng:-117.660599},
                    {lat:34.063329,lng:-117.66588},
                    {lat:34.063299,lng:-117.670039},
                    {lat:34.06327,lng:-117.679579},
                    {lat:34.063289,lng:-117.68082},
                    {lat:34.06335,lng:-117.681109},
                    {lat:34.06335,lng:-117.682469},
                    {lat:34.063299,lng:-117.68729},
                    {lat:34.063299,lng:-117.689559},
                    {lat:34.063219,lng:-117.696759},
                    {lat:34.06327,lng:-117.71776},
                    {lat:34.063209,lng:-117.7192},
                    {lat:34.06319,lng:-117.72077},
                    {lat:34.063149,lng:-117.72145},
                    {lat:34.063119,lng:-117.723629},
                    {lat:34.063109,lng:-117.723759},
                    {lat:34.063019,lng:-117.72393},
                    {lat:34.063019,lng:-117.72464},
                    {lat:34.06289,lng:-117.729039},
                    {lat:34.06282,lng:-117.732219},
                    {lat:34.062779,lng:-117.73337},
                    {lat:34.06274,lng:-117.73576},
                    {lat:34.062579,lng:-117.741579},
                    {lat:34.06256,lng:-117.743389},
                    {lat:34.062401,lng:-117.748111},
                    {lat:34.06239,lng:-117.750329},
                    {lat:34.061436,lng:-117.750289},
                    {lat:34.060561,lng:-117.750234},
                    {lat:34.060519,lng:-117.752424},
                    {lat:34.059444,lng:-117.752388},
                    {lat:34.059476,lng:-117.750695},
                    {lat:34.059436,lng:-117.750651},
                    {lat:34.059376,lng:-117.750633},
                    {lat:34.059319,lng:-117.750638},
                    {lat:34.059272,lng:-117.750697},
                    {lat:34.059241,lng:-117.751666}
               ];
          
               const route82coord = [
                    {lat:34.106419,lng:-117.53708},
                    {lat:34.109649,lng:-117.537029},
                    {lat:34.11123,lng:-117.536919},
                    {lat:34.11212,lng:-117.536839},
                    {lat:34.113549,lng:-117.536749},
                    {lat:34.11493,lng:-117.53678},
                    {lat:34.11494,lng:-117.53726},
                    {lat:34.11491,lng:-117.53768},
                    {lat:34.11477,lng:-117.53825},
                    {lat:34.11448,lng:-117.53902},
                    {lat:34.114419,lng:-117.53925},
                    {lat:34.114349,lng:-117.539639},
                    {lat:34.114259,lng:-117.540389},
                    {lat:34.11419,lng:-117.540719},
                    {lat:34.114059,lng:-117.541069},
                    {lat:34.113959,lng:-117.54154},
                    {lat:34.11392,lng:-117.542149},
                    {lat:34.113909,lng:-117.54284},
                    {lat:34.11394,lng:-117.546329},
                    {lat:34.113879,lng:-117.546839},
                    {lat:34.113779,lng:-117.54739},
                    {lat:34.113619,lng:-117.547959},
                    {lat:34.113429,lng:-117.54842},
                    {lat:34.113169,lng:-117.54888},
                    {lat:34.11276,lng:-117.5495},
                    {lat:34.11222,lng:-117.55004},
                    {lat:34.110919,lng:-117.551239},
                    {lat:34.11077,lng:-117.551409},
                    {lat:34.110639,lng:-117.551589},
                    {lat:34.1105,lng:-117.551819},
                    {lat:34.110289,lng:-117.55225},
                    {lat:34.110089,lng:-117.552869},
                    {lat:34.10997,lng:-117.553449},
                    {lat:34.109279,lng:-117.557369},
                    {lat:34.10926,lng:-117.557539},
                    {lat:34.10882,lng:-117.55738},
                    {lat:34.108579,lng:-117.557319},
                    {lat:34.10791,lng:-117.557189},
                    {lat:34.10717,lng:-117.55712},
                    {lat:34.10531,lng:-117.55711},
                    {lat:34.10494,lng:-117.557079},
                    {lat:34.10457,lng:-117.55702},
                    {lat:34.10414,lng:-117.556919},
                    {lat:34.10376,lng:-117.556809},
                    {lat:34.101549,lng:-117.556099},
                    {lat:34.100759,lng:-117.555909},
                    {lat:34.100479,lng:-117.55586},
                    {lat:34.100119,lng:-117.555829},
                    {lat:34.099689,lng:-117.555819},
                    {lat:34.096179,lng:-117.5558},
                    {lat:34.09584,lng:-117.5558},
                    {lat:34.09541,lng:-117.55585},
                    {lat:34.09504,lng:-117.555929},
                    {lat:34.094629,lng:-117.556049},
                    {lat:34.09422,lng:-117.55622},
                    {lat:34.093809,lng:-117.55643},
                    {lat:34.09199,lng:-117.557579},
                    {lat:34.090949,lng:-117.55811},
                    {lat:34.090749,lng:-117.55819},
                    {lat:34.090489,lng:-117.558269},
                    {lat:34.090083,lng:-117.558392},
                    {lat:34.090056,lng:-117.559503},
                    {lat:34.0901,lng:-117.559659},
                    {lat:34.09017,lng:-117.55977},
                    {lat:34.09082,lng:-117.560519},
                    {lat:34.090919,lng:-117.560519},
                    {lat:34.090969,lng:-117.560507},
                    {lat:34.090919,lng:-117.560523},
                    {lat:34.090814,lng:-117.560517},
                    {lat:34.090163,lng:-117.559759},
                    {lat:34.090101,lng:-117.55966},
                    {lat:34.090052,lng:-117.559502},
                    {lat:34.090081,lng:-117.558395},
                    {lat:34.089871,lng:-117.558409},
                    {lat:34.089319,lng:-117.558449},
                    {lat:34.086449,lng:-117.558449},
                    {lat:34.076729,lng:-117.558389},
                    {lat:34.07633,lng:-117.55828},
                    {lat:34.07559,lng:-117.55796},
                    {lat:34.075289,lng:-117.55787},
                    {lat:34.07495,lng:-117.557809},
                    {lat:34.074109,lng:-117.557769},
                    {lat:34.07372,lng:-117.557769},
                    {lat:34.073489,lng:-117.55779},
                    {lat:34.071932,lng:-117.558101},
                    {lat:34.071761,lng:-117.558136},
                    {lat:34.071738,lng:-117.557825},
                    {lat:34.071708,lng:-117.557075},
                    {lat:34.07174,lng:-117.556359},
                    {lat:34.074469,lng:-117.556379},
                    {lat:34.07462,lng:-117.55662},
                    {lat:34.074612,lng:-117.55776},
                    {lat:34.073499,lng:-117.557791},
                    {lat:34.070439,lng:-117.55838},
                    {lat:34.069979,lng:-117.558399},
                    {lat:34.069409,lng:-117.558359},
                    {lat:34.067809,lng:-117.558309},
                    {lat:34.066299,lng:-117.558309},
                    {lat:34.064029,lng:-117.55828},
                    {lat:34.06282,lng:-117.558249},
                    {lat:34.059089,lng:-117.558259},
                    {lat:34.05327,lng:-117.55832},
                    {lat:34.049919,lng:-117.558339},
                    {lat:34.048058,lng:-117.558375},
                    {lat:34.048079,lng:-117.55711},
                    {lat:34.048079,lng:-117.55514},
                    {lat:34.04806,lng:-117.553439},
                    {lat:34.047999,lng:-117.551319},
                    {lat:34.047989,lng:-117.5478},
                    {lat:34.048019,lng:-117.54672},
                    {lat:34.048019,lng:-117.545489},
                    {lat:34.048029,lng:-117.54528},
                    {lat:34.04806,lng:-117.54514},
                    {lat:34.048079,lng:-117.543279},
                    {lat:34.04805,lng:-117.531759},
                    {lat:34.04806,lng:-117.53051},
                    {lat:34.04804,lng:-117.530009},
                    {lat:34.04797,lng:-117.52958},
                    {lat:34.0478,lng:-117.528919},
                    {lat:34.047389,lng:-117.52759},
                    {lat:34.04707,lng:-117.526409},
                    {lat:34.046859,lng:-117.525499},
                    {lat:34.046819,lng:-117.525149},
                    {lat:34.046769,lng:-117.52313},
                    {lat:34.046739,lng:-117.522899},
                    {lat:34.04678,lng:-117.52052},
                    {lat:34.0468,lng:-117.52007},
                    {lat:34.046829,lng:-117.519839},
                    {lat:34.046929,lng:-117.5194},
                    {lat:34.047099,lng:-117.518849},
                    {lat:34.04759,lng:-117.517849},
                    {lat:34.047759,lng:-117.51742},
                    {lat:34.047849,lng:-117.517049},
                    {lat:34.047909,lng:-117.51657},
                    {lat:34.047929,lng:-117.515859},
                    {lat:34.04796,lng:-117.510879},
                    {lat:34.04797,lng:-117.510459},
                    {lat:34.048021,lng:-117.50915},
                    {lat:34.04806,lng:-117.507162},
                    {lat:34.048137,lng:-117.506882},
                    {lat:34.047439,lng:-117.506885},
                    {lat:34.04732,lng:-117.507005},
                    {lat:34.046622,lng:-117.50699},
                    {lat:34.045839,lng:-117.506949},
                    {lat:34.037739,lng:-117.506969},
                    {lat:34.035495,lng:-117.506972},
                    {lat:34.03549,lng:-117.505157},
                    {lat:34.035489,lng:-117.504579},
                    {lat:34.035589,lng:-117.50396},
                    {lat:34.03572,lng:-117.503459},
                    {lat:34.03591,lng:-117.50297},
                    {lat:34.03599,lng:-117.502809},
                    {lat:34.036119,lng:-117.50258},
                    {lat:34.03637,lng:-117.502199},
                    {lat:34.0369,lng:-117.50158},
                    {lat:34.037479,lng:-117.500939},
                    {lat:34.037669,lng:-117.50068},
                    {lat:34.037919,lng:-117.50028},
                    {lat:34.038119,lng:-117.49983},
                    {lat:34.038279,lng:-117.499359},
                    {lat:34.038369,lng:-117.498989},
                    {lat:34.038454,lng:-117.498641},
                    {lat:34.038475,lng:-117.49814},
                    {lat:34.038448,lng:-117.497094},
                    {lat:34.038445,lng:-117.497037},
                    {lat:34.038432,lng:-117.496863},
                    {lat:34.038409,lng:-117.496713},
                    {lat:34.038317,lng:-117.496241},
                    {lat:34.038179,lng:-117.49586},
                    {lat:34.03798,lng:-117.49537},
                    {lat:34.037769,lng:-117.494859},
                    {lat:34.037189,lng:-117.493589},
                    {lat:34.036949,lng:-117.492959},
                    {lat:34.03681,lng:-117.492369},
                    {lat:34.036769,lng:-117.492109},
                    {lat:34.03671,lng:-117.491469},
                    {lat:34.03673,lng:-117.491},
                    {lat:34.03679,lng:-117.490409},
                    {lat:34.036869,lng:-117.490049},
                    {lat:34.037049,lng:-117.48943},
                    {lat:34.03716,lng:-117.48916},
                    {lat:34.03742,lng:-117.48866},
                    {lat:34.037649,lng:-117.48831},
                    {lat:34.03778,lng:-117.48812},
                    {lat:34.03805,lng:-117.48781},
                    {lat:34.038209,lng:-117.487659},
                    {lat:34.03842,lng:-117.487469},
                    {lat:34.039089,lng:-117.486969},
                    {lat:34.039439,lng:-117.48678},
                    {lat:34.039899,lng:-117.486609},
                    {lat:34.040289,lng:-117.486519},
                    {lat:34.040899,lng:-117.486479},
                    {lat:34.0412,lng:-117.4865},
                    {lat:34.041799,lng:-117.48664},
                    {lat:34.042049,lng:-117.486759},
                    {lat:34.04222,lng:-117.48686},
                    {lat:34.04265,lng:-117.487169},
                    {lat:34.04357,lng:-117.488099},
                    {lat:34.043779,lng:-117.488289},
                    {lat:34.044,lng:-117.48845},
                    {lat:34.044239,lng:-117.488599},
                    {lat:34.04474,lng:-117.488819},
                    {lat:34.045039,lng:-117.48889},
                    {lat:34.045389,lng:-117.48894},
                    {lat:34.047807,lng:-117.488949},
                    {lat:34.048009,lng:-117.488949},
                    {lat:34.04797,lng:-117.471129},
                    {lat:34.048089,lng:-117.458219},
                    {lat:34.048195,lng:-117.444494},
                    {lat:34.048197,lng:-117.444305},
                    {lat:34.048259,lng:-117.43903},
                    {lat:34.048272,lng:-117.435417},
                    {lat:34.0487,lng:-117.435409},
                    {lat:34.06001,lng:-117.435459},
                    {lat:34.063094,lng:-117.435515},
                    {lat:34.0631,lng:-117.435729},
                    {lat:34.06309,lng:-117.43772},
                    {lat:34.063094,lng:-117.438077},
                    {lat:34.063124,lng:-117.439852},
                    {lat:34.063064,lng:-117.439978},
                    {lat:34.063039,lng:-117.44938},
                    {lat:34.06301,lng:-117.45253},
                    {lat:34.063027,lng:-117.453772},
                    {lat:34.063235,lng:-117.453685},
                    {lat:34.063859,lng:-117.453679},
                    {lat:34.0646,lng:-117.45361},
                    {lat:34.066009,lng:-117.453579},
                    {lat:34.068619,lng:-117.45357},
                    {lat:34.069234,lng:-117.453629},
                    {lat:34.069309,lng:-117.453736},
                    {lat:34.070319,lng:-117.453769},
                    {lat:34.073499,lng:-117.45375},
                    {lat:34.07795,lng:-117.45375},
                    {lat:34.081229,lng:-117.4537},
                    {lat:34.08665,lng:-117.45371},
                    {lat:34.08827,lng:-117.453679},
                    {lat:34.088949,lng:-117.4537},
                    {lat:34.092078,lng:-117.453668},
                    {lat:34.092089,lng:-117.452059},
                    {lat:34.092089,lng:-117.448229},
                    {lat:34.092129,lng:-117.442289},
                    {lat:34.092115,lng:-117.440111},
                    {lat:34.095878,lng:-117.44012},
                    {lat:34.095881,lng:-117.439201},
                    {lat:34.095901,lng:-117.436817},
                    {lat:34.095869,lng:-117.435669},
                    {lat:34.098769,lng:-117.435698},
                    {lat:34.098839,lng:-117.435745},
                    {lat:34.10384,lng:-117.435759},
                    {lat:34.10942,lng:-117.435819},
                    {lat:34.109819,lng:-117.435809},
                    {lat:34.11251,lng:-117.435849},
                    {lat:34.11941,lng:-117.435869},
                    {lat:34.120179,lng:-117.435859},
                    {lat:34.120909,lng:-117.43592},
                    {lat:34.121461,lng:-117.435962},
                    {lat:34.121578,lng:-117.435911},
                    {lat:34.121729,lng:-117.435909},
                    {lat:34.12195,lng:-117.43593},
                    {lat:34.12285,lng:-117.435939},
                    {lat:34.124069,lng:-117.435999},
                    {lat:34.125039,lng:-117.43602},
                    {lat:34.132239,lng:-117.43601},
                    {lat:34.134599,lng:-117.43597},
                    {lat:34.134839,lng:-117.43598},
                    {lat:34.134974,lng:-117.435956},
                    {lat:34.135044,lng:-117.435941},
                    {lat:34.13617,lng:-117.435962},
                    {lat:34.137638,lng:-117.435971},
                    {lat:34.137808,lng:-117.435983},
                    {lat:34.137919,lng:-117.435989},
                    {lat:34.139755,lng:-117.435959},
                    {lat:34.13975,lng:-117.436169},
                    {lat:34.139739,lng:-117.437389},
                    {lat:34.139709,lng:-117.437839},
                    {lat:34.139629,lng:-117.438279},
                    {lat:34.13949,lng:-117.438789},
                    {lat:34.139099,lng:-117.439729},
                    {lat:34.138979,lng:-117.44007},
                    {lat:34.138929,lng:-117.4403},
                    {lat:34.13888,lng:-117.440769},
                    {lat:34.13888,lng:-117.443099},
                    {lat:34.13885,lng:-117.44344},
                    {lat:34.13878,lng:-117.44381},
                    {lat:34.138099,lng:-117.44615},
                    {lat:34.13804,lng:-117.446489},
                    {lat:34.138019,lng:-117.446789},
                    {lat:34.138019,lng:-117.448229},
                    {lat:34.13807,lng:-117.448899},
                    {lat:34.138119,lng:-117.44916},
                    {lat:34.13822,lng:-117.44951},
                    {lat:34.1384,lng:-117.45002},
                    {lat:34.138764,lng:-117.450903},
                    {lat:34.138902,lng:-117.451297},
                    {lat:34.13901,lng:-117.451604},
                    {lat:34.139064,lng:-117.452069},
                    {lat:34.139105,lng:-117.452378},
                    {lat:34.139117,lng:-117.452735},
                    {lat:34.139119,lng:-117.453532},
                    {lat:34.139228,lng:-117.453448},
                    {lat:34.141429,lng:-117.45347},
                    {lat:34.148719,lng:-117.45347},
                    {lat:34.149709,lng:-117.45343},
                    {lat:34.1501,lng:-117.45343},
                    {lat:34.1502,lng:-117.45344},
                    {lat:34.15037,lng:-117.45353},
                    {lat:34.15047,lng:-117.453769},
                    {lat:34.150465,lng:-117.464585}
               ];

               const route67coord = [
                    {lat:34.095162,lng:-117.435697},
                    {lat:34.11392,lng:-117.435838},
                    {lat:34.119908,lng:-117.435815},
                    {lat:34.121453,lng:-117.435931},
                    {lat:34.128583,lng:-117.436007},
                    {lat:34.128667,lng:-117.436003},
                    {lat:34.128683,lng:-117.453641},
                    {lat:34.128606,lng:-117.453636},
                    {lat:34.122432,lng:-117.453641},
                    {lat:34.121621,lng:-117.453641},
                    {lat:34.121483,lng:-117.453564},
                    {lat:34.121556,lng:-117.516336},
                    {lat:34.12151,lng:-117.516672},
                    {lat:34.121485,lng:-117.51681},
                    {lat:34.121399,lng:-117.517406},
                    {lat:34.121115,lng:-117.518418},
                    {lat:34.120988,lng:-117.51892},
                    {lat:34.12093,lng:-117.519343},
                    {lat:34.12092,lng:-117.519767},
                    {lat:34.120926,lng:-117.520167},
                    {lat:34.120972,lng:-117.528272},
                    {lat:34.121027,lng:-117.529212},
                    {lat:34.121107,lng:-117.529735},
                    {lat:34.121271,lng:-117.530416},
                    {lat:34.121473,lng:-117.531127},
                    {lat:34.121552,lng:-117.531415},
                    {lat:34.121644,lng:-117.532033},
                    {lat:34.121691,lng:-117.532384},
                    {lat:34.121703,lng:-117.53281},
                    {lat:34.121703,lng:-117.534732},
                    {lat:34.121642,lng:-117.536039},
                    {lat:34.121553,lng:-117.538172},
                    {lat:34.121531,lng:-117.539427},
                    {lat:34.121538,lng:-117.540287},
                    {lat:34.12151,lng:-117.567476},
                    {lat:34.121593,lng:-117.575677},
                    {lat:34.121524,lng:-117.575796},
                    {lat:34.121535,lng:-117.576013},
                    {lat:34.121515,lng:-117.584685},
                    {lat:34.121533,lng:-117.593488},
                    {lat:34.132721,lng:-117.593634},
                    {lat:34.133502,lng:-117.593638},
                    {lat:34.133683,lng:-117.593628},
                    {lat:34.133793,lng:-117.593621},
                    {lat:34.134071,lng:-117.5936},
                    {lat:34.134403,lng:-117.593575},
                    {lat:34.13453,lng:-117.593565},
                    {lat:34.134716,lng:-117.593553},
                    {lat:34.134794,lng:-117.593546},
                    {lat:34.134986,lng:-117.593529},
                    {lat:34.135955,lng:-117.593447},
                    {lat:34.13606,lng:-117.593444},
                    {lat:34.139105,lng:-117.593434},
                    {lat:34.139585,lng:-117.593419},
                    {lat:34.139678,lng:-117.593412},
                    {lat:34.139673,lng:-117.589469},
                    {lat:34.139678,lng:-117.575962},
                    {lat:34.139674,lng:-117.575783},
                    {lat:34.145725,lng:-117.575736},
                    {lat:34.145796,lng:-117.575734},
                    {lat:34.145798,lng:-117.5756},
                    {lat:34.145802,lng:-117.575393},
                    {lat:34.145806,lng:-117.57519},
                    {lat:34.145812,lng:-117.574878},
                    {lat:34.145815,lng:-117.574605},
                    {lat:34.145818,lng:-117.574352},
                    {lat:34.145814,lng:-117.574206},
                    {lat:34.145788,lng:-117.57408},
                    {lat:34.145718,lng:-117.5739},
                    {lat:34.145614,lng:-117.573775},
                    {lat:34.145539,lng:-117.57371},
                    {lat:34.14545,lng:-117.573662},
                    {lat:34.145333,lng:-117.573631},
                    {lat:34.144654,lng:-117.57362},
                    {lat:34.144513,lng:-117.573556},
                    {lat:34.144389,lng:-117.573479},
                    {lat:34.144284,lng:-117.57337},
                    {lat:34.144179,lng:-117.573182},
                    {lat:34.144133,lng:-117.573034},
                    {lat:34.144095,lng:-117.572772},
                    {lat:34.144108,lng:-117.571256},
                    {lat:34.144134,lng:-117.571003},
                    {lat:34.144207,lng:-117.570769},
                    {lat:34.144383,lng:-117.570502},
                    {lat:34.144619,lng:-117.570318},
                    {lat:34.144859,lng:-117.570252},
                    {lat:34.14548,lng:-117.570269},
                    {lat:34.14572,lng:-117.570277},
                    {lat:34.14593,lng:-117.570259},
                    {lat:34.146122,lng:-117.570313},
                    {lat:34.146407,lng:-117.570322},
                    {lat:34.146588,lng:-117.570299},
                    {lat:34.146827,lng:-117.570245}
               ];
          
               const route81coord = [
                    {lat:34.011919,lng:-117.691737},
                    {lat:34.012803,lng:-117.691747},
                    {lat:34.012865,lng:-117.691755},
                    {lat:34.012908,lng:-117.691777},
                    {lat:34.012945,lng:-117.6918},
                    {lat:34.012986,lng:-117.691814},
                    {lat:34.013011,lng:-117.691811},
                    {lat:34.013036,lng:-117.691814},
                    {lat:34.013056,lng:-117.691822},
                    {lat:34.013072,lng:-117.691833},
                    {lat:34.013089,lng:-117.691853},
                    {lat:34.013105,lng:-117.691886},
                    {lat:34.013112,lng:-117.691926},
                    {lat:34.013106,lng:-117.691967},
                    {lat:34.013091,lng:-117.692003},
                    {lat:34.01307,lng:-117.692027},
                    {lat:34.013038,lng:-117.692043},
                    {lat:34.013007,lng:-117.692045},
                    {lat:34.012974,lng:-117.692037},
                    {lat:34.012947,lng:-117.692017},
                    {lat:34.012928,lng:-117.691985},
                    {lat:34.012918,lng:-117.691948},
                    {lat:34.012918,lng:-117.691909},
                    {lat:34.01287,lng:-117.691857},
                    {lat:34.012825,lng:-117.69184},
                    {lat:34.012773,lng:-117.691832},
                    {lat:34.011918,lng:-117.69182},
                    {lat:34.01196,lng:-117.689332},
                    {lat:34.011113,lng:-117.68932},
                    {lat:34.010984,lng:-117.689237},
                    {lat:34.00952,lng:-117.68924},
                    {lat:34.005539,lng:-117.68918},
                    {lat:34.003839,lng:-117.68918},
                    {lat:34.00223,lng:-117.68915},
                    {lat:33.995729,lng:-117.689109},
                    {lat:33.9947,lng:-117.689079},
                    {lat:33.99262,lng:-117.68906},
                    {lat:33.99224,lng:-117.688479},
                    {lat:33.99225,lng:-117.687049},
                    {lat:33.99234,lng:-117.686049},
                    {lat:33.992369,lng:-117.68537},
                    {lat:33.99227,lng:-117.68383},
                    {lat:33.99226,lng:-117.683359},
                    {lat:33.992289,lng:-117.68262},
                    {lat:33.99235,lng:-117.68222},
                    {lat:33.992499,lng:-117.68168},
                    {lat:33.99261,lng:-117.6814},
                    {lat:33.99289,lng:-117.680849},
                    {lat:33.99316,lng:-117.680489},
                    {lat:33.993489,lng:-117.68015},
                    {lat:33.993819,lng:-117.679839},
                    {lat:33.99396,lng:-117.679669},
                    {lat:33.99414,lng:-117.67937},
                    {lat:33.99423,lng:-117.67916},
                    {lat:33.994289,lng:-117.67893},
                    {lat:33.99432,lng:-117.678679},
                    {lat:33.994349,lng:-117.676739},
                    {lat:33.994279,lng:-117.67622},
                    {lat:33.994199,lng:-117.676119},
                    {lat:33.994169,lng:-117.675989},
                    {lat:33.994179,lng:-117.675879},
                    {lat:33.99415,lng:-117.675839},
                    {lat:33.990779,lng:-117.672389},
                    {lat:33.990509,lng:-117.67208},
                    {lat:33.99038,lng:-117.671889},
                    {lat:33.990229,lng:-117.671559},
                    {lat:33.9901,lng:-117.671159},
                    {lat:33.990039,lng:-117.670679},
                    {lat:33.990049,lng:-117.663739},
                    {lat:33.99008,lng:-117.661889},
                    {lat:33.990139,lng:-117.654509},
                    {lat:33.9902,lng:-117.65354},
                    {lat:33.990263,lng:-117.650698},
                    {lat:33.993299,lng:-117.650689},
                    {lat:33.99755,lng:-117.650689},
                    {lat:34.0025,lng:-117.650729},
                    {lat:34.00944,lng:-117.650739},
                    {lat:34.01007,lng:-117.65072},
                    {lat:34.011489,lng:-117.650599},
                    {lat:34.014249,lng:-117.650609},
                    {lat:34.019019,lng:-117.65066},
                    {lat:34.02008,lng:-117.650639},
                    {lat:34.023449,lng:-117.650639},
                    {lat:34.02448,lng:-117.65066},
                    {lat:34.02654,lng:-117.65066},
                    {lat:34.02761,lng:-117.650679},
                    {lat:34.030529,lng:-117.65067},
                    {lat:34.031099,lng:-117.650689},
                    {lat:34.033149,lng:-117.650689},
                    {lat:34.03743,lng:-117.650729},
                    {lat:34.043779,lng:-117.65075},
                    {lat:34.047399,lng:-117.650779},
                    {lat:34.05038,lng:-117.650779},
                    {lat:34.053579,lng:-117.6508},
                    {lat:34.05786,lng:-117.650789},
                    {lat:34.05896,lng:-117.650819},
                    {lat:34.0594,lng:-117.650879},
                    {lat:34.060339,lng:-117.650909},
                    {lat:34.061259,lng:-117.6509},
                    {lat:34.061609,lng:-117.650869},
                    {lat:34.06209,lng:-117.650869},
                    {lat:34.06264,lng:-117.650829},
                    {lat:34.06336,lng:-117.65081},
                    {lat:34.064559,lng:-117.650829},
                    {lat:34.066989,lng:-117.650819},
                    {lat:34.069419,lng:-117.650829},
                    {lat:34.07335,lng:-117.65089},
                    {lat:34.07973,lng:-117.650909},
                    {lat:34.08154,lng:-117.65093},
                    {lat:34.082939,lng:-117.650919},
                    {lat:34.086079,lng:-117.65094},
                    {lat:34.08783,lng:-117.65093},
                    {lat:34.08882,lng:-117.650949},
                    {lat:34.09064,lng:-117.650949},
                    {lat:34.092209,lng:-117.650969},
                    {lat:34.09494,lng:-117.650969},
                    {lat:34.096599,lng:-117.650999},
                    {lat:34.0979,lng:-117.650999},
                    {lat:34.09846,lng:-117.65102},
                    {lat:34.099749,lng:-117.651009},
                    {lat:34.110649,lng:-117.651039}
               ];

               const riute81coordExt = [
                    {lat:34.148253,lng:-117.569211},
                    {lat:34.148248,lng:-117.56962},
                    {lat:34.148204,lng:-117.569648},
                    {lat:34.14704,lng:-117.570179},
                    {lat:34.14669,lng:-117.570279},
                    {lat:34.14634,lng:-117.570319},
                    {lat:34.145829,lng:-117.570279},
                    {lat:34.144659,lng:-117.5703},
                    {lat:34.14437,lng:-117.570499},
                    {lat:34.14427,lng:-117.57061},
                    {lat:34.14417,lng:-117.5708},
                    {lat:34.144109,lng:-117.571039},
                    {lat:34.14409,lng:-117.57134},
                    {lat:34.14409,lng:-117.57269},
                    {lat:34.144109,lng:-117.57296},
                    {lat:34.14418,lng:-117.57318},
                    {lat:34.144309,lng:-117.57341},
                    {lat:34.14445,lng:-117.573519},
                    {lat:34.14462,lng:-117.57359},
                    {lat:34.1448,lng:-117.573609},
                    {lat:34.145299,lng:-117.573609},
                    {lat:34.14544,lng:-117.573639},
                    {lat:34.145579,lng:-117.573749},
                    {lat:34.14572,lng:-117.5739},
                    {lat:34.14579,lng:-117.57407},
                    {lat:34.14582,lng:-117.574289},
                    {lat:34.14582,lng:-117.574729},
                    {lat:34.145795,lng:-117.575899},
                    {lat:34.142599,lng:-117.575939},
                    {lat:34.13725,lng:-117.575979},
                    {lat:34.13618,lng:-117.57601},
                    {lat:34.13546,lng:-117.575989},
                    {lat:34.133599,lng:-117.575979},
                    {lat:34.12413,lng:-117.575979},
                    {lat:34.121519,lng:-117.57601},
                    {lat:34.118119,lng:-117.575979},
                    {lat:34.113549,lng:-117.575989},
                    {lat:34.111979,lng:-117.57597},
                    {lat:34.10818,lng:-117.57596},
                    {lat:34.10702,lng:-117.575979},
                    {lat:34.10591,lng:-117.575949},
                    {lat:34.104609,lng:-117.575949},
                    {lat:34.103709,lng:-117.57593},
                    {lat:34.099199,lng:-117.575939},
                    {lat:34.094989,lng:-117.575889},
                    {lat:34.090049,lng:-117.57588},
                    {lat:34.08849,lng:-117.575859},
                    {lat:34.08468,lng:-117.575859},
                    {lat:34.07733,lng:-117.575835},
                    {lat:34.0773,lng:-117.575468},
                    {lat:34.077279,lng:-117.575079},
                    {lat:34.07721,lng:-117.56706},
                    {lat:34.077201,lng:-117.558404},
                    {lat:34.076729,lng:-117.558389},
                    {lat:34.07633,lng:-117.55828},
                    {lat:34.07559,lng:-117.55796},
                    {lat:34.075369,lng:-117.557889},
                    {lat:34.07495,lng:-117.557809},
                    {lat:34.074469,lng:-117.55778},
                    {lat:34.07372,lng:-117.557769},
                    {lat:34.073489,lng:-117.55779},
                    {lat:34.071929,lng:-117.55811},
                    {lat:34.071779,lng:-117.558129},
                    {lat:34.071691,lng:-117.556359},
                    {lat:34.074605,lng:-117.556361},
                    {lat:34.07462,lng:-117.55662},
                    {lat:34.07461,lng:-117.55712},
                    {lat:34.074629,lng:-117.558429},
                    {lat:34.07462,lng:-117.56066},
                    {lat:34.0746,lng:-117.56094},
                    {lat:34.074539,lng:-117.561229},
                    {lat:34.074459,lng:-117.561509},
                    {lat:34.07433,lng:-117.56183},
                    {lat:34.07417,lng:-117.562119},
                    {lat:34.07396,lng:-117.56237},
                    {lat:34.073459,lng:-117.562849},
                    {lat:34.07236,lng:-117.56372},
                    {lat:34.07199,lng:-117.564059},
                    {lat:34.071759,lng:-117.564329},
                    {lat:34.07156,lng:-117.564689},
                    {lat:34.07139,lng:-117.565139},
                    {lat:34.071329,lng:-117.56543},
                    {lat:34.07128,lng:-117.566989},
                    {lat:34.07129,lng:-117.567449},
                    {lat:34.071339,lng:-117.56791},
                    {lat:34.07139,lng:-117.56818},
                    {lat:34.071479,lng:-117.568439},
                    {lat:34.071669,lng:-117.568879},
                    {lat:34.072049,lng:-117.56953},
                    {lat:34.07227,lng:-117.569789},
                    {lat:34.07318,lng:-117.570729},
                    {lat:34.073679,lng:-117.571359},
                    {lat:34.073929,lng:-117.57179},
                    {lat:34.07415,lng:-117.57223},
                    {lat:34.07433,lng:-117.572699},
                    {lat:34.0745,lng:-117.573279},
                    {lat:34.0746,lng:-117.574059},
                    {lat:34.07462,lng:-117.574409},
                    {lat:34.074613,lng:-117.575639},
                    {lat:34.074618,lng:-117.575874},
                    {lat:34.07255,lng:-117.575909},
                    {lat:34.0711,lng:-117.575949},
                    {lat:34.06731,lng:-117.575949},
                    {lat:34.064379,lng:-117.575889},
                    {lat:34.063659,lng:-117.575819},
                    {lat:34.063309,lng:-117.575819},
                    {lat:34.06238,lng:-117.575849},
                    {lat:34.06154,lng:-117.575909},
                    {lat:34.05383,lng:-117.575979},
                    {lat:34.049109,lng:-117.575999},
                    {lat:34.04834,lng:-117.57602},
                    {lat:34.045389,lng:-117.575979},
                    {lat:34.042439,lng:-117.575979},
                    {lat:34.04248,lng:-117.576389},
                    {lat:34.042439,lng:-117.57678},
                    {lat:34.042329,lng:-117.577239},
                    {lat:34.042159,lng:-117.57773},
                    {lat:34.041629,lng:-117.578639},
                    {lat:34.041509,lng:-117.5789},
                    {lat:34.0413,lng:-117.579727},
                    {lat:34.041292,lng:-117.580298},
                    {lat:34.0413,lng:-117.581345},
                    {lat:34.040455,lng:-117.58134},
                    {lat:34.039878,lng:-117.579695}
               ];
          
               const route85coord = [
                    {lat:34.012451,lng:-117.69177},
                    {lat:34.013106,lng:-117.691794},
                    {lat:34.013139,lng:-117.691838},
                    {lat:34.013148,lng:-117.691915},
                    {lat:34.013118,lng:-117.691986},
                    {lat:34.01308,lng:-117.692021},
                    {lat:34.013007,lng:-117.692045},
                    {lat:34.012949,lng:-117.692027},
                    {lat:34.012922,lng:-117.691983},
                    {lat:34.012922,lng:-117.691908},
                    {lat:34.012865,lng:-117.691848},
                    {lat:34.012806,lng:-117.69183},
                    {lat:34.011916,lng:-117.691824},
                    {lat:34.011939,lng:-117.69125},
                    {lat:34.011971,lng:-117.68919},
                    {lat:34.012171,lng:-117.689191},
                    {lat:34.019082,lng:-117.689277},
                    {lat:34.022043,lng:-117.689286},
                    {lat:34.024239,lng:-117.689289},
                    {lat:34.027869,lng:-117.689299},
                    {lat:34.028669,lng:-117.68933},
                    {lat:34.02896,lng:-117.68932},
                    {lat:34.029256,lng:-117.689343},
                    {lat:34.02932,lng:-117.689429},
                    {lat:34.029819,lng:-117.689439},
                    {lat:34.03113,lng:-117.689439},
                    {lat:34.031289,lng:-117.689379},
                    {lat:34.03213,lng:-117.68937},
                    {lat:34.033509,lng:-117.689399},
                    {lat:34.034789,lng:-117.689399},
                    {lat:34.03815,lng:-117.689439},
                    {lat:34.040829,lng:-117.68942},
                    {lat:34.044299,lng:-117.689479},
                    {lat:34.0468,lng:-117.689479},
                    {lat:34.04968,lng:-117.689379},
                    {lat:34.05112,lng:-117.689389},
                    {lat:34.051499,lng:-117.68936},
                    {lat:34.052489,lng:-117.689219},
                    {lat:34.0529,lng:-117.68919},
                    {lat:34.05364,lng:-117.689249},
                    {lat:34.057529,lng:-117.689299},
                    {lat:34.05795,lng:-117.689339},
                    {lat:34.058199,lng:-117.689379},
                    {lat:34.05914,lng:-117.689579},
                    {lat:34.059789,lng:-117.689699},
                    {lat:34.059979,lng:-117.689709},
                    {lat:34.060259,lng:-117.689749},
                    {lat:34.06066,lng:-117.68977},
                    {lat:34.061069,lng:-117.689759},
                    {lat:34.061329,lng:-117.68973},
                    {lat:34.062,lng:-117.689609},
                    {lat:34.062319,lng:-117.689569},
                    {lat:34.063299,lng:-117.689559},
                    {lat:34.064009,lng:-117.689519},
                    {lat:34.065009,lng:-117.689489},
                    {lat:34.066209,lng:-117.6895},
                    {lat:34.06948,lng:-117.689489},
                    {lat:34.072149,lng:-117.6895},
                    {lat:34.074009,lng:-117.689479},
                    {lat:34.07693,lng:-117.689489},
                    {lat:34.07766,lng:-117.689495},
                    {lat:34.07765,lng:-117.693879},
                    {lat:34.077677,lng:-117.698261},
                    {lat:34.08254,lng:-117.69827},
                    {lat:34.082762,lng:-117.698193},
                    {lat:34.08333,lng:-117.69818},
                    {lat:34.08503,lng:-117.698199},
                    {lat:34.08583,lng:-117.698184},
                    {lat:34.085935,lng:-117.698259},
                    {lat:34.087639,lng:-117.698251},
                    {lat:34.087795,lng:-117.698169},
                    {lat:34.088529,lng:-117.69819},
                    {lat:34.088679,lng:-117.69824},
                    {lat:34.09017,lng:-117.69823},
                    {lat:34.092399,lng:-117.69827},
                    {lat:34.092618,lng:-117.69829},
                    {lat:34.093212,lng:-117.698369},
                    {lat:34.093362,lng:-117.698295},
                    {lat:34.09395,lng:-117.698289},
                    {lat:34.094563,lng:-117.698263},
                    {lat:34.095179,lng:-117.698176},
                    {lat:34.095169,lng:-117.695042},
                    {lat:34.09504,lng:-117.695091},
                    {lat:34.094444,lng:-117.695109},
                    {lat:34.094379,lng:-117.695127},
                    {lat:34.094319,lng:-117.695198},
                    {lat:34.094272,lng:-117.695345},
                    {lat:34.094298,lng:-117.69606},
                    {lat:34.094345,lng:-117.696226},
                    {lat:34.094317,lng:-117.696314},
                    {lat:34.09429,lng:-117.696343},
                    {lat:34.09423,lng:-117.696347},
                    {lat:34.094165,lng:-117.696268},
                    {lat:34.094153,lng:-117.696214},
                    {lat:34.094149,lng:-117.696163},
                    {lat:34.094215,lng:-117.695987},
                    {lat:34.094192,lng:-117.695692},
                    {lat:34.094192,lng:-117.695692},
                    {lat:34.094206,lng:-117.695264},
                    {lat:34.094253,lng:-117.695105},
                    {lat:34.094336,lng:-117.695029},
                    {lat:34.094434,lng:-117.694995},
                    {lat:34.095062,lng:-117.695002},
                    {lat:34.095167,lng:-117.695044},
                    {lat:34.095189,lng:-117.69395},
                    {lat:34.09523,lng:-117.69351},
                    {lat:34.09521,lng:-117.68954},
                    {lat:34.09666,lng:-117.689569},
                    {lat:34.096879,lng:-117.68963},
                    {lat:34.09764,lng:-117.689649},
                    {lat:34.099569,lng:-117.689659},
                    {lat:34.099589,lng:-117.688389},
                    {lat:34.09961,lng:-117.682359},
                    {lat:34.099649,lng:-117.678359},
                    {lat:34.09964,lng:-117.676469},
                    {lat:34.0997,lng:-117.665409},
                    {lat:34.099689,lng:-117.66125},
                    {lat:34.09972,lng:-117.65792},
                    {lat:34.099739,lng:-117.652899},
                    {lat:34.09973,lng:-117.647099},
                    {lat:34.099769,lng:-117.64392},
                    {lat:34.099759,lng:-117.642689},
                    {lat:34.09979,lng:-117.639789},
                    {lat:34.099839,lng:-117.639609},
                    {lat:34.101579,lng:-117.63572},
                    {lat:34.102299,lng:-117.63401},
                    {lat:34.104786,lng:-117.628547},
                    {lat:34.104239,lng:-117.628539},
                    {lat:34.10403,lng:-117.62853},
                    {lat:34.102539,lng:-117.628559},
                    {lat:34.10181,lng:-117.628549},
                    {lat:34.1016,lng:-117.62853},
                    {lat:34.099422,lng:-117.628568},
                    {lat:34.099419,lng:-117.628149},
                    {lat:34.099329,lng:-117.60747},
                    {lat:34.09934,lng:-117.606489},
                    {lat:34.099309,lng:-117.59401},
                    {lat:34.09928,lng:-117.589049},
                    {lat:34.09928,lng:-117.58551},
                    {lat:34.099229,lng:-117.57817},
                    {lat:34.099113,lng:-117.569025},
                    {lat:34.10099,lng:-117.56903},
                    {lat:34.101399,lng:-117.56904},
                    {lat:34.101579,lng:-117.569069},
                    {lat:34.101849,lng:-117.569139},
                    {lat:34.102379,lng:-117.56939},
                    {lat:34.102549,lng:-117.56944},
                    {lat:34.102739,lng:-117.569469},
                    {lat:34.10315,lng:-117.569469},
                    {lat:34.103159,lng:-117.569919},
                    {lat:34.103189,lng:-117.570099},
                    {lat:34.103249,lng:-117.570279},
                    {lat:34.10339,lng:-117.57052},
                    {lat:34.10358,lng:-117.57074},
                    {lat:34.103719,lng:-117.570869},
                    {lat:34.103879,lng:-117.570989},
                    {lat:34.10413,lng:-117.571129},
                    {lat:34.10431,lng:-117.5712},
                    {lat:34.104599,lng:-117.571259},
                    {lat:34.104789,lng:-117.57128},
                    {lat:34.10639,lng:-117.57129},
                    {lat:34.106429,lng:-117.559159},
                    {lat:34.1064,lng:-117.558619},
                    {lat:34.106319,lng:-117.557709},
                    {lat:34.106309,lng:-117.556913},
                    {lat:34.10648,lng:-117.55689},
                    {lat:34.107209,lng:-117.556909},
                    {lat:34.108049,lng:-117.55703},
                    {lat:34.10846,lng:-117.55712},
                    {lat:34.1088,lng:-117.55721},
                    {lat:34.109279,lng:-117.557369},
                    {lat:34.110669,lng:-117.55797},
                    {lat:34.111019,lng:-117.558089},
                    {lat:34.111829,lng:-117.558299},
                    {lat:34.112649,lng:-117.55842},
                    {lat:34.114959,lng:-117.558449},
                    {lat:34.120749,lng:-117.558449},
                    {lat:34.12347,lng:-117.55847},
                    {lat:34.12475,lng:-117.558449},
                    {lat:34.129999,lng:-117.55847},
                    {lat:34.135219,lng:-117.55847},
                    {lat:34.13726,lng:-117.558449},
                    {lat:34.139429,lng:-117.558489},
                    {lat:34.14344,lng:-117.558466},
                    {lat:34.14344,lng:-117.55864},
                    {lat:34.143433,lng:-117.559545},
                    {lat:34.14338,lng:-117.567439},
                    {lat:34.14345,lng:-117.568109},
                    {lat:34.143479,lng:-117.568599},
                    {lat:34.14347,lng:-117.5717},
                    {lat:34.14345,lng:-117.572199},
                    {lat:34.14338,lng:-117.572609},
                    {lat:34.14283,lng:-117.57417},
                    {lat:34.142709,lng:-117.57462},
                    {lat:34.142635,lng:-117.575729},
                    {lat:34.143419,lng:-117.57575},
                    {lat:34.145319,lng:-117.57574},
                    {lat:34.14563,lng:-117.575459},
                    {lat:34.14571,lng:-117.575319},
                    {lat:34.14582,lng:-117.574729},
                    {lat:34.14582,lng:-117.574289},
                    {lat:34.14579,lng:-117.57407},
                    {lat:34.14572,lng:-117.5739},
                    {lat:34.145579,lng:-117.573749},
                    {lat:34.14544,lng:-117.573639},
                    {lat:34.145299,lng:-117.573609},
                    {lat:34.1448,lng:-117.573609},
                    {lat:34.14462,lng:-117.57359},
                    {lat:34.14445,lng:-117.573519},
                    {lat:34.144309,lng:-117.57341},
                    {lat:34.14418,lng:-117.57318},
                    {lat:34.144109,lng:-117.57296},
                    {lat:34.14409,lng:-117.57269},
                    {lat:34.14409,lng:-117.57134},
                    {lat:34.144109,lng:-117.571039},
                    {lat:34.14417,lng:-117.5708},
                    {lat:34.14427,lng:-117.57061},
                    {lat:34.14437,lng:-117.570499},
                    {lat:34.144659,lng:-117.5703},
                    {lat:34.145829,lng:-117.570279},
                    {lat:34.14634,lng:-117.570319},
                    {lat:34.14669,lng:-117.570279},
                    {lat:34.14704,lng:-117.570179},
                    {lat:34.148231,lng:-117.569628},
                    {lat:34.14824,lng:-117.569385},
                    {lat:34.148235,lng:-117.568552},
                    {lat:34.148225,lng:-117.568487},
                    {lat:34.148151,lng:-117.568375},
                    {lat:34.148143,lng:-117.568282},
                    {lat:34.148158,lng:-117.568255},
                    {lat:34.148238,lng:-117.568198},
                    {lat:34.148286,lng:-117.568202},
                    {lat:34.148348,lng:-117.568255},
                    {lat:34.148354,lng:-117.568309},
                    {lat:34.148324,lng:-117.568436},
                    {lat:34.148283,lng:-117.568491},
                    {lat:34.148277,lng:-117.56898}
               ];
          
               const route87coord = [
                    {lat:33.994331,lng:-117.55473},
                    {lat:33.998341,lng:-117.554742},
                    {lat:33.999119,lng:-117.55473},
                    {lat:33.99963,lng:-117.554609},
                    {lat:34.000186,lng:-117.554571},
                    {lat:34.000599,lng:-117.55464},
                    {lat:34.001011,lng:-117.55474},
                    {lat:34.00091,lng:-117.55559},
                    {lat:34.00089,lng:-117.556809},
                    {lat:34.0009,lng:-117.558339},
                    {lat:34.000859,lng:-117.561629},
                    {lat:34.000849,lng:-117.575889},
                    {lat:34.00081,lng:-117.576529},
                    {lat:34.00073,lng:-117.57701},
                    {lat:34.00062,lng:-117.577519},
                    {lat:34.000499,lng:-117.577959},
                    {lat:34.00036,lng:-117.578329},
                    {lat:33.99999,lng:-117.57899},
                    {lat:33.999679,lng:-117.57948},
                    {lat:33.998579,lng:-117.58132},
                    {lat:33.997969,lng:-117.582279},
                    {lat:33.997709,lng:-117.58285},
                    {lat:33.997509,lng:-117.583369},
                    {lat:33.9973,lng:-117.584319},
                    {lat:33.997229,lng:-117.584849},
                    {lat:33.99721,lng:-117.58532},
                    {lat:33.997239,lng:-117.59329},
                    {lat:34.01178,lng:-117.59321},
                    {lat:34.015179,lng:-117.5932},
                    {lat:34.01612,lng:-117.59321},
                    {lat:34.019129,lng:-117.593189},
                    {lat:34.01926,lng:-117.60477},
                    {lat:34.019299,lng:-117.605639},
                    {lat:34.019569,lng:-117.60751},
                    {lat:34.0196,lng:-117.608309},
                    {lat:34.019579,lng:-117.610899},
                    {lat:34.02025,lng:-117.61094},
                    {lat:34.02095,lng:-117.61093},
                    {lat:34.028279,lng:-117.610999},
                    {lat:34.02986,lng:-117.610999},
                    {lat:34.031189,lng:-117.61103},
                    {lat:34.03132,lng:-117.61098},
                    {lat:34.032509,lng:-117.610959},
                    {lat:34.03392,lng:-117.61103},
                    {lat:34.034059,lng:-117.61106},
                    {lat:34.037659,lng:-117.61102},
                    {lat:34.041317,lng:-117.610998},
                    {lat:34.0413,lng:-117.61372},
                    {lat:34.041279,lng:-117.615369},
                    {lat:34.04122,lng:-117.627879},
                    {lat:34.041189,lng:-117.631069},
                    {lat:34.04114,lng:-117.637221},
                    {lat:34.050449,lng:-117.63731},
                    {lat:34.05093,lng:-117.637199},
                    {lat:34.0512,lng:-117.637089},
                    {lat:34.051859,lng:-117.63672},
                    {lat:34.05203,lng:-117.636659},
                    {lat:34.0522,lng:-117.63662},
                    {lat:34.053589,lng:-117.63658},
                    {lat:34.05506,lng:-117.63659},
                    {lat:34.05508,lng:-117.63767},
                    {lat:34.05509,lng:-117.640209},
                    {lat:34.05505,lng:-117.650774},
                    {lat:34.055729,lng:-117.650789},
                    {lat:34.05679,lng:-117.6508},
                    {lat:34.05786,lng:-117.650789},
                    {lat:34.05896,lng:-117.650819},
                    {lat:34.0594,lng:-117.650879},
                    {lat:34.060339,lng:-117.650909},
                    {lat:34.061259,lng:-117.6509},
                    {lat:34.061609,lng:-117.650869},
                    {lat:34.06209,lng:-117.650869},
                    {lat:34.06264,lng:-117.650829},
                    {lat:34.06336,lng:-117.65081},
                    {lat:34.064559,lng:-117.650829},
                    {lat:34.066989,lng:-117.650819},
                    {lat:34.067043,lng:-117.641381},
                    {lat:34.07156,lng:-117.64136},
                    {lat:34.072469,lng:-117.64135},
                    {lat:34.075209,lng:-117.641379},
                    {lat:34.077944,lng:-117.641415},
                    {lat:34.07794,lng:-117.636279},
                    {lat:34.077979,lng:-117.6293},
                    {lat:34.077909,lng:-117.628949},
                    {lat:34.077729,lng:-117.628369},
                    {lat:34.07767,lng:-117.62803},
                    {lat:34.07765,lng:-117.62475},
                    {lat:34.077629,lng:-117.623589},
                    {lat:34.077629,lng:-117.618109},
                    {lat:34.077599,lng:-117.61463},
                    {lat:34.07759,lng:-117.611039},
                    {lat:34.084889,lng:-117.61121},
                    {lat:34.092579,lng:-117.611129},
                    {lat:34.0937,lng:-117.611079},
                    {lat:34.09476,lng:-117.611079},
                    {lat:34.09639,lng:-117.61111},
                    {lat:34.10511,lng:-117.61106},
                    {lat:34.10674,lng:-117.61107},
                    {lat:34.10843,lng:-117.611049},
                    {lat:34.108749,lng:-117.61106},
                    {lat:34.109199,lng:-117.61116},
                    {lat:34.10944,lng:-117.6113},
                    {lat:34.10971,lng:-117.611489},
                    {lat:34.110389,lng:-117.61219},
                    {lat:34.11079,lng:-117.61255},
                    {lat:34.11169,lng:-117.61313},
                    {lat:34.112009,lng:-117.613349},
                    {lat:34.112279,lng:-117.613569},
                    {lat:34.11266,lng:-117.613959},
                    {lat:34.113449,lng:-117.614909},
                    {lat:34.113799,lng:-117.6153},
                    {lat:34.11402,lng:-117.615489},
                    {lat:34.11428,lng:-117.61566},
                    {lat:34.114509,lng:-117.615769},
                    {lat:34.114689,lng:-117.61583},
                    {lat:34.11491,lng:-117.61588},
                    {lat:34.115149,lng:-117.615909},
                    {lat:34.11611,lng:-117.61597},
                    {lat:34.121549,lng:-117.61611},
                    {lat:34.1285,lng:-117.61619},
                    {lat:34.132599,lng:-117.616219},
                    {lat:34.132629,lng:-117.614239},
                    {lat:34.132629,lng:-117.610199},
                    {lat:34.132719,lng:-117.59271},
                    {lat:34.13277,lng:-117.591419},
                    {lat:34.13277,lng:-117.590849},
                    {lat:34.13275,lng:-117.590349},
                    {lat:34.13258,lng:-117.58892},
                    {lat:34.132529,lng:-117.588599},
                    {lat:34.132449,lng:-117.58763},
                    {lat:34.132449,lng:-117.58573},
                    {lat:34.132429,lng:-117.585159},
                    {lat:34.132439,lng:-117.582729},
                    {lat:34.132419,lng:-117.575809},
                    {lat:34.135469,lng:-117.575799},
                    {lat:34.136189,lng:-117.57578},
                    {lat:34.1378,lng:-117.57579},
                    {lat:34.141879,lng:-117.575759},
                    {lat:34.142599,lng:-117.575769},
                    {lat:34.143419,lng:-117.57575},
                    {lat:34.145319,lng:-117.57574},
                    {lat:34.14563,lng:-117.575459},
                    {lat:34.14571,lng:-117.575319},
                    {lat:34.14582,lng:-117.574729},
                    {lat:34.14582,lng:-117.574289},
                    {lat:34.14579,lng:-117.57407},
                    {lat:34.14572,lng:-117.5739},
                    {lat:34.145579,lng:-117.573749},
                    {lat:34.14544,lng:-117.573639},
                    {lat:34.145299,lng:-117.573609},
                    {lat:34.1448,lng:-117.573609},
                    {lat:34.14462,lng:-117.57359},
                    {lat:34.14445,lng:-117.573519},
                    {lat:34.144309,lng:-117.57341},
                    {lat:34.14418,lng:-117.57318},
                    {lat:34.144109,lng:-117.57296},
                    {lat:34.14409,lng:-117.57269},
                    {lat:34.14409,lng:-117.57134},
                    {lat:34.144109,lng:-117.571039},
                    {lat:34.14417,lng:-117.5708},
                    {lat:34.14427,lng:-117.57061},
                    {lat:34.14437,lng:-117.570499},
                    {lat:34.144659,lng:-117.5703},
                    {lat:34.145829,lng:-117.570279},
                    {lat:34.14634,lng:-117.570319},
                    {lat:34.14669,lng:-117.570279},
                    {lat:34.14704,lng:-117.570179},
                    {lat:34.148249,lng:-117.569622},
                    {lat:34.14824,lng:-117.569385},
                    {lat:34.148235,lng:-117.568552},
                    {lat:34.148225,lng:-117.568487},
                    {lat:34.148151,lng:-117.568375},
                    {lat:34.148143,lng:-117.568282},
                    {lat:34.148158,lng:-117.568255},
                    {lat:34.148238,lng:-117.568198},
                    {lat:34.148286,lng:-117.568202},
                    {lat:34.148348,lng:-117.568255},
                    {lat:34.148354,lng:-117.568309},
                    {lat:34.148324,lng:-117.568436},
                    {lat:34.148283,lng:-117.568491},
                    {lat:34.148295,lng:-117.56916}
               ];
               //  Coordinates - END

          // Chino Campus
               let route83path = new google.maps.Polyline({
                    path: route83coord,
                    geodesic: true,
                    strokeColor: '#005aa8',
                    strokeOpacity: 1.0,
                    strokeWeight: 5,
               });
          // Chino Campus - END

          // Fontana Campus
               let route15path = new google.maps.Polyline({
                    path: route15coord,
                    geodesic: true,
                    strokeColor: '#005aa8',
                    strokeOpacity: 1.0,
                    strokeWeight: 5,
               });

               let route61path = new google.maps.Polyline({
                    path: route61coord,
                    geodesic: true,
                    strokeColor: '#69A52B',
                    strokeOpacity: 1.0,
                    strokeWeight: 5,
               });

               let route82path = new google.maps.Polyline({
                    path: route82coord,
                    geodesic: true,
                    strokeColor: '#F77E0F',
                    strokeOpacity: 1.0,
                    strokeWeight: 5,
               });

               let route19path = new google.maps.Polyline({
                    path: route19coord,
                    geodesic: true,
                    strokeColor: 'cadetblue',
                    strokeOpacity: 1.0,
                    strokeWeight: 5,
               });
          // Fontana Campus - END

          // Rancho Campus
               let route67path = new google.maps.Polyline({
                    path: route67coord,
                    geodesic: true,
                    strokeColor: '#005aa8',
                    strokeOpacity: 1.0,
                    strokeWeight: 5,
               });

               let route81path = new google.maps.Polyline({
                    path: route81coord,
                    geodesic: true,
                    strokeColor: '#69A52B',
                    strokeOpacity: 1.0,
                    strokeWeight: 5,
               });

               let route81pathExt = new google.maps.Polyline({
                    path: riute81coordExt,
                    geodesic: true,
                    strokeColor: '#69A52B',
                    strokeOpacity: 1.0,
                    strokeWeight: 5,
               });

               let route85path = new google.maps.Polyline({
                    path: route85coord,
                    geodesic: true,
                    strokeColor: '#F77E0F',
                    strokeOpacity: 1.0,
                    strokeWeight: 5,
               });

               let route87path = new google.maps.Polyline({
                    path: route87coord,
                    geodesic: true,
                    strokeColor: 'cadetblue',
                    strokeOpacity: 1.0,
                    strokeWeight: 5,
               });
          // Rancho Campus - END

               if(amznLoc.classList.contains('chino')){
                    const myLatlng = {lat: 33.99416442164489, lng: -117.67803099314571};
                    map = new google.maps.Map(document.getElementById("map"), {
                         mapId: 'f17945e40543a040',
                         center: myLatlng,
                         zoom: 16,
                    });

                    //map.panTo({lat: 33.99416442164489, lng: -117.67803099314571});
                    //map.setZoom(16);
                    
                    route83path.setMap(map);

                    let activeStationInfo = document.querySelector('#chino_campus');
                    for (let sibling of activeStationInfo.parentNode.children) {
                         sibling.classList.remove('active');
                    }
                    activeStationInfo.classList.add('active');


               //  Set Amazon Markers
                    const amazonCenters = [
                         ['5897 College Park Avenue, Chino, CA 91710', 33.994809123756916,-117.67670900555446, 1],
                    ];

                    function amazonPoints(map) {
                         const image = {
                              url: "https://omnitrans.org/wp-content/themes/omninew/icons/chaffey_icon.png",
                              size: new google.maps.Size(50, 50),
                              origin: new google.maps.Point(0, 0),
                              anchor: new google.maps.Point(0, 32),
                         };
                         const shape = {
                              //coords: [1, 1, 1, 20, 18, 20, 18, 1],
                              type: "poly",
                         };

                         for (let i = 0; i < amazonCenters.length; i++) {
                              const amazonPnt = amazonCenters[i];

                              new google.maps.Marker({
                                   position: { lat: amazonPnt[1], lng: amazonPnt[2] },
                                   map,
                                   icon: image,
                                   shape: shape,
                                   title: amazonPnt[0],
                                   zIndex: amazonPnt[3],
                              });
                         }
                    }

                    amazonPoints(map);
               //  Set Amazon Markers - END


               }else if(amznLoc.classList.contains('fontana')){
                    const myLatlng = {lat: 34.09198214604936, lng: -117.43781137670175};
                    map = new google.maps.Map(document.getElementById("map"), {
                         mapId: 'f17945e40543a040',
                         center: myLatlng,
                         zoom: 16,
                    });

                    //map.panTo({lat: 34.09198214604936, lng: -117.43781137670175});
                    //map.setZoom(16);
     
                    route15path.setMap(map);
                    route61path.setMap(map);
                    route82path.setMap(map);
                    route19path.setMap(map);

                    let activeStationInfo = document.querySelector('#fontana_campus');
                    for (let sibling of activeStationInfo.parentNode.children) {
                         sibling.classList.remove('active');
                    }
                    activeStationInfo.classList.add('active');


                    //  Set Amazon Markers
                         const amazonCenters = [
                              ['16855 Merrill Ave, Fontana, CA 92335', 34.09168889036941, -117.43622853448397, 1],
                         ];
     
                         function amazonPoints(map) {
                              const image = {
                                   url: "https://omnitrans.org/wp-content/themes/omninew/icons/chaffey_icon.png",
                                   size: new google.maps.Size(50, 50),
                                   origin: new google.maps.Point(0, 0),
                                   anchor: new google.maps.Point(0, 32),
                              };
                              const shape = {
                                   //coords: [1, 1, 1, 20, 18, 20, 18, 1],
                                   type: "poly",
                              };
     
                              for (let i = 0; i < amazonCenters.length; i++) {
                                   const amazonPnt = amazonCenters[i];
     
                                   new google.maps.Marker({
                                        position: { lat: amazonPnt[1], lng: amazonPnt[2] },
                                        map,
                                        icon: image,
                                        shape: shape,
                                        title: amazonPnt[0],
                                        zIndex: amazonPnt[3],
                                   });
                              }
                         }
     
                         amazonPoints(map);
                    //  Set Amazon Markers - END

               }else if(amznLoc.classList.contains('rancho')){
                    const myLatlng = {lat: 34.14883782421672, lng: -117.56954876965915};
                    map = new google.maps.Map(document.getElementById("map"), {
                         mapId: 'f17945e40543a040',
                         center: myLatlng,
                         zoom: 16,
                    });

                    //map.panTo({lat: 34.14883782421672, lng: -117.56954876965915});
                    //map.setZoom(16);
               
                    route67path.setMap(map);
                    route81path.setMap(map);
                    route81pathExt.setMap(map);
                    route85path.setMap(map);
                    route87path.setMap(map);

                    let activeStationInfo = document.querySelector('#rancho_campus');
                    for (let sibling of activeStationInfo.parentNode.children) {
                         sibling.classList.remove('active');
                    }
                    activeStationInfo.classList.add('active');


                    //  Set Amazon Markers
                         const amazonCenters = [
                              ['Rancho Cucamonga, CA 91737', 34.14671651061223, -117.57081208675976, 1],
                         ];
     
                         function amazonPoints(map) {
                              const image = {
                                   url: "https://omnitrans.org/wp-content/themes/omninew/icons/chaffey_icon.png",
                                   size: new google.maps.Size(50, 50),
                                   origin: new google.maps.Point(0, 0),
                                   anchor: new google.maps.Point(0, 32),
                              };
                              const shape = {
                                   //coords: [1, 1, 1, 20, 18, 20, 18, 1],
                                   type: "poly",
                              };
     
                              for (let i = 0; i < amazonCenters.length; i++) {
                                   const amazonPnt = amazonCenters[i];
     
                                   new google.maps.Marker({
                                        position: { lat: amazonPnt[1], lng: amazonPnt[2] },
                                        map,
                                        icon: image,
                                        shape: shape,
                                        title: amazonPnt[0],
                                        zIndex: amazonPnt[3],
                                   });
                              }
                         }
     
                         amazonPoints(map);
                    //  Set Amazon Markers - END

               }else{                    
               }

               if(amznLoc.classList.contains('')){
               }else{
                    formWrap.classList.add('active');
                    googMap.classList.add('active');
                    //document.querySelector('.rte_point_wrap').classList.add('active');
               }
               
               document.querySelector('.location_outer_wrap').classList.add('active');
               initMap();
          });

          if(amznLoc.classList.contains('') || googMap.classList.contains('active')){
               //console.log('has no class');
          }else{
               //console.log('had class');
          }
     });
// Amazon Pan and Zoon - END

//  Pan/Zoom on scroll
     const infoOuterWrapScroll = document.querySelector('.location_outer_wrap');

     function scrollCenterMap(){
          infoOuterWrapScroll.addEventListener('scroll', function() {
               let mapHeight = googMap.offsetHeight;

               singStopInfo.forEach(function (singStopInfo) {
                    let getIdLatLng = singStopInfo.querySelector('.lat_lng');
                    
                    let idLatLng = getIdLatLng.innerHTML;
                    let selLatLng = idLatLng;
                    let selLatLngArr = selLatLng.split(',');

                    let infoWrapScroll = infoOuterWrapScroll.getBoundingClientRect(),
                    poiScrollLoc = singStopInfo.getBoundingClientRect(),
                    relativePos = {};
               
                    relativePos.bottom = poiScrollLoc.top - infoWrapScroll.top,
                    relativePos.bottom = poiScrollLoc.bottom - infoWrapScroll.bottom;
                         
                    if(poiScrollLoc.top - infoWrapScroll.top < mapHeight && poiScrollLoc.bottom - infoWrapScroll.top > mapHeight){

                         let newLatLng = new google.maps.LatLng(selLatLngArr[0], selLatLngArr[1]);

                         map.panTo(newLatLng);
                         map.setZoom(18);

                    }else{

                    }
               });
          });
     }

     function clickCenterMap(){
          singStopInfo.forEach(function (singStopInfo) {
               singStopInfo.addEventListener('click', function(event) {
                    let getIdLatLng = singStopInfo.querySelector('.lat_lng');
                    
                    let idLatLng = getIdLatLng.innerHTML;
                    let selLatLng = idLatLng;
                    let selLatLngArr = selLatLng.split(',');

                    let newLatLng = new google.maps.LatLng(selLatLngArr[0], selLatLngArr[1]);

                    let activeInfoBlock = event.currentTarget;

                    for (let sibling of activeInfoBlock.parentNode.children) {
                         sibling.classList.remove('active');
                    }
                    
                    activeInfoBlock.classList.add('active');

                    closeLocationInfo.classList.add('active');

                    map.panTo(newLatLng);
                    map.setZoom(20);
               });
          });
     }
//  Pan/Zoom on scroll - END

// Map active on large screens 
     //function mapLargeActive(){
     //     document.querySelector('#select_location').addEventListener('click', (event) => {
     //          event.preventDefault();
          
     //         let mapCont = document.querySelector('#map');
          
     //          if(mapCont.classList.contains('active')){
          
     //          }else{
     //               mapCont.classList.add('active');
     //          }
     //     });
     //}
// Map active on large screens  - END


