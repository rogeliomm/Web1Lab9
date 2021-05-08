// ===============================================================================
// DEPENDENCIES
// We need to include the path package to get the correct file path for our html
// ===============================================================================
var path = require("path");

var tableArray = require("../data/tableData")
var waitingArray = require("../data/waitinglistData")

// ===============================================================================
// ROUTING
// ===============================================================================

module.exports = function(app) {
  // HTML GET Requests
  // Below code handles when users "visit" a page.
  // In each of the below cases the user is shown an HTML page of content
  // ---------------------------------------------------------------------------

  app.get("/tables", function(req, res) {
    res.render(path.join(__dirname, "../public/tables.ejs"), {tableArray, waitingArray});
  });

  app.get("/reserve", function(req, res) {
    res.render(path.join(__dirname, "../public/reserve.ejs"));
  });

  // If no matching route is found default to home
  app.get("*", function(req, res) {
    res.render(path.join(__dirname, "../public/home.ejs"));
  });
};
