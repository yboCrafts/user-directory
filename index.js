const form = document.querySelector('#userForm');

const renderColor = function() {
    const favoriteColor = document.querySelector('#favoriteColor').value;
    const colorDiv = document.createElement('div');   
    colorDiv.style.width = '6rem';
    colorDiv.style.height = '3rem';
    colorDiv.style.backgroundColor = favoriteColor;
    return colorDiv;
}

const renderListItem = function(itemName, itemValue) {
    const listItem = document.createElement('li');
    listItem.textContent = `${itemName + ':'} ${itemValue}`;
    return listItem;
}

const handleSubmit = function(ev) {        
    ev.preventDefault();        
    const f = ev.target;
    const userName = f.userName.value;
    const age = f.age.value;   

    const nameItem = renderListItem('Name', userName);
    const ageItem = renderListItem('Age', age);
    const colorItem = renderListItem('Favorite Color', '');  
    colorItem.appendChild(renderColor());

    const list = document.createElement('ul');
    list.appendChild(nameItem);
    list.appendChild(ageItem);
    list.appendChild(colorItem);

    const users = document.querySelector('#users');
    users.appendChild(list);        

    f.reset();
    f.userName.focus();
}

form.addEventListener('submit', handleSubmit);
