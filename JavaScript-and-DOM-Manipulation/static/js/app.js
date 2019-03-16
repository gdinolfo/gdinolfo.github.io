// from data.js
var tableData = data;

var tbody = d3.select("tbody");
var submit = d3.select("#filter-btn");

// create function to display table
function displayTable(info) {
    info.forEach((event) => {
        var tr = tbody.append("tr");
        tr.append("td").text(event.datetime);
        tr.append("td").text(event.city);
        tr.append("td").text(event.state);
        tr.append("td").text(event.country);
        tr.append("td").text(event.shape);
        tr.append("td").text(event.durationMinutes);
        tr.append("td").text(event.comments);
    });
};

// display initial table
displayTable(tableData);

// create function that filters based on the entry and which type
function filtering(selection, entry) {
    
    // filter data down to array only containing conditions
    filteredData = tableData.filter(event => event[selection] === entry);

    // append filled table to table variable for display
    displayTable(filteredData);
};

// When user clicks button do this
submit.on("click", function() {

    // prevent reloading of the screen
    d3.event.preventDefault();

    // remove previous rows from display
    tbody.html('');

    // Select the input element and get the raw HTML node and value
    var dateInput = d3.select("#datetime").property("value");

    
    // if input is specific type and variable display for those types
    if (dateInput) {
        filtering('datetime', dateInput);
    } else {
        alert('You didn\'t input anything')
    };
});