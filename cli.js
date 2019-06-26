var prompt = process.argv[2];
var name = process.argv[3];
for (var i = 4 ; i < process.argv.length ; i++) {
    name += " " + process.argv[i]
}

if (prompt === "actor") {
    actor();
}
else if (prompt === "show") {
    show();
}
else {
    console.log("Sorry we don't support that! Please enter either 'actor' or 'show'")
}


console.log("Prompt: " + prompt);
console.log("Name: " + name)
