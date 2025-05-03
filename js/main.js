let buttonSideBar = document.getElementById('sidebarToggle');
let closeSideBar = document.getElementById('closeSettings');
let settings = document.getElementById('settings');
let projectSettings = document.getElementById('project_settings');
let head = document.getElementById('head');
let hero = document.getElementById('hero');
let card = document.getElementById('card');
let img_user = document.getElementById('img_user');
let logout = document.getElementById('logout');

buttonSideBar.addEventListener('click', function () {
    settings.classList.add('show');
    projectSettings.classList.add('show');
    head.classList.add('hide-section');
    hero.classList.add('hide-section');
    card.classList.add('hide-section');
    closeSideBar.classList.add('show');
});

closeSideBar.addEventListener('click', function () {
    settings.classList.remove('show');
    projectSettings.classList.remove('show');
    head.classList.remove('hide-section');
    hero.classList.remove('hide-section');
    card.classList.remove('hide-section');
    closeSideBar.classList.remove('show');
});

img_user.addEventListener('click', function(){
    logout.classList.toggle('show');
});

logout.addEventListener('click', function(){
    window.location.href = 'index.html';
});