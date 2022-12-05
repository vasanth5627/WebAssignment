const container_div = document.querySelector('.container');
const img_div = document.getElementById('imgs');
const left_div = document.getElementById('la');
const right_div = document.getElementById('ra');

const images = ["https://images.unsplash.com/photo-1609604935466-da7cf29de31f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1631&q=80",
                "https://images.unsplash.com/photo-1609854453157-e2d474ff63e3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1932&q=80",
                 "https://images.unsplash.com/photo-1667837990145-4a1e878acf96?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
                 "https://images.unsplash.com/photo-1614102708332-b493cfe3348e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1932&q=80"];

let i=0;
container_div.addEventListener('mouseover',function(){
    if(i>0)
    left_div.style.display='block';
})
container_div.addEventListener('mouseout',function(){
    left_div.style.display='none';
})

container_div.addEventListener('mouseover',function(){
    if(i<images.length-1)
    right_div.style.display='block';
    
})
container_div.addEventListener('mouseout',function(){
    right_div.style.display='none';
})

left_div.addEventListener('click',function(){
    if(i>0){
        i--;
        img_div.src = images[i];
       
    }
    if(i==0){
        left_div.style.display='none';
    }
    
})

right_div.addEventListener('click',function(){
    if(i<images.length-1){
        i++;
        img_div.src = images[i];
        
    }
    if(i==images.length-1){
        right_div.style.display='none';
    }
    
    
    
})
