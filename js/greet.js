// DOM 요소
const loginForm = document.querySelector('#login-form')
const loginInput = document.querySelector('#login-form input');

const HIDDEN_CLASS_NAME = "hidden";
const USERNAME_KEY = "username"

const savedUsername = localStorage.getItem(USERNAME_KEY)

// submit 이벤트
function onLoginSubmit(event) {
  event.preventDefault()
  loginForm.classList.add(HIDDEN_CLASS_NAME)
  const username = loginInput.value
  localStorage.setItem(USERNAME_KEY, username)
  paintGreeting(username)
}

// 화면 출력
function paintGreeting(savedUsername) {
  const username = localStorage.getItem(USERNAME_KEY)
  const greetingMessage = document.getElementById("greeting-message")
  greetingMessage.innerText = `${savedUsername}님 안녕하세요.`
}
loginForm.addEventListener("submit", onLoginSubmit)

// 제어
if (savedUsername) {
  loginForm.classList.add(HIDDEN_CLASS_NAME)
  paintGreeting(savedUsername)
}