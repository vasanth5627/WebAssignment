const text_div = document.getElementsByTagName('h1')
const code_div = document.querySelector('.code')
console.log(text_div)

code_div.style.display='none';


window.addEventListener('keydown',function(e){ 
    code_div.style.display = 'block';
    console.log(e.key);
    console.log(e.keyCode);   
    if(e.keyCode==32){
        text_div[0].innerHTML = `you pressed <span>Space</span>` 
    }
    else{
        text_div[0].innerHTML = `you pressed <span>${e.key}</span>`
    }
    
    code_div.textContent = e.keyCode;
     
});