//JS code to handle hover effect on the map

document.addEventListener('DOMContentLoaded', function () {
    
    var mapImg = document.getElementById('olympic-map');
    
    
    var tooltip = document.getElementById('tooltip');

    // Define the medal counts
    var medalCounts = {
        'USA': 5002,
        'Russia': 3188
    };

    //Add mouseover event listener to the map image
    mapImg.addEventListener('mouseover', function (event) {
        //Get the country name from the alt attribute of the hovered image
        var country = event.target.alt;

        
        if (medalCounts.hasOwnProperty(country)) {
            // Position the tooltip
            tooltip.style.top = (event.clientY + 10) + 'px';
            tooltip.style.left = (event.clientX + 10) + 'px';

            
            tooltip.textContent = country + ': ' + medalCounts[country] + ' medals';

            // Show the tooltip
            tooltip.style.display = 'block';
        }
    });

    // Add mouseout event listener to hide the tooltip when mouse leaves the map image
    mapImg.addEventListener('mouseout', function () {
        tooltip.style.display = 'none';
    });
});
