// namespacing
const rabbitApp = {};

// ARRAY... Questions w/ options & answers
rabbitApp.questionsArray = [
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

// shuffling the questions
rabbitApp.shuffleQuestion = function shuffle(array) {
    // alternative sort
    // array.sort(() => Math.random() - 0.5);

    // Fisher-Yates shuffle. 
    for (let i = array.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    console.log(rabbitApp.questionsArray, `...remove log`);
}

// ...on event, CALLS Question
rabbitApp.getQuestion = () => {
    $('.logo').on('click', (e) =>{
        e.preventDefault();
        $('div.logo').toggleClass('landingElement', 1000, `easeInSine`);
        console.log(rabbitApp.questionsArray[0].question, `...remove log`);
        console.log(rabbitApp.questionsArray[1].question, `...remove log`);
        console.log(rabbitApp.questionsArray[2].question, `...remove log`);
    });
}

// init FUNCTION Calls
rabbitApp.init = () => {
    rabbitApp.shuffleQuestion(rabbitApp.questionsArray)  
    rabbitApp.getQuestion();
}

// DOCUMENT READY... with init FUNCTION CALL
$(() => {
    rabbitApp.init();
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