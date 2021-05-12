let stand1 = document.querySelector('.stand1');
let stand2 = document.querySelector('.stand2')


setInterval(() => {
    stand1.classList.add('stand2');
    stand2.style.display='block' ;
}, 700);

setInterval(() => {
    stand1.classList.remove('stand2');
    stand2.style.display='none'; 
},1400);



// setTimeout(()=>{
   
//    },2) 

//    setTimeout(()=>{
//        stand1.classList.remove('stand1');
//        stand2.classList.add('stand1')
//    },2);

