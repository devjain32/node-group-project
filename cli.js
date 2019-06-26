var axios = require("axios");

var search = process.argv[2];
var term = process.argv.slice(3).join(" ");


if (search == "show"){
axios.get("http://api.tvmaze.com/search/shows?q=:" + term)
    .then(
        function (response) {
            console.log(
             
                `
             Show Name: ${response.data[0].show.name}
             Genres: ${response.data[0].show.genres}
             Average Rating: ${response.data[0].show.rating[0]}
             Network Name: ${response.data[0].show.network.name}
             Summary: ${response.data[0].show.summary.split("<p>").join("").split("<b>").join("").split("</b>").join("").split("</p>").join("")}
             
        `
            )
        }
    )

    }
