const inp_div = document.getElementById('txt');
const p_div = document.getElementById('wrote')




window.setInterval(function(){
    p_div.textContent = inp_div.value;
},100)