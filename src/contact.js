function createContact() {
    const contact = document.createElement('div');
    contact.classList.add('contact');
    const phoneNumber = document.createElement('p');
    phoneNumber.textContent = 'Call 123 456 789';
    const address = document.createElement('p');
    address.textContent = 'We are located inside of Greed Island in The Town of Prizes';
    const restaurantLocation = document.createElement('img');
    restaurantLocation.src = "images/location.webp";
    restaurantLocation.alt = 'Hunter Cafe Location';
    contact.appendChild(phoneNumber);
    contact.appendChild(address);
    contact.appendChild(restaurantLocation);
    return contact;
}

function loadContact() {
    const main = document.getElementById('main');
    main.textContent = '';
    main.appendChild(createContact());
}

export default loadContact;