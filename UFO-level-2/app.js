// Get a reference to the table body
const tbody = d3.select("tbody");

//JavaScript that listends for events through the date/time column to find rows that match user input.
// Select the button
let filterButton = d3.select("#filterTableButton");

// Select the form
let form = d3.select("#form");

// Create the function to run for both events
const runEnter = () => {

    // Prevent the page from refreshing
    d3.event.preventDefault();

    // Select the input element and get the raw HTML node
    let dateElement = d3.select("#date");
    let cityElement = d3.select("#city");
    // let stateElement = d3.select("#state")


    // Get the value property of the input element
    // let inputValue = inputElement.property("value");
    const dateElementValue = dateElement.property("value").toLowerCase()
    const cityElementValue = cityElement.property("value").toLowerCase()
    // const stateElementValue = stateElement.property("value").toLowerCase()

    // Print the value to the console
    console.log(dateElementValue);

    //Use d3 to update each cell's text with UFO data
    tbody.selectAll("tr").remove();

    data.forEach(item => {
        let row = null;
        if (dateElementValue && !cityElementValue) {

            if (item.datetime.includes(dateElementValue)) {
                row = tbody.append("tr");
            }
        } else if (!dateElementValue && cityElementValue) {
            if (item.city.includes(cityElementValue)) {
                row = tbody.append("tr");
            }
        } else if (dateElementValue && cityElementValue) {
            if (item.datetime.includes(dateElementValue) && item.city.includes(cityElementValue)) {
                row = tbody.append("tr");
            }
        } else {
            row = tbody.append("tr");
        }
        if (row) {
            Object.values(item).forEach(ufoSighting => {
                var cell = row.append("td");
                cell.text(ufoSighting);
            });
        };

    });
}

// Create event handlers for clicking the button or pressing the enter key
filterButton.on("click", runEnter);
form.on("submit", runEnter);