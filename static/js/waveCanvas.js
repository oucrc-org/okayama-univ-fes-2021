const unit = 100
let canvasList
const info = {}
let colorList
let timeoutId

/**
 * Init function.
 *
 * Initialize variables and begin the animation.
 */
// eslint-disable-next-line @typescript-eslint/no-unused-vars
function init () {
  info.seconds = 0
  info.t = 0
  canvasList = []
  colorList = []
  canvasList.push(document.getElementsByClassName('waveCanvas')[0])
  canvasList.push(document.getElementsByClassName('waveCanvas')[1])
  colorList.push(['#3292D9', '#0071C5'])
  colorList.push(['#3292D9', '#0071C5'])
  for (const canvasIndex in canvasList) {
    const canvas = canvasList[canvasIndex]
    canvas.width = document.documentElement.clientWidth
    canvas.height = 200
    canvas.contextCache = canvas.getContext('2d')
  }
  update()
}

function update () {
  for (const canvasIndex in canvasList) {
    const canvas = canvasList[canvasIndex]
    draw(canvas, colorList[canvasIndex])
  }
  info.seconds = info.seconds + 0.014
  info.t = info.seconds * Math.PI
  timeoutId = setTimeout(update, 35)
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function stop () {
  clearTimeout(timeoutId)
}

/**
 * Draw animation function.
 *
 * This function draws one frame of the animation, waits 20ms, and then calls
 * itself again.
 */
function draw (canvas, color) {
  const context = canvas.contextCache
  context.clearRect(0, 0, canvas.width, canvas.height)

  drawWave(canvas, color[0], 1, 3, 0)
  drawWave(canvas, color[1], 1, 2, 3000)
}

/**
 * 波を描画
 * drawWave(色, 不透明度, 波の幅のzoom, 波の開始位置の遅れ)
 */
function drawWave (canvas, color, alpha, zoom, delay) {
  const context = canvas.contextCache
  context.fillStyle = color
  context.globalAlpha = alpha
  context.beginPath()
  drawSine(canvas, info.t / 0.5, zoom, delay)
  context.lineTo(canvas.width + 10, canvas.height)
  context.lineTo(0, canvas.height)
  context.closePath()
  context.fill()
}

/**
 * Function to draw sine
 *
 * The sine curve is drawn in 10px segments starting at the origin.
 * drawSine(時間, 波の幅のzoom, 波の開始位置の遅れ)
 */
function drawSine (canvas, t, zoom, delay) {
  const xAxis = Math.floor(canvas.height / 2)
  const yAxis = 0
  const context = canvas.contextCache
  // Set the initial x and y, starting at 0,0 and translating to the origin on
  // the canvas.
  let x = t
  let y = Math.sin(x) / zoom
  context.moveTo(yAxis, unit * y + xAxis)

  // Loop to draw segments
  for (let i = yAxis; i <= canvas.width + 10; i += 10) {
    x = t + (-yAxis + i) / unit / zoom
    y = Math.sin(x - delay) / 3
    context.lineTo(i, unit * y + xAxis)
  }
}
