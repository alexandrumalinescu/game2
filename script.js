if(navigator.userAgent.indexOf('Chrome') !=-1){
  let run = document.querySelector(".character-run");
let run2 = document.querySelector('.character-run2');
let stand = document.querySelector(".character");
let keyCount = 60;
let mountainCount = 90;
let mountainCount2 = 300
let sun=70;
document.querySelector('.popupMoz').style.display='none';

window.addEventListener("wheel", (event) => {
  let e = event.deltaY;
  if (e === 125 && keyCount<=7420) {
    mountainCount = mountainCount + 1;
    mountainCount2 = mountainCount2 + 1
    sun = sun +4
    keyCount = keyCount + 100;
    run.style.display = "block";
    stand.style.display = "none";
  
  } else if(e===-125 && keyCount>=160){
    keyCount=keyCount-100
    mountainCount = mountainCount - 1;
    mountainCount2 = mountainCount2 - 1;
    sun = sun -4
  
    run.style.display='none'
    run2.style.display='block';
    document.querySelector('.run2').style.display='block';
    stand.style.display = "none";
  }
  run.style.left = `${keyCount}px`;
  run2.style.left = `${keyCount}px`;
  document.querySelector('.mountain img').style.left=`${mountainCount}vw`;
  document.querySelector('.mountain2 img').style.left=`${mountainCount2}vw`;
  document.querySelector('.sun img').style.left=`${sun}vw`

  if(keyCount>=360){
    document.querySelector('.mushroom1 img').style.display='none';
    document.querySelector('.mushroom11 img').style.display='block';
    document.querySelector('.mushroom2 img').style.display='none';
    document.querySelector('.mushroom21 img').style.display='block';
    document.querySelector('.mushroom3 img').style.display='none';
    document.querySelector('.mushroom31 img').style.display='block';
  }else if(keyCount<=360){
    document.querySelector('.mushroom1 img').style.display='block';
    document.querySelector('.mushroom11 img').style.display='none';
    document.querySelector('.mushroom2 img').style.display='block';
    document.querySelector('.mushroom21 img').style.display='none';
    document.querySelector('.mushroom3 img').style.display='block';
    document.querySelector('.mushroom31 img').style.display='none'
  }

  if(keyCount>=159){
    document.querySelector('.popup').style.display='none';
  }else if(keyCount<=60){
    document.querySelector('.popup').style.display='block';
  }

  if(keyCount>=2360){
    document.querySelector('.plant1').style.display='block';
    document.querySelector('.plant2').style.display='block';
    document.querySelector('.plant3').style.display='block';
    document.querySelector('.plant4').style.display='block';
  }

  if(keyCount>=3060){
    document.querySelector('.birds').style.display='block';
  }

  if(keyCount>=5700){
    document.querySelector('.projects').style.display='flex';
  }
});

 setInterval(() => {
   
     stand.style.display = "block";
     run.style.display = "none";
     run2.style.display = "none";
     stand.style.left = `${keyCount}px`;
 }, 600);

let slides=document.querySelector('.slider-items').children;
let nextSlide= document.querySelector('.right-slide');
let prevSlide= document.querySelector('.left-slide');
let totalSlides= slides.length;
let index = 0;

nextSlide.onclick=function(){
  next('next')
}

prevSlide.onclick=function(){
  next('prev')
}

function next(direction){
  if(direction==='next'){
    index++;
    if(index===totalSlides){
      index=0;
    }
  }
  else{
      if(index===0){
        index=totalSlides-1;
      }else{
        index--;
      }
  }
 
  for(i=0;i<slides.length;i++){
    slides[i].classList.remove('active');
  }
  slides[index].classList.add('active')
};
}

else if(navigator.userAgent.indexOf('Firefox' != -1)){
  console.log('firefoxxxxxx')

  let run = document.querySelector(".character-run");
let run2 = document.querySelector('.character-run2');
let stand = document.querySelector(".character");
let keyCount = 60;
let mountainCount = 90;
let mountainCount2 = 300
let sun=70;
document.querySelector('.popup').style.display='none';

  window.addEventListener('keydown', event=>{
    let key=event.key;
    console.log(key)

  if (key === 'ArrowDown' && keyCount<=7420) {
    mountainCount = mountainCount + 1;
    mountainCount2 = mountainCount2 + 1
    sun = sun + 1.9
    keyCount = keyCount + 60;
    run.style.display = "block";
    stand.style.display = "none";
  
  } else if(key ==='ArrowUp' && keyCount>=160){
    keyCount=keyCount-60
    mountainCount = mountainCount - 1;
    mountainCount2 = mountainCount2 - 1;
    sun = sun -1.9
  
    run.style.display='none'
    run2.style.display='block';
    document.querySelector('.run2').style.display='block';
    stand.style.display = "none";
  }
  run.style.left = `${keyCount}px`;
  run2.style.left = `${keyCount}px`;
  document.querySelector('.mountain img').style.left=`${mountainCount-40}vw`;
  document.querySelector('.mountain2 img').style.left=`${mountainCount2-40}vw`;
  document.querySelector('.sun img').style.left=`${sun}vw`

  if(keyCount>=360){
    document.querySelector('.mushroom1 img').style.display='none';
    document.querySelector('.mushroom11 img').style.display='block';
    document.querySelector('.mushroom2 img').style.display='none';
    document.querySelector('.mushroom21 img').style.display='block';
    document.querySelector('.mushroom3 img').style.display='none';
    document.querySelector('.mushroom31 img').style.display='block';
  }else if(keyCount<=360){
    document.querySelector('.mushroom1 img').style.display='block';
    document.querySelector('.mushroom11 img').style.display='none';
    document.querySelector('.mushroom2 img').style.display='block';
    document.querySelector('.mushroom21 img').style.display='none';
    document.querySelector('.mushroom3 img').style.display='block';
    document.querySelector('.mushroom31 img').style.display='none'
  }

  if(keyCount>=159){
    document.querySelector('.popupMoz').style.display='none';
  }else if(keyCount<=60){
    document.querySelector('.popupMoz').style.display='block';
  }

  if(keyCount>=2360){
    document.querySelector('.plant1').style.display='block';
    document.querySelector('.plant2').style.display='block';
    document.querySelector('.plant3').style.display='block';
    document.querySelector('.plant4').style.display='block';
  }

  if(keyCount>=3060){
    document.querySelector('.birds').style.display='block';
  }

  if(keyCount>=5700){
    document.querySelector('.projects').style.display='flex';
  }
  })

  setInterval(() => {
   
    stand.style.display = "block";
    run.style.display = "none";
    run2.style.display = "none";
    stand.style.left = `${keyCount}px`;
}, 600);

let slides=document.querySelector('.slider-items').children;
let nextSlide= document.querySelector('.right-slide');
let prevSlide= document.querySelector('.left-slide');
let totalSlides= slides.length;
let index = 0;

nextSlide.onclick=function(){
 next('next')
}

prevSlide.onclick=function(){
 next('prev')
}

function next(direction){
 if(direction==='next'){
   index++;
   if(index===totalSlides){
     index=0;
   }
 }
 else{
     if(index===0){
       index=totalSlides-1;
     }else{
       index--;
     }
 }

 for(i=0;i<slides.length;i++){
   slides[i].classList.remove('active');
 }
 slides[index].classList.add('active')
};
 
}


