const clickMenu = document.querySelectorAll(".nav_active");

clickMenu.forEach(function (item) {
    item.addEventListener("click", function () {
        let currentLink = item;

        clickMenu.forEach(function (item) {
            item.classList.remove('active')

        });

        currentLink.classList.add('active');

    });

});