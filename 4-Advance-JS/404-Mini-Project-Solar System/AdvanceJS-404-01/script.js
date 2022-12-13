
const btn_div = document.getElementById('btn');
btn_div.addEventListener('click', calcMass);

planets_img={9.8:"ProjectImage/earth.png", 24.79:"ProjectImage/jupiter.png",
            3.72:"ProjectImage/mars.png",3.7:"ProjectImage/mercury.png",
            1.62:"ProjectImage/moon.png",11.15:"ProjectImage/neptune.png",
            0.062:"ProjectImage/pluto.png",10.44:"ProjectImage/saturn.png",
            8.873:"ProjectImage/uranus.png",8.87:"ProjectImage/venus.png"};

function calcMass(){
    const mass = document.getElementById('weight').value;
    const planet = document.getElementById('gravity').value;
    var planet_name = document.getElementsByTagName('option');
    const data = document.querySelector('.data');
    const two = document.querySelector('.two');
    if(mass>0 && planet>0){
        two.style.display='none';
        for(let i=0;i<planet_name.length;i++){
            if(planet==planet_name[i].value){planet_name=planet_name[i].textContent;}
        }

        image_div = document.getElementById('image');
        image_div.src = planets_img[planet];
       
        data.style.display="flex";
        document.getElementById("pname").textContent=" "+planet_name;

        let val = (mass*planet).toFixed(2);
        document.querySelector('.num').textContent = val+" N";


        
    }
    else{
        data.style.display='none';
        two.style.display='block';

    }
}