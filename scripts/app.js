var imageCarousel = function () {
    var imgs = ['hero-image-0.jpg', 'hero-image-1.jpg', 'hero-image-2.jpg', 'hero-image-3.jpg', 'not-found.jpg'];

    var i = 0;
    var div = document.getElementsByClassName("image")[0];
    setInterval(() => {
        div.style.backgroundImage = `url(./images/${imgs[i]})`
        i++;
        if (i >= imgs.length) {
            i = 0;
        }
    }, 1000);
}();