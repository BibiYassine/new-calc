function toggleMenu() {
    console.log('dsgfgfdsfgd')
    var nav = document.querySelector('nav ul');
    if (nav.style.display === 'none' || nav.style.display === '') {
        nav.style.display = 'block';
    } else {
        nav.style.display = 'none';
    }
}