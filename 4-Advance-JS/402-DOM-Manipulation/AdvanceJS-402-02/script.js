const btn_div = document.getElementById('btn');
const cont_div = document.querySelector('.container');


btn_div.addEventListener("click",function(){
    const img = document.createElement('img');
    const p_div = document.createElement('p');
    p_div.innerText = "Image element Added";
    img.src = "https://images.unsplash.com/photo-1631796882036-fba2f4722640?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80";
    img.width = "500"
    img.style.display='block'
    img.style.margin = 'auto'
    cont_div.appendChild(p_div);
    cont_div.appendChild(img);
})