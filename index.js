const form = document.querySelector('#userForm');

const handleSubmit = function(ev) {
    ev.preventDefault();
    const users = document.querySelector('#users');
    const newHeading = document.createElement('h1');
    const f = ev.target;
    const userName = f.userName.value;
    
    newHeading.textContent = userName;

    users.appendChild(newHeading);

    f.userName.value = '';
}

form.addEventListener('submit', handleSubmit);
