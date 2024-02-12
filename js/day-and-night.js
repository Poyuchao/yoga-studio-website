

const toggleButton=document.getElementById('day-night');
const routineImg=document.getElementById('routine-hero')


toggleButton.onclick = function(){
    document.body.classList.toggle('night-mode')
    if (document.body.classList.contains('night-mode')){
        toggleButton.src="./img/menu-sun.png";
        toggleButton.alt="Switch to day mode";
         // Change routineImg for night mode
        routineImg.src = "./img/dark-routine.png"; // Path to your night image
       
    }else{
        toggleButton.src="./img/hamburger-menu-moon.png";
        toggleButton.alt="switch to night mode"
        routineImg.src = "./img/day-routine.png"; // Path to your night image
    }
}
