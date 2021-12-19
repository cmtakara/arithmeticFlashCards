//
const currPlayer = document.querySelector('#current-player');

const firstInput = document.querySelector('#first-in');
const secondInput = document.querySelector('#second-in');
const answer = document.querySelector('#answer');

const answerBox = document.querySelector('#answer-box');

var inCheckAnswer = false;

//from w3schools trigger button on enter
answerBox.addEventListener("keyup", function(event){
    console.log('in event listener')
    console.log('keycode is: ', event.keyCode)
    //number 13 is enter
    if (event.keyCode === 13) {
        event.preventDefault();
        console.log('in if');
        if (!inCheckAnswer) {
            answerCheck(event);
        }
    }
}); 


// buttons - above are grouped by location, but these interact with all areas and can't interrupt other actions
const submitButton = document.querySelector('#submit-button');
const resetButton = document.querySelector('#reset-button');
const answerButton = document.querySelector('#answer-button');
const nextButton = document.querySelector('#next-button');



// inputs
const fName = document.querySelector('#fname');
const operation = document.querySelector('#operation');
const numRange = document.querySelector('#number-range');
const timePerProblem = document.querySelector('#time-per-problem');

const userAnswer = document.querySelector('#user-answer');

//player array
const playerArray = [];

// creating an object that can hold the game information 
// *** Needs to be updated and update the startPractice accordingly
class Player {
    // from user inputs
    constructor (fname, operation, numRange, timePerProblem) {
        console.log('in constructor');
        this.fname = fname;
        this.operation = operation;
        this.numRange = numRange;
        this.timePerProblem = timePerProblem;
        this.numCorrect = 0;
        this.numAttempts = 0;
        this.currAnswer = '';
        this.correctAnswer = '';
    }

}

// Do I want a score class? and then an array of scores?
// I want scores.operation.range.highScore[1..10]

// startPractice executes on submission of the options (submit button onclick)
// it calls operation functions (addition, subtraction, multiplication, division, fraction)
function startPractice (event) {
    inCheckAnswer = false;
    event.preventDefault ();
    console.log('starting practice now');
    // console.log(fName.value, operation.value, numRange.value, timePerProblem.value);

    var currName = fName.value;
    if (currName === '') {
        currName = 'anonymous';
        //console.log('anonymous');
    }

    const newPlayer = new Player(currName, operation.value, numRange.value, timePerProblem.value);
    console.log(newPlayer);
    playerArray.push(newPlayer)

    submitButton.classList.toggle('hide');
    resetButton.classList.toggle('hide');
    // answerButton.classList.toggle('hide');
    answer.classList.toggle('hide');
    userAnswer.style.backgroundColor = 'white'
    userAnswer.style.color = 'black'


    let op = newPlayer.operation;

    let playerString = newPlayer.fname + ' you are in ' + op + ' with a range of ' + newPlayer.numRange +
    ' and ' + newPlayer.timePerProblem + ' for each problem';

//**TODO LIST */
//currently here with updating to include player class - finish including player object, then include these as methods in object
//add method checkOp - because then it can be called from startPractice and checkAnswer


    //operation is going to lead to different functions where numRange and timePerProblem are parameters
    switch (op) {
        case "addition":
            // console.log('in addition, name, range, and time are: ', currName, numRange.value, timePerProblem.value) 
            currPlayer.innerHTML = playerString;    
            addition(newPlayer);
            break;
        case "subtraction":
            // console.log('in subtraction, name, range, and time are: ', currName, numRange.value, timePerProblem.value)
            currPlayer.innerHTML = 'Sorry, this isn"t working yet';    
            break;
        case "multiplication":
            // console.log('in multiplication, name, range, and time are: ', currName, numRange.value, timePerProblem.value)
            currPlayer.innerHTML = 'Sorry, this isn"t working yet';    
            break;
        case "division":
            // console.log('in division, name, range, and time are: ', currName, numRange.value, timePerProblem.value)
            currPlayer.innerHTML = 'Sorry, this isn"t working yet';    
            break;
        case "fraction":
            // console.log('in fractions, name, range, and time are: ', currName, numRange.value, timePerProblem.value)
            currPlayer.innerHTML = 'Sorry, this isn"t working yet';    
            break;
        // because this is coming from the drop down selection, there should be nothing that makes it this far.
        default: 
            // console.log('Something went wrong choosing an operation, try again')
            break;


    }

}



// addition is called by startPractice
// addition calculate addends, display the numbers, find the answer and get an input from the user
// it calls functions to return the max value with a parameter of the range string

