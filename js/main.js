//navigation link animations
const signInButton = document.getElementById('sign-in');
const homeButton = document.getElementById('nav-home');
const aboutButton = document.getElementById('nav-about');
const contactButton = document.getElementById('nav-contact');

function animateNavigation(target, scale, duration, elasticity, color) {
  anime.remove(target);
  if (target === homeButton || target === aboutButton || target === contactButton){
    anime ({
      targets: target,
      scale: scale,
      duration: duration,
      elasticity: elasticity,
      color: color
    });
  } else {
    anime ({
      targets: target,
      scale: scale,
      duration: duration,
      elasticity: elasticity
    });
  }
}

const enterSignInButton = () => {animateNavigation(signInButton, 1.1, 500, 500, '#fcb3b1')};
const leaveSignInButton = () => {animateNavigation(signInButton, 1.0, 300, 300, '#fcb3b1')};
signInButton.addEventListener('mouseenter', enterSignInButton, false);
signInButton.addEventListener('mouseleave', leaveSignInButton, false);

const enterHomeButton = () => {animateNavigation(homeButton, 1.1, 500, 500, '#fcb3b1')};
const leaveHomeButton = () => {animateNavigation(homeButton, 1.0, 300, 300, '#204d64')};
homeButton.addEventListener('mouseenter', enterHomeButton, false);
homeButton.addEventListener('mouseleave', leaveHomeButton, false);

const enterAboutButton = () => {animateNavigation(aboutButton, 1.1, 500, 500, '#fcb3b1')};
const leaveAboutButton = () => {animateNavigation(aboutButton, 1.0, 300, 300, '#204d64')};
aboutButton.addEventListener('mouseenter', enterAboutButton, false);
aboutButton.addEventListener('mouseleave', leaveAboutButton, false);

const enterContactButton = () => {animateNavigation(contactButton, 1.1, 500, 500, '#fcb3b1')};
const leaveContactButton = () => {animateNavigation(contactButton, 1.0, 300, 300, '#204d64')};
contactButton.addEventListener('mouseenter', enterContactButton, false);
contactButton.addEventListener('mouseleave', leaveContactButton, false);


//social icon animation
const githubDiv = document.getElementById('github');
const githubIcon = document.getElementById('github-social');
const instagramDiv = document.getElementById('instagram');
const instagramIcon = document.getElementById('instagram-social');

function animateSocial(target, height, duration) {
    anime ({
      targets: target,
      translateY: height,
      duration: duration
    });
  }

const enterGithubDiv = () => {animateSocial(githubIcon, -10, 500)};
const leaveGithubDiv = () => {animateSocial(githubIcon, 0, 300)};
githubDiv.addEventListener('mouseenter', enterGithubDiv, false);
githubDiv.addEventListener('mouseleave', leaveGithubDiv, false);

const enterInstagramDiv = () => {animateSocial(instagramIcon, -10, 500)};
const leaveInstagramDiv = () => {animateSocial(instagramIcon, 0, 300)};
instagramDiv.addEventListener('mouseenter', enterInstagramDiv, false);
instagramDiv.addEventListener('mouseleave', leaveInstagramDiv, false);


const body = document.body;

function darkMode() {
  body.style.backgroundColor = '#000';
}

function lightMode() {
  body.style.backgroundColor = '#fff';
}

/*
const circle = document.getElementById('circle');

const zChange = () => {circle.style.zIndex = "-10"}

function pageTrans() {
  anime ({
    targets: circle,
    opacity: 0,
    easing: 'easeInOutQuint',
    duration: 1000
  });
  setTimeout(zChange, 1000);
}

aboutButton.addEventListener('click', pageTrans, false);


function navTrans() {
    anime ({
      targets: [signInButton, contactButton, aboutButton, homeButton],
      translateY: 200,
      delay: anime.stagger(100)
    });
}

const main = document.getElementById('main');

function fadeIn() {
  anime ({
    targets: main,
    opacity: 1,
    duration: 10000
  })
}
*/

const background = document.getElementById('background');
const halfWidth = window.innerWidth / 2;
const main = document.getElementById('main');

function finishTrans(){
    body.style.backgroundColor = 'white';
}

function dropTrans(){
  let tl = anime.timeline({
    targets: background
  })
  tl
  .add({
    delay: 1000,
    translateX: (halfWidth+25),
    easing: 'easeOutQuad',
    duration: 700
  })
  tl
  .add({
    borderRadius: ['50%', '0%'],
  })
  tl.add({
    easing: 'easeInExpo',
    translateX: '50px',
    translateY: '-50vh',
    width: '100%',
    height: '100vh',
    duration: 700
  })
  tl.add({
    opacity: 1
  })
  tl.add({
    targets: main,
    opacity: 1
  });
  setTimeout(finishTrans, 5000);
}

dropTrans();



let navButton = document.getElementById("nav-bar");
let navUl = document.getElementById("nav-ul");


function displayNavSetup() {
  window.scrollTo(0, 0);
}

let displayNavClickCount = 0;
function displayNav() {
  displayNavClickCount++;
  if (displayNavClickCount === 1){
    setTimeout(displayNavSetup, 100);
    navUl.style.display = "flex";
    navUl.style.zIndex = "10";
    navUl.style.position = "static";
  }
  else if (navUl.style.display === 'none'){
    setTimeout(displayNavSetup, 100);
    navUl.style.display = "flex";
    navUl.style.zIndex = "10";
    navUl.style.position = "static";
  } else {
    navUl.style.display = "none";
    navUl.style.zIndex = "-100";
    navUl.style.position = "fixed";
  }

}

navButton.addEventListener('click', displayNav, false);





















//mission statement animation
let missionWrapper = document.getElementById('mission');
missionWrapper.innerHTML = missionWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");
anime.timeline({loop: false})
  .add({
    targets: 'mission, .letter',
    opacity: [0,1],
    easing: "easeInOutQuad",
    duration: 500,
    delay: (el, i) => 50 * (i+1)
  });
