// namespacing
const rabbitApp = {};

// ARRAY... Questions w/ options & answers
rabbitApp.questionsArray = [
    {   
        title: `Question 1`,
        question: `Tom, Dick or Harry? no...Tom, Bjork or Barry`,
        option1: `Tom`,
        option2: `Bjork`,
        option3: `Barry`,
        answerURL1: `link to Tom Waits "This Piano has been Drinking"`,
        answerURL2: `Violently Happy by Bjork, https://www.youtube.com/watch?v=wx1YGsvdpfo`,
        answerURL3: `...link to "how deep is your love" cover`,
    },
    {
        title: `Question 2`,
        question: `Describe yourself, I'm a...`,
        option1: `dreamer`,
        option2: `little sad`,
        option3: `lover`,
        answerURL1: `You are Innocent when you Dream by Tom Waits https://www.youtube.com/watch?v=WPxwPJn1itw"`,
        answerURL2: `Charles Bradley performs soulful cover of Black Sabbath's 'Changes', https://www.youtube.com/watch?v=zfaOf70M4xs`,
        answerURL3: `"The Avalanches - Because I'm Me , https://www.youtube.com/watch?v=eu0KsZ_MVBc"`,

    },
    {
        title: `Question 3`,
        question: `David Bowie in the ...`,
        option1: `70's`,
        option2: `80's`,
        option3: `2000's`,
        answerURL1: `...link to "Rocky Horror"`,
        answerURL2: `...link to bat out of hell content`,
        answerURL3: `...link to "Fight Club"`,
    },
    {
        title: `Question 4`,
        question: `Who in the world am I?`,
        option1: `Alice`,
        option2: `(Mad) Hatter`,
        option3: `Cheshire Cat`,
        answerURL1: `"“..it’s no use going back to yesterday, because I was a different person then"`,
        answerURL2: `"If you only knew time as well as I do, said the Hatter, you wouldn't talk about wasting it"`,
        answerURL3: `"Would you tell me, please, which way I ought to go from here?
        That depends a good deal on where you want to get to, said the Cat.
        I don’t much care where–‘ said Alice. 
        Then it doesn’t matter which way you go, said the Cat."`,
    }
    ]

rabbitApp.counter = 0;


// SHUFFLING ARRAY randomly
rabbitApp.shuffleQuestion = function shuffle(array) {
    // Fisher-Yates shuffle. 
    for (let i = array.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    console.log(rabbitApp.questionsArray, `...remove log`);
}

// ...on event, CALLS Question
rabbitApp.getQuestion = () => {
    // MAIN Page to Instructions
    $('.button1').on('click', (e) =>{
        e.preventDefault();
        $('.lrgLogo')
             .addClass("landingElement");
    });

    // Instructions to First Question
    $('.button2').on('click', (e) => {
        e.preventDefault();

        const printQuestion = rabbitApp.questionsArray[rabbitApp.counter].question;
        const optionOne = rabbitApp.questionsArray[rabbitApp.counter].option1;
        const optionTwo = rabbitApp.questionsArray[rabbitApp.counter].option2;
        const optionThree = rabbitApp.questionsArray[rabbitApp.counter].option3;
        const linkOne = rabbitApp.questionsArray[rabbitApp.counter].answerURL1;

        rabbitApp.getQuestion();
        $('.info')
            .addClass(`hideMe`);
        $('.questionBlock h3')
            // .append(printQuestion, optionOne, optionTwo, optionThree); 
            .append(printQuestion); 
        $(`.holeOption1`)
            .toggleClass(`hideMe`);
        $(`.holeOption1 p`)   
            .append(optionOne);
        
        // selecting answer and displaying it
        $('.questionBlock button.holeOption1').on('click', (e) => {
            // console.log(linkOne)
            $(`.holeOption1`).toggleClass(`hideMe`);
            $(`.holeOption2`).toggleClass(`hideMe`);
            $(`.holeOption3`).toggleClass(`hideMe`);
            $(`.questionBlock h3`).empty();
            $(`.questionBlock h3`).append(linkOne);
        });

        console.log(linkOne);
        rabbitApp.counter = rabbitApp.counter + 1;

        return rabbitApp.counter;   
    });



}

// init FUNCTION Calls
rabbitApp.init = () => {
    rabbitApp.shuffleQuestion(rabbitApp.questionsArray); 
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