/*--------------------
Vars
--------------------*/
let progress = 0;
let active = 0;

/*--------------------
Constants
--------------------*/
const speedWheel = 0.02;
const speedDrag = -0.1;

/*--------------------
Get Z
--------------------*/
const getZindex = (array, index) => (
  array.map((_, i) => (index === i) ? array.length : array.length - Math.abs(index - i))
);

/*--------------------
Items
--------------------*/
const $items = document.querySelectorAll('.carousel-item');

const displayItems = (item, index, active) => {
  const zIndex = getZindex([...$items], active)[index];
  item.style.setProperty('--zIndex', zIndex);
  item.style.setProperty('--active', (index - active) / $items.length);
};

/*--------------------
Animate
--------------------*/
const animate = () => {
  progress = Math.max(0, Math.min(progress, 100));
  active = Math.floor(progress / 100 * ($items.length - 1));
  
  $items.forEach((item, index) => displayItems(item, index, active));
};
animate();

/*--------------------
Auto Play
--------------------*/
const autoPlay = () => {
  setInterval(() => {
    progress += 100 / $items.length;
    if (progress > 100) {
      progress = 0;
    }
    animate();
  }, 3000); // Cambiar cada 3 segundos
};
autoPlay();

// Removed mouse and touch event handlers for cursor interactions.
