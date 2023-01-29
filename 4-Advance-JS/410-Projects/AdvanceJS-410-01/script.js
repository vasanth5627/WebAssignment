const input = document.getElementById('input');
const goBtn = document.getElementById('go-btn');
const container = document.getElementsByClassName('profiles-container')[0];

init();

function init(){
    goBtn.addEventListener('click', fetchApi);
    input.addEventListener('keyup', (e) => {
        if(e.key === 'Enter'){
            fetchApi();
        }
    })
}

async function fetchApi(){
    const value = input.value;
    const response = await fetch(`https://api.github.com/search/users?q=${value}`)
    const textResponse = await response.text();
    const jsonData = JSON.parse(textResponse);
    render(jsonData.items);
}

function render(data) {
    let html = '';
    for(let i=0; i<data.length; i++){
        html += `<div class="profile">
                <img src="${data[i].avatar_url}" alt="">
                <div class="user">
                    <h5>${data[i].login}</h5>
                    <a href="${data[i].html_url}">Visit Profile</a>
                </div>
            </div>`
    }
    container.innerHTML = html;
}