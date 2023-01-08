const grid = document.getElementById("grid")
const colorBtn = document.getElementById("colorBtn")
const colorPicker = document.getElementById("colorPicker")
const rainbowBtn = document.getElementById("rainbowBtn")
const clearBtn = document.getElementById("clearBtn")
const eraseBtn = document.getElementById("eraseBtn")
let sizeSlider = document.getElementById("sizeSlider")
let sizeValue = document.getElementById("sizeValue")
let value = 16


function createGrid(){
    for(let i = 1; i <= 256; i++){
        const gridElement = document.createElement("div")
        grid.appendChild(gridElement)
        grid.style.gridTemplateColumns = "repeat(16, 1fr)"
        grid.style.gridTemplateRows = "repeat(16, 1fr)"
        gridElement.addEventListener("mouseover", function changeColor(e){
            if (type === "colorMode"){
                e.target.style.backgroundColor = colorPicker.value
            }
            else if (type === "rainbowMode"){
                const r = Math.floor(Math.random() * 256)
                const g = Math.floor(Math.random() * 256)
                const b = Math.floor(Math.random() * 256)
                e.target.style.backgroundColor = "rgb(" + r + "," + g + "," + b + ")"
            }
            else if (type === "eraseMode"){
                e.target.style.backgroundColor = "white"
            }
            })
    }
    }

sizeSlider.addEventListener("input", function(){
    value = sizeSlider.value
    sizeValue.innerText = sizeSlider.value + " x " + sizeSlider.value
   reloadGrid(value)
})

function setupGrid(value) {
    for(let i=1; i <= value * value; i++)
    {
        const gridElement = document.createElement("div")
        grid.appendChild(gridElement)
        grid.style.gridTemplateColumns = "repeat(" + value + ", 1fr)"
        grid.style.gridTemplateRows = "repeat(" + value +", 1fr)"
        gridElement.classList.add("boxes")

        
        gridElement.addEventListener("mouseover", function changeColor(e){
            if (type === "colorMode"){
                e.target.style.backgroundColor = colorPicker.value
            }
            else if (type === "rainbowMode"){
                const r = Math.floor(Math.random() * 256)
                const g = Math.floor(Math.random() * 256)
                const b = Math.floor(Math.random() * 256)
                e.target.style.backgroundColor = "rgb(" + r + "," + g + "," + b + ")"
            }
            else if (type === "eraseMode"){
                e.target.style.backgroundColor = "white"
            }
            })}
    }


function reloadGrid(value) {
        clearGrid()
        setupGrid(value)
      }

function clearGrid() {
        grid.innerHTML = ''
      }



colorBtn.addEventListener("click", function(){
    type = "colorMode"
    colorBtn.classList.add("active")
    rainbowBtn.classList.remove("active")
    clearBtn.classList.remove("active")
    eraseBtn.classList.remove("active")})
    

       

rainbowBtn.addEventListener("click", function(){
    type = "rainbowMode"
    rainbowBtn.classList.add("active")
    colorBtn.classList.remove("active")
    clearBtn.classList.remove("active")
    eraseBtn.classList.remove("active")
})

clearBtn.addEventListener("click", function(){
    type = "clearMode"
    clearBtn.classList.add("active")
    rainbowBtn.classList.remove("active")
    colorBtn.classList.remove("active")
    eraseBtn.classList.remove("active")
    clearGrid()
    setupGrid(value)
})

eraseBtn.addEventListener("click", function(){
    type = "eraseMode"
    eraseBtn.classList.add("active")
    rainbowBtn.classList.remove("active")
    clearBtn.classList.remove("active")
    colorBtn.classList.remove("active")
})


window.onload = () => {createGrid()}