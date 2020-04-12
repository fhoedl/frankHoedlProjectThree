// namespacing
const rabbitApp = {};

// ARRAY... Questions w/ options & answers
rabbitApp.questionsArray = [
    {   
        title: `Question 1`,
        question: `Tom, Dick or Harry? no...`,
        option1: `Tom`,
        option2: `Bjork`,
        option3: `Barry`,
        answerURL1: "You are Innocent when you Dream by Tom Waits , https://www.youtube.com/watch?v=WPxwPJn1itw",
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
        question: `Meatloaf as`,
        option1: `70's Film Star`,
        option2: `80's Pop Legend`,
        option3: `90's Comeback Kid`,
        answerURL1: `...link to "Rocky Horror"`,
        answerURL2: `...link to bat out of hell content`,
        answerURL3: `...link to "Fight Club"`,
    },
    {
        title: `Question 4`,
        question: `Who in the world am I?`,
        option1: `Alice`,
        option2: `The (Mad) Hatter`,
        option3: `The Cheshire Cat`,
        answer1: `"“..it’s no use going back to yesterday, because I was a different person then"`,
        answer2: `"If you only knew time as well as I do, said the Hatter, you wouldn't talk about wasting it"`,
        answer3: `"Would you tell me, please, which way I ought to go from here?
        That depends a good deal on where you want to get to, said the Cat.
        I don’t much care where–‘ said Alice. 
        Then it doesn’t matter which way you go, said the Cat."`,
    }
    ]

// SHUFFLING ARRAY randomly
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
    $('.lrgLogo, h1').on('click', (e) =>{
        e.preventDefault();
        $('div.lrgLogo')
            .css('transform', 'scale(4)')
            .toggleClass('landingElement', 1000, `easeInSine`);
            
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