let title=document.querySelector("h2");
let ul=document.querySelector("ul");
let btn=document.querySelector("button");

btn.onclick=function()
{
    window.location.reload();
}
window.onload=function()
{
    if(window.navigator.onLine)
        {
            online();
        }
    else
        offline();
    
}

window.addEventListener=("online",function()
{
    online();

});


window.addEventListener=("offline",function()
{
    offline();
    
});
function offline()
{
    title.innerHTML="Offline Now";
    title.style.color="grey";
    ul.classList.remove("hide");
    btn.classList.remove("hide");
}

function online()
{
    title.innerHTML="online Now";
    title.style.color="green";
    ul.classList.add("hide");
    btn.classList.add("hide");
}

