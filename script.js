// create baseline 16x16 grid canvas

/*Slider to set the value of 'n' which determines the area of the grid */
let slider = document.getElementsByClassName("slider")[0];
slider.addEventListener("change", updateGridNumbers);
window.addEventListener("load",updateGridNumbers)
let n
function updateGridNumbers(){
    n = parseInt(slider.value);
    console.log(n)
    resizeGridNumbers(n);
    document.getElementById("sliderLabel").textContent = slider.value;
};



//code to get canvas values and store in variables and get height valeu, filter it out and convert to number.
const canvas = document.getElementById("canvas"); 
const canvasStyles = window.getComputedStyle(canvas);
const canvasHeight = canvasStyles.getPropertyValue("height");
let canvasHeightFiltered = +(canvasHeight.match(/\d+/)[0]);
const canvasWidth = canvasStyles.getPropertyValue("width");
let canvasWidthFiltered = +(canvasWidth.match(/\d+/)[0]);


/*gridHeight for setting heights of divs inside canvas div. Same for Width*/
let gridHeight = (canvasHeightFiltered / n); 
let gridWidth = (canvasWidthFiltered / n); 


// console.log(typeof(n))
// console.log(canvasHeight)
// console.log(canvasHeightFiltered);
// console.log(typeof(canvasHeightFiltered))
// console.log(gridHeight); 

function resizeGridNumbers(){
    for(i = 1; i <= n**2; i++){
        const grids = document.createElement("div");
        grids.className = "grids";
        canvas.appendChild(grids);
        canvas.style.gridTemplate = `repeat(${n}, 1fr)/repeat(${n}, 1fr)`
        grids.style.height = `${gridHeight}px`;
        grids.style.width = `${gridWidth}px`;
}};
