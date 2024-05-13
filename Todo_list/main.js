let inp=document.querySelector(".input");
let btn=document.querySelector(".btn-add");
let data=document.querySelector(".data");


btn.addEventListener("click",function()
{
    const itemDiv = document.createElement('div');
    itemDiv.className = 'item';

    const taskTitle = document.createElement('h2');
    taskTitle.textContent = 'Task';


    const taskData  = document.createElement('p');
    taskTitle.textContent = 'Task';
    
    taskData.value = inp;
    taskData.className = "data";
})

