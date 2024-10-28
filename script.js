document.addEventListener('DOMContentLoaded', function() {
    const sanFrancisco = document.querySelector('.sanfrancisco');
    const copenhagen = document.querySelector('.copenhagen');
    const toggleButton = document.getElementById('toggle-button');
    
    // Show San Francisco by default
    sanFrancisco.style.display = 'flex';
    
    toggleButton.addEventListener('click', function() {
        if (sanFrancisco.style.display === 'flex') {
            sanFrancisco.style.display = 'none';
            copenhagen.style.display = 'flex';
        } else {
            copenhagen.style.display = 'none';
            sanFrancisco.style.display = 'flex';
        }
    });
});