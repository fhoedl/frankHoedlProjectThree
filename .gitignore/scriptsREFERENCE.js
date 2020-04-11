// namespacing
    // ... rename "fhApp", rename "#func#", 
const fhApp = {};


// assigning Global Variables
    // ... in this case for API calls
fhApp.apiURL = `https://...`;
fhApp.apiKey = `...`;


// API call
    // ...if needed
fhApp.func1 = () => {
    $.ajax({
        url: fhApp.apiURL,
        method: `GET`,
        dataType: `json`,
        data: {
            key: fhApp.apiKey
        }
    }).then((result) => {
        console.log(result);    // remove once coding completed
        fhApp.func3(result);    // GETTING result... as a JSON 
    })
}


// .forEACH CYCLING thru result (from above)
fhApp.func3 = (resultAsArray) => {
    console.log(resultAsArray);   // remove once coding completed, CONFIRM above result is received

    // using .forEach,
        // assigning to `.htmlClass` (could be an element)
            // using .append to `htmlElement` to change code ... creating new line(s) with `object.property` in a string
    myArray.forEach((objOfMyArray) => {
        $(`.htmlClass`)
            .append(`<htmlElement>${objOfMyArray.propertyA}</htmlElement>`)  // <- no semicolon in example, since code continues...
            .append(`<htmlElement>${objOfMyArray.propertyB}</htmlElement>`); // <- semicolon at end
    });
}


// init FUNCTION 
// ... to CALL functions
fhApp.init = () => {
    fhApp.func1(); // CALLING the API call
    fhApp.func2(); 
    // Etc... can't be have `func3` in this example as it's used above, already called in 
}


// DOCUMENT READY
// ... with init FUNCTION CALL
$(() => {
    fhApp.init();
})