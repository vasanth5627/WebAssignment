const addPlayerBtn = document.getElementById("addPlayerBtn");
const firstName = document.getElementById("first_name");
const lastName = document.getElementById("last_name");
const country = document.getElementById("country");
const scoreInput = document.getElementById("scoreInput");
const displayPlayers = document.getElementsByClassName("display_players")[0];
const icon = document.getElementsByClassName("btns")[0];


var dateObj = new Date();
const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
var day = dateObj.getDay();
var year = dateObj.getUTCFullYear();

newdate =
  days[day] +
  " " +
  dateObj.getDate() +
  "," +
  year +
  " " +
  dateObj.getHours() +
  ":" +
  dateObj.getMinutes();

init();

function init() {
  addPlayerBtn.addEventListener("click", renderHtml);
}

function deleteRow(e) {
    e.parentElement.parentElement.remove();
}

function addFive(e) {
  let score = e.parentElement.parentElement.firstChild.lastChild.previousSibling;
  value = Number(score.innerHTML) + 5;
  
  score.innerHTML = value;
    
}
function delFive(e) {
    let score = e.parentElement.parentElement.firstChild.lastChild.previousSibling;
    value = Number(score.innerHTML) - 5;
    
    score.innerHTML = value;
}

let html = "";
function renderHtml() {

  const div = document.createElement("div");
  div.setAttribute("class", "player_row");

  div.innerHTML = `<div class="player-info">
                        <div class="name-container">
                            <h3 id="name">${firstName.value + " " + lastName.value}</h3>
                            <p id="date">${newdate}</p>
                        </div>
                            <h3 id="country">${country.value}</h3>
                            <h3 id="score">${scoreInput.value}</h3>
                        </div>
                        <div class="btns">
                            <button onClick="deleteRow(this)" class='trash'><i class="icon fa-solid fa-trash-can"></i></button>
                            <button onClick='addFive(this)'>+5</button>
                            <button onClick='delFive(this)'>-5</button>
                        </div>`;

  displayPlayers.appendChild(div);
  
  firstName.value = "";
  lastName.value = "";
  scoreInput.value = "";
  country.value = "";


}