document.addEventListener('DOMContentLoaded', function() {
    const enFlag = document.getElementById('enFlag');
    const ruFlag = document.getElementById('ruFlag');
    
    const currentLanguage = window.location.pathname.includes('/ru') ? 'ru' : 'en';
    
    if (currentLanguage === 'en') {
        ruFlag.style.display = 'block';
        enFlag.style.display = 'none';
    } else {
        enFlag.style.display = 'block';
        ruFlag.style.display = 'none';
    }

    enFlag.addEventListener('click', function() {
        window.location.href = window.location.pathname.replace(/^\/ru/, '/en');
    });

    ruFlag.addEventListener('click', function() {
        window.location.href = window.location.pathname.replace(/^\/en/, '/ru');
    });
});
