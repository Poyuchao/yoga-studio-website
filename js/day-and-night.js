const toggleButton=document.getElementById('day-night');

toggleButton.onclick = function(){
    document.body.classList.toggle('night-mode')
    if (document.body.classList.contains('night-mode')){
        toggleButton.src="./img/menu-sun.png";
        toggleButton.alt="Switch to day mode";
    }else{
        toggleButton.src="./img/hamburger-menu-moon.png";
        toggleButton.alt="switch to night mode"
    }
}
