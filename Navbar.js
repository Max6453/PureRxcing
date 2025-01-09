      // Dropdown hover effect with Tailwind CSS classes
      const dropdown = document.querySelector('.relative');
      dropdown.addEventListener('mouseover', function() {
        dropdown.querySelector('.absolute').classList.remove('block');
      });
      dropdown.addEventListener('mouseleave', function() {
        dropdown.querySelector('.absolute').classList.add('hidden');
      });
  
  //script for navbar
  const menuButton = document.getElementById('menu-button');
  const menu = document.getElementById('menu');

  menuButton.addEventListener('click', () => {
      // Toggle the menu visibility
      const isMenuOpen = menu.style.maxHeight;

      if (isMenuOpen) {
          menu.style.maxHeight = null; // Close the menu
      } else {
          menu.style.maxHeight = menu.scrollHeight + "px"; // Open the menu
      }
  });

  //script for navbar scroll
  window.addEventListener('scroll', () => {
    const currentScrollY = window.scrollY;

    if (currentScrollY > 50 && currentScrollY > lastScrollY) {
      // Scrolling down
      navbar.classList.remove('hidden', 'animate-slide-up');
      navbar.classList.add('animate-slide-down');
    } else if (currentScrollY < lastScrollY && currentScrollY <= 50) {
      // Scrolling up
      navbar.classList.remove('animate-slide-down');
      navbar.classList.add('animate-slide-up');
      setTimeout(() => navbar.classList.add('hidden'), 500); // Hide after animation
    }

    lastScrollY = currentScrollY;
  });