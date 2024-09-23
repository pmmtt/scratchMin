$('.sngl_rte_interest li, .rte_key li').each(function () {
     let intrstLst = $(this).text().toLowerCase().split(' ').join('_').split('_&').join('');

     $(this).addClass(intrstLst);
});

$('.trip_planner_buttn a').prepend('<svg xmlns="http://www.w3.org/2000/svg" width="69.76" height="87.913" viewBox="0 0 69.76 87.913"><g transform="translate(-580.186 -224.105)"><path class="svg_blue" d="M90.76,44.88a34.88,34.88,0,0,0-69.76,0c0,23.087,27.336,46.9,34.88,53.033C63.417,91.78,90.76,67.935,90.76,44.88Zm-53.905,0A19.025,19.025,0,1,1,55.88,63.905,19.025,19.025,0,0,1,36.854,44.88Z" transform="translate(559.186 214.105)" fill="#ffffff"></path></g></svg>');


if (document.body.contains(document.querySelector('.trip_planner_buttn'))) {
     let dispTrpPlnrbtn = document.querySelector('.trip_planner_buttn a');
     let dispTrpPlnr = document.querySelector('.trip_planner_col');

     dispTrpPlnrbtn.addEventListener('click', function (event) {
          event.preventDefault();

          dispTrpPlnr.classList.toggle('active');
     });
} else {
}

$('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 300"><path class="svg_blue" d="M140.87,42.62A109.27,109.27,0,1,0,250.13,151.89,109.27,109.27,0,0,0,140.87,42.62Z"/><polygon class="svg_white" points="136.5 91.29 141.5 91.29 141.5 79.69 165.25 79.69 165.25 62.46 136.44 62.46 136.44 79.69 136.5 79.69 136.5 91.29"/><path class="svg_white" d="M150.84,187.71a6,6,0,0,0-6,6V234H156.8V193.67A6,6,0,0,0,150.84,187.71Z"/><path class="svg_white" d="M129.47,187.71a6,6,0,0,0-6,6V234h11.92V193.67A6,6,0,0,0,129.47,187.71Z"/><path class="svg_white" d="M108.1,187.71a6,6,0,0,0-6,6V234h11.93V193.67A6,6,0,0,0,108.1,187.71Z"/><path class="svg_white" d="M172.21,187.71a6,6,0,0,0-6,6V234h11.93V193.67A6,6,0,0,0,172.21,187.71Z"/><path class="svg_white" d="M198.62,161.65H83.12l.5,72.35h18.52V193.67a6,6,0,0,1,11.93,0V234h9.44V193.67a6,6,0,0,1,11.92,0V234h9.45V193.67a6,6,0,0,1,11.92,0V234h9.44V193.67a6,6,0,0,1,11.93,0V234h20.45Z"/><path class="svg_white" d="M98.08,128.87c.54,0,.46,17.78.38,27l36.14-27Z"/><path class="svg_white" d="M179.88,128.87h-36.5l36.5,26.31Z"/><polygon class="svg_white" points="105.73 156.71 173.44 156.71 138.96 131.85 105.73 156.71"/><path class="svg_white" d="M138.42,93.25A31.38,31.38,0,0,0,107,124.63H169.8A31.38,31.38,0,0,0,138.42,93.25Z"/></svg>').insertAfter('.sngl_rte_interest .civic .screen-reader-text, .rte_key .civic span');

