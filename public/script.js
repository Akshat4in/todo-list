const thing = document.querySelector('.add');
const addBtn = document.querySelector('.addbtn');
const todoList = document.querySelector(".todo-list");

addBtn.addEventListener("click", addTodo);
thing.addEventListener("keypress", (event) => {
    if (event.key === "Enter") {
      addTodo(event);
    }
  });

function addTodo (event){

    event.preventDefault();
 
    const todoDiv = document.createElement('div');
    todoDiv.classList.add('todo');
// create li
const newTodo = document.createElement('li');
newTodo.innerHTML = thing.value;
newTodo.classList.add('todo-item');

todoDiv.appendChild(newTodo);

//Check mark

const completeButton = document.createElement('button');
completeButton.innerHTML= '<i class="fa-solid fa-square-check"></i>';
completeButton.classList.add('complete-btn');

completeButton.addEventListener('click', function() {
  // Set the background color of the parent "todoDiv" element to green
  this.parentElement.style.backgroundColor = '#09dd37';
  this.parentElement.style.color = 'white';
  this.parentElement.style.textDecoration = 'line-through';
  

});

todoDiv.appendChild(completeButton);


const deleteButton = document.createElement('button');
deleteButton.innerHTML= '<i class="fa-solid fa-square-minus"></i>';
deleteButton.classList.add('delete-btn');

deleteButton.addEventListener('click', function(){
  todoList.removeChild(todoDiv);
})

todoDiv.appendChild(deleteButton);

todoList.appendChild(todoDiv);

thing.value = "";

}










// Ball bounce
let x = 0;
  let y = 0;
  let xSpeed = 5;
  let ySpeed = 3;
  let mouseX = 0;
  let mouseY = 0;
  const attractionRadius = 100;
  const maxSpeed = 10;

  const box = document.querySelector(".square6");

  document.addEventListener("mousemove", (event) => {
    mouseX = event.clientX;
    mouseY = event.clientY;
  });

  setInterval(() => {
    const dx = mouseX - x;
    const dy = mouseY - y;
    const distance = Math.sqrt(dx * dx + dy * dy);

    if (distance < attractionRadius) {
      xSpeed += dx * 0.01;
      ySpeed += dy * 0.01;

      const speed = Math.sqrt(xSpeed * xSpeed + ySpeed * ySpeed);

      if (speed > maxSpeed) {
        xSpeed *= maxSpeed / speed;
        ySpeed *= maxSpeed / speed;
      }
    }

    x += xSpeed;
    y += ySpeed;

    if (x + box.offsetWidth >= window.innerWidth || x <= 0) {
      xSpeed = -xSpeed;
    }

    if (y + box.offsetHeight >= window.innerHeight || y <= 0) {
      ySpeed = -ySpeed;
    }

    box.style.left = x + "px";
    box.style.top = y + "px";
  }, 20);