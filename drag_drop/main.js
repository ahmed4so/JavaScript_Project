let inp   = document.getElementById("inp");
let btn=document.querySelector(".btn");

let boxs=document.querySelectorAll(".box");

drag=null

btn.onclick=function ()
{
    if(inp.value!="")
        {
            boxs[0].innerHTML+=`<p class='item' draggable="true">${inp.value}</p>`
            inp.value="";
        }
    else
        alert("You have to write something")


    dragitem();
}


function dragitem()
{
    let items=document.querySelectorAll(".item")

    items.forEach(item => {
        
        item.addEventListener("dragstart",function()
        
    {
        drag=item
        item.style.opacity="0.5";
    })

    item.addEventListener("dragend",function()
        
    {
        drag=null
        item.style.opacity="1";
    })



    boxs.forEach(box => {
        box.addEventListener("dragover",function(e)
    {
        e.preventDefault();
        this.style.background="blue";
        this.style.color="white";


    })

    box.addEventListener("dragleave",function()
    {
        this.style.background="beige";
        this.style.color="black";
    })



    box.addEventListener("drop",function()
    {
        this.append(drag);
        this.style.background="beige";
        this.style.color="black";
    })
   
    });

   

    
    





    });
}


