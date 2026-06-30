let click = document.querySelector(".code button");
let i1 = document.querySelector(".i1");
let i2 = document.querySelector(".i2");
let i3 = document.querySelector(".i3");
let i4 = document.querySelector(".i4");

click.addEventListener("click", () => {
  setInterval(() => {
    i1.style.opacity = "1";
  }, 1000);
  setInterval(()=>{
    i2.style.opacity = "1";
  }, 2000)
  setInterval(()=>{
    i3.style.opacity = "1";
  },3000)
  setInterval(()=>{
    i4.style.opacity = "1";
  },4000)
});
