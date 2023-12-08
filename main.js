window.onscroll = function() {
    scrollFunction()
};

function scrollFunction() {
    const contactsContainer = document.querySelector("#contactActions");
    const toTopButton = document.querySelector("#toTopButton");
    if (document.body.scrollTop > 150 || document.documentElement.scrollTop > 150) {
        contactsContainer.style.display = "block";
        toTopButton.style.display = "block";
    } else {
        contactsContainer.style.display = "none";
        toTopButton.style.display = "none";
    }
}

function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}
