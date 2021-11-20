
const walk = (changeClass) => {   
    let timesRun = 0;
    const steps = setInterval(() => { 
        timesRun += 1;
        if(timesRun === 8){
            clearInterval(steps);
        } player.classList.toggle(changeClass)}, 100);}


const field = document.querySelector (".background")
const player =document.querySelector (".subject")
const btns = [...document.querySelectorAll ("button")]


let move = 40;
let moveFieldY = 0;
let moveFieldX = 0;


field.style.height= 600 + "px";
field.style.width= 600 + "px";


player.style.top = 0 + "px"
player.style.left = 0 + "px"

field.style.backgroundPosition = 0 + "px" + " " +  0 + "px";
console.log(field.style.backgroundPosition)

btns.forEach (item => {
    item.addEventListener("click", () =>  {
        
        switch (item.className) {
            case 'up' :
                player.className ="subject subjectTurn";
                walk("subjectWlakDown")
                if (player.style.top > 0  +"px")
                        {player.style.top = (parseInt(player.style.top) - move +"px");
                            field.style.backgroundPosition = moveFieldX + "px" + " " + (moveFieldY += 10) + "px";}
                else {player.style.top === 0 + "px";
                        field.style.backgroundPosition = moveFieldX + "px" + " " + moveFieldY + "px";};
                break;

            case 'down' :  
                player.className= "subject"        
                walk("subjectWlak")
                                
                if (parseInt(player.style.top) <= parseInt(field.style.height)-81)
                 {player.style.top = parseInt(player.style.top) + move + "px";
                 field.style.backgroundPosition = moveFieldX + "px" + " " + (moveFieldY -= 10) + "px"}
                    else {console.log(false); player.style.top === field.style.height
                        field.style.backgroundPosition = moveFieldX + "px" + " " + moveFieldY + "px"};
                    ;    
                break; 

            case 'left' :
                player.className ="subject subjectTurnL";
                walk("subjectWlakLeft")
                if (player.style.left > 0  +"px"){
                    player.style.left = parseInt(player.style.left) - move +"px";
                    field.style.backgroundPosition = (moveFieldX += 10) + "px" + " " +  moveFieldY + "px";}
                    else {player.style.left === 0 + "px";
                    field.style.backgroundPosition = moveFieldX  + "px" + " " +  moveFieldY + "px";};
        
                break; 

            case 'right' :
                player.className ="subject subjectTurnR";
                walk("subjectWlakRight")
                if (parseInt(player.style.left) <= parseInt(field.style.width)-60)
                 {player.style.left = parseInt(player.style.left) + move +"px";
                 field.style.backgroundPosition = (moveFieldX -= 10) + "px" + " " +  moveFieldY + "px";}
                    else {console.log(false); player.style.top === field.style.width;
                        field.style.backgroundPosition = moveFieldX + "px" + " " +  moveFieldY + "px";};
                    
                break;     
                }
            }
        )
    }
)

