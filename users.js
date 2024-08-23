// Ensure Telegram WebApp object is available
if (window.Telegram.WebApp) {
    // Get the initData
    const initData = window.Telegram.WebApp.initData;

    // Parse the initData string into an object (assuming it's URL-encoded)
    const params = new URLSearchParams(initData);
    const webAppInitData = {};

    params.forEach((value, key) => {
        webAppInitData[key] = value;
    });

    // Check if user data is available and get the username
    if (webAppInitData.user) {
        const user = JSON.parse(webAppInitData.user);
        const username = user.username || 'Unknown User'; // Default to 'Unknown User' if username is not available

        // Display the username in an HTML element with id 'username'
        document.getElementById('username').textContent = `Hello, ${username}!`;
    } else {
        document.getElementById('username').textContent = 'Hello, Guest!';
    }
}
