// 获取相关元素
const scrollContainer = document.querySelector('.Scroll');
const imgContainer = document.querySelector('.inf-img');
const leftBtn = document.querySelector('.arrowLeftBTN');
const rightBtn = document.querySelector('.arrowRightBTN');

// 定义图片索引和图片宽度
let currentIndex = 0;
const imgWidth = document.querySelector('.info_SingleImg').offsetWidth;

// 向左切换图片
leftBtn.addEventListener('click', () => {
  currentIndex = (currentIndex - 1 + imgContainer.children.length) % imgContainer.children.length;
  imgContainer.style.transform = `translateX(-${currentIndex * imgWidth}px)`;
});

// 向右切换图片
rightBtn.addEventListener('click', () => {
  currentIndex = (currentIndex + 1) % imgContainer.children.length;
  imgContainer.style.transform = `translateX(-${currentIndex * imgWidth}px)`;
});