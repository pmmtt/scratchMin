const amznLoc = document.querySelector('#amazon_loc');

const closeLocationInfo = document.querySelector('.infClsBtn');
const singStopInfo = document.querySelectorAll('.info_sngle');

const formWrap = document.querySelector('#guide_wrapper');
const introContent = document.querySelector('.link_blocks');

const googMap = document.querySelector('#map');

const formMapOuterWrap = document.querySelector('.location_outer_wrap');

const viewportForMap = window.innerWidth || document.documentElement.clientWidth;


function initMap() {
     const myLatlng = { lat: 34.1206013, lng: -117.3077741 };

     map = new google.maps.Map(document.getElementById("map"), {
          mapId: 'f17945e40543a040',
          center: myLatlng,
          zoom: 12,
     });

     let getSnglLatLng = document.querySelectorAll('.info_sngle');

     getSnglLatLng.forEach(function(getSnglLatLng){
          let getIdLatLng = getSnglLatLng.querySelector('.lat_lng');
          let spanCoords = getIdLatLng.innerHTML;
          let selIdLatLng = spanCoords.split(',');

          let getFigCap = getSnglLatLng.querySelector('.loc_img_wrap figcaption');
          let infoWinActive = getFigCap.innerHTML;

          // Route Stops
          let routeStopMarkers = [
               ['', 34.18974389249729,-117.3582916174181],
               ['', 34.16932872414386,-117.31626558714228],
               ['', 34.164907196539986,-117.30697699739565],
               ['', 34.14950566314086,-117.29408843277038],
               ['', 34.121145534457746,-117.29416041741216],
               ['', 34.102819582662214,-117.29409732961955],
               ['', 34.065925832611164,-117.2899309522145],
               ['', 34.06936137031736,-117.2655814509459],
               ['', 34.06113902823813,-117.26119926984023],
          ];

          // Route Points
          let routeGuideMarkers = [
               [infoWinActive, selIdLatLng[0], selIdLatLng[1]],      
          ];

          // Display multiple routeGuideMarkers on a map
          let infoWindow = new google.maps.InfoWindow(), marker, i;
          // Loop through our array of routeGuideMarkers & place each one on the map  
          for (let i = 0; i < routeStopMarkers.length; i++) {
               let position = new google.maps.LatLng(routeStopMarkers[i][1], routeStopMarkers[i][2]);
               
               let marker = new google.maps.Marker({
                    position: position,
                    map: map,
                    icon: {
                         path: google.maps.SymbolPath.CIRCLE,
                         scale: 6,
                         strokeColor: '#69a52b',
                         fillColor: '#69a52b',
                         fillOpacity: 1,
                         strokeWeight: 1,
                         anchor: new google.maps.Point(0, 0),
                    },
               });
          }

          // Loop through our array of routeGuideMarkers & place each one on the map  
          for (let i = 0; i < routeGuideMarkers.length; i++) {
               let position = new google.maps.LatLng(routeGuideMarkers[i][1], routeGuideMarkers[i][2]);
               // Info Window Content
               const rte83infoWin = [
                    ['<div class="info_content">' + '<p>' + routeGuideMarkers[i][0] + '</p>' + '</div>'],
               ];
               
               let marker = new google.maps.Marker({
                    position: position,
                    map: map,
                    title: routeGuideMarkers[i][0],
                    icon: {
                         path: google.maps.SymbolPath.CIRCLE,
                         scale: 12,
                         strokeColor: '#69a52b',
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
                              infoWindow.setContent('<div class="testStyle">' + rte83infoWin[i][0] + '</div>');
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
     });
     //  Route - END

     //  Route Polyline South
     const sbxCoordsNrth = [
          {lat:34.048397, lng:-117.252399},
          {lat:34.048375, lng:-117.247992},
          {lat:34.045798, lng:-117.248043},
          {lat:34.045753, lng:-117.252374},
          {lat:34.050286, lng:-117.252408},
          {lat:34.050249, lng:-117.257749},
          {lat:34.050239, lng:-117.25886},
          {lat:34.050273, lng:-117.261105},
          {lat:34.051629, lng:-117.261119},
          {lat:34.051969, lng:-117.262149},
          {lat:34.052039, lng:-117.262299},
          {lat:34.052169, lng:-117.26246},
          {lat:34.05228, lng:-117.262559},
          {lat:34.05248, lng:-117.26272},
          {lat:34.052689, lng:-117.262839},
          {lat:34.052889, lng:-117.26291},
          {lat:34.05318, lng:-117.262919},
          {lat:34.053849, lng:-117.262839},
          {lat:34.05427, lng:-117.262749},
          {lat:34.05588, lng:-117.262299},
          {lat:34.058729, lng:-117.26137},
          {lat:34.05913, lng:-117.261269},
          {lat:34.059269, lng:-117.261249},
          {lat:34.059819, lng:-117.2612},
          {lat:34.062509, lng:-117.2612},
          {lat:34.06398, lng:-117.261179},
          {lat:34.0646, lng:-117.261179},
          {lat:34.065019, lng:-117.2612},
          {lat:34.065187, lng:-117.261117},
          {lat:34.06586, lng:-117.26106},
          {lat:34.066359, lng:-117.26105},
          {lat:34.06814, lng:-117.261129},
          {lat:34.06895, lng:-117.261129},
          {lat:34.069066, lng:-117.261416},
          {lat:34.069078, lng:-117.26359},
          {lat:34.069099, lng:-117.26378},
          {lat:34.069349, lng:-117.26538},
          {lat:34.06937, lng:-117.265749},
          {lat:34.069349, lng:-117.26614},
          {lat:34.06931, lng:-117.266479},
          {lat:34.069149, lng:-117.26709},
          {lat:34.068989, lng:-117.267509},
          {lat:34.068699, lng:-117.26799},
          {lat:34.068349, lng:-117.268409},
          {lat:34.06805, lng:-117.26866},
          {lat:34.06712, lng:-117.269189},
          {lat:34.06671, lng:-117.269459},
          {lat:34.066469, lng:-117.269679},
          {lat:34.066269, lng:-117.269899},
          {lat:34.066119, lng:-117.270159},
          {lat:34.06598, lng:-117.270519},
          {lat:34.065909, lng:-117.270759},
          {lat:34.065839, lng:-117.27122},
          {lat:34.06589, lng:-117.27257},
          {lat:34.065929, lng:-117.272779},
          {lat:34.066109, lng:-117.273409},
          {lat:34.066269, lng:-117.273859},
          {lat:34.066359, lng:-117.274209},
          {lat:34.066479, lng:-117.274899},
          {lat:34.06649, lng:-117.275379},
          {lat:34.066479, lng:-117.27568},
          {lat:34.0664, lng:-117.27626},
          {lat:34.066169, lng:-117.27694},
          {lat:34.06589, lng:-117.27798},
          {lat:34.065839, lng:-117.27824},
          {lat:34.065829, lng:-117.278669},
          {lat:34.06586, lng:-117.28873},
          {lat:34.065919, lng:-117.28914},
          {lat:34.06595, lng:-117.292269},
          {lat:34.065944, lng:-117.292815},
          {lat:34.065884, lng:-117.293024},
          {lat:34.065819, lng:-117.29319},
          {lat:34.065681, lng:-117.293458},
          {lat:34.065862, lng:-117.29361},
          {lat:34.06607, lng:-117.293739},
          {lat:34.06633, lng:-117.29386},
          {lat:34.066646, lng:-117.293952},
          {lat:34.067148, lng:-117.294},
          {lat:34.067969, lng:-117.294059},
          {lat:34.069269, lng:-117.294149},
          {lat:34.07001, lng:-117.294159},
          {lat:34.07669, lng:-117.294159},
          {lat:34.078619, lng:-117.29414},
          {lat:34.080339, lng:-117.29414},
          {lat:34.081, lng:-117.294159},
          {lat:34.081949, lng:-117.294149},
          {lat:34.082649, lng:-117.29405},
          {lat:34.083829, lng:-117.293839},
          {lat:34.08496, lng:-117.293799},
          {lat:34.086699, lng:-117.29381},
          {lat:34.087139, lng:-117.293839},
          {lat:34.08739, lng:-117.29387},
          {lat:34.0882, lng:-117.294059},
          {lat:34.088499, lng:-117.294099},
          {lat:34.088889, lng:-117.294119},
          {lat:34.089859, lng:-117.29414},
          {lat:34.095539, lng:-117.29417},
          {lat:34.09954, lng:-117.29414},
          {lat:34.10267, lng:-117.29414},
          {lat:34.102819, lng:-117.294099},
          {lat:34.102979, lng:-117.29409},
          {lat:34.10385, lng:-117.29409},
          {lat:34.104439, lng:-117.294059},
          {lat:34.104729, lng:-117.294059},
          {lat:34.104989, lng:-117.294109},
          {lat:34.105499, lng:-117.29414},
          {lat:34.10611, lng:-117.294149},
          {lat:34.109049, lng:-117.29414},
          {lat:34.118549, lng:-117.29418},
          {lat:34.11968, lng:-117.29418},
          {lat:34.12088, lng:-117.294159},
          {lat:34.123329, lng:-117.29418},
          {lat:34.13489, lng:-117.294159},
          {lat:34.13753, lng:-117.294149},
          {lat:34.138549, lng:-117.29413},
          {lat:34.14238, lng:-117.29413},
          {lat:34.145279, lng:-117.294099},
          {lat:34.14948, lng:-117.29409},
          {lat:34.15109, lng:-117.294059},
          {lat:34.154859, lng:-117.29404},
          {lat:34.156979, lng:-117.294059},
          {lat:34.15722, lng:-117.294029},
          {lat:34.15739, lng:-117.293939},
          {lat:34.157549, lng:-117.293829},
          {lat:34.157649, lng:-117.29372},
          {lat:34.158099, lng:-117.292979},
          {lat:34.158249, lng:-117.292799},
          {lat:34.1584, lng:-117.29269},
          {lat:34.158539, lng:-117.29261},
          {lat:34.15868, lng:-117.292569},
          {lat:34.15887, lng:-117.29255},
          {lat:34.159079, lng:-117.2926},
          {lat:34.159269, lng:-117.29274},
          {lat:34.159419, lng:-117.292889},
          {lat:34.159509, lng:-117.2931},
          {lat:34.15956, lng:-117.29332},
          {lat:34.15956, lng:-117.293569},
          {lat:34.159179, lng:-117.295329},
          {lat:34.159159, lng:-117.29571},
          {lat:34.159169, lng:-117.295989},
          {lat:34.1592, lng:-117.296279},
          {lat:34.159269, lng:-117.296669},
          {lat:34.15937, lng:-117.296979},
          {lat:34.159509, lng:-117.29733},
          {lat:34.159699, lng:-117.29764},
          {lat:34.15994, lng:-117.297899},
          {lat:34.16046, lng:-117.298339},
          {lat:34.16084, lng:-117.298689},
          {lat:34.16117, lng:-117.299109},
          {lat:34.16136, lng:-117.299419},
          {lat:34.16172, lng:-117.300189},
          {lat:34.16237, lng:-117.30165},
          {lat:34.16289, lng:-117.30268},
          {lat:34.163909, lng:-117.304869},
          {lat:34.166019, lng:-117.309329},
          {lat:34.16912, lng:-117.31582},
          {lat:34.17146, lng:-117.320839},
          {lat:34.17415, lng:-117.32653},
          {lat:34.176221, lng:-117.330903},
          {lat:34.176639, lng:-117.330029},
          {lat:34.177089, lng:-117.329219},
          {lat:34.17739, lng:-117.328719},
          {lat:34.17801, lng:-117.32779},
          {lat:34.178689, lng:-117.32684},
          {lat:34.178979, lng:-117.326409},
          {lat:34.17919, lng:-117.32618},
          {lat:34.179949, lng:-117.32555},
          {lat:34.180049, lng:-117.32549},
          {lat:34.180139, lng:-117.325479},
          {lat:34.180229, lng:-117.325509},
          {lat:34.18026, lng:-117.32555},
          {lat:34.180289, lng:-117.32577},
          {lat:34.180219, lng:-117.325839},
          {lat:34.180136, lng:-117.326053},
          {lat:34.179978, lng:-117.326297},
          {lat:34.179794, lng:-117.32649},
          {lat:34.179738, lng:-117.326502},
          {lat:34.179644, lng:-117.326494},
          {lat:34.179544, lng:-117.326412},
          {lat:34.17909, lng:-117.326589},
          {lat:34.17899, lng:-117.326699},
          {lat:34.17881, lng:-117.326999},
          {lat:34.177599, lng:-117.328709},
          {lat:34.177089, lng:-117.3295},
          {lat:34.176609, lng:-117.330469},
          {lat:34.176293, lng:-117.331085},
          {lat:34.177149, lng:-117.33293},
          {lat:34.1783, lng:-117.335471},
          {lat:34.17965, lng:-117.33801},
          {lat:34.181569, lng:-117.341619},
          {lat:34.18234, lng:-117.343149},
          {lat:34.183529, lng:-117.345369},
          {lat:34.184109, lng:-117.34652},
          {lat:34.185713, lng:-117.349541},
          {lat:34.189013, lng:-117.355779},
          {lat:34.190254, lng:-117.358248},
          {lat:34.190028, lng:-117.358402},
          {lat:34.189968, lng:-117.358425},
          {lat:34.189909, lng:-117.358415},
          {lat:34.189866, lng:-117.358399},
          {lat:34.189639, lng:-117.358202},
          {lat:34.189552, lng:-117.357947},
          {lat:34.189518, lng:-117.357901},
          {lat:34.189482, lng:-117.357883},
          {lat:34.189446, lng:-117.357879},
          {lat:34.189414, lng:-117.357895},
          {lat:34.189391, lng:-117.357941},
          {lat:34.189385, lng:-117.357993},
          {lat:34.189408, lng:-117.358048},
          {lat:34.189438, lng:-117.358081},
          {lat:34.18964, lng:-117.358202},
          {lat:34.18986, lng:-117.358399},
     ];

     //console.log(sbxCoordsNrth);

     //Loops through all polyline paths and draws each on the map.
     for (let i = 0; i < 2; i++) {
          var routeDisplayCoordsSouth = new google.maps.Polyline({
               path: sbxCoordsNrth,
               geodesic: true,
               strokeColor: '#69a52b',
               strokeOpacity: 1.0,
               strokeWeight: 5,
          });

          routeDisplayCoordsSouth.setMap(map);
     }
     //  Route Polyline South - END
/*
     //  Temp Get Loacations
               // Create the initial InfoWindow.
               let infoWindow = new google.maps.InfoWindow({
                    content: "Click the map to get Lat/Lng!",
                    position: myLatlng,
               });
               
               infoWindow.open(map);
               
               // Configure the click listener.
               map.addListener("click", (mapsMouseEvent) => {
                    console.log(JSON.stringify(mapsMouseEvent.latLng.toJSON(), null, 2));
               });
     //  Temp Get Locations - END
*/
     //  Add route name marker
     infoWindow = new google.maps.InfoWindow();
          var windowLatLng = new google.maps.LatLng(34.18456558996325,-117.34831012061105);
          infoWindow.setOptions({
               content: '<div class="grn_ln_cntnt">sbX</div>',
               position: windowLatLng,
          });
          infoWindow.open(map); 
     //  Add route name marker - END

}

window.addEventListener('load', (event) => {
     document.querySelector('form').reset();

     //formMapOuterWrap.prepend(googMap);
     introContent.parentNode.insertBefore(formWrap, introContent.previousSibling);
     /* Reposition map on load */

     let getMap = document.querySelector('#map');
     let mainElement = document.querySelector('#primary');
     if (viewportForMap > 1024) {
          formWrap.append(getMap);
          clickCenterMap();
     } else {
          scrollCenterMap();
     }
     /* Reposition map on load - END */

     /* Remove active info */

     $(closeLocationInfo).click(function(){
          $(singStopInfo).removeClass('active');

          $(this).removeClass('active');


          document.querySelector('.location_outer_wrap').classList.remove('min_height');
     });

     initMap();
});

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

                    document.querySelector('.location_outer_wrap').classList.add('min_height');

                    map.panTo(newLatLng);
                    map.setZoom(20);
               });
          });
     }
//  Pan/Zoom on scroll - END


$('.scroll_btn').click(function(){
     $('.location_outer_wrap').animate({scrollTop: '+=160px'}, 500);
});
