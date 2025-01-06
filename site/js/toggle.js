document.addEventListener('DOMContentLoaded', function () {
  const toggleSwitch = document.querySelector('.md-header__button--toggle');

  toggleSwitch.addEventListener('click', () => {
    const currentScheme = document.documentElement.getAttribute('data-md-color-scheme');
    const newScheme = currentScheme === 'default' ? 'slate' : 'default';
    document.documentElement.setAttribute('data-md-color-scheme', newScheme);
    localStorage.setItem('color-scheme', newScheme);
  });

  // Set the color scheme based on localStorage
  const savedScheme = localStorage.getItem('color-scheme') || 'default';
  document.documentElement.setAttribute('data-md-color-scheme', savedScheme);
});
