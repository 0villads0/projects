var canvas = document.getElementById("canvas")
var ctx = canvas.getContext("2d")

var color = "rgb(0,200,0)"

var DVD = {
    x: 100,
    y: 100,
    vx: 3,
    vy: 3,
    dim_x: 250,
    dim_y: 150,
    draw: function(){
        ctx.beginPath()
        ctx.rect(this.x, this.y, this.dim_x, this.dim_y)
        ctx.closePath()
        ctx.fillStyle = color
        ctx.fill()
    }
}

function draw(){
    ctx.clearRect(0,0,canvas.width,canvas.height)
    DVD.draw()
    DVD.x += DVD.vx
    DVD.y += DVD.vy
    
    if (DVD.x + DVD.vx > canvas.width || DVD.x + DVD.vx < 0 || DVD.x + DVD.vx + DVD.dim_x > canvas.width){DVD.vx = -DVD.vx; new_color()}
    if (DVD.y + DVD.vy > canvas.height || DVD.y + DVD.vy < 0 || DVD.y + DVD.vy + DVD.dim_y > canvas.height){DVD.vy = -DVD.vy; new_color()}

    window.requestAnimationFrame(draw)
}

window.addEventListener("load", () => {
    ctx.canvas.width  = window.innerWidth;
    ctx.canvas.height = window.innerHeight;
    window.requestAnimationFrame(draw)
})

function new_color(){
    let r = String(Math.floor(Math.random()*200)+50)
    let g = String(Math.floor(Math.random()*200)+50)
    let b = String(Math.floor(Math.random()*200)+50)
    color = "rgb(" + r +"," + g + "," + b + ")"
}