$('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 300"><g class="svg_blue" data-name="Path 329"><path class="svg_blue" d="M150,41.19A109.27,109.27,0,1,1,40.71,150.46h0A109.27,109.27,0,0,1,150,41.19Z"/></g><path class="svg_white" d="M99.24,169a16,16,0,0,1-10.69,15.1v15.78a9.17,9.17,0,0,0,9.16,9.16h98a9.17,9.17,0,0,0,9.16-9.16V184.22a16,16,0,0,1,0-30.38v-16.5a9.16,9.16,0,0,0-9.16-9.15h-98a9.16,9.16,0,0,0-9.16,9.15v16.59A16,16,0,0,1,99.24,169Z"/><polygon points="148.72 144.99 155.92 159.57 172.01 161.91 160.36 173.26 163.11 189.29 148.72 181.72 134.33 189.29 137.07 173.26 125.43 161.91 141.52 159.57 148.72 144.99"/><circle cx="109.45" cy="143.21" r="3.1"/><circle cx="109.45" cy="159.46" r="3.1"/><circle cx="110.05" cy="191.96" r="3.1"/><circle cx="110.05" cy="175.71" r="3.1"/><path class="svg_white" d="M97.71,124.41h30.82l5.32-2.57,2.47-16.07,11.25,11.73,16.05-2.62-5.11,9.53h36a16,16,0,0,1-2-27.14l-5-15.73a9.16,9.16,0,0,0-11.48-6L82.61,105.13a9.16,9.16,0,0,0-6,11.48l5,15.82a15.88,15.88,0,0,1,3.89.62A12.93,12.93,0,0,1,97.71,124.41Z"/><circle cx="98.34" cy="115.91" r="3.1"/><polygon points="147.57 117.5 136.31 105.77 133.85 121.84 128.53 124.41 158.51 124.41 163.62 114.88 147.57 117.5"/></svg>').insertAfter('.sngl_rte_interest .entertainment .screen-reader-text, .rte_key .entertainment span');

$('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 300"><g class="svg_blue" data-name="Path 329"><path class="svg_blue" d="M149.72,41.19A109.27,109.27,0,1,1,40.46,150.46h0A109.27,109.27,0,0,1,149.72,41.19Z"/></g><path class="svg_white" d="M230.52,95.25H190c0-4.64,1.06-15.6,9.86-22.88a2.35,2.35,0,1,0-3-3.62c-10.39,8.58-11.6,21-11.59,26.5H146.08V100h7.3l1.18,16.65,4.69-.33-1.14-16H218L207.78,207.92H192.43v4.7h19.63L222.78,100h7.74Z"/><path class="svg_white" d="M88.66,169.72l20,0h20.68l33,0H183.1c4.54,0,7.88-1.29,10.2-3.93s3.18-6.18,2.59-10.77a39.46,39.46,0,0,0-11.49-23.32,72.11,72.11,0,0,0-50-20.69,63.81,63.81,0,0,0-39.57,13.58c-8.73,6.8-17.19,14.85-20,27.59-1.4,6.34.46,10.36,2.27,12.62S82.33,169.7,88.66,169.72Z"/><path class="svg_white" d="M75.33,204.52c.69,3.89,2.79,15.69,15.55,15.69H91q43.52-.14,87-.3c10.59,0,15.83-4.93,17-15.84l.73-7H74Z"/><path class="svg_white" d="M82.78,191.12h-.71c-18.58-.63-18.79-15.36-18.79-15.51a2.35,2.35,0,0,1,4.7,0c0,1.07.55,10.36,14.25,10.83,5.57.19,7.73-2.55,10.45-6s6.3-8,14.12-8c7.37,0,10.85,3.74,13.93,7s6.23,6.69,14.08,6.69c8.06,0,11.07-3.3,14.25-6.79,2.85-3.12,6.07-6.66,12.63-6.66,7.33,0,10.55,4.45,13.14,8,2.31,3.18,4.13,5.7,8.43,5.7,5.13,0,9-1.29,11.44-3.82a11.3,11.3,0,0,0,3-7.47,2.35,2.35,0,0,1,4.7-.18,16,16,0,0,1-4.27,10.87c-3.38,3.52-8.39,5.3-14.88,5.3-6.7,0-9.77-4.24-12.24-7.65s-4.4-6.07-9.33-6.07c-4.48,0-6.44,2.14-9.15,5.12-3.38,3.7-7.6,8.32-17.73,8.32-9.9,0-14.13-4.54-17.52-8.18-2.89-3.1-5.17-5.54-10.49-5.54-5.54,0-7.69,2.74-10.42,6.2C93.49,187,90.23,191.12,82.78,191.12ZM68,175.6h0Z"/><circle cx="137.58" cy="125.02" r="4.11"/><circle cx="103.26" cy="145.73" r="4.11"/><circle cx="156.65" cy="150.63" r="4.11"/></svg>').insertAfter('.sngl_rte_interest .food_drinks .screen-reader-text, .rte_key .food_drinks span');

