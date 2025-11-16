const container = document.querySelector("#container")
const btn = document.querySelector("button")
const form = document.querySelector("form")
function createGrid(e){
    container.innerHTML = ""
    const input = document.querySelector("input") ;

    let n = Number(input.value);
    
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
        element.addEventListener("click", () => {element.classList.toggle("selected-block")})
    });

    e.preventDefault()
}
btn.addEventListener("click", createGrid)
