function updtFareLnks() {
     const links = document.querySelectorAll('a');
     links.forEach((link) => {
          if (link.href === "https://store.omnitrans.org/full-fare/7-day-passes.html") {
               link.href = "https://store.omnitrans.org/full-fare-7-day-pass.html";
          } else if (link.href === "https://store.omnitrans.org/full-fare/31-day-passes.html") {
               link.href = "https://store.omnitrans.org/full-fare-31-day-pass.html";
          } else if (link.href === "https://store.omnitrans.org/veteran/1-ride-10-packs.html") {
               link.href = "https://store.omnitrans.org/veteran-1-ride-10pack.html";
          } else if (link.href === "https://store.omnitrans.org/veteran/1-day-passes.html") {
               link.href = "";
          } else if (link.href === "https://store.omnitrans.org/veteran/7-day-passes.html") {
               link.href = "https://store.omnitrans.org/vet-7-day-pass.html";
          } else if (link.href === "https://store.omnitrans.org/veteran/31-day-passes.html") {
               link.href = "https://store.omnitrans.org/vet-31-day-pass.html";
          } else if (link.href === "https://store.omnitrans.org/full-fare-1-ride-10pack.html" || 'https://store.omnitrans.org/full-fare-1-day-pass-10-pack.html') {
               link.href = "";
               link.removeAttribute('target');
          }
     });
}

