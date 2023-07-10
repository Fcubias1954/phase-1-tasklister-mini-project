document.addEventListener("DOMContentLoaded", () => {
  document.querySelector('form').addEventListener('submit', (e) => {
    e.preventDefault();
    let newTask = document.getElementById('new-task-description').value;
    handleTask(newTask);
    form.reset();
  
  });
});    

function handleTask(todo) {
  let p = document.createElement('p');
  let btn = document.createElement('button');
  btn.addEventListener('click', deletion)
  btn.textContent = 'x';
  p.textContent = `${todo}`;
  p.appendChild(btn);
  console.log(p)

  document.querySelector('#tasks').appendChild(p);
};
function deletion(e){
  e.target.parentNode.remove()
};




