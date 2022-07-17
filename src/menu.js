function createMenu() {
    const menu = document.createElement("div");
    menu.classList.add("menu");
    menu.appendChild(
        createMenuItem(
            "Pasta Carbonara",
            "Squid Ink Spaghetti, Black Pepper, Minced Nutmeg, White Cream"
        )
    );
    menu.appendChild(
        createMenuItem(
            "Chirashi Sushi",
            "Carrots, Bamboo Shoot, Tofu, Mushrooms, Fish Cake"
        )
    );
    menu.appendChild(
        createMenuItem(
            "Strawberry Parfait",
            "Greek yogurt, Vanilla, Strawberry, Granola"
        )
    );
    menu.appendChild(
        createMenuItem(
            "Capuccino",
            "Milk, Coffee, Water"
        )
    );
    menu.appendChild(
        createMenuItem(
            "Chocolate Gateau",
            "Chocolate, Cream, Egg, Butter, Flour, Vanilla"
        )
    );
    menu.appendChild(
        createMenuItem(
            "Orange Juice",
            "Oranges"
        )
    );
    menu.appendChild(
        createMenuItem(
            "Ribs Curry",
            "Pork ribs, Curry paste, Kaffir lime leaves, Water, Salt"
        )
    );
    menu.appendChild(
        createMenuItem(
            "Apple Juice",
            "Apples"
        )
    );

    return menu;
}

function createMenuItem(name, description) {
    const menuItem = document.createElement("div");
    menuItem.classList.add("menu-item");
    const foodName = document.createElement("h3");
    foodName.textContent = name;
    const foodDescription = document.createElement("p");
    foodDescription.textContent = description;
    const foodImage = document.createElement("img");
    foodImage.src = `images/foods/${name.toLowerCase()}.webp`;
    foodImage.alt = `${name}`;
    menuItem.appendChild(foodImage);
    menuItem.appendChild(foodName);
    menuItem.appendChild(foodDescription);
    return menuItem;
}

function loadMenu() {
    const main = document.getElementById("main");
    main.textContent = "";
    main.appendChild(createMenu());
}

export default loadMenu;