var TV = require("./tv");

var tv = new TV();

var search = process.argv[2];
var term = process.argv.slice(3).join(" ");

if(!search){
    console.log("Please search for either a show or an actor");
    return;
}
if(!term){
    console.log("Please enter a show or an actor to search for");
    return;
}
if(search === "show"){
    console.log("Searching for TV shows");
    tv.findShow(term);
}else{
    console.log("Searching for actors");
    tv.findActor(term);
}