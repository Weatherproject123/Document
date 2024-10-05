let users = [];

document.getElementById('userForm').addEventListener('submit', function (e) {
    e.preventDefault();
    
    const firstName = document.getElementById('firstName').value;
    const lastName = document.getElementById('lastName').value;
    const phoneNumber = document.getElementById('phoneNumber').value;
    const email = document.getElementById('email').value;
    const address = document.getElementById('address').value;

    const user = {
        id: Date.now(),
        firstName,
        lastName,
        phoneNumber,
        email,
        address,
    };

    users.push(user);
    displayUsers();
    document.getElementById('userForm').reset();
});

function displayUsers() {
    const userList = document.getElementById('userList');
    userList.innerHTML = '';
    
    users.forEach(user => {
        const li = document.createElement('li');
        li.innerHTML = `
            ${user.firstName} ${user.lastName} - ${user.phoneNumber} - ${user.email} - ${user.address}
            <button onclick="deleteUser(${user.id})">Delete</button>
        `;
        userList.appendChild(li);
    });
}

function deleteUser(id) {
    users = users.filter(user => user.id !== id);
    displayUsers();
}