/* 배경 이미지 파일 */
const images = ['1.jpg', '2.jpg'];

const randomImg = images[Math.floor(Math.random() * images.length)];
const backImg = document.createElement('img');

backImg.src = `img/${randomImg}`;
document.body.appendChild(backImg);
