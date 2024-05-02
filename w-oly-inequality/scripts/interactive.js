//JS code to handle hover effect on the map

document.addEventListener('DOMContentLoaded', function () {
    // Define the medal counts
    var medalCounts = {
        'USA': 5002,
        'Russia': 3188
    };

    // Load the image using D3.js
    d3.select('#olympic-map')
        .on('mouseenter', function () {
            // Show tooltip on mouse enter
            tooltip.style('display', 'block');
        })
        .on('mousemove', function (event) {
            // Get the coordinates of the mouse pointer
            var [x, y] = d3.pointer(event);

            // Position the tooltip
            tooltip.style('top', (y + 10) + 'px')
                .style('left', (x + 10) + 'px');

            // Get the country name from the alt attribute
            var country = d3.select(this).attr('alt');

            // If the country is in the medalCounts object, update the tooltip content
            if (medalCounts.hasOwnProperty(country)) {
                tooltip.html(country + ': ' + medalCounts[country] + ' medals');
            }
        })
        .on('mouseleave', function () {
            // Hide tooltip on mouse leave
            tooltip.style('display', 'none');
        });

    // Get the tooltip element
    var tooltip = d3.select('#tooltip');
});

