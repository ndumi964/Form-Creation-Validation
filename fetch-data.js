// Asynchronous function to fetch and display user data
async function fetchUserData() {
    const apiUrl = 'https://jsonplaceholder.typicode.com/users';
    const dataContainer = document.getElementById('api-data');
    
    try {
        // Show loading state
        dataContainer.innerHTML = 'Loading user data...';
        
        // Fetch data from API
        const response = await fetch(apiUrl);
        
        // Check if response is successful
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        const users = await response.json();
        
        // Clear loading message
        dataContainer.innerHTML = '';
        
        // Create user list
        const userList = document.createElement('ul');
        
        // Add each user to the list
        users.forEach(user => {
            const listItem = document.createElement('li');
            listItem.textContent = user.name;
            userList.appendChild(listItem);
        });
        
        // Append the list to the container
        dataContainer.appendChild(userList);
        
    } catch (error) {
        console.error('Error fetching user data:', error);
        dataContainer.innerHTML = 'Failed to load user data. Please try again later.';
    }
}

// Run the function when the DOM is fully loaded
document.addEventListener('DOMContentLoaded', fetchUserData);
