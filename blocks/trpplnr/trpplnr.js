import { registerBlockType } from '@wordpress/blocks';

const celtisIcon = (
     <svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 100 100"><g><path fill="#0057a7" d="M95.7,32.2c-7.8-15.4-25.3-26.1-45.7-26.1S2.4,23.8.2,46.3c23.9-8.5,52.3-13.7,83-14.2,4.2,0,8.4,0,12.6.2" /><path fill="#75b02e" d="M0,49c17.2-4.8,34.8-7.4,52.6-7.7-4.9,4-10.6,8.9-17.1,14.7-8.9,8-17.7,16.3-23.8,22.2C4.3,70.7,0,60.6,0,50c0-.3,0-.6,0-1" /><path fill="#75b02e" d="M63.9,41.5c12.1.3,24.1,1.6,35.9,4.1.2,1.5.2,3,.2,4.4,0,24.2-22.4,43.9-50,43.9-3.5,0-6.9-.4-10.3-1,3.1-9.6,6.8-19,11-28.2,3.7-8.1,8.1-15.8,13.1-23.2" /></g></svg>
);

registerBlockType('celorgscratch/trpplnr', {
     title: 'Trip Planner',
     icon: celtisIcon,
     category: 'celtis-custom-category',
     edit: () => {
          return (
               <>
                    <header>
                         <h2>Trip planner</h2>
                         <p>Plan your trip here</p>
                    </header>
                    <form id="trip_planner" name="myForm" aria-labelledby="trip-planner-heading">
                         <div className="flex_left">
                              <div className="start">
                                   <div>
                                        <label for="origin-input"><span>1</span> Start at</label>
                                        <input id="origin-input" className="controls" type="text"
                                             placeholder="Enter an origin location" aria-describedby="origin-help" />
                                        <small id="origin-help" className="screen-reader-text">Enter the starting location for
                                             your trip</small>
                                   </div>
                              </div>
                              <div className="arrive">
                                   <div>
                                        <label for="destination-input"><span>2</span> Arrive at:</label>
                                        <input id="destination-input" className="controls" type="text"
                                             placeholder="Enter a destination location" aria-describedby="destination-help" />
                                        <small id="destination-help" className="screen-reader-text">Enter the destination
                                             location for
                                             your trip</small>
                                   </div>
                              </div>
                         </div>
                         <div className="flex_right">
                              <div>
                                   <label for="ttype"><span>3</span>Travel time:</label>
                                   <select name="ttype" className="constraint" id="ttype" aria-describedby="ttype-help">
                                        <option value="leave_now">Leave now</option>
                                        <option value="departure_time">Leave by</option>
                                        <option value="arrival_time">Arrive by</option>
                                   </select>
                                   <small id="ttype-help" className="screen-reader-text">Select the preferred travel time
                                        option</small>
                              </div>
                              <div className="time_date">
                                   <div>
                                        <label for="timeInput"><span>4</span>Travel time:</label>
                                        <input type="time" id="timeInput" />
                                   </div>
                                   <div>
                                        <label for="dateInput">Travel date:</label>
                                        <input type="date" id="dateInput" />
                                   </div>
                              </div>
                         </div>
                         <button id="get_direc" className="trp_plnr_btn_trckng" type="submit">Get directions</button>
                    </form>
                    <a href="https://transitapp.com/" id="transit_app_promo" target="_blank" rel="noopener">
                         <span class="quck_lnk_icon">
                              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 300">
                                   <circle class="svg_blue" data-name="Ellipse 232" cx="140.8" cy="154.83" r="110.61">
                                   </circle>
                                   <circle class="svg_white" cx="195.24" cy="162.65" r="16.38"></circle>
                                   <path class="svg_white" d="M206.73,184.45a24.64,24.64,0,0,1-23,0,.45.45,0,0,0-.67.37q0,5,0,21.13a12.16,12.16,0,0,0,24.31,0q0-16.1,0-21.07A.44.44,0,0,0,206.73,184.45Z">
                                   </path>
                                   <path class="svg_white" d="M98.64,182.05c0-5.73,0-10,0-12.9a.45.45,0,0,0-.69-.4,24.59,24.59,0,0,1-23,0,.43.43,0,0,0-.64.41q0,4.31,0,12.93a39.32,39.32,0,0,0,78.64,0s.26-54.48.26-54.5a15,15,0,1,1,30,0v0q0,8.61,0,12.91a.45.45,0,0,0,.68.4,24.61,24.61,0,0,1,23,0,.44.44,0,0,0,.64-.42q0-4.31,0-12.93a39.32,39.32,0,0,0-78.64,0s-.26,54.47-.26,54.5a15,15,0,0,1-30,0Z">
                                   </path>
                                   <path class="svg_white" d="M74.94,125.18a24.64,24.64,0,0,1,23,0,.45.45,0,0,0,.68-.37q0-5,0-21.13a12.16,12.16,0,0,0-24.31,0q0,16.09,0,21.07A.44.44,0,0,0,74.94,125.18Z">
                                   </path>
                                   <path class="svg_white" d="M86.37,163.39A16.39,16.39,0,1,0,70,147,16.4,16.4,0,0,0,86.37,163.39Z"></path>
                                   <path class="svg_white" d="M195.31,218.08A12.16,12.16,0,0,1,183.13,206q0-16.14,0-21.13a.45.45,0,0,1,.67-.37,24.64,24.64,0,0,0,23,0,.44.44,0,0,1,.67.38q0,5,0,21.07A12.15,12.15,0,0,1,195.31,218.08ZM195.24,179a16.39,16.39,0,1,1,16.38-16.38A16.4,16.4,0,0,1,195.24,179Zm-81.59,18.05a15,15,0,0,0,15-15s.26-54.5.26-54.5a39.32,39.32,0,0,1,78.64,0q0,8.63,0,12.93a.44.44,0,0,1-.64.42,24.61,24.61,0,0,0-23,0,.45.45,0,0,1-.68-.4q0-4.31,0-12.91v0a15,15,0,1,0-30,0s-.26,54.47-.26,54.5a39.32,39.32,0,0,1-78.64,0q0-8.62,0-12.93a.43.43,0,0,1,.64-.41,24.59,24.59,0,0,0,23,0,.45.45,0,0,1,.69.4c0,2.86,0,7.17,0,12.9v0A15,15,0,0,0,113.65,197.08ZM86.36,91.55a12.15,12.15,0,0,1,12.18,12.13q0,16.14,0,21.13a.45.45,0,0,1-.68.37,24.64,24.64,0,0,0-23,0,.44.44,0,0,1-.66-.38q0-5,0-21.07A12.16,12.16,0,0,1,86.36,91.55Zm0,39.07A16.39,16.39,0,1,1,70,147,16.4,16.4,0,0,1,86.37,130.62Z">
                                   </path>
                              </svg>
                         </span>
                         <span>Download the Transit app</span>
                    </a>
               </>
          );
     },
     save: () => {
          return (
               <div className="trip_planner_wrapper">
                    <header className="screen-reader-text">
                         <h2>Trip planner</h2>
                         <p>Plan your trip here</p>
                    </header>
                    <div>
                         <form id="trip_planner" name="myForm" aria-labelledby="trip-planner-heading">
                              <div class="flex_left">
                                   <div class="start">
                                        <div>
                                             <label for="origin-input"><span>1</span> Start at</label>
                                             <input id="origin-input" class="controls" type="text"
                                                  placeholder="Enter an origin location" aria-describedby="origin-help" />
                                             <small id="origin-help" class="screen-reader-text">Enter the starting location for
                                                  your trip</small>
                                        </div>
                                   </div>
                                   <div class="arrive">
                                        <div>
                                             <label for="destination-input"><span>2</span> Arrive at:</label>
                                             <input id="destination-input" class="controls" type="text"
                                                  placeholder="Enter a destination location"
                                                  aria-describedby="destination-help" />
                                             <small id="destination-help" class="screen-reader-text">Enter the destination
                                                  location for your trip</small>
                                        </div>
                                   </div>
                              </div>
                              <div class="flex_right">
                                   <div>
                                        <label for="ttype"><span>3</span>Travel time:</label>
                                        <select name="ttype" class="constraint" id="ttype" aria-describedby="ttype-help">
                                             <option value="leave_now">Leave now</option>
                                             <option value="departure_time">Leave by</option>
                                             <option value="arrival_time">Arrive by</option>
                                        </select>
                                        <small id="ttype-help" class="screen-reader-text">Select the preferred travel time
                                             option</small>
                                   </div>
                                   <div class="time_date">
                                        <div>
                                             <label for="timeInput">Travel time:</label>
                                             <div class="time-wrap">
                                                  <input type="time" id="timeInput" />
                                                  <div role="dialog" aria-modal="true" aria-labelledby="timeDialogLabel"
                                                       id="timeDialog" hidden>
                                                       <h3 id="timeDialogLabel" class="screen-reader-text">Pick a time</h3>
                                                       <div>
                                                            <label for="hoursSelect">Hours</label>
                                                            <select id="hoursSelect" aria-label="Hours">
                                                                 <option value="01">1</option>
                                                                 <option value="02">2</option>
                                                                 <option value="03">3</option>
                                                                 <option value="04">4</option>
                                                                 <option value="05">5</option>
                                                                 <option value="06">6</option>
                                                                 <option value="07">7</option>
                                                                 <option value="08">8</option>
                                                                 <option value="09">9</option>
                                                                 <option value="10">10</option>
                                                                 <option value="11">11</option>
                                                                 <option value="12">12</option>
                                                            </select>

                                                            <label for="minutesSelect">Minutes</label>
                                                            <select id="minutesSelect" aria-label="Minutes">
                                                                 <option value="00">00</option>
                                                                 <option value="05">05</option>
                                                                 <option value="10">10</option>
                                                                 <option value="15">15</option>
                                                                 <option value="20">20</option>
                                                                 <option value="25">25</option>
                                                                 <option value="30">30</option>
                                                                 <option value="35">35</option>
                                                                 <option value="40">40</option>
                                                                 <option value="45">45</option>
                                                                 <option value="50">50</option>
                                                                 <option value="55">55</option>
                                                            </select>

                                                            <label for="ampmSelect">AM/PM</label>
                                                            <select id="ampmSelect" aria-label="AM/PM">
                                                                 <option value="am">AM</option>
                                                                 <option value="pm">PM</option>
                                                            </select>
                                                       </div>
                                                       <button type="button" id="saveButton">Save and Close</button>
                                                  </div>
                                             </div>
                                        </div>
                                        <div>
                                             <label for="dateInput">Travel date:</label>
                                             <input type="date" id="dateInput" />
                                        </div>
                                   </div>
                              </div>
                              <button id="get_direc" class="trp_plnr_btn_trckng" type="submit">Get directions</button>
                         </form>
                    </div>
                    <div id="trip_plan_wrap">
                         <button class="close" aria-label="Close trip planner">
                              <span class="screen-reader-text">Close</span>
                         </button>
                         <div id="map" role="application" aria-label="Map"></div>
                         <div id="right-panel">
                              <h2>Directions</h2>
                              <div id="directions-panel" aria-live="polite"></div>
                         </div>
                    </div>
                    <a href="https://transitapp.com/" id="transit_app_promo" target="_blank" rel="noopener">
                         <span class="quck_lnk_icon">
                              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 300">
                                   <circle class="svg_blue" data-name="Ellipse 232" cx="140.8" cy="154.83" r="110.61">
                                   </circle>
                                   <circle class="svg_white" cx="195.24" cy="162.65" r="16.38"></circle>
                                   <path class="svg_white" d="M206.73,184.45a24.64,24.64,0,0,1-23,0,.45.45,0,0,0-.67.37q0,5,0,21.13a12.16,12.16,0,0,0,24.31,0q0-16.1,0-21.07A.44.44,0,0,0,206.73,184.45Z">
                                   </path>
                                   <path class="svg_white" d="M98.64,182.05c0-5.73,0-10,0-12.9a.45.45,0,0,0-.69-.4,24.59,24.59,0,0,1-23,0,.43.43,0,0,0-.64.41q0,4.31,0,12.93a39.32,39.32,0,0,0,78.64,0s.26-54.48.26-54.5a15,15,0,1,1,30,0v0q0,8.61,0,12.91a.45.45,0,0,0,.68.4,24.61,24.61,0,0,1,23,0,.44.44,0,0,0,.64-.42q0-4.31,0-12.93a39.32,39.32,0,0,0-78.64,0s-.26,54.47-.26,54.5a15,15,0,0,1-30,0Z">
                                   </path>
                                   <path class="svg_white" d="M74.94,125.18a24.64,24.64,0,0,1,23,0,.45.45,0,0,0,.68-.37q0-5,0-21.13a12.16,12.16,0,0,0-24.31,0q0,16.09,0,21.07A.44.44,0,0,0,74.94,125.18Z">
                                   </path>
                                   <path class="svg_white" d="M86.37,163.39A16.39,16.39,0,1,0,70,147,16.4,16.4,0,0,0,86.37,163.39Z"></path>
                                   <path class="svg_white" d="M195.31,218.08A12.16,12.16,0,0,1,183.13,206q0-16.14,0-21.13a.45.45,0,0,1,.67-.37,24.64,24.64,0,0,0,23,0,.44.44,0,0,1,.67.38q0,5,0,21.07A12.15,12.15,0,0,1,195.31,218.08ZM195.24,179a16.39,16.39,0,1,1,16.38-16.38A16.4,16.4,0,0,1,195.24,179Zm-81.59,18.05a15,15,0,0,0,15-15s.26-54.5.26-54.5a39.32,39.32,0,0,1,78.64,0q0,8.63,0,12.93a.44.44,0,0,1-.64.42,24.61,24.61,0,0,0-23,0,.45.45,0,0,1-.68-.4q0-4.31,0-12.91v0a15,15,0,1,0-30,0s-.26,54.47-.26,54.5a39.32,39.32,0,0,1-78.64,0q0-8.62,0-12.93a.43.43,0,0,1,.64-.41,24.59,24.59,0,0,0,23,0,.45.45,0,0,1,.69.4c0,2.86,0,7.17,0,12.9v0A15,15,0,0,0,113.65,197.08ZM86.36,91.55a12.15,12.15,0,0,1,12.18,12.13q0,16.14,0,21.13a.45.45,0,0,1-.68.37,24.64,24.64,0,0,0-23,0,.44.44,0,0,1-.66-.38q0-5,0-21.07A12.16,12.16,0,0,1,86.36,91.55Zm0,39.07A16.39,16.39,0,1,1,70,147,16.4,16.4,0,0,1,86.37,130.62Z">
                                   </path>
                              </svg>
                         </span>
                         <span>Download the Transit app</span>
                    </a>
               </div>
          );
     },
});
