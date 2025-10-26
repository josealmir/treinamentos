document.addEventListener('DOMContentLoaded', function() {
    // Mobile menu toggle (existing)
    const mobileMenuButton = document.getElementById('mobile-menu-button');
    const mobileMenu = document.getElementById('mobile-menu');
    const iconOpen = document.getElementById('icon-open');
    const iconClose = document.getElementById('icon-close');

    if (mobileMenuButton && mobileMenu) {
        mobileMenuButton.addEventListener('click', function(e) {
            e.stopPropagation();
            mobileMenu.classList.toggle('hidden');
            iconOpen.classList.toggle('hidden');
            iconClose.classList.toggle('hidden');
        });
    }

    // Mobile dropdowns (existing)
    const dropdownButtons = document.querySelectorAll('[data-dropdown]');
    dropdownButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            e.stopPropagation();
            const dropdownContent = this.nextElementSibling;
            if (!dropdownContent) return;
            dropdownContent.classList.toggle('hidden');
            const svg = this.querySelector('svg');
            if (svg) svg.classList.toggle('rotate-180');
        });
    });

    // Desktop dropdowns: show on hover (CSS) and also support click to toggle
    const desktopButtons = document.querySelectorAll('[data-dropdown-desktop]');
    function closeAllDesktopMenus() {
        document.querySelectorAll('.desktop-dropdown-menu').forEach(menu => {
            menu.classList.add('opacity-0','invisible');
            menu.classList.remove('opacity-100','visible','block');
        });
        desktopButtons.forEach(b => b.setAttribute('aria-expanded','false'));
    }

    desktopButtons.forEach(btn => {
        const menu = btn.nextElementSibling;
        if (!menu) return;

        // click toggles menu (useful for touch/keyboard)
        btn.addEventListener('click', function(e) {
            e.stopPropagation();
            const isOpen = menu.classList.contains('opacity-100') || menu.classList.contains('visible');
            closeAllDesktopMenus();
            if (!isOpen) {
                menu.classList.remove('opacity-0','invisible');
                menu.classList.add('opacity-100','visible','block');
                btn.setAttribute('aria-expanded','true');
            } else {
                btn.setAttribute('aria-expanded','false');
            }
        });

        // keep menu open while hovering parent (no JS needed; CSS group-hover not used here)
        // but close when pointer leaves menu area
        menu.addEventListener('mouseleave', function() {
            menu.classList.add('opacity-0','invisible');
            menu.classList.remove('opacity-100','visible','block');
            btn.setAttribute('aria-expanded','false');
        });
    });

    // close menus on outside click or Escape
    document.addEventListener('click', function() {
        // close mobile and desktop menus
        if (mobileMenu && !mobileMenu.classList.contains('hidden')) {
            mobileMenu.classList.add('hidden');
            iconOpen.classList.remove('hidden');
            iconClose.classList.add('hidden');
        }
        closeAllDesktopMenus();
    });

    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            closeAllDesktopMenus();
            if (mobileMenu) mobileMenu.classList.add('hidden');
        }
    });
});