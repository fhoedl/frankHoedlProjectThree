// namespacing
    // ... rename "fhApp", rename "#func#", 
const fhApp = {};


// assigning Global Variables



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