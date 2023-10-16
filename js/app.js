
// code for menu list up and down

let down = document.getElementById('open');
let sublist = document.querySelector('.sublist');
let up = document.getElementById('close');
let arrow = false;

down.addEventListener('click', () => {
    arrow = !arrow; // Toggle the arrow value

    if (arrow) {
        sublist.style.display = 'block';
        down.style.display = 'none';
        up.style.display = 'block';
    } else {
        sublist.style.display = 'none';
        down.style.display = 'block';
        up.style.display = 'none';
    }
});
up.addEventListener('click', () => {
    arrow = !arrow; // Toggle the arrow value

    if (arrow) {
        sublist.style.display = 'block';
        down.style.display = 'none';
        up.style.display = 'block';
    } else {
        sublist.style.display = 'none';
        down.style.display = 'block';
        up.style.display = 'none';
    }
});





// code for menu list up and down



let down2 = document.getElementById('open2');
let sublist2 = document.querySelector('.sublist2');
let up2 = document.getElementById('close2');
let arrow2 = false;

down2.addEventListener('click', () => {
    arrow2 = !arrow2; // Toggle the arrow value

    if (arrow2) {
        sublist2.style.display = 'block';
        down2.style.display = 'none';
        up2.style.display = 'block';
    } else {
        sublist2.style.display = 'none';
        down2.style.display = 'block';
        up2.style.display = 'none';
    }
});
up2.addEventListener('click', () => {
    arrow2 = !arrow2; // Toggle the arrow value

    if (arrow2) {
        sublist2.style.display = 'block';
        down2.style.display = 'none';
        up2.style.display = 'block';
    } else {
        sublist2.style.display = 'none';
        down2.style.display = 'block';
        up2.style.display = 'none';
    }
});


// code for toggle
let menu_toggle = document.getElementById('toggle-menu');
let close_menu = document.getElementById('close-menu');
let container = document.querySelector('.container2');
let toggle = false;

menu_toggle.addEventListener('click', () => {
    toggle = !toggle; // Toggle the toggle value

    if (toggle) {
        menu_toggle.style.display = 'none';
        close_menu.style.display = 'block';
        container.classList.add('opencontainer2');
    } else {
        menu_toggle.style.display = 'block';
        close_menu.style.display = 'none';
        container.classList.remove('opencontainer2');
    }
});

close_menu.addEventListener('click', () => {
    toggle = !toggle; // Toggle the toggle value

    if (toggle) {
        menu_toggle.style.display = 'none';
        close_menu.style.display = 'block';
        container.classList.add('opencontainer2');
    } else {
        menu_toggle.style.display = 'block';
        close_menu.style.display = 'none';
        container.classList.remove('opencontainer2');
    }
});


// preloader dispaly
let load = document.querySelector('.loader-class');

function loader() {
    load.style.display = 'none';
};

