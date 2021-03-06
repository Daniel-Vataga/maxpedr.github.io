const getId = id => document.getElementById(id);

getId('btn1').addEventListener('click', () => {
    const audio = new Audio('./audio/audio1.ogg');
    audio.play()
})
getId('btn2').addEventListener('click', () => {
    const audio = new Audio('./audio/audio3.ogg');
    audio.play()
})
getId('btn3').addEventListener('click', () => {
    const audio = new Audio('./audio/audio2.ogg');
    audio.play()
})
