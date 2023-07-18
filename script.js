function storeUserDetails() {
    // Get input values
    var name = document.getElementById('nameInput').value;
    var email = document.getElementById('emailInput').value;
  
    // Create a user object
    var user = {
      name: name,
      email: email
    };
  
    // Get existing user details from local storage
    var storedUsers = JSON.parse(localStorage.getItem('users')) || [];
  
    // Add the new user to the array
    storedUsers.push(user);
  
    // Store updated user details back to local storage
    localStorage.setItem('users', JSON.stringify(storedUsers));
  
    // Clear input fields
    document.getElementById('nameInput').value = '';
    document.getElementById('emailInput').value = '';
  
    // Display stored user details
    displayStoredUsers();
  }
  

  function displayStoredUsers() {
    // Get the user list element
    var userList = document.getElementById('userList');
  
    // Clear existing list items
    userList.innerHTML = '';
  
    // Get stored user details from local storage
    var storedUsers = JSON.parse(localStorage.getItem('users')) || [];
  
    // Loop through the stored users and create list items
    storedUsers.forEach(function(user) {
      var listItem = document.createElement('li');
      listItem.textContent = 'Name: ' + user.name + ', Email: ' + user.email;
      userList.appendChild(listItem);
    });
  }
  
  // Call the display function when the page loads to show any existing stored users
  displayStoredUsers();
  