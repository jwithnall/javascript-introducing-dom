//Immediately invoked function expression (IFFE)
(function(){
    //code
    var pricePounds;
    var exchangeRate = 0.87;
    var priceEuros = 0;

    //Grab form via ID and assign to a variable
    var convertForm = document.getElementById("myForm");
    //Grab p via ID for user feedback
    var msg = document.getElementById("msg");

    //Add listener and feed event object itself into the executing function
    convertForm.addEventListener("submit", function(event){
        console.dir(event);
        event.preventDefault();
        pricePounds = parseFloat(document.getElementById("pounds").value);
        console.info(pricePounds);
       
        if(isNaN(pricePounds)){
            //show if hidden
            msg.style.display = "block";
            msg.innerHTML = "You must enter a number.";
            //apply .error class to this element
            msg.setAttribute("class", "error");
        }
        else{
            msg.removeAttribute("class");
            priceEuros = pricePounds * exchangeRate;
            //concatenation
            //msg.innerHTML = "&euro;" + priceEuros;
            //Can use backticks as alternative to concat in ES6
            priceEuros = priceEuros.toFixed(2);
            msg.innerHTML = `&euro; ${priceEuros}`;
        }        
    });

    //Use arrow function as a shortcut to writing a function (ES6). Syntax sugar, but "this"
    //has different context. Not inherited in the same way!
    document.getElementById("pounds").addEventListener("focus",(event)=>{
        //can use 'this' to refer to object in context. Can be confusing though.
        //this.value = "";
        //Using the event target it arguably more elegant.
        event.target.value = "";
    });

})();