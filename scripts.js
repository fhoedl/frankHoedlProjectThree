// namespacing
    // ... rename "fhApp", rename "#func#", 
const fhApp = {};


// assigning Global Variables


// create Object... Questions
fhApp.questionsArray = [
    {   
        title: `Question 1`,
        question: `Pick one...`,
        option1: `tom`,
        option2: `bjork`,
        option3: `barry`,
        answerURL1: `...link to innocent when you dream`,
        answerURL2: `...link to bjork content`,
        answerURL3: `...link to "how deep is your love" cover`,
        property2: ``,
        property3: ``
    },
    {
        title: `Question 2`,
        question: `Favorite Color Family`,
        option1: `blue`,
        option2: `green`,
        option3: `blue`,
        answerURL1: `...link to blue`,
        answerURL2: `...link to green content`,
        answerURL3: `...link to "blue" cover`,
        property2: ``,
        property3: ``
    },
    {
        title: `Question 3`,
        question: `Meatloaf as`,
        option1: `70's Film Star`,
        option2: `80's Pop Legend`,
        option3: `90's Comeback Kid`,
        answerURL1: `...link to "Rocky Horror"`,
        answerURL2: `...link to bat out of hell content`,
        answerURL3: `...link to "Fight Club"`,
        property2: ``,
        property3: ``
    }
    ]



// ...first function
// fhApp.func1 = () => {

// }


// ...generate random number (using.length) 
    // (NOTE: starts at ZERO, but okay as arrays are ZERO BASED)
fhApp.getRandomNum = () => {
    const random = Math.floor(Math.random() * (fhApp.questionsArray).length );
    // console.log(random, `...remove log`);    // 
    return random;
}

// ...on event, CALLS getRandomNum
fhApp.getQuestion = () => {
    $('.logo').on('click', function (e) {
        e.preventDefault();
        const random = fhApp.getRandomNum();
        console.log(fhApp.questionsArray[random].question, `...remove log`);
    });
}


// init FUNCTION 
// ... to CALL functions
fhApp.init = () => {
    fhApp.getQuestion();
}
// fhApp.func1(); 
// Etc...

// DOCUMENT READY
// ... with init FUNCTION CALL
$(() => {
    fhApp.init();
})



// ********************************************************************* 
// PSEUDO CODE, as approved...
// "Rabbit Hole" OR "All the places you'll go..." HTML/CSS LANDING Page

// WAIT for Document Ready
// Create Object 
    // ...containing all 8 questions
    // ...for each question, create 2-4 options

// Create Object 
    // ...containing correlated answers (link for selected option)

// LISTENER, on SUBMIT event 
// RANDOMLY select from "questions" Object
    // ...interact with DOM to display the first question
    // ...and display radial buttons for user response

// LISTENER, for user response, store as VALUE
    // ...using VALUE, select from corresponding "options" Object
    // ...using selection, store VALUE within "answer" Object

// LOOP thru "questions"
    // ...RANDOMLY select next question, 4 of 8 questions(for variety)
    // ...interact with DOM, present each question & user options
    // ...LISTENER, for user response, store each VALUE 
    // ...using VALUE, select from corresponding "options" Object
    // ...using selection, store VALUE within "answer" Object

// LISTENER, for SUBMIT, once six questions asked  
    // ...interact with DOM, based on "answer" Object