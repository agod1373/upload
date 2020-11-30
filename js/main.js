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



/*
let animation = () => anime ({
  targets: '.nav-ul',
  translateX: 250,
  duration: 3000,
});

animation();
*/