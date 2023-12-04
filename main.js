document.addEventListener('DOMContentLoaded', function() {
    const languageSwitcher = document.getElementById('languageSwitcher');

    languageSwitcher.addEventListener('change', function() {
        const selectedLanguage = this.value;
        const currentPath = window.location.pathname;

        const newPath = currentPath.replace(/^\/(en|ru)/, `/${selectedLanguage}`);
        window.location.href = newPath;
    });

    const currentLanguage = window.location.pathname.includes('/ru') ? 'ru' : 'en';
    languageSwitcher.value = currentLanguage;
});
