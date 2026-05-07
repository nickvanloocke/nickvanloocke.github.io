/*
 *
 * Cursor follow
 *
 */

gsap.set('.follow', {xPercent: -50, yPercent: -50});

let xTo = gsap.quickTo('.follow', 'x', {duration: 0.3, ease: 'power3'}),
    yTo = gsap.quickTo('.follow', 'y', {duration: 0.3, ease: 'power3'});

window.addEventListener('mousemove', e => {
  xTo(e.clientX);
  yTo(e.clientY);
});




/*
 *
 * Title animation (vanilla js)
 *
 */

const path = document.querySelector(".js-logo-svg");
const length = path.getTotalLength();

path.style.strokeDasharray = length;
path.style.strokeDashoffset = length;

path.style.animation = "draw 1s cubic-bezier(0.65, 0, 0.35, 1) forwards";




/*
 *
 * Title animation (vanilla js)
 *
 */

function typewriterEffect(element, text, delay = 200) {
  element.innerHTML = '';

  text.split('').forEach((char, index) => {
    if (char === ' ') {
      element.appendChild(document.createTextNode(char));
    } else {
        let span = document.createElement('span');
        span.textContent = char;
        span.style.opacity = 0;
        span.style.transition = 'opacity 0.15s ease-in';

        setTimeout(() => {
            span.style.opacity = 1;
        }, index * delay);

        element.appendChild(span);
    }
    });
}

const isReduced = window.matchMedia(`(prefers-reduced-motion: reduce)`) === true || window.matchMedia(`(prefers-reduced-motion: reduce)`).matches === true;

if (!!isReduced) {
  // No to the animation
} else {
  // Yes to the animation
  const titlet = document.querySelector('.js-typewriter');
  const textContent = titlet.textContent;
  typewriterEffect(titlet, textContent, 40);
}




/*
 *
 * Page load
 *
 */
window.addEventListener('load', function(event) {
  document.querySelector('body').classList.add('is-loaded');

  setTimeout(() => { document.querySelector('body').classList.add('is-content-loaded'); }, 1250);
});




/*
 *
 * Switch (dark/light mode)
 *
 */
const darkLightBtn = '.js-switch';
const body = 'body';

// Check which mode is active
if (window.matchMedia) {

  if(window.matchMedia('(prefers-color-scheme: dark)').matches){
    // Dark
    document.querySelector(body).classList.toggle('dark-mode');
  } else {
    // Light
    document.querySelector(body).classList.toggle('light-mode');
  }

} else {
  document.querySelector(body).classList.toggle('light-mode'); // Default
}




/*
 *
 * Scroll down button
 *
 */

function setupScrollOnClick(scrollBtnSelector, targetSelector) {
  const scrollBtn = document.querySelector(scrollBtnSelector);
  const targetElement = document.querySelector(targetSelector);

  if (scrollBtn && targetElement) {
    scrollBtn.addEventListener('click', function (e) {
      targetElement.scrollIntoView({ behavior: "smooth", block: "start" });
    });
  }
}

setupScrollOnClick('.js-scroll-down-intro', '.js-intro-container');
setupScrollOnClick('.js-scroll-down-content', '.js-content-container');




/*
 *
 * Is Safari browser
 *
 */

const isSafari =/^((?!chrome|android).)*safari/i.test(navigator.userAgent);

if (isSafari) {
  document.documentElement.classList.add('is-safari');
}
