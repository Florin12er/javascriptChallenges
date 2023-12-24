/**
 * 🎄 Challenge:
 * 1. The Christmas tree's lights should switch
 *    on and off every 800 miliseconds.
 *
 * Stretch Goal:
 *    Make the blue and red lights flash alternately.
 **/
const lights = document.querySelectorAll(".lights");

//the commneted code is for the simple light on light off code uncomment it if you want to try but do not for get to comment the code below.

/**function toggleLights() {
    lights.forEach(light => {
        light.classList.toggle('lights-on');
    });
}
//setInterval(toggleLights, 800);
**/

const redLights = document.querySelectorAll(".lights.red");
const blueLights = document.querySelectorAll(".lights.blue");

function toggleLights(lights) {
  lights.forEach((light) => {
    light.classList.toggle("lights-on");
  });
}
setInterval(() => {
  toggleLights(redLights);
  setTimeout(() => {
    toggleLights(blueLights);
  }, 400);
}, 800);