function addition (newPlayer) {
// initially, this is done without the time constraints.
    let range = newPlayer.numRange;
    let times = newPlayer.timePerProblem;    

    //hide the answer text div and show the answer input div
    // answer.classList.toggle('hide');
    // calculate addends (integers in range)
    let max = rangeToMax(range);

    // This is one problem, add a loop to have 10
    let num1 = Math.floor(Math.random()*(max+1));
    let num2;
    if (max < 99) {
        num2 = Math.floor(Math.random()*(max+1));
    } else {
        // if max is 99, want there to be no carry, so sum of each set of digits is at most 9
        let tens = Math.floor(num1/10);
        let ones = num1%10;
        console.log('tens is ', tens, ' and ones is ', ones)
        let tensMax = 9-tens;
        let onesMax = 9-ones;
        let tens2 = Math.floor(Math.random()*(tensMax+1));
        let ones2 = Math.floor(Math.random()*(onesMax+1));
        num2 = tens2*10 + ones2;
    }

    // find answer

    // display addends
    firstInput.innerHTML = num1;
    secondInput.innerHTML = '+ ' + num2;
    answer.innerHTML = num1 + num2;
    newPlayer.correctAnswer = num1 + num2;
    // wait for user input

    // check answer

};


// answerCheck executes on user action (checkAnswer button onclick)
// it calls ...
function answerCheck (event) {
    inCheckAnswer = true;
    answerButton.classList.add('hide');
    event.preventDefault ();
    console.log('checking answer now');
    // console.log(playerArray.length);
    // console.log('player array [0]', playerArray[0]);
    // console.log('player array ', playerArray);
    
    let newPlayer = playerArray[playerArray.length-1];
    // console.log('new player is ', newPlayer);
    newPlayer.currAnswer = userAnswer.value;
    console.log('newplayer current answer is: ', newPlayer.currAnswer);
    // console.log('user answer is: ', userAnswer.value);
    correctAnswer = newPlayer.correctAnswer;
    console.log('correct answer is: ', correctAnswer);
    console.log('comparison of user answer and correct answer is: ', correctAnswer == newPlayer.currAnswer);

    if (correctAnswer == newPlayer.currAnswer) {
        //if the answer is correct, increment numCorrect      
        newPlayer.numCorrect++;
        userAnswer.style.backgroundColor = 'green'
        userAnswer.style.color = 'black'
        updateString = "CORRECT!! <br>";
        currPlayer.innerHTML = updateString;
    }
    else {
        userAnswer.style.backgroundColor = 'red'
        userAnswer.value = correctAnswer;
        updateString = "That was not the right answer <br> The correct answer is shown above <br>";
        currPlayer.innerHTML = updateString;
    }
    // increment numAttempts
    // set both currAnswer and correctAnser to '' - moved this to nextProblem so that user can see the correct answer
    newPlayer.numAttempts++;


    updateString += newPlayer.fname + ', you have ' + newPlayer.numCorrect +
    ' correct out of ' + newPlayer.numAttempts + ' tries';  
    currPlayer.innerHTML = updateString;

    if (newPlayer.numAttempts < 10) {
        //try again
        inCheckAnswer = false;
        nextButton.classList.remove('hide');
    }
    else {
        //practice is done 
        // put a string in html saying practice is done, you got x/10 correct
        updateString += '<br> You can try again by pressing start over';
        currPlayer.innerHTML = updateString;
        //hide answer button
        answerButton.classList.add('hide');
        //hide answer box
        answerBox.classList.toggle('hide');
        resetButton.style.backgroundColor = 'yellow'

    }

}

function nextProblem(event) {
    answerButton.classList.remove('hide');
    console.log('moving to the next problem');        
    let newPlayer = playerArray[playerArray.length-1];
    // console.log('new player is ', newPlayer);

    newPlayer.currAnswer = '';
    newPlayer.correctAnswer = '';
    userAnswer.value = '';
    userAnswer.style.backgroundColor = 'white'
    updateString = 'GOOD LUCK';
    currPlayer.innerHTML = updateString;

    //already checking if there are less than 10 attempts.  won't show next button if there are 10
    console.log(newPlayer.operation);
    //this allows you to call the function with the name of the string within the [] and () parameters
    window[newPlayer.operation](newPlayer);
    nextButton.classList.add('hide');

}

// ==========================================================================
// ==========================    HELPER FUNCTIONS   =========================
// ==========================================================================

function rangeToMax (range) {
    console.log('changing range to max');
    switch(range) {
        case 'toFive': 
            console.log('max is 5');
            return 5;
            break;
        case 'toNine': 
            console.log('max is 9');
            return 9;
            break;
        case 'toFifteen': 
            console.log('max is 15');
            return 15;
            break;
        case 'toTwenty': 
            console.log('max is 20');
            return 20;
            break;
        case 'twoDigit': 
            console.log('max is 99');
            return 99;
            break;
        default: 
            console.log('in default, so make max 99');
            return 99;
            break;
    }
};