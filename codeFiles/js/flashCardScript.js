//
const currPlayer = document.querySelector('#current-player');
const firstInput = document.querySelector('#first-in');
const secondInput = document.querySelector('#second-in');
const answer = document.querySelector('#answer');
const submitButton = document.querySelector('#submit-button');
const resetButton = document.querySelector('#reset-button');
const answerButton = document.querySelector('#answer-button');
// const answer = document.querySelector('#answer');


// inputs
const fName = document.querySelector('#fname');
const operation = document.querySelector('#operation');
const numRange = document.querySelector('#number-range');
const timePerProblem = document.querySelector('#time-per-problem');



// startPractice executes on submission of the options (submit button onclick)
// it calls operation functions
function startPractice (event) {
    event.preventDefault ();
    console.log('starting now');
    // console.log(fName.value, operation.value, numRange.value, timePerProblem.value);

    submitButton.classList.toggle('hide');
    resetButton.classList.toggle('hide');
    // answerButton.classList.toggle('hide');

    var currName = fName.value;
    if (currName === '') {
        currName = 'anonymous';
        //console.log('anonymous');
    }
    let op = operation.value;

    let playerString = currName + ' you are in ' + op + ' with a range of ' + numRange.value + ' and ' + timePerProblem.value + ' for each problem'


    //operation is going to lead to different functions where numRange and timePerProblem are parameters
    switch (op) {
        case "addition":
            console.log('in addition, name, range, and time are: ', currName, numRange.value, timePerProblem.value) 
            currPlayer.innerHTML = playerString;    
            addition(numRange.value, timePerProblem);
            break;
        case "subtraction":
            console.log('in subtraction, name, range, and time are: ', currName, numRange.value, timePerProblem.value)
            currPlayer.innerHTML = 'Sorry, this isn"t working yet';    
            break;
        case "multiplication":
            console.log('in multiplication, name, range, and time are: ', currName, numRange.value, timePerProblem.value)
            currPlayer.innerHTML = 'Sorry, this isn"t working yet';    
            break;
        case "division":
            console.log('in division, name, range, and time are: ', currName, numRange.value, timePerProblem.value)
            currPlayer.innerHTML = 'Sorry, this isn"t working yet';    
            break;
        case "fraction":
            console.log('in fractions, name, range, and time are: ', currName, numRange.value, timePerProblem.value)
            currPlayer.innerHTML = 'Sorry, this isn"t working yet';    
            break;
        // because this is coming from the drop down selection, there should be nothing that makes it this far.
        default: 
            console.log('Something went wrong choosing an operation, try again')
            break;


    }

}

// addition is called by startPractice
// addition calculate addends, display the numbers, find the answer and get an input from the user
// it calls functions to return the max value with a parameter of the range string

function addition (range, times) {
// initially, this is done without the time constraints.
    
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

    // wait for user input

    // check answer

};

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