//code to get canvas values and store in variables and get height valeu, filter it out and convert to number.
let slider = document.getElementsByClassName("slider")[0];
slider.addEventListener("change", updateGridNumbers);
window.addEventListener("load",updateGridNumbers);
document.getElementById("clearButton").addEventListener('click', clear =()=> clearCanvas());
const canvas = document.getElementById("canvas"); 
const canvasStyles = window.getComputedStyle(canvas);
const canvasHeight = canvasStyles.getPropertyValue("height");
let canvasHeightFiltered = +(canvasHeight.match(/\d+/)[0]);
const canvasWidth = canvasStyles.getPropertyValue("width");
let canvasWidthFiltered = +(canvasWidth.match(/\d+/)[0]);

//VARIABLES:
let n
/*gridHeight for setting heights of divs inside canvas div. Same for Width*/
let gridHeight = (canvasHeightFiltered / n); 
let gridWidth = (canvasWidthFiltered / n); 

// FUNCTIONS:
/*Slider to set the value of 'n' which determines the area of the grid */
function updateGridNumbers(){
    n = parseInt(slider.value);
    console.log(n)
    resizeGridNumbers(n);
};

//function that places grids inside canvas and calls hover to paint.
function resizeGridNumbers(){
    for(i = 1; i <= n**2; i++){
        const grids = document.createElement("div");
        grids.className = "grids";
        canvas.appendChild(grids);
        canvas.style.gridTemplate = `repeat(${n}, 1fr)/repeat(${n}, 1fr)`
        grids.style.height = `${gridHeight}px`;
        grids.style.width = `${gridWidth}px`;
    };
    clearCanvas();
    hoverToPaint();
   };

//Hover to Paint function:
function hoverToPaint(){document.querySelectorAll(".grids").forEach(elem => {
    elem.addEventListener('mouseover', e => e.target.classList.add('grids-hover'));
  })};

//Clear canvas function:
function clearCanvas(){document.querySelectorAll(".grids").forEach(elem =>{
    elem.classList.remove('grids-hover');
})};