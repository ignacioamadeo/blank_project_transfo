function hoverEffect() {
  const menuIcons = document.querySelectorAll('.sidebar-menu-icons');
  menuIcons.forEach(icon => {
    const span = icon.querySelector('.sidebar-menu-hover');
    icon.addEventListener('mouseover', () => {
      span.style.opacity = 1;
      span.style.pointerEvents = 'auto';
    });
    icon.addEventListener('mouseout', () => {
      span.style.opacity = 0;
      span.style.pointerEvents = 'none';
    });
  });
}

// Call the function to add the hover effect to the sidebar menu
hoverEffect();
