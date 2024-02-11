document.getElementById('hamburger-menu').addEventListener('click', function() {
    var menu = document.getElementById('menu-items');
    var menuIcon = document.getElementById('hamburger-menu');
    // Toggle menu display
    if (menu.style.display === 'none') {
        menu.style.display = 'block';
        // Change the icon to the close icon
        menuIcon.src = '../img/Vector-close-correct.png';
    } else {
        menu.style.display = 'none';
        // Change the icon back to the hamburger menu icon
        menuIcon.src = '../img/burger-icon.png';
    }
});
