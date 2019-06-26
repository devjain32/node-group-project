
var axios = require("axios");
var chalk = require("chalk");

var search = process.argv[2];
var term = process.argv.slice(3).join(" ");


if (search == "show") {
    axios.get("http://api.tvmaze.com/search/shows?q=:" + term)
        .then(
            function (response) {
                var showRating = response.data[0].show.rating[0];
                if(showRating == undefined || rshowRating == null || showRating == ""){
                    showRating = "Not available";
                }
                console.log(`
${chalk.magentaBright("=====================================")}
${chalk.cyanBright("Show Name:")} ${response.data[0].show.name}
${chalk.cyanBright("Genres:")} ${response.data[0].show.genres}
${chalk.cyanBright("Average Rating:")} ${showRating}
${chalk.cyanBright("Network Name:")} ${response.data[0].show.network.name}
${chalk.cyanBright("Summary:")}${response.data[0].show.summary.split("<p>").join("").split("<b>").join("").split("</b>").join("").split("</p>").join("")}
${chalk.magentaBright("=====================================")}             
                `)
            }
        )

}