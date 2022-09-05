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

const renderList = function() {
    const userName = document.querySelector('#userName').value;
    const age = document.querySelector('#age').value;

    const nameItem = renderListItem('Name', userName);
    const ageItem = renderListItem('Age', age);
    const colorItem = renderListItem('Favorite Color', '');  
    colorItem.appendChild(renderColor());

    const list = document.createElement('ul');
    list.appendChild(nameItem);
    list.appendChild(ageItem);
    list.appendChild(colorItem);

    return list;
}

const handleSubmit = function(ev) {        
    ev.preventDefault();        
    const f = ev.target;    

    const users = document.querySelector('#users');
    users.appendChild(renderList());        

    f.reset();
    f.userName.focus();
}

form.addEventListener('submit', handleSubmit);
