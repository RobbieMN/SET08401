document.addEventListener('DOMContentLoaded', function () {
    const button = document.getElementById('Test Button');

    // Variable to keep track of the timeout
    let timeoutId;

    // When the mouse button is pressed down
    button.addEventListener('mousedown', function () {
        // Clear any existing timeouts to avoid conflicts
        clearTimeout(timeoutId);
        button.textContent = 'Clicked :)';
    });

    // When the mouse button is released
    button.addEventListener('mouseup', function () {
        // Start a timeout to change the text back after 1 second
        timeoutId = setTimeout(function () {
            button.textContent = 'Button Text';
        }, 1000); // 1000 milliseconds = 1 second
    });

    // Optional: When the cursor leaves the button while holding the mouse down
    button.addEventListener('mouseleave', function () {
        // Start a timeout to change the text back after 1 second
        timeoutId = setTimeout(function () {
            button.textContent = 'Button Text';
        }, 1000); // 1000 milliseconds = 1 second
    });
});
