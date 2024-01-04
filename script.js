const menuButtonEl = document.getElementById('menuButton');

function openMenu(){
    const nav = document.querySelector('nav');
    nav.classList.toggle('open');
}


menuButtonEl.addEventListener('click',openMenu);


