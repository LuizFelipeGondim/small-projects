const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');

const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

for (let i = 1; i <= 5; i++) {
    const newImage = document.createElement('img');
    newImage.setAttribute('src', `images/pic${i}.jpg`);
    newImage.setAttribute('alt', `ilustration pic${i}`);

    newImage.addEventListener('click', event => {
        displayedImage.setAttribute('src', event.target.src)
    })

    thumbBar.appendChild(newImage);
}

btn.addEventListener('click', function() {
    const background = overlay.style.backgroundColor

    if (background == "rgba(0, 0, 0, 0)") {
        overlay.style.backgroundColor = "rgba(0, 0, 0, 0.5)"
    } else {
        overlay.style.backgroundColor = "rgba(0, 0, 0, 0)"
    }
    
})
