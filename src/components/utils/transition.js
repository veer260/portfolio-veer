const letters = 'abcdefghijklmnopqrstuvwxyz';
function transition( next, setText) {
    let iterations = 0;

    const id = setInterval(() => {
        const newWordArray = [];
        for(let i = 0; i < next.length; i++) {
          if(iterations >= (i+1)*10){
            newWordArray.push(next[i]);
            continue;
          }
          newWordArray.push(letters[Math.floor(Math.random()*26)]);
        }
        const newWord = newWordArray.join('');
        iterations++;
    //    console.log(newWord);
    setText(newWord);

        if(iterations > next.length*10) {
          clearInterval(id);
        }
    }, 30);
}
// transition('work', "play");

export default transition;