// create baseline 16x16 grid canvas
n = 16;

const canvas = document.getElementById("canvas"); 
const canvasStyles = window.getComputedStyle(canvas);
const canvasHeight = canvasStyles.getPropertyValue("height");
let canvasHeightFiltered = +(canvasHeight.match(/\d+/)[0]);
const canvasWidth = canvasStyles.getPropertyValue("width");
let canvasWidthFiltered = +(canvasWidth.match(/\d+/)[0]);

//filters out numbers alone from the value of canvasHeight and converts it to a number.
let gridHeight = (canvasHeightFiltered / n); 
let gridWidth = (canvasWidthFiltered / n); 
/*gridHeight for setting heights of divs inside canvas div. Same for Width*/

console.log(n)
console.log(typeof(n))
console.log(canvasHeight)
console.log(canvasHeightFiltered);
console.log(typeof(canvasHeightFiltered))
console.log(gridHeight); 

for(i = 1; i <= n**2; i++){
    const grids = document.createElement("div");
    grids.className = "grids";
    canvas.appendChild(grids);
    canvas.style.gridTemplate = `repeat(${n}, 1fr)/repeat(${n}, 1fr)`
    grids.style.height = `${gridHeight}px`;
    grids.style.width = `${gridWidth}px`;
    
}