// Get a reference to the table body
const tbody = d3.select("tbody");

//Use d3 to update each cell's text with
// weather report values (weekday, date, high, low)
data.forEach(data => {
    let row = tbody.append("tr");
    Object.values(data).forEach(value => {
        // Append a cell to the row for each value
        // in the weather report object
        var cell = row.append("td");
        cell.text(value);
    });
});

//JavaScript that listends for events through the date/time column to find rows that match user input.
// Select the button
let filterButton = d3.select("#filter_table");

// Select the form
let form = d3.select("#form");

// Create the function to run for both events
const runEnter = () => {

    // Prevent the page from refreshing
    d3.event.preventDefault();

    // Select the input element and get the raw HTML node
    let dateElement = d3.select("#date");

    // Get the value property of the input element
    // let inputValue = inputElement.property("value");
    const dataElementValue = dateElement.property("value")

    // Print the value to the console
    console.log(dataElementValue);

    //Use d3 to update each cell's text with
    // weather report values (weekday, date, high, low)
    tbody.selectAll("tr").remove();

    data.forEach(item => {
        if (item.datetime == dataElementValue) {
            let row = tbody.append("tr");
            Object.values(item).forEach(ufoSighting => {
                // Append a cell to the row for each value
                // in the weather report object
                var cell = row.append("td");
                cell.text(ufoSighting);
            });
        }
    });
}

// Create event handlers for clicking the button or pressing the enter key
filterButton.on("click", runEnter);
form.on("submit", runEnter);