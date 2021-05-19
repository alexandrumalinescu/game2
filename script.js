let run = document.querySelector(".character-run");
let stand = document.querySelector(".character");

let keyCount = 60;
let mountainCount = 90;
let mountainCount2 = 300
let sun=70;

window.addEventListener("wheel", (event) => {
  console.log(event.deltaY);
  let e = event.deltaY;
  if (e === 125 && keyCount<=7420) {
    mountainCount = mountainCount - 1;
    mountainCount2 = mountainCount2 - 1
    sun = sun +1
    keyCount = keyCount + 100;
    console.log("inainte");
    run.style.display = "block";
    stand.style.display = "none";
   
  } else if(e===-125 && keyCount>=160){
    console.log("inapoi");
    keyCount=keyCount-100
    mountainCount = mountainCount + 1;
    mountainCount2 = mountainCount2 + 1;
    sun = sun -1
    run.style.display='block'
    stand.style.display = "none";
  }
  run.style.left = `${keyCount}px`;
  document.querySelector('.mountain img').style.left=`${mountainCount}vw`;
  document.querySelector('.mountain2 img').style.left=`${mountainCount2}vw`;
  document.querySelector('.sun img').style.left=`${sun}vw`
});

 setInterval(() => {
   stand.style.display = "block";
   run.style.display = "none";
   stand.style.left = `${keyCount}px`;
 }, 500);
