

const toggleButton=document.getElementById('day-night');
const routineImg=document.getElementById('routine-hero');
const burger=document.getElementById("hamburger-menu");
const yoga1=document.getElementById("yogaImg1")
const yoga4=document.getElementById("yogaImg4")
const yoga2=document.getElementById("yogaImg2")
const yoga3=document.getElementById("yogaImg3")

toggleButton.onclick = function(){
    document.body.classList.toggle('night-mode')
    if (document.body.classList.contains('night-mode')){
        toggleButton.src="./img/menu-sun.png";
        toggleButton.alt="Switch to day mode";
         // Change routineImg for night mode
        routineImg.src = "./img/dark-routine.png"; // Path to your night image
        // burger.src="./img/burger-icon.png";
        yoga1.src="./img/follow-yoga-1-night.png";
        yoga4.src="./img/follow-yoga-2-night.png";
        yoga2.src="./img/follow-yoga-3-night.png";
        yoga3.src="./img/follow-yoga-4-night.png";
    }else{
        toggleButton.src="./img/hamburger-menu-moon.png";
        toggleButton.alt="switch to night mode";
        routineImg.src = "./img/day-routine.png"; // Path to your night image
        // burger.src="./img/burger-icon-night.png"
        yoga1.src="./img/follow-yoga-1.png";
        yoga4.src="./img/follow-yoga-4.png";
        yoga2.src="./img/follow-yoga-2.png";
        yoga3.src="./img/follow-yoga-3.png";

    }
}
