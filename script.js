document.addEventListener('DOMContentLoaded', () => {
    feather.replace();

    const navbar = document.querySelector('.navbar__menu');
    const navItems = document.querySelectorAll('.navbar__item');
    const gooey = document.querySelector('.navbar__goo');

    // Mobile Elements
    const mobileToggle = document.querySelector('.mobile-toggle');
    const mobileDrawer = document.querySelector('.mobile-drawer');
    const closeDrawer = document.querySelector('.close-drawer');

    // Initial position (first active item)
    const activeItem = document.querySelector('.navbar__item.active');
    if (activeItem) {
        moveGooey(activeItem);
    }

    // Hover Event
    navItems.forEach(item => {
        item.addEventListener('mouseenter', () => {
            moveGooey(item);
        });

        // Ensure click sets active state permanently
        item.addEventListener('click', (e) => {
            // Remove active class from all
            navItems.forEach(nav => nav.classList.remove('active'));
            // Add to clicked
            item.classList.add('active');
        });
    });

    // Reset to active item when mouse leaves the entire navbar
    navbar.addEventListener('mouseleave', () => {
        const currentActive = document.querySelector('.navbar__item.active');
        if (currentActive) {
            moveGooey(currentActive);
        }
    });

    function moveGooey(item) {
        const width = item.offsetWidth;
        const left = item.offsetLeft;

        gooey.style.width = `${width}px`;
        gooey.style.left = `${left}px`;
    }

    // Mobile Menu Logic
    mobileToggle.addEventListener('click', () => {
        mobileDrawer.classList.add('open');
    });

    closeDrawer.addEventListener('click', () => {
        mobileDrawer.classList.remove('open');
    });

    // Close on click outside
    document.addEventListener('click', (e) => {
        if (!mobileDrawer.contains(e.target) && !mobileToggle.contains(e.target) && mobileDrawer.classList.contains('open')) {
            mobileDrawer.classList.remove('open');
        }
    });
});
