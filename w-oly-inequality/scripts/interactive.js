document.addEventListener('DOMContentLoaded', function () {
    // Define the medal counts
    var medalCounts = {
        'usa': 5002,
        'russia': 3188
        // Add other countries as needed
    };

    // Attach event listeners to each country path
    d3.selectAll('.country')
        .on('mouseenter', function () {
            // Show tooltip on mouse enter
            tooltip.style('display', 'block');

            // Get the country ID
            var countryId = d3.select(this).attr('id');

            // If the country is in the medalCounts object, update the tooltip content
            if (medalCounts.hasOwnProperty(countryId)) {
                tooltip.html(countryId.toUpperCase() + ': ' + medalCounts[countryId] + ' medals');
            }
        })
        .on('mousemove', function (event) {
            // Get the coordinates of the mouse pointer
            var [x, y] = d3.pointer(event);

            // Position the tooltip
            tooltip.style('top', (y + 10) + 'px')
                .style('left', (x + 10) + 'px');
        })
        .on('mouseleave', function () {
            // Hide tooltip on mouse leave
            tooltip.style('display', 'none');
        });

    // Get the tooltip element
    var tooltip = d3.select('#tooltip');
});