$('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 300"><g class="svg_blue" data-name="Path 329"><path class="svg_blue" d="M147.68,52A109.26,109.26,0,1,1,38.42,161.22h0A109.26,109.26,0,0,1,147.68,52Z"/></g><polygon class="svg_white" points="124.67 233.29 124.67 189.52 84.8 189.52 84.8 137.82 124.67 137.82 124.67 94.29 172.34 94.29 172.34 137.82 212.21 137.82 212.21 189.52 172.34 189.52 172.34 233.29 124.67 233.29"/></svg>').insertAfter('.sngl_rte_interest .medical .screen-reader-text, .rte_key .medical span');

$('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 300"><path class="svg_blue" d="M153.62,42.07A109.27,109.27,0,1,0,262.88,151.34,109.27,109.27,0,0,0,153.62,42.07Z"/><path class="svg_white" d="M175.58,132.3a2.66,2.66,0,0,0,.15-.85V97.61a2.5,2.5,0,1,0-5,0v33.84a2.67,2.67,0,0,0,.16.85H135.53a2.42,2.42,0,0,0,.16-.85V97.61a2.5,2.5,0,0,0-5,0v33.84a2.66,2.66,0,0,0,.15.85H113.1v43.09a12.13,12.13,0,0,0,12.13,12.13h20v73.23q4,.28,8,.29t8-.29V187.52h20a12.14,12.14,0,0,0,12.14-12.13V132.3Z"/></svg>').insertAfter('.sngl_rte_interest .electrical_outlets .screen-reader-text, .rte_key .electric_outlets span');

$('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 300"><path class="svg_blue" d="M152.17,42.62A109.27,109.27,0,1,0,261.43,151.89,109.27,109.27,0,0,0,152.17,42.62Z"/><path class="svg_blue" d="M194.08,131.09a2.49,2.49,0,0,0,0-4.21,2.58,2.58,0,0,1,0,.39Z"/><path class="svg_white" d="M177.65,62.46H148.83V79.69h.06v11.6h5V79.69h23.76Z"/><path class="svg_white" d="M150.24,193a8.46,8.46,0,0,0-8.45,8.45v27.09h16.9V201.45A8.46,8.46,0,0,0,150.24,193Z"/><path class="svg_white" d="M194,126.88a2.47,2.47,0,0,0-.91-1.57L153.38,94.1a2.51,2.51,0,0,0-3,0l-42.45,31.2a2.56,2.56,0,0,0-.88,1.24h85.7A2.51,2.51,0,0,1,194,126.88Z"/><path class="svg_white" d="M194.08,228.54V131.09a2.53,2.53,0,0,1-1.36.41H106.88v97l.09,0H86.35v5H214v-5Zm-35.39,0h-16.9V201.45a8.45,8.45,0,1,1,16.9,0Z"/><path class="svg_blue" d="M107,126.5h-.77a2.5,2.5,0,0,0,0,5h.63v-4.23A2.5,2.5,0,0,1,107,126.5Z"/><rect class="svg_white" x="149.29" y="76.86" width="5" height="18.44"/><circle cx="150.86" cy="161.78" r="10.35"/></svg>').insertAfter('.sngl_rte_interest .schools_universities .screen-reader-text, .rte_key .schools_universities span');

//  Chaffey Selector Page
if (document.body.contains(document.querySelector('#choose_guide_loc'))) {
     var changeLocOption = document.querySelector('#choose_guide_loc');
     var changeLocBtn = document.querySelector('#select_location');

     changeLocOption.addEventListener('change', function (event) {
          let getOption = changeLocOption.value;

          changeLocBtn.setAttribute('href', 'https://omnitrans.org/go_smart/' + getOption);
     });
} else {
}
//  Chaffey Selector Page - END

// Switch fixed origin and destination
let origDestSwtchBtn = document.querySelector('#orig_dest_switch');
let fixedOrigin = document.querySelector('.fixed_input');
let locationName = document.querySelector('.map_center_point_name').innerHTML;
//let locationNameUpdt = document.createElement('p');
//locationNameUpdt.textContent = locationName;
//locationNameUpdt.className = 'fixed_location_name';

//fixedOrigin.parentElement.append(locationNameUpdt);

fixedOrigin.setAttribute('placeholder', locationName);

