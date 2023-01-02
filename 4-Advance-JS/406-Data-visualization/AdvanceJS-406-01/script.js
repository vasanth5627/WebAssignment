const startWord = document.getElementById('start-word');
const anyWord = document.getElementById('any-word');
const sortIcon = document.getElementById('sort-icon');
const input = document.getElementsByTagName('input')[0];
const listOfCountries = document.getElementsByClassName('listOfCountries')[0];
const searchBtn = document.getElementById('searchBtn');

let selectedButton = 'start';
let sort = 'asc';
init()

function init() {
    startWord.addEventListener('click', function() {
        selectedButton = 'start';
        startWord.setAttribute('class', 'select');
        anyWord.removeAttribute('class');
        filterCountries();
    })
    anyWord.addEventListener('click', function() {
        selectedButton = 'any';
        anyWord.setAttribute('class', 'select');
        startWord.removeAttribute('class');
        filterCountries();
    })
    searchBtn.addEventListener('click', filterCountries);
    sortIcon.addEventListener('click', sortChange);
}

function sortChange(){
    sort = sort === 'asc' ? 'desc':'asc';
    if(sort === 'asc'){
        sortIcon.setAttribute('class','fa-solid fa-arrow-down-a-z');
    } else{
        sortIcon.setAttribute('class','fa-solid fa-arrow-up-a-z')
    }
    filterCountries();
}

function filterCountries() {
    let copyCountries = [...countries];
    const inputValue = input.value;  
    if(selectedButton === 'start'){
        copyCountries = copyCountries.filter((country) => {
            return country.toLowerCase().startsWith(inputValue);
        })
    } else {
        copyCountries = copyCountries.filter((country) => {
            return country.toLowerCase().includes(inputValue);
        })
    }

    let html = '';
    
    if(sort === 'asc'){
        for(let i=0; i<copyCountries.length; i++) {
            html += `<div class="country-card">
            <label>${copyCountries[i]}</label>
          </div>`
        }
    } else{
        for(let i=copyCountries.length-1; i>=0; i--) {
            html += `<div class="country-card">
            <label>${copyCountries[i]}</label>
          </div>`
        }
    }

    listOfCountries.innerHTML = html 
}