
document.body.addEventListener('keyup', (event)=>{
    playKey(event.code.toLowerCase);
});


function playKey(sound){
   
    let audioElement = document.querySelector(`#s_${sound}`);
    console.log(audioElement);

}

