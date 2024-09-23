let markers = []; // Array to hold all markers
let markerMap = new Map(); // Map to hold address to marker mapping

function clearMarkers() {
     for (let i = 0; i < markers.length; i++) {
          markers[i].setMap(null);
     }
     markers = [];
}

// Replace the existing addMarkersToMap function with the modified one
function addMarkersToMap(map, markerDataArray) {
     markerDataArray.forEach(data => {
          const marker = new google.maps.Marker({
               map: map,
               position: data.position,
               icon: data.icon,
               title: data.name // Set the marker title
          });

          // Create info window with custom styling
          const infoWindow = new google.maps.InfoWindow({
               content: `<div class="guides_map_marker">
                              <p class="h4 rmv_pddng">${data.name}</p>
                              <p class="rmv_pddng">${data.address}</p>
                         </div>`
          });

          // Add listener for marker hover event
          marker.addListener('mouseover', function () {
               infoWindow.open(map, marker);
          });

          // Add listener for marker mouseout event
          marker.addListener('mouseout', function () {
               infoWindow.close();
          });

          markers.push(marker);
          markerMap.set(data.address, marker); // Map the address to the marker
     });
}

function initMap() {
     const mapElements = document.querySelectorAll('#guidesmap');

     mapElements.forEach(mapElement => {
          const apiKey = mapElement.getAttribute('data-api-key');
          const coordinatesString = mapElement.getAttribute('data-coordinates');

          const script = document.createElement('script');
          script.src = `https://maps.googleapis.com/maps/api/js?key=${apiKey}&callback=initGoogleMap`;
          script.async = true;
          document.body.appendChild(script);
     });
}

