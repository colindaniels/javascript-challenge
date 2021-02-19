// from data.js
var tableData = data;


// YOUR CODE HERE!

var table_columns = ['datetime', 'city', 'state', 'country', 'shape', 'durationMinutes', 'comments']

var table = d3.select("tbody");

var pushToTable = (data) => {
    data.forEach(element => {
        var row = table.append("tr");
        table_columns.forEach(column => row.append('td').text(element[column]))
    });
}
pushToTable(tableData);


d3.select('#filter-btn').on('click', function() {
    var form = document.getElementById('datetime').value.toString();
    table.text('')
    for (let i = 0; i<=tableData.length; i++) {
        if (tableData[i].datetime == form) {
            var pushInputToTable = (data) => {
                var row = table.append("tr");
                table_columns.forEach(column => row.append('td').text(data[column]))
            }
            pushInputToTable(tableData[i])
            
        }
    }

})
