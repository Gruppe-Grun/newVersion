document.addEventListener('DOMContentLoaded', function() {
    //get cookie with username
    const username = document.cookie.split('=')[1];
  
    // make a div element with the username
    const usernameElement = document.createElement('div');
    usernameElement.innerHTML = username;
    usernameElement.id = 'showCookie';
  
    // append the created element to the body of the document
    document.body.appendChild(usernameElement);
  });