const sideNav = document.getElementById('sideNav');
const sideNavOpen = document.getElementById('sideNavOpen');
const mainContent = document.getElementById('mainContent');
const myDetails = document.getElementById('myDetails');
const detailsButton = document.getElementById('detailsButton');
const myDetailsOverlay = document.getElementById('myDetailsOverlay');

function closeNav() {
    sideNav.style.display = "none";
    sideNavOpen.style.display = "block";
}

function openSideNav(){
    sideNavOpen.style.display = "none";
    sideNav.style.display = "block";
}

detailsButton.addEventListener('click', (event)=>{
    myDetails.style.display = 'block';
    myDetailsOverlay.style.display = 'block';
    event.stopPropagation();
});

document.addEventListener('click', (event) =>{
    if(myDetails.style.display = 'block' && !myDetails.contains(event.target)){
        myDetails.style.display = 'none';
        myDetailsOverlay.style.display = 'none';
    }
});


//Content navigation
const introButton = document.getElementById('introBtn');
const nationButton = document.getElementById('nationBtn');
const educationButton = document.getElementById('eduBtn');
const expertiseButton = document.getElementById('expertBtn');

const intro = document.getElementById('introContent');
const nation = document.getElementById('nationContent');
const education = document.getElementById('educationContent');
const expertise = document.getElementById('expetiseContent')

introButton.addEventListener('click', (event)=> {
    intro.style.display = 'block';
    nation.style.display = 'none';
    education.style.display = 'none';
    expertise.style.display = 'none';
});

nationButton.addEventListener('click', (event)=> {
    intro.style.display = 'none';
    nation.style.display = 'block';
    education.style.display = 'none';
    expertise.style.display = 'none';
});

educationButton.addEventListener('click', (event)=> {
    intro.style.display = 'none';
    nation.style.display = 'none';
    education.style.display = 'block';
    expertise.style.display = 'none';
});