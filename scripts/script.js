'use strict';

document.addEventListener('DOMContentLoaded', function() {

    // Get references to elements
    var heardSelect = document.getElementById('heard');
    var extraDetail = document.getElementsByClassName('extra-detail');

    // Function to toggle the visibility of additional details
    function toggleExtraDetail() {
        if(heardSelect.value === 'magic' || heardSelect.value === 'other') {
            // Show the additional details
            for(var i = 0; i < extraDetail.length; i++) {
                extraDetail[i].style.display = 'block';
            }
        } else {
            // Hide the additional details
            for(var i = 0; i < extraDetail.length; i++) {
                extraDetail[i].style.display = 'none';
            }
        }
    }

    // Event listener for when the selection changes
    heardSelect.addEventListener('change', toggleExtraDetail);

    // Function to clear the form
    function resetForm() {
        // Get the form element
        var form = document.querySelector('form');
        // Reset all form fields
        form.reset();
        // Hide the extra detail sections
        for(var i = 0; i < extraDetail.length; i++) {
            extraDetail[i].style.display = 'none';
        }
    }

    // Get the 'Clear Form' button and attach the click event handler
    var clearButton = document.querySelector('button[type="button"]');
    clearButton.addEventListener('click', resetForm);

});
