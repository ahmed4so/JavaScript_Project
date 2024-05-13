function updateInput(value) {
    inp.value += value;
}



let btn= document.querySelector(".btn");
let btn2= document.querySelector(".btnp");
let btn3= document.querySelector(".btnm");


let btn4= document.querySelector(".btnper");
let btn5= document.querySelector(".btnd");
let btn6= document.querySelector(".btnm");



let inp=document.getElementById("inp");


document.querySelector(".num1").addEventListener("click", function() { updateInput('1'); });
document.querySelector(".num2").addEventListener("click", function() { updateInput('2'); });
document.querySelector(".num3").addEventListener("click", function() { updateInput('3'); });
document.querySelector(".num4").addEventListener("click", function() { updateInput('4'); });
document.querySelector(".num5").addEventListener("click", function() { updateInput('5'); });
// Ensure you update the class for the sixth button to num6 if that's a typo in your HTML
document.querySelector(".num6").addEventListener("click", function() { updateInput('6'); });
document.querySelector(".num7").addEventListener("click", function() { updateInput('7'); });
document.querySelector(".num8").addEventListener("click", function() { updateInput('8'); });
document.querySelector(".num9").addEventListener("click", function() { updateInput('9'); });

// Example for operation buttons (+, -, *, /)
document.querySelector(".btnm").addEventListener("click", function() { updateInput('*'); });
document.querySelector(".btnp").addEventListener("click", function() { updateInput('+'); });
document.querySelector(".btnmi").addEventListener("click", function() { updateInput('-'); });
document.querySelector(".btnd").addEventListener("click", function() { updateInput('/'); });




let btnac= document.querySelector(".btnAc");
btnac.addEventListener("click",function()
{
    inp.value = "";
})


document.querySelector(".btn").addEventListener("click", function() {
    inp.value = eval(inp.value);
});