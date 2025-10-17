// ---------- Starfield Background ----------
const canvas = document.createElement("canvas");
document.body.appendChild(canvas);
const ctx = canvas.getContext("2d");

canvas.style.position = "fixed";
canvas.style.top = 0;
canvas.style.left = 0;
canvas.style.zIndex = -1;

let stars = [];

function resize() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}
window.addEventListener("resize", resize);
resize();

// Create stars
for (let i = 0; i < 100; i++) {
  stars.push({
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height,
    size: Math.random() * 2 + 1,
    speed: Math.random() * 0.5 + 0.2
  });
}

// Animate stars
function animate() {
  ctx.fillStyle = "rgba(0, 0, 20, 0.3)";
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = "#ffffff";

  stars.forEach((star) => {
    star.y -= star.speed;
    if (star.y < 0) star.y = canvas.height;
    ctx.beginPath();
    ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2);
    ctx.fill();
  });

  requestAnimationFrame(animate);
}
animate();

// ---------- Button Click Example ----------
document.getElementById("bounceButton").addEventListener("click", () => {
  alert("Button clicked! Imagine this links to your downloads.");
});
