const info = document.getElementsByClassName('info')[0];
const populationBtn = document.getElementById('population-btn');
const languageBtn = document.getElementById('lang-btn');
const para = document.getElementById('para');

init();

function init() {
    setCountriesVsPopulation();
    populationBtn.addEventListener('click', setCountriesVsPopulation);
    languageBtn.addEventListener('click', setLanguagesVsNoOfCountries);
}

function setCountriesVsPopulation() {
    const coutriesVsPopulation = sortCountriesDataPopulation();
    const totalPopulation = getTotalPopulation();
  let html = `<div class="row">
             <span class="lang">World</span>
                <div class="bar">
                <div style="width: 100%;"></div>
                 </div>
                 <span class="country">${totalPopulation}</span>
                </div>`;
  for (let i = 0; i < coutriesVsPopulation.length; i++) {
    html += `<div class="row">
        <span class="lang">${coutriesVsPopulation[i].name}</span>
        <div class="bar">
            <div style="width: ${(coutriesVsPopulation[i].population / totalPopulation) * 100}%;"></div>
        </div>
        <span class="country">${coutriesVsPopulation[i].population}</span>
      </div>`;
  }
  info.innerHTML = html;
  para.innerHTML = '10 most populated countries in the World';
  
}

function setLanguagesVsNoOfCountries() {
  let totalLanguages = getTotalLanguages(); 
  let sortedLanguages = sortLanguages();
  
  let html = '';
  for(let i=0;i<10;i++){
    html += `<div class="row">
    <span class="lang">${sortedLanguages[i][0]}</span>
    <div class="bar">
        <div style="width: ${(sortedLanguages[i][1])}%;"></div>
    </div>
    <span class="country">${sortedLanguages[i][1]}</span>
  </div>`
  }
  info.innerHTML = html;
  para.innerHTML = '10 most spoken languages in the World';
}

function sortCountriesDataPopulation() {
  let copyCountries_data = countries_data;
  return copyCountries_data.sort((a, b) => {
      return b.population - a.population;
    }).slice(0,10).map((c) => {
      return {
        name: c.name,
        population: c.population,
      };
    });
}

function sortLanguages() {
    let totalLanguages = getTotalLanguages();
    let sortable = [];
    for(let lang in totalLanguages){
      sortable.push([lang, totalLanguages[lang]]);
    } 
    return sortable.sort((a, b) => {
      return b[1] - a[1];
    })
}

function getTotalPopulation() {
  let copyCountries_data = countries_data;
  // let totalPopulation = 0;
  // for (let i = 0; i < copyCountries_data.length; i++) {
  //     totalPopulation += copyCountries_data[i].population;
  // }
  // return totalPopulation;
  //Also we can use reduce method
  return copyCountries_data.reduce((init, cur) => {
    return init + cur.population;
  }, 0);
}

function getTotalLanguages() {
    let totalLanguages = {};
    for(let i = 0; i < countries_data.length; i++) {
      let languages = countries_data[i].languages;
      for(let j = 0; j < languages.length; j++) {
        let language = languages[j];
        if(totalLanguages[language]) {
            totalLanguages[language] += 1;
        } else {
            totalLanguages[language] = 1;
        }
      }
    }
    return totalLanguages;
}