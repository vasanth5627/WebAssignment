window.addEventListener("keydown",(e)=>{
    var audio = document.querySelectorAll('audio');
    console.log(audio)
    console.log(e.key);
    if(e.key=='w'){
        if(audio){
            audio[0].play();
            audio.currentTime=0;
        }
        else return;
    }
    if(e.key=='a'){
        if(audio){
            audio[1].play();
            audio.currentTime=0;
        }
        else return;
    }
    if(e.key=='s'){
        if(audio){
            audio[2].play();
            audio.currentTime=0;
        }
        else return;
    }
    if(e.key=='d'){
        if(audio){
            audio[3].play();
            audio.currentTime=0;
        }
        else return;
    }
    if(e.key=='j'){
        if(audio){
            audio[4].play();
            audio.currentTime=0;
        }
        else return;
    }
    if(e.key=='k'){
        if(audio){
            audio[5].play();
            audio.currentTime=0;
        }
        else return;
    }
    if(e.key=='l'){
        if(audio){
            audio[6].play();
            audio.currentTime=0;
        }
        else return;
    }
});

const keys = document.querySelectorAll('.inst');
const audio = document.querySelectorAll('audio');
for(let i=0; i<keys.length;i++){
    keys[i].addEventListener('click',(e)=>{
        if(audio){
            audio[i].play();
            audio.currentTime=0;
        }
        else return;
    });
}