const imgs = ['hero-image-0.jpg', 'hero-image-1.jpg', 'hero-image-2.jpg', 'hero-image-3.jpg', 'not-found.jpg'];
carousel();

function carousel() {
    let i = 0;
    const div = document.getElementsByClassName("image")[0];
    setInterval(() => {
        div.style.backgroundImage = `url(./images/${imgs[i]})`
        i++;
        if (i >= imgs.length) {
            i = 0;
        }
    }, 1000);
}