const imgages = ["0.jpg", "1.jpg", "2.jpg"];
const randomImage = imgages[parseInt(Math.random() * imgages.length)];
// create img element
const bgimg = document.createElement('img');
// random image source
bgimg.src = `img/${randomImage}`;
// appear html
document.body.appendChild(bgimg);
