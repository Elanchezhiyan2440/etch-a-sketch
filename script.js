// create baseline 16x16 grid canvas

const canvas = document.getElementById("canvas");

n = 35;
for(i = 1; i <= n**2; i++){
    const grids = document.createElement("div");
    grids.className = "grids";
    canvas.appendChild(grids);
    canvas.style.gridTemplate = `repeat(${n}, 1fr)/repeat(${n}, 1fr)`
}