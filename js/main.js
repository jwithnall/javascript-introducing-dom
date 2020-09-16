//console.info("Hello from file");
//console.dir(document);

//H1 with ID of myHeading


document.querySelector("a").setAttribute("href", "http://www.google.com");

document.querySelector("nav ul li").setAttribute("class", "currentPage");

document.getElementById("myTestEvent").addEventListener("click",function(){
    //console.info("I was clicked");
    document.getElementById("myHeading").innerHTML = "Jon's Web Site";
});