function myFunc(){

    var words = ["javascript","monkey","mathematics","cars","games"];
    var word = words[Math.floor(Math.random()*words.length)];
   
    var answerArray = []; 
    for(var i = 0; i < word.length; i++){
        answerArray[i] = "_";
    }

    var remainingLetters = word.length;

    while(remainingLetters > 0){
        alert(answerArray.join(" "));
        
        var guess = prompt("Guess a letter, or click Cancel to stop playing.");

        if(guess === null){
            break;
        }
        else if (guess.length !== 1){
            alert("Please entr a single letter.");
        }
        else{
            for(var j = 0; j < word.length; j++){
                if(word[j] === guess){
                    answerArray[j] = guess;
                    remainingLetters--;
                }
            }
        }
    }
    alert(answerArray.join(" "));
    alert("Good job! The answer was " + word);
}
