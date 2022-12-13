const bill_div = document.getElementById('bill');
const service_div = document.getElementById('service');
const people_div = document.getElementById('people');
const amount_div = document.getElementById('amount');
const calc_btn = document.getElementById('calc');
const tip_div = document.querySelector('.tip');
// console.log(bill_div+" "+service_div+" "+people_div+" "+amount_div+" "+calc_btn);

calc_btn.addEventListener("click", calculateTip);


function calculateTip(){
    let bill = bill_div.value;
    let service = service_div.value;
    let people = people_div.value;
    let total = ((bill*service)/people).toFixed(2);
    amount_div.textContent =total;
    tip_div.style.display='block';
    
}