orig_dest_switch.addEventListener('click', function (event) {
     event.preventDefault();
     let originInput = document.querySelector('#origin-input');
     let destInput = document.querySelector('#destination-input');

     let originWrpper = document.querySelector('.start > div');
     let destWrpper = document.querySelector('.arrive > div');

     orig_dest_switch.classList.toggle('active');

     if(originInput.classList.contains('fixed_input')){
          originWrpper.append(destInput);
          destWrpper.append(originInput);
          
          originInput.setAttribute('placeholder', locationName);
          destInput.setAttribute('placeholder', 'Where would you like to go?');
     }else{
          destWrpper.append(destInput);
          originWrpper.append(originInput);

          destInput.setAttribute('placeholder', 'Where are you coming from?');
     }

     originInput.classList.toggle('fixed_input');
     destInput.classList.toggle('fixed_input');
});
// Switch fixed origin and destination - END

// Before Map Init
//  Global Variables
const getDirBtn = document.querySelector('#get_direc');
const originInputAddClass = document.querySelector('#origin-input');
let updateDate = new Date().getTime();


originInputAddClass.addEventListener('keyup', function(){
     if(originInputAddClass.classList.contains('origin_active')){
     }else{
          originInputAddClass.classList.add('origin_active');
     }
});

// Function which returns a minimum of two digits in case the value is less than 10
const getTwoDigits = (value) => value < 10 ? `0${value}` : value;

const formatDate = (pt_date) => {
     const day = getTwoDigits(pt_date.getDate());
     const month = getTwoDigits(pt_date.getMonth() + 1); // add 1 since getMonth returns 0-11 for the months
     const year = pt_date.getFullYear();

     return `${year}-${month}-${day}`;
}

const formatTime = (pt_date) => {
     const hours = getTwoDigits(pt_date.getHours());
     const mins = getTwoDigits(pt_date.getMinutes());

     return `${hours}:${mins}`;
}

const setDateOnload = new Date();
document.querySelector('.update_date').value = formatDate(setDateOnload);
document.querySelector('.update_time').value = formatTime(setDateOnload);

//  Appdateing Transit Options
document.querySelector('.constraint').addEventListener('change', function () {
     const arriveDepart = this.value;

     document.querySelector('.constraint').setAttribute('id', arriveDepart);
});

// Getting Date
document.querySelector('.update_date').addEventListener('change', function () {
     const arrDepartDate = this.value;

     this.setAttribute('value', arrDepartDate);
});

//Getting Time
document.querySelector('.update_time').addEventListener('change', function () {
     const arriveDepartTime = this.value;

     this.setAttribute('value', arriveDepartTime);
});

function updtDatePT() {
     const updtHrs = document.querySelector('.update_time').value.split(":")[0];
     const updtmins = document.querySelector('.update_time').value.split(":")[1];
     const updtYear = document.querySelector('.update_date').value.split("-")[0];
     const updtMonth = document.querySelector('.update_date').value.split("-")[1] - 1;
     const updtDay = document.querySelector('.update_date').value.split("-")[2];

     const updateDate = new Date(updtYear, updtMonth, updtDay, updtHrs, updtmins).getTime();

     return updateDate;
}
// Add date and time - END
// Before Map Init - END

