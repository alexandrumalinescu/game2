
//let stand1 = document.querySelector('.stand1');
//let stand2 = document.querySelector('.stand2')
//let run = document.querySelectorAll('.run')

// // setInterval(() => {
// //     stand1.classList.add('stand2');
// //     stand2.style.display='block' ;
// // }, 700);
///
// // setInterval(() => {
// //     stand1.classList.remove('stand2');
// //     stand2.style.display='none'; 
// // },1400);

let keyCount = 7;

document.addEventListener('keydown', (e)=>{
    let key = e.key;
    
    if(key==='ArrowDown'){
      keyCount=keyCount+2.7
      document.querySelector('.character-run').style.display='block'
      document.querySelector('.character').style.display='none'
    
    }else if(key==='ArrowUp'){
      keyCount=keyCount-2.7
      document.querySelector('.character-run').style.display='block'
      document.querySelector('.character').style.display='none'
    }
    document.querySelector('.character-run').style.left=`${keyCount}vw`
    
})

setInterval(()=>{
  document.querySelector('.character').style.display='block'
  document.querySelector('.character').style.left=`${keyCount}vw`
  document.querySelector('.character').style.left=`${keyCount-2.7}vw`
  document.querySelector('.character-run').style.display='none'
},500)





