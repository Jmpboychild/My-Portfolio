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