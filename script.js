let run = document.querySelector(".character-run");
let stand = document.querySelector(".character");

let keyCount = 60;

//  document.addEventListener('keydown', (e)=>{
//      let key = e.key;

//      if(key==='ArrowDown'){
//        keyCount=keyCount+2.7
//        run.style.display='block'
//        stand.style.display='none'

//      }else if(key==='ArrowUp'){
//        keyCount=keyCount-2.7
//        run.style.display='block'

//        stand.style.display='none'
//        //run.style.transform='translateX(90)'
//      }
//      run.style.left=`${keyCount}vw`

//  })

//

// window.addEventListener("scroll", () => {

//   let sc =scrollY;
//   console.log(sc)
//   if(sc===Number){
//     document.querySelector('.outer-wrapper').style.overflow='initial'

//   }else{
//     document.querySelector('.outer-wrapper').style.overflow='auto'
//   }

//   setInterval(()=>{
//     document.querySelector('.outer-wrapper').style.overflow='initial'
//   },5)

// })

window.addEventListener("wheel", (event) => {
  console.log(event.deltaY);
  let e = event.deltaY;
  if (e === 125) {
    keyCount = keyCount + 100;
    console.log("inainte");
    run.style.display = "block";
    stand.style.display = "none";
  } else {
    console.log("inapoi");
    keyCount=keyCount-100
    run.style.display='block'
    stand.style.display = "none";
  }
  run.style.left = `${keyCount}px`;
});

 setInterval(() => {
   stand.style.display = "block";
   run.style.display = "none";
   stand.style.left = `${keyCount}px`;
   
   
 }, 500);
