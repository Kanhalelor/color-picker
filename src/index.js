document.body.addEventListener("mousemove", changeBg);

function changeBg() {
  const x = Math.floor(Math.random() * 256);
  const y = Math.floor(Math.random() * 256);
  const z = Math.floor(Math.random() * 256);

  document.body.style.background = `rgb(${x}, ${y}, ${z})`;
  const bg = document.getElementById("text");
  bg.innerHTML = `background: rgb(${x}, ${y}, ${z})`;
}
