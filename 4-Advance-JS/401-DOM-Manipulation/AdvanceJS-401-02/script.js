const child_div = document.querySelector('.has-children');
console.log(child_div.children)
const li_div = child_div.getElementsByTagName('li');
console.log(li_div) 

for(let i=0;i<li_div.length;i++){
    if((i+1)%2==0){
        li_div[i].style.backgroundColor='lime';
        li_div[i].style.color = 'white';
    }
    if(i==0){
        li_div[i].style.backgroundColor = 'blue'
        li_div[i].style.color = 'white';
    }

    if(i==8){
        li_div[i].style.backgroundColor = 'green'
        li_div[i].style.color = 'white';
    }

    if(i==li_div.length-1){
        li_div[i].style.backgroundColor = 'palevioletred'
        li_div[i].style.color = 'white';
    }

}