function elementLoadItems() {
     if (document.querySelector('.updt_arrow_link')) {
          var svg = '<svg version="1.1" class="blck_lnk_arrow" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 22 22" style="enable-background:new 0 0 22 22;" xml:space="preserve"><g id="Forward_arrow" transform="translate(0 2)"><path id="Path_10" class="blck_lnk_arrow" d="M11-2L9,0l7.57,7.57H0v2.86h16.57L9,18l2,2L22,9L11-2z"></path></g></svg>';

          var links = document.querySelectorAll('.updt_arrow_link a, .updt_arrow_link p');
          links.forEach(function (link) {
               link.insertAdjacentHTML('beforeend', svg);
          });
     }

     if (document.querySelector('img')) {
          const images = document.querySelectorAll('img');
          images.forEach((img) => {
               img.removeAttribute('style');
          });
     }

     document.querySelectorAll('.single-tab-wrap').forEach((tabWrap) => {
          const content = tabWrap.querySelector('.tab-content');

          tabWrap.querySelector('button').addEventListener('click', () => {
               const siblings = Array.from(tabWrap.parentElement.children).filter((sibling) => sibling !== tabWrap);
               const tabWrapParent = tabWrap.parentElement;

               siblings.forEach((sibling) => {
                    sibling.classList.remove('active');
                    sibling.querySelector('.tab-content').style.maxHeight = null;
               });

               if (tabWrapParent.classList.contains('accordionWrap') && tabWrap.classList.contains('active')) {
                    tabWrap.classList.remove('active');
               } else {
                    tabWrap.classList.add('active');
               }

               if (window.innerWidth >= 1024) {
                    if(tabWrapParent.parentElement.classList.contains('hero-inner-wrap')){
                    }else{
                         const tabContentHeight = content.offsetHeight;
                         const tabParent = tabWrap.parentElement;

                         if (tabParent.classList.contains('tabWrap')) {
                              tabParent.style.height = (tabContentHeight + (60 + 36)) + 'px';
                         }
                    }
                    
               }
          });

          if (tabWrap.classList.contains('active')) {
               content.style.maxHeight = content.scrollHeight + 'px';
          }

               let tabBtn = tabWrap.querySelector('button');
               let tabBtnId = tabBtn.id;

               const trpPlnrSVG = '<div class="tab_icon"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 69.76 87.913"><g transform="translate(-580.186 -224.105)"><path class="svg_blue" d="M90.76,44.88a34.88,34.88,0,0,0-69.76,0c0,23.087,27.336,46.9,34.88,53.033C63.417,91.78,90.76,67.935,90.76,44.88Zm-53.905,0A19.025,19.025,0,1,1,55.88,63.905,19.025,19.025,0,0,1,36.854,44.88Z" transform="translate(559.186 214.105)"></path></g></svg></div>';

               const trackBusSVG = '<div class="tab_icon"><svg id="ART" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 300"><path class="svg_blue" d="M206.75,265.24H192.57v15.67a12.54,12.54,0,0,0,12.53,12.56h8.6a12.55,12.55,0,0,0,12.57-12.53V252.28A21.29,21.29,0,0,1,206.75,265.24Z"></path><path class="svg_blue" d="M31,252.28v28.63a12.56,12.56,0,0,0,12.56,12.56h8.58a12.55,12.55,0,0,0,12.57-12.53v-15.7H50.54A21.27,21.27,0,0,1,31,252.28Z"></path><path class="svg_blue" d="M30.78,237.25a17.47,17.47,0,0,0,2.14,3.54,18.22,18.22,0,0,1-2.14-8.56Z"></path><path class="svg_blue" d="M226.18,237.25v-5a18.24,18.24,0,0,1-2.16,8.56A19,19,0,0,0,226.18,237.25Z"></path><path class="svg_blue" d="M49.94,167.41h73.2V87.82H30.78v58.82C30.78,157.68,39.74,167.41,49.94,167.41Z"></path><path class="svg_blue" d="M207,177.67h-157a25,25,0,0,1-19.16-9.76v64.34a18.22,18.22,0,0,0,2.14,8.56,17.16,17.16,0,0,0,13.88,9.31H210.16A17.21,17.21,0,0,0,224,240.83a18.35,18.35,0,0,0,2.16-8.58V167.91A25,25,0,0,1,207,177.67Zm-36.23,36.8a10.94,10.94,0,0,1,10-6.59H200.6a10.92,10.92,0,0,1,0,21.84H180.75a10.93,10.93,0,0,1-10-15.25Zm-126.34,0a10.92,10.92,0,0,1,10-6.59H74.27a10.92,10.92,0,0,1,0,21.84H54.44a10.91,10.91,0,0,1-10-15.25Z"></path><path class="svg_blue" d="M15.69,84H8c-3.28,0-6,2.11-6,4.69v38.19c0,2.6,2.68,4.71,6,4.71h7.71c3.3,0,6-2.11,6-4.71V88.67C21.58,86.09,19,84,15.69,84Z"></path><path class="svg_blue" d="M232.28,6.61a64.7,64.7,0,0,0-59.63,39.72c-.43,1-.82,2.05-1.21,3.1H49A18.19,18.19,0,0,0,30.78,67.56v9.49h53.3a8.4,8.4,0,0,1,5.46-14.77h76.13a8.32,8.32,0,0,1,2.57.41,63.21,63.21,0,0,0-.57,8.47,80.32,80.32,0,0,0,1.15,12.09c.16.59,1.05,3.55,1.21,4.38H134.1v79.76H207c10.21,0,19.2-9.73,19.2-20.84V135.47c2,.19,4,.3,6.1.3A64.63,64.63,0,1,0,234.42,6.53c-.72,0-1.43,0-2.14,0ZM249.37,124.3A55.44,55.44,0,0,1,232.28,127h-2.54a23.44,23.44,0,0,1-3.54-.27,55.77,55.77,0,0,1-48.32-43.34c-.23-1-.44-2.05-.6-3.1s-.32-2-.43-3.1a57.74,57.74,0,0,1-.3-5.88A55.65,55.65,0,0,1,181,49.5c.45-1,.94-2.07,1.44-3.1a55.76,55.76,0,1,1,67,78Z"></path><path class="svg_blue" d="M261.4,69.23H236.71V35.43a4.43,4.43,0,0,0-8.86,0v38a4.4,4.4,0,0,0,1.41,3.21,5.44,5.44,0,0,0,.78.58,4.35,4.35,0,0,0,2.57.85H261.4a4.43,4.43,0,1,0,0-8.86Z"></path></svg></div>';

               const seeAlertsSVG = '<div class="tab_icon"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 93.981 88.563" class="alert_icon"><g transform="translate(-1029.168 -222.761)"><path class="svg_blue" d="M92.075,68.365,58.83,7.239a13.768,13.768,0,0,0-23.677,0c-.019.032-.035.065-.054.1L1.955,68.268a13.76,13.76,0,0,0,11.836,20.8h66.39A13.762,13.762,0,0,0,92.075,68.365ZM46.991,78.049a8.26,8.26,0,1,1,8.26-8.26A8.269,8.269,0,0,1,46.991,78.049Zm8.26-30.287a8.26,8.26,0,1,1-16.52,0V31.242a8.26,8.26,0,1,1,16.52,0Zm0,0" transform="translate(1029.167 222.261)"></path></g></svg></div>';

               const viewSchdls = '<div class="tab_icon"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 116.595 93.235" class="pin_map_icon"><g transform="translate(-1274.529 -221.899)"><path class="svg_blue" d="M86.821,183.627l9.528-39.964-.178-.254L81.517,148.3,58.466,192.5Z" transform="translate(1216.063 122.177)"></path><path class="svg_blue" d="M129.5,164.842a100.115,100.115,0,0,1-14.786-14.536l-8.538,35.847,23.324,8.971Z" transform="translate(1201.06 120.008)"></path><path class="svg_blue" d="M161.272,150.306a100.116,100.116,0,0,1-14.786,14.536v30.285l23.324-8.974Z" transform="translate(1188.382 120.008)"></path><path class="svg_blue" d="M211.064,192.513l-21.156-44.241L173.2,143.249l-.25.379,9.527,39.964Z" transform="translate(1180.06 122.228)"></path><path class="svg_blue" d="M156.153,102.785a23.7,23.7,0,0,0-47.392,0c0,15.688,18.578,31.874,23.7,36.04,5.122-4.171,23.7-20.371,23.7-36.04Zm-36.632,0a12.928,12.928,0,1,1,12.929,12.928h0a12.928,12.928,0,0,1-12.914-12.928Z" transform="translate(1200.246 142.219)"></path></g></svg></div>';

               if(tabBtnId === "tab-plan-your-trip-button"){
                    tabBtn.insertAdjacentHTML('afterbegin', trpPlnrSVG);
               } else if(tabBtnId === "tab-track-your-bus-button"){
                    tabBtn.insertAdjacentHTML('afterbegin', trackBusSVG);
               }else if(tabBtnId === "tab-see-latest-alerts-button"){
                    tabBtn.insertAdjacentHTML('afterbegin', seeAlertsSVG);
               }else if(tabBtnId === "tab-view-bus-schedules-button"){
                    tabBtn.insertAdjacentHTML('afterbegin', viewSchdls);
               }else{
               }
     });
}

