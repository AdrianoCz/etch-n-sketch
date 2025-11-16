const container = document.querySelector("#container")
const btn = document.querySelector("button")    
const form = document.querySelector("form")
const etchRadio = document.querySelector("#etch")
const drawRadio = document.querySelector("#draw") 

let drawType;

function createGrid(e){
    container.innerHTML = ""
    const input = document.querySelector("input") ;
    const etch = document.querySelector("#etch")

    

    let n = Number(input.value);
    let squareSize = 60/n;
   
    if (etch.checked){
        drawType = "mouseover"
    } else{
        drawType = "click"
    }

    if (n>100){
        alert("grid too big");
        throw new Error("grid bigger than 100x100");
    }
   
    for (let i = 0; i < n; i++) {
        const line = document.createElement("div");
        line.classList.add("line");
        container.appendChild(line)
    }
   
    document.querySelectorAll(".line").forEach(element => {
        for(i=0;i<n;i++){
            const block = document.createElement("div")
            block.classList.add("block");
            block.classList.add("selected-block");
            block.classList.toggle("selected-block")
            element.appendChild(block)
            
    }  
    })
    
    document.querySelectorAll(".block").forEach(element => {
        element.addEventListener(drawType, () => {element.classList.toggle("selected-block")})
        element.style.height = `${squareSize}vh`
        element.style.width =  `${squareSize}vh` 
    });
   
    container.classList.add("appear")
   
    e.preventDefault()
}

btn.addEventListener("click", createGrid)
container.addEventListener("animationend", () => {container.classList.remove("appear")})
etchRadio.addEventListener("click", () => {createGrid()})
drawRadio.addEventListener("click", () => {createGrid()})
