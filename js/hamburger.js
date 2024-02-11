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



// Define a named function to handle layout adjustments on resize
function layoutResize() {
    function adjustLayout() {
        var menu = document.getElementById('menu-items');
        var menuIcon = document.getElementById('hamburger-menu');
        // If screen is wider than 768px, hide the menu and switch to burger icon
        if(window.innerWidth > 768){
            menu.style.display = 'none'; // Make sure to hide the menu on large screens
            menuIcon.src = '../img/burger-icon.png';
        } else {
            // Optional: Define behavior for smaller screens if necessary
        }
    }

    // Add event listener for window resize
    window.addEventListener('resize', adjustLayout);

    // Call adjustLayout at script load to apply the correct state based on the current window size
    adjustLayout();
}

// Invoke the layoutResize function to set everything up
layoutResize();

