let form = document.getElementById('form');
let item = document.getElementById('item');
let tasks = document.getElementById('tasks');
let taskCount = document.getElementById('count');

form.addEventListener('submit', (e) => {
    e.preventDefault();     //prevent refreshing the page

    let task = item.value;     //fetch the input item value

    if(!task) {     //empty input handling
        return;
    }

    taskCount.innerHTML = (tasks.getElementsByClassName('task').length+1) + " tasks Pending.";

    let taskEl = document.createElement('div');     //create div element with task class
    taskEl.classList.add('task');

    let taskContentEl = document.createElement('div');     //create div element with content class
    taskContentEl.classList.add('content');

    taskEl.appendChild(taskContentEl);     


    let taskInputEl = document.createElement('input');     //create input element with text class
    taskInputEl.classList.add('text');
    taskInputEl.type = 'text';
    taskInputEl.value = task;
    taskInputEl.setAttribute('readonly', true);


    taskInputEl.addEventListener('click', () => {     //add & remove line-through to the input
        taskInputEl.classList.toggle('completed');
    })

    taskContentEl.appendChild(taskInputEl);


    let taskActionEl = document.createElement('div');     //create div element with actions class
    taskActionEl.classList.add('actions');

    let taskUpdateEl = document.createElement('button');     //create button element with update class
    taskUpdateEl.classList.add('update');
    taskUpdateEl.innerHTML = 'Update';

    taskActionEl.appendChild(taskUpdateEl);

    
    let taskDeleteEl = document.createElement('button');     //create button element with delete class
    taskDeleteEl.classList.add('delete');
    taskDeleteEl.innerHTML = 'Delete';

    taskActionEl.appendChild(taskDeleteEl);

    taskEl.appendChild(taskActionEl);

    tasks.appendChild(taskEl);

    item.value = "";

    taskUpdateEl.addEventListener('click', () => {     //update data
        if(taskUpdateEl.innerHTML === 'Update') {
            taskInputEl.removeAttribute('readonly');
            taskInputEl.focus();
            taskUpdateEl.innerHTML = 'Save';
        }
        else {
            taskInputEl.setAttribute('readonly', true);
            taskUpdateEl.innerHTML = "Update";
        }
    });

    taskDeleteEl.addEventListener('click', () => {     //delete data
        tasks.removeChild(taskEl);
        count.innerHTML = ((tasks.getElementsByClassName('task').length+1)-1) + " tasks Pending.";
    })
})