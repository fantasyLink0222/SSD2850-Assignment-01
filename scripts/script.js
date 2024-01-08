'use strict';

document.addEventListener('DOMContentLoaded', function() {

    // Get references to elements
    const form = document.getElementById('myForm');
    const referralSelect = document.getElementById('referredby');
    const extraDetails = document.querySelectorAll('.extra-detail'); // Using querySelectorAll for a NodeList

    // Function to toggle the visibility of additional details
    function toggleExtraDetails() {
        const shouldShow = referralSelect.value === 'magic' || referralSelect.value === 'other';
        extraDetails.forEach(detail => {
            detail.style.display = shouldShow ? 'block' : 'none';
        });
    }

    // Event listener for when the selection changes
    referralSelect?.addEventListener('change', toggleExtraDetails);

  // Function to hide the extra detail sections
  function hideExtraDetails() {
    extraDetails.forEach(detail => {
        detail.style.display = 'none';
    });
}

// Reset event listener for the form
form.addEventListener('reset', function() {
    // This will delay the hideExtraDetails function until after the form has reset
    setTimeout(hideExtraDetails, 0);
});
});
