//open side menu on smaller screens
const sideMenu = document.getElementById('sidemenu');

function openmenu() {
  sideMenu.style.right = '0';
}
function closemenu() {
  sideMenu.style.right = '-200px';
}

// about me tabs
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

// title text typing effect
const aText = new Array('WELCOME TO MY PORTFOLIO WEBSITE!');
const iSpeed = 100; // time delay of print out
let iIndex = 0; // start printing array at this position
let iArrLength = aText[0].length; // the length of the text array
const iScrollAt = 20; // start scrolling up at this many lines

let iTextPos = 0; // initialise text position
let sContents = ''; // initialise contents variable
let iRow; // initialise current row

let cursorVisible = false; // Initialize cursor visibility

function toggleCursor() {
  const cursor = document.getElementById('cursor');
  cursor.style.visibility = cursorVisible ? 'hidden' : 'visible';
  cursorVisible = !cursorVisible;
}

function typewriter() {
  sContents = '';
  iRow = Math.max(0, iIndex - iScrollAt);
  const destination = document.getElementById('typedtext');
  const cursor = '<span id="cursor">|</span>'; // Cursor element

  while (iRow < iIndex) {
    sContents += aText[iRow++] + '<br />';
  }

  // Set the content with the cursor
  destination.innerHTML =
    sContents + aText[iIndex].substring(0, iTextPos) + cursor;

  // Toggle cursor visibility after typing animation is complete
  if (iTextPos === iArrLength) {
    toggleCursor();
  }

  if (iTextPos++ == iArrLength) {
    iTextPos = 0;
    iIndex++;
    if (iIndex != aText.length) {
      iArrLength = aText[iIndex].length;
      setTimeout(typewriter, 500);
    }
  } else {
    setTimeout(typewriter, iSpeed);
  }
}

typewriter();

// nav menu
const containerHeader = document.querySelector('.container-header');
const scrollWatcher = document.createElement('div');

scrollWatcher.setAttribute('data-scroll-watcher', '');
containerHeader.before(scrollWatcher);

const navObserver = new IntersectionObserver(entries => {
  containerHeader.classList.toggle('sticking', !entries[0].isIntersecting);
});

navObserver.observe(scrollWatcher);
