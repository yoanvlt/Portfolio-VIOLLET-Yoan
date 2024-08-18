window.addEventListener('scroll', function() {
    var backToTop = document.getElementById('back-to-top');
    if (window.pageYOffset > 100) {
        backToTop.classList.add('show');
    } else {
        backToTop.classList.remove('show');
    }
});

