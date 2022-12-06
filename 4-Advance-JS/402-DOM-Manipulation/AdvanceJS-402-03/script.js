const inp_div = document.getElementById('inpe');
const addBtn_div = document.getElementById('addbtn');
const ulList_div = document.querySelector('.list');
const list_div = ulList_div.querySelector('ul');

addBtn_div.addEventListener('click',function(){
    const li_div = document.createElement('li');
    const li_btn = document.createElement('button');
    li_div.setAttribute('class','litext')
    li_btn.textContent = "delete"; 
    li_btn.setAttribute("id", 'delbtn');
    li_div.textContent = inp_div.value;
    list_div.appendChild(li_div)
    li_div.appendChild(li_btn)
    inp_div.value = "";
    li_btn.addEventListener('click',function(e){
        
        let target = e.target;
        target.parentElement.remove();  
    
    })
});




