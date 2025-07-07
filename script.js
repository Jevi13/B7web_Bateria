
document.body.addEventListener('keyup', (event)=>{
    playKey(event.code.toLowerCase());
});

document.querySelector('.composer button').addEventListener('click', (event)=>{
    let song = document.querySelector('#input').value;
    let songArray = song.split("");
    song = document.querySelector('#input').value = "";
    console.log(songArray);
    playComp(songArray);
}
)

function playKey(sound){
   
    let audioElement = document.querySelector(`#s_${sound}`);
    let keyElement = document.querySelector(`.key[data-key="${sound}"]`); 
     
    if(audioElement){
        audioElement.play();
        audioElement.currentTime = 0;
    }

    if(keyElement){
        keyElement.classList.add('active');

        setTimeout(()=>{
            keyElement.classList.remove('active');
        }, 300);

    }
}

function playComp(songArray){

    let wait = 0;
    

    for(let songitem of songArray){
        setTimeout(()=>{
            playKey(`key${songitem}`);
        }, wait);
        wait += 250;
}

}