function initMap() {
     const directionsRenderer = new google.maps.DirectionsRenderer();
     const directionsService = new google.maps.DirectionsService();

     let centerPointLat = document.querySelector('.map_center_point_lat').innerHTML;
     centerPointLat = Number(centerPointLat);
     let centerPointLong = document.querySelector('.map_center_point_lng').innerHTML;
     centerPointLong = Number(centerPointLong);
     let centerPointZoom = document.querySelector('.map_center_point_zoom').innerHTML;
     centerPointZoom = Number(centerPointZoom);

     const myLatlng = { lat: centerPointLat, lng: centerPointLong };

     // Set Map Starter Point
     map = new google.maps.Map(document.getElementById("guide_map"), {
          mapId: 'f17945e40543a040',
          center: myLatlng,
          zoom: centerPointZoom,
     });
     // Set Map Starter Point - END

     let getSnglLatLng = document.querySelectorAll('.marker_coords_name');

     getSnglLatLng.forEach(function (getSnglLatLng) {
          let getMarkerLat = getSnglLatLng.querySelector('.map_marker_lat').innerHTML;
          getMarkerLat = Number(getMarkerLat);
          let getMarkerLong = getSnglLatLng.querySelector('.map_marker_lng').innerHTML;
          getMarkerLong = Number(getMarkerLong);

          let getFigCap = getSnglLatLng.querySelector('.map_marker_name');
          let infoWinActive = getFigCap.innerHTML;

          // Route Points
          let routeGuideMarkers = [
               [infoWinActive, getMarkerLat, getMarkerLong],
          ];

          // Loop through our array of routeGuideMarkers & place each one on the map  

          // Display multiple routeGuideMarkers on a map
          let infoWindow = new google.maps.InfoWindow(), marker, i;

          for (let i = 0; i < routeGuideMarkers.length; i++) {
               let position = new google.maps.LatLng(routeGuideMarkers[i][1], routeGuideMarkers[i][2]);
               // Info Window Content
               const routeInformationForWindow = [
                    ['<div class="info_content">' + '<p>' + routeGuideMarkers[i][0] + '</p>' + '</div>'],
               ];

               const locationIcon = 'https://omnitrans.org/wp-content/uploads/2022/06/marker.png';

               let marker = new google.maps.Marker({
                    position: position,
                    map: map,
                    title: routeGuideMarkers[i][0],
                    icon: locationIcon,
               });

               // Each marker to have an info window    
               google.maps.event.addListener(marker, 'mouseover', (function (marker, i) {
                    return function () {
                         infoWindow.setContent(routeInformationForWindow[i][0]);
                         infoWindow.open(map, marker);
                    }
               })(marker, i));

               marker.addListener('mouseout', function () {
                    infoWindow.close();
               });

               //  Show Infow window on hover

               getSnglLatLng.addEventListener('mouseover', (function (marker, i) {
                    return function () {
                         infoWindow.setContent('<div class="testStyle">' + routeInformationForWindow[i][0] + '</div>');
                         infoWindow.open(map, marker);
                    }
               })(marker, i));

               getSnglLatLng.addEventListener('mouseout', function () {
                    infoWindow.close();
               });
               //  Show infow window on hover - END
          }
     });



     new AutocompleteDirectionsHandler(map);

     directionsRenderer.setMap(map);
     directionsRenderer.setPanel(document.getElementById("right-panel"));
     const control = document.getElementById("trip_planner");
     control.style.display = "block";
     //map.controls[google.maps.ControlPosition.TOP_CENTER].push(control);

     //const onChangeHandler = function () {
     //     calculateAndDisplayRoute(directionsService, directionsRenderer);
     //};

     //  Route - END

     //  get Log Lat on Click

     // _______TEMP_______  Create the initial InfoWindow.   _______TEMP_______  
     
     let infoWindow = new google.maps.InfoWindow({
     });

     infoWindow.open(map);

     // Configure the click listener.
     map.addListener("click", (mapsMouseEvent) => {
          // Close the current InfoWindow.
          infoWindow.close();

          // Create a new InfoWindow.
          infoWindow = new google.maps.InfoWindow({
               position: mapsMouseEvent.latLng,
          });
          infoWindow.setContent(
               JSON.stringify(mapsMouseEvent.latLng.toJSON(), null, 2)
          );
          infoWindow.open(map);
     });
     
     //  _______TEMP_______  get Log Lat on Click - END   _______TEMP_______  
}

function updtMapStyles(){
     let getSubStepSpan = document.querySelectorAll('.adp-substep span');
     let gleDfltIcon = document.querySelectorAll('.adp-substep img');

     getSubStepSpan.forEach((getSubStepSpan, index) => {
          let getSubStepTr = getSubStepSpan.closest('tr');

          if (getSubStepSpan.innerText.includes('Service run by')) {
               getSubStepSpan.parentNode.style.display = 'none';
          }

          if (getSubStepSpan.innerText.includes('Walk to')) {
               getSubStepSpan.classList.add('walk_info');
               getSubStepTr.classList.add('walk_dir');
          }

          if (getSubStepSpan.innerText.includes('Bus towards')) {
               getSubStepSpan.classList.add('bus_info');
               getSubStepTr.classList.add('bus_dir');
          }

          if (getSubStepSpan.innerText.includes('Train towards')) {
               getSubStepSpan.classList.add('train_info');
               getSubStepTr.classList.add('train_dir');
          }

          if (getSubStepSpan.innerText.includes(' / ')) {
               getSubStepSpan.innerHTML(function (_, innerHTML) {
                    return innerHTML.replace(/( \/ )/g, '/<br>');
               });
          }
     });

     gleDfltIcon.forEach((gleDfltIcon, index) => {
          gleDfltIcon.style.display = 'none';
     });
}

