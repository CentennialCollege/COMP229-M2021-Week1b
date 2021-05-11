"use strict";

// IIFE - Immediately Invoked Function Expression
// AKA Anonymous Self-Executing Function
(function(){

    function Start()
    {
        let myVariable = 10;
        console.log("My Number is: " + myVariable);

        myVariable = "Tom";
    }

    window.addEventListener("load", Start);   

})();







