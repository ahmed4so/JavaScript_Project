head=document.querySelector(".boxmain")


let turn="X"
squares=[]
function winner()
{
    for (let i=1;i<10;i++)
        {
                squares[i]=document.getElementById('item'+i).innerHTML
                
        }
    if(squares[1]===squares[2]&& squares[1]===squares[3]&&squares[1]!="")
        {
            head.innerHTML=["Winner Winner("+squares[1]+")"];
            setInterval(() => {
                head.innerHTML="....wait for reload";
            }, 1000);
            setTimeout(function(){location.reload()},5000)
        }
    else if (squares[1]===squares[4]&&squares[1]==squares[7]&&squares[1]!="")
        {
            head.innerHTML=["Winner Winner("+squares[1]+")"];
            setInterval(() => {
                head.innerHTML="....wait for reload";
            }, 1000);
            setTimeout(function(){location.reload()},5000)
        }
    else if (squares[2]===squares[5]&&squares[2]==squares[8]&&squares[2]!="")
        {
            head.innerHTML=["Winner Winner("+squares[2]+")"];
            setInterval(() => {
                head.innerHTML="....wait for reload";
            }, 1000);
            setTimeout(function(){location.reload()},5000)

        }
    else if (squares[3]==squares[6]&&squares[3]===squares[9]&&squares[3]!="")
        {
            head.innerHTML=["Winner Winner("+squares[3]+")"];
            setInterval(() => {
                head.innerHTML="....wait for reload";
            }, 1000);
            setTimeout(function(){location.reload()},5000)
        }
    else if (squares[3]==squares[5]&&squares[3]===squares[7]&&squares[3]!="")
            {
                head.innerHTML=["Winner Winner("+squares[3]+")"];
                setInterval(() => {
                    head.innerHTML="....wait for reload";
                }, 1000);
                setTimeout(function(){location.reload()},5000)
            }
    else if (squares[1]==squares[5]&&squares[1]===squares[9]&&squares[1]!="")
            {
                    head.innerHTML=["Winner Winner("+squares[1]+")"];
                    setInterval(() => {
                        head.innerHTML="....wait for reload";
                    }, 1000);
                    setTimeout(function(){location.reload()},5000)
            }
    else
    {
        squares.filter(Boolean).length === 9;
    }
    




    }   
function game(id)
{

    let element=document.getElementById(id);

    if(turn=="X" && element.innerHTML=='')
        {
            
            element.innerHTML="X";

            turn="O"
            head.innerHTML=`${turn}`
        }
    else if (turn=="O" && element.innerHTML=='')
        {
            
            element.innerHTML="O";
            turn="X"

            head.innerHTML=`${turn}`
        }

        winner();
}