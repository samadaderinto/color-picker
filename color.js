const colorCanvas = document.querySelector(".canvas")
const colorCtx = colorCanvas.getContext('2d')
const viewPickedColor = document.querySelector('.view-picked-color')

let color = 'purple'


let gradientHorizontal = colorCtx .createLinearGradient(0,0,colorCanvas.width,0)
gradientHorizontal.addColorStop(0,'white')
gradientHorizontal.addColorStop(1,color)
colorCtx.fillStyle = gradientHorizontal
colorCtx.fillRect(0,0,colorCanvas.width,colorCanvas.height)

//Create a Vertical Gradient(white to black)
let gradientVertical = colorCtx .createLinearGradient(0, 0, 0, colorCanvas.height);
 gradientVertical.addColorStop(0, 'rgba(0,0,0,0)'); // do not change rgba(0,0,0,0) 
 gradientVertical.addColorStop(1, 'black');
 colorCtx .fillStyle = gradientVertical;
 colorCtx .fillRect(0, 0, colorCtx .canvas.width, 
 colorCtx .canvas.height); 


 colorCanvas.addEventListener('click', (e) => {
   let x = e.offsetX // x coordinate
   let y = e.offsetY // y coordinate

   let pixel = colorCtx.getImageData(x,y,1,1)['data'];   // Read pixel Color
   let rgb = `rgb(${pixel[0]},${pixel[1]},${pixel[2]})`;

   console.log(rgb)

   viewPickedColor.style.background = rgb


 })