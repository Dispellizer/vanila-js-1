const clockContainer = document.querySelector(".js-clock"),
  clockTitle = clockContainer.querySelector("h1");

function getTime() {
  const date = new Date();
  const minutes = date.getMinutes();
  const hours = date.getHours();
  const seconds = date.getSeconds();
  clockTitle.innerText = `${hours < 10 ? `0${hours}` : hours}:${
    minutes < 10 ? `0${minutes}` : minutes
  }:${seconds < 10 ? `0${seconds}` : seconds}`;
}

// 삼항연산자
// 조건 ? true일때 실행 : false일때 실행
// 10 < 1 ? add+1 : add+2;

function init() {
  getTime();
  setInterval(getTime, 1000);
}

init();

// setinterval(getTime, 3000)
// 은 첫번째 인자로 실행할 함수를 받고
// 두번째 인자로 몇초마다 실행할지를 받는다.
