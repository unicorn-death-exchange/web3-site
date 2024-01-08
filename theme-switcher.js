function switchTheme(themeName) {
    document.documentElement.className = themeName;
    localStorage.setItem('theme', themeName);
}
window.onload = () => {
    const savedTheme = localStorage.getItem('theme') || 'dark-theme';
    switchTheme(savedTheme);
    document.getElementsByClassName('tablinks')[0].click(); // Open the first tab by default
};