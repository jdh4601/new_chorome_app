const clock = document.querySelector('#clock');

// realTime 표시
function getTimeStamp() {
  const date = new Date(); // date 객체 생성
  const hours = date.getHours();
  const minutes = date.getMinutes();
  const seconds = date.getSeconds();
  // 삼항 연산자
  clock.innerText = `${hours < 10 ? `0${hours}` : hours}:${
    minutes < 10 ? `0${minutes}` : minutes}:${
      seconds < 10 ? `0${seconds}` : seconds}`;
}

function init() {
  getTimeStamp();
  setInterval(getTimeStamp, 1000);
}

init();

