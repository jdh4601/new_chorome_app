const loginForm = document.querySelector('.login_form');
const loginInput = document.querySelector('.login_form input');
const loginBtn = document.querySelector('.login_form button');
const greeting = document.querySelector('.content #greeting');
const content = document.querySelector('.content');
const clearBtn = document.querySelector('.clear_name');

// 인사 출력하기
function greetName() {
  const username = window.localStorage.getItem('name'); // 저장된 입력값 읽어오기
  greeting.innerText = `Hello ${username}`;
  greeting.classList.remove('hidden');
  content.classList.remove('hidden');
  clearBtn.classList.remove('hidden');
}

// clear 버튼 처리
function clearName() {
  window.localStorage.removeItem('name');
  location.reload();
}

clearBtn.addEventListener('click', clearName);

// submit 버튼 클릭 이벤트 처리
function loginSubmit(event) {
  event.preventDefault(); // 페이지 새로고침 방지
  const username = loginInput.value; // 사용자 이름 입력값 저장
  window.localStorage.setItem('name', username);
  loginInput.value = ''; // input값 비우기
  loginForm.classList.add('hidden'); // login-form 숨기기
  greetName();
}

loginBtn.addEventListener('click', loginSubmit);