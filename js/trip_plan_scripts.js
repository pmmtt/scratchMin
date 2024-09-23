$('#origin-input').click(function(){
     //console.log('Testing origin Click');

     $('<script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyDF6l-tQ5l0EK8ylGc_of9a0cEMRD_j26g&callback=initMap&libraries=places&v=weekly" defer></script>').appendTo('body');
});

//  Global Variables
const getDirBtn = document.querySelector('#get_direc');
//let updateDate = new Date().getTime();

// Add date and time
// Selecting Arrival or departure

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

     //console.log(arriveDepart);
     document.querySelector('.constraint').setAttribute('id', arriveDepart);
});

// Getting Date
document.querySelector('.update_date').addEventListener('change', function () {
     const arrDepartDate = this.value;

     this.setAttribute('value', arrDepartDate);
     //console.log(arrDepartDate);
});

//Getting Time
document.querySelector('.update_time').addEventListener('change', function () {
     const arriveDepartTime = this.value;

     this.setAttribute('value', arriveDepartTime);
     //console.log(arriveDepartTime);
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


//  Display map on page
function initMap() {
     const directionsRenderer = new google.maps.DirectionsRenderer();
     const directionsService = new google.maps.DirectionsService();
     const map = new google.maps.Map(document.getElementById("map"), {
          zoom: 12,
          center: {
               lat: 34.115784,
               lng: -117.302399
          }
     });

     new AutocompleteDirectionsHandler(map);

     directionsRenderer.setMap(map);
     directionsRenderer.setPanel(document.getElementById("right-panel"));
     const control = document.getElementById("trip_planner");
     control.style.display = "block";
     //map.controls[google.maps.ControlPosition.TOP_CENTER].push(control);

     const onChangeHandler = function () {
          calculateAndDisplayRoute(directionsService, directionsRenderer);
     };

}
//  Display map on page - END

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
          const originAutocomplete = new google.maps.places.Autocomplete(
               originInput,
               {
                    componentRestrictions: {'country': ['US']},
                    fields: ['place_id', 'formatted_address', 'geometry', 'name']
               }
          ); // Specify just the place data fields that you need.

          originAutocomplete.setFields(["place_id"]);
          const destinationAutocomplete = new google.maps.places.Autocomplete(
               destinationInput,
               {
                    componentRestrictions: {'country': ['US']},
                    fields: ['place_id', 'formatted_address', 'geometry', 'name']
               }
          ); // Specify just the place data fields that you need.

          destinationAutocomplete.setFields(["place_id"]);
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
          // getDirBtn.addEventListener("click", (event) =>
          autocomplete.addListener("place_changed", () => {
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

          //  Update Route on Click
          getDirBtn.addEventListener("click", (event) => {
               event.preventDefault();


               if (window.location.href.indexOf('trip-planner') > -1) {
                    document.querySelector('#trip_plnr_maps').classList.add('show_map');
               }else{
                    document.querySelector('#hme_trp_pln_wrap').classList.add('hm_trp_pln_actv');
               }
               document.querySelector('#map').classList.add('active');
               document.querySelector('#right-panel').classList.add('active');
               document.querySelector('#get_direc').classList.add('active');

               // Added PT - Replace with vanilla JS
               this.route();
               // Added PT - Replace with vanilla JS - END
          });
          //  Update Route on Click - END

          //  Cliose Tripl Planner
          getDirBtn.addEventListener("click", (event) => {
               event.preventDefault();
               // Added PT - Replace with vanilla JS
               this.route();
               // Added PT - Replace with vanilla JS - END
          });

     }

     route() {
          if (!this.originPlaceId || !this.destinationPlaceId) {
               return;
          }

          const me = this;

          let departArrive = new Date(updtDatePT());

          let timeCheck = document.querySelector('.constraint');
          let timeNow = document.querySelector('#ttype');
          let timeDept = document.querySelector('#departure_time');
          let timeArrive = document.querySelector('#arrival_time');

          let testDept = timeCheck === timeDept ? departArrive : null;
          let testArrive = timeCheck === timeArrive ? departArrive : null;

          //console.log(testDept);

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

     styleChange() {
          if (!this.originPlaceId || !this.destinationPlaceId) {
               return;
          }
     }
}
// AutoComplete - End


//  Calculate Route
function calculateAndDisplayRoute(directionsService, directionsRenderer) {
     const start = document.getElementById("start-address").value;
     const end = document.getElementById("destination-input").value;
     //if arrive by is selected on line 3 of the form
     const arrivalTime = new Date(document.getElementById('depart_time').selectedOptions[0].label)
     //if leave by is selected on line 3 of the form
     const departureTime = new Date(document.getElementById('depart_time').selectedOptions[0].label)

     //console.log(arrivalTime);

     calculateAndDisplayRoute(directionsService, directionsRenderer).route(
          {
               origin: start,
               destination: end,
               travelMode: 'TRANSIT',
               //               transitOptions: {
               //https://developers.google.com/maps/documentation/javascript/directions#TransitOptions
               //if arrive by
               //                    arrivalTime: arrivalTime,
               //if leave by
               //                    departureTime: departureTime,
               //modes[]: TransitMode,
               //routingPreference: TransitRoutePreference
               //               }
          },
          (response, status) => {
               if (status === "OK") {
                    directionsRenderer.setDirections(response);
               } else {
                    window.alert("Directions request failed due to " + status);
               }
          }
     );
}
//  Calculate Route - END

//  Add style info

getDirBtn.addEventListener('click', () => {
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

});
//  Add Style info - END


//  Cliose Tripl Planner

$(document).ready(function() {
     initMap();
});
//  Cliose Tripl Planner - END