document.addEventListener('DOMContentLoaded', function () {
    // Define the medal counts
    var medalCounts = {
        'usa': 5002,
        'russia': 3188
    };

    // Attach event listeners to each country path
    d3.selectAll('.country')
        .on('mouseover', function () {
            var countryId = d3.select(this).attr('id');
            var medalCount = medalCounts[countryId];
            if (medalCount !== undefined) {
                // Display medal count
                tooltip.style('display', 'block')
                    .html(countryId.toUpperCase() + ': ' + medalCount + ' medals');
            }
        })
        .on('mousemove', function (event) {
            // Update tooltip position
            tooltip.style('left', (event.pageX + 10) + 'px')
                .style('top', (event.pageY + 10) + 'px');
        })
        .on('mouseout', function () {
            // Hide tooltip
            tooltip.style('display', 'none');
        });

    // Create tooltip element
    var tooltip = d3.select('body').append('div')
        .attr('class', 'tooltip')
        .style('display', 'none');
});