window.addEventListener('load', (event) => {
     document.querySelector('form').reset();

     initMap();
});

// Ytip Planner Calculate routes

// AutoComplete
class AutocompleteDirectionsHandler {
     constructor(map) {
          this.map = map;
          this.originPlaceId = "";
          this.destinationPlaceId = "";
          this.travelMode = google.maps.TravelMode.TRANSIT;
          this.unitSystem = google.maps.UnitSystem.IMPERIAL;

          //this.travelOptions = google.maps.TransitOptions.DATE;

          this.directionsService = new google.maps.DirectionsService();
          this.directionsRenderer = new google.maps.DirectionsRenderer();
          this.directionsRenderer.setMap(map);
          this.directionsRenderer.setPanel(document.getElementById("right-panel"));
          const originInput = document.getElementById("origin-input");
          const destinationInput = document.getElementById("destination-input");
          const modeSelector = document.getElementById("mode-selector");

          // Origin Autocomplete
          const originAutocomplete = new google.maps.places.Autocomplete(
               originInput,
               {
                    componentRestrictions: { 'country': ['US'] },
                    fields: ['place_id', 'formatted_address', 'geometry', 'name']
               }
          ); // Specify just the place data fields that you need.
          originAutocomplete.setFields(["place_id"]);
          // Origin Autocomplete - END

          // Destination Autocomplete
          const destinationAutocomplete = new google.maps.places.Autocomplete(
               destinationInput,
               {
                    componentRestrictions: { 'country': ['US'] },
                    fields: ['place_id', 'formatted_address', 'geometry', 'name']
               }
          ); // Specify just the place data fields that you need.
          destinationAutocomplete.setFields(["place_id"]);
          // Destination Autocomplete - END

          this.setupClickListener(
               "changemode-walking",
               google.maps.TravelMode.WALKING
          );
          this.setupClickListener(
               "changemode-transit",
               google.maps.TravelMode.TRANSIT
          );
          this.setupClickListener(
               "changemode-driving",
               google.maps.TravelMode.DRIVING
          );

          this.setupPlaceChangedListener(originAutocomplete, "ORIG");
          this.setupPlaceChangedListener(destinationAutocomplete, "DEST");
          this.map.controls[google.maps.ControlPosition.TOP_LEFT].push(
               modeSelector
          );
     } // Sets a listener on a radio button to change the filter type on Places
     // Autocomplete.

     setupClickListener(id, mode) {
          const radioButton = document.getElementById(id);
          radioButton.addEventListener("click", () => {
               this.travelMode = mode;
               this.route();
          });
     }

     setupPlaceChangedListener(autocomplete, mode) {
          //  Show route on autocomplete
          autocomplete.bindTo("bounds", this.map);
          //autocomplete.addListener("place_changed", () => 
          getDirBtn.addEventListener("click", (event) => {
               event.preventDefault();

               document.querySelector('#guide_map').classList.add('active');
               document.querySelector('#right-panel').classList.add('active');
               document.querySelector('#get_direc').classList.add('active');

               const place = autocomplete.getPlace();

               if (!place.place_id) {
                    window.alert("Please select an option from the dropdown list.");
                    return;
               }

               if (mode === "ORIG") {
                    this.originPlaceId = place.place_id;
               } else {
                    this.destinationPlaceId = place.place_id;
               }

               this.route();
               //  Show route on autocomplete - END
          });

          orig_dest_switch.addEventListener("click", (event) => {
               let destInput = document.querySelector('#destination-input');
               if(destInput.value.length != 0){

                    const place = autocomplete.getPlace();
     
                    if (!place.place_id) {
                         window.alert("Please select an option from the dropdown list.");
                         return;
                    }
     
                    if (mode === "ORIG") {
                         this.originPlaceId = place.place_id;
                    } else {
                         this.destinationPlaceId = place.place_id;
                    }
     
                    this.route();
                    //  Show route on autocomplete - END
               }else{
               }
          });
     }