document.addEventListener('DOMContentLoaded', elementLoadItems);

// Function to append span to p in each .grid_card
function appendSpanToP(node) {
     if (node.classList.contains('grid_card')) {
          const pElement = node.querySelector('p');
          const spanElement = node.querySelector('span');
          if (pElement && spanElement) {
               pElement.appendChild(spanElement);
          }
     }
}

// Function to apply the class 'active' to the first child of .tabWrap
function activateFirstTabWrap(node) {
     if (node.classList.contains('tabWrap')) {
          const firstChild = node.firstElementChild;
          const nodeParent = node.parentElement;
          firstChild.classList.add('active');

          if (window.innerWidth >= 1024) {
               if(nodeParent.classList.contains('hero-inner-wrap')){
               }else{
                    const tabContent = firstChild.querySelector('.tab-content');
                    if (tabContent) {
                         const tabContentHeight = tabContent.offsetHeight;
                         node.style.height = (tabContentHeight + (60 + 36)) + 'px';
                    }
               }
          }
     }
}

// Create a MutationObserver instance
const observer = new MutationObserver((mutationsList, observer) => {
     for (let mutation of mutationsList) {
          if (mutation.type === 'childList') {
               mutation.addedNodes.forEach(node => {
                    if (node.nodeType === Node.ELEMENT_NODE) {
                         activateFirstTabWrap(node);
                    }
               });
          }
     }
});

// Start observing the document with the configured parameters
observer.observe(document, { childList: true, subtree: true });