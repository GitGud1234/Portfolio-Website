const tablinks = document.getElementsByClassName('tab-links');
const tabcontents = document.getElementsByClassName('tab-contents');

function opentab(event, tabname) {
  for (tablink of tablinks) {
    tablink.classList.remove('active-link');
  }
  for (tabcontent of tabcontents) {
    tabcontent.classList.remove('active-tab');
  }
  event.currentTarget.classList.add('active-link');
  document.getElementById(tabname).classList.add('active-tab');
}

//text type
/*
const type = document.getElementById('header-text');

const typeWriter = new typeWriter(title, {
  loop: true,
  delay: 75,
});

typeWriter
  .pauseFor(2000)
  .typeString('WELCOME TO MY PORTFOLIO WEBSITE')
  .pauseFor(1000)
  .start();
*/
