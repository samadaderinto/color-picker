const colorCanvas = document.querySelector(".canvas")
const colorCtx = colorCanvas.getContext('2d')

let colorss = 'blue'


let gradientHorizontal = colorCtx.createLinearGradient(0,0,colorCanvas.width,0)
gradientHorizontal.addColorStop(0,'white')
gradientHorizontal.addColorStop(1,'red')
colorCtx.fillStyle = gradientHorizontal
colorCtx.fillRect(0,0,colorCanvas.width,colorCanvas.height)

//  let gradientVertical = colorCtx.createLinearGradient(0,0,0,300)
//  gradientVertical.addColorStop(0,'white')
//  gradientVertical.addColorStop(1,"#000")
//  colorCtx.fillStyle = gradientVertical
//  colorCtx.fillRect(0,0,colorCanvas.width,colorCanvas.height)

