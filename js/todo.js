const todoForm = document.querySelector('.todo_form');
const todoInput = todoForm.querySelector('input');
const todoList = document.querySelector('#todo_list');

// list 생성하기 잘 모름 🤔
// 뭘 해야할지 모를 때 -> 인수 생성하기?
function addTodo(userInput) {
  const newList = document.createElement("li");
  const newSpan = document.createElement("span");
  // 자식 노드에 상속
  newList.appendChild(newSpan);
  todoList.appendChild(newList);
  // span 태그 안에 text로 넣음
  newSpan.innerText = userInput;

}

// todo 다루기
function handleTodo(event) {
  event.preventDefault();
  const userInput = todoInput.value; // save user input
  todoInput.value = ""; // 입력 텍스트 비우기
  addTodo(userInput);
}

todoForm.addEventListener('submit', handleTodo);

// 1. 입력값 비우기
// 2. 리스트 하나씩 추가하기
// 3. 저장 기능(새로고침 해도 유지)
// 3. 삭제 기능