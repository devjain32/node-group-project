var axios = require("axios");
var fs = require("fs");
var moment = require("moment");

var TV = function() {
  var divider = "\n------------------------------------------------------------\n\n";
  this.findShow = function(show) {
    var URL = "http://api.tvmaze.com/singlesearch/shows?q=" + show;
    axios.get(URL).then(function(response) {
      var jsonData = response.data;
      var showData = [
        "Show: " + jsonData.name,
        "Genre(s): " + jsonData.genres.join(", "),
        "Rating: " + jsonData.rating.average,
        "Network: " + jsonData.network.name,
        "Summary: " + jsonData.summary
      ].join("\n\n");
      fs.appendFile("log.txt", showData + divider, function(err) {
        if (err) throw err;
        console.log(showData);
      });
    });
  };

  this.findActor = function(actor) {
    var URL = "http://api.tvmaze.com/search/people?q=" + actor;
    axios.get(URL).then(function(response) {
      var jsonData = response.data;
      var actorData = [
        "Name: " + jsonData[0].person.name,
        "Gender: " + jsonData[0].person.gender,
        "Birthday: " + moment(jsonData[0].person.birthday).format("MM/DD/YYYY"),
        "Birthplace: " + jsonData[0].person.country.name,
        "Link: " + jsonData[0].person.url
      ].join("\n\n");

      fs.appendFile("log.txt", actorData + divider, function(err){
        if (err) throw err;
        console.log(actorData);
      })
    })
  };
};

module.exports = TV;