     route() {
          //if (!this.originPlaceId || !this.destinationPlaceId) {
          //     return;
          //}

          const me = this;

          let departArrive = new Date(updtDatePT());

          let timeCheck = document.querySelector('.constraint');
          let timeNow = document.querySelector('#ttype');
          let timeDept = document.querySelector('#departure_time');
          let timeArrive = document.querySelector('#arrival_time');

          let testDept = timeCheck === timeDept ? departArrive : null;
          let testArrive = timeCheck === timeArrive ? departArrive : null;


          let centerPointLat = document.querySelector('.map_center_point_lat').innerHTML;
          centerPointLat = Number(centerPointLat);
          let centerPointLong = document.querySelector('.map_center_point_lng').innerHTML;
          centerPointLong = Number(centerPointLong);

          const myLatlng = { lat: centerPointLat, lng: centerPointLong };

          const originInput = document.getElementById("origin-input");
          const destinationInput = document.getElementById("destination-input");

          if (originInput.classList.contains('fixed_input') && originInput.value.length === 0) {
               this.directionsService.route(
                    {
                         origin: myLatlng,
                         destination: {
                              placeId: this.destinationPlaceId
                         },
                         travelMode: this.travelMode,
                         transitOptions: {
                              arrivalTime: testArrive,
                              departureTime: testDept
                         }
                    },
                    (response, status) => {
                         if (status === "OK") {
                              me.directionsRenderer.setDirections(response);
                         } else {
                              window.alert("Directions request failed due to " + status);
                         }
                    }
               );
          } else if (destinationInput.classList.contains('fixed_input') && originInput.value.length === 0) {
               this.directionsService.route(
                    {
                         origin: {
                              placeId: this.destinationPlaceId
                         },
                         destination: myLatlng,
                         travelMode: this.travelMode,
                         transitOptions: {
                              arrivalTime: testArrive,
                              departureTime: testDept
                         }
                    },
                    (response, status) => {
                         if (status === "OK") {
                              me.directionsRenderer.setDirections(response);
                         } else {
                              window.alert("Directions request failed due to " + status);
                         }
                    }
               );
          } else if(destinationInput.classList.contains('fixed_input') && originInput.value.length != 0){
               this.directionsService.route(
                    {
                         origin: {
                              placeId: this.destinationPlaceId
                         },
                         destination: {
                              placeId: this.originPlaceId
                         },
                         travelMode: this.travelMode,
                         transitOptions: {
                              arrivalTime: testArrive,
                              departureTime: testDept
                         }
                    },
                    (response, status) => {
                         if (status === "OK") {
                              me.directionsRenderer.setDirections(response);
                         } else {
                              window.alert("Directions request failed due to " + status);
                         }
                    }
               );
          }else {
               this.directionsService.route(
                    {
                         origin: {
                              placeId: this.originPlaceId
                         },
                         destination: {
                              placeId: this.destinationPlaceId
                         },
                         travelMode: this.travelMode,
                         transitOptions: {
                              arrivalTime: testArrive,
                              departureTime: testDept
                         }
                    },
                    (response, status) => {
                         if (status === "OK") {
                              me.directionsRenderer.setDirections(response);
                         } else {
                              window.alert("Directions request failed due to " + status);
                         }
                    }
               );
          }

          let getTripPlannerFull = document.querySelector('.trip_planner_columns');

          if (getTripPlannerFull.classList.contains('planner_active')) {
          } else {
               getTripPlannerFull.classList.add('planner_active');
          }

          setTimeout(() => {
               //console.log("Delayed for 1 second.");

               updtMapStyles();
          }, 500)
     }
}
// AutoComplete - End

// Ytip Planner Calculate routes - END
let plannerCloseBtn = document.querySelector('.trip_planner_close_btn');
let plannerClose = document.querySelector('.trip_planner_columns');


plannerCloseBtn.addEventListener('click', function (plannerCloseBtn) {
     document.querySelector('form').reset();
     document.querySelector('.trip_planner_col').classList.remove('active');
     plannerClose.classList.remove('planner_active');
});

$('.scroll_btn').click(function () {
     $('.location_outer_wrap').animate({ scrollTop: '+=160px' }, 500);
});