window.initGoogleMap = () => {
     const mapElements = document.querySelectorAll('#guidesmap');

     mapElements.forEach(mapElement => {
          const zoom = parseInt(mapElement.getAttribute('data-zoom'));

          const coordinatesString = mapElement.getAttribute('data-coordinates');
          const coordinates = coordinatesString.split('\n').map(coord => {
               const [lng, lat] = coord.split(',').map(Number);
               return { lat, lng };
          });

          const centerPoint = calculatePolygonCenter(coordinates);

          const map = new google.maps.Map(mapElement, {
               center: centerPoint,
               zoom
          });

          const geocoder = new google.maps.Geocoder();
          const markerIcon = {
               path: 'M -1,0 A 1,1 0 0 0 1,0 A 1,1 0 0 0 -1,0',
               fillColor: 'white',
               fillOpacity: 1,
               strokeColor: '#69a52b',
               strokeWeight: 3,
               scale: 9,
          };

          function addMarkers(addresses) {
               const bounds = new google.maps.LatLngBounds();
               const geocodePromises = [];

               addresses.forEach(addressElement => {
                    const nameElement = addressElement.previousElementSibling;
                    const name = nameElement ? nameElement.innerText : '';
                    const address = addressElement.innerText;

                    const geocodePromise = new Promise((resolve, reject) => {
                         geocoder.geocode({ 'address': address }, function (results, status) {
                              if (status == 'OK') {
                                   const position = results[0].geometry.location;
                                   const markerData = {
                                        position: position,
                                        icon: markerIcon,
                                        name: name,
                                        address: address
                                   };

                                   const marker = new google.maps.Marker({
                                        map: map,
                                        position: position,
                                        icon: markerIcon,
                                        title: name // Set the marker title
                                   });

                                   const infoWindow = new google.maps.InfoWindow({
                                        content: `<div class="guides_map_marker">
                                                       <p class="h4 rmv_pddng">${name}</p>
                                                       <p class="rmv_pddng">${address}</p>
                                                  </div>`
                                   });

                                   marker.addListener('mouseover', function () {
                                        infoWindow.open(map, marker);
                                   });

                                   marker.addListener('mouseout', function () {
                                        infoWindow.close();
                                   });

                                   markers.push(marker);
                                   markerMap.set(address, marker); // Map the address to the marker
                                   bounds.extend(position);
                                   resolve();
                              } else {
                                   reject('Geocode was not successful for the following reason: ' + status);
                              }
                         });
                    });

                    geocodePromises.push(geocodePromise);
               });

               Promise.all(geocodePromises).then(() => {
                    map.fitBounds(bounds);
               }).catch((error) => {
                    console.error(error);
               });
          }

          function updateMarkers() {
               clearMarkers();
               const activeSection = document.querySelector('.accord_sec_wrap.active');
               if (activeSection) {
                    const addresses = activeSection.querySelectorAll('.dest_address');
                    addMarkers(addresses);
               } else {
                    const addresses = document.querySelectorAll('.dest_address');
                    addMarkers(addresses);
               }
          }

          const accordBtns = document.querySelectorAll('.accord_sec_wrap .wp-block-button__link.wp-element-button');

          accordBtns.forEach(button => {
               button.addEventListener('click', function () {
                    const accordSecWrap = this.closest('.accord_sec_wrap');

                    if (accordSecWrap.classList.contains('active')) {
                         accordSecWrap.classList.remove('active');
                    } else {
                         accordSecWrap.classList.add('active');
                    }

                    const siblings = Array.from(accordSecWrap.parentNode.children);
                    siblings.forEach(sibling => {
                         if (sibling !== accordSecWrap && sibling.classList.contains('active')) {
                              sibling.classList.remove('active');
                         }
                    });

                    updateMarkers();
               });
          });

          // Add markers for all addresses when the map loads for the first time
          const allAddresses = document.querySelectorAll('.dest_address');
          addMarkers(allAddresses);

          // Add hover event listeners to display marker titles for corresponding addresses and zoom in on marker
          const guidesmapDestElements = document.querySelectorAll('.guidesmap_dest');

          guidesmapDestElements.forEach(guidesmapDestElement => {
               guidesmapDestElement.addEventListener('mouseover', function () {
                    const addressElement = this.querySelector('.dest_address');
                    const address = addressElement.innerText;
                    const marker = markerMap.get(address);

                    if (marker) {
                         const infoWindow = new google.maps.InfoWindow({
                              content: `<div class="guides_map_marker">
                                             <p class="h4 rmv_pddng">${marker.getTitle()}</p>
                                             <p class="rmv_pddng">${address}</p>
                                        </div>`
                         });
                         infoWindow.open(map, marker);
                         map.setCenter(marker.getPosition());
                         map.setZoom(15); // Zoom level when hovering over the marker

                         guidesmapDestElement.addEventListener('mouseout', function () {
                              infoWindow.close();
                              map.setZoom(zoom); // Reset zoom level
                              map.setCenter(centerPoint); // Reset center to the polygon center
                         }, { once: true });
                    }
               });
          });

          // Create polygon on the map using the coordinates
          if (coordinates && coordinates.length) {
               const polygonPath = coordinates.map(coord => ({ lat: coord.lat, lng: coord.lng }));
               const polygon = new google.maps.Polygon({
                    paths: polygonPath,
                    strokeColor: '#005aa8',
                    strokeOpacity: 0.8,
                    strokeWeight: 3,
                    fillColor: '#ffffff',
                    fillOpacity: 0.35
               });
               polygon.setMap(map);
          }
     });
};

function calculatePolygonCenter(coords) {
     const latLngBounds = new google.maps.LatLngBounds();
     coords.forEach(coord => latLngBounds.extend(new google.maps.LatLng(coord.lat, coord.lng)));
     return latLngBounds.getCenter().toJSON();
}

document.addEventListener('DOMContentLoaded', function () {
     // Append span with class "plus" to each ".accord_btn a"
     const accordButtons = document.querySelectorAll('.accord_btn a');
     accordButtons.forEach(button => {
          const span = document.createElement('span');
          span.className = 'plus';
          button.appendChild(span);
     });

     // Initialize the map and other functionalities
     initMap();
});
