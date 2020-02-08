const form = document.querySelector(".js-form"),
  input = form.querySelector("input"),
  greeting = document.querySelector(".js-greetings");

// querySelector는 첫번째 엘리먼트만 가져오지만
// querySelectorAll는 클래스명에 따른 엘리먼트들을 가져오는데 array로 가져온다

const USER_LS = "currentUser",
  SHOWING_CN = "showing";

function saveName(text) {
  localStorage.setItem(USER_LS, text);
}

function handleSubmit(event) {
  event.preventDefault();
  // form의 default를 막기 위해서 적어줌(form은 기본적으로 enter시 새로고침이 되는데 이걸 방지)
  const currentValue = input.value;
  paintGreeting(currentValue);
  // paintGreeting 만으로는 localStorage에 저장못함(새로고침 하면 없어짐)
  saveName(currentValue);
}

function askForName() {
  form.classList.add(SHOWING_CN);
  form.addEventListener("submit", handleSubmit);
}

function paintGreeting(text) {
  form.classList.remove(SHOWING_CN);
  greeting.classList.add(SHOWING_CN);
  greeting.innerText = `Hello ${text}`;
}

function loadName() {
  const currentUser = localStorage.getItem(USER_LS);
  if (currentUser === null) {
    //   she is not
    askForName();
  } else {
    //   she is
    paintGreeting(currentUser);
  }
}

function init() {
  loadName();
}

init();
