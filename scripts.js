// namespacing
    // ... rename "fhApp", rename "#func#", 
const fhApp = {};


// assigning Global Variables


// create Object... Questions
fhApp.objQuestions = [
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
        question: `Pick another...`,
        property2: ``,
        property3: ``
    }
    ]


// ...first function
fhApp.func1 = () => {

}


// ...second function
fhApp.func2 = () => {

}


// init FUNCTION 
// ... to CALL functions
fhApp.init = () => {
    fhApp.func1(); 
    fhApp.func2(); 
    // Etc...
}

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