const inp_div = document.getElementById('txt');
const p_div = document.getElementById('wrote')




window.setInterval(function(){
    p_div.textContent = inp_div.value;
},100)

//how to do it , when i press enter on my keyboard

// inp_div.addEventListener('keyup',()=>{
//     p_div.textContent = inp_div.value
// })