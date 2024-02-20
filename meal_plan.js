document.addEventListener('DOMContentLoaded', function() {
    const selectedDishes = document.getElementById('selected-dishes');
    const totalCost = document.getElementById('total-cost');
    const menuItems = document.getElementById('menu-items');

    // Sample menu data (replace with your actual menu)
    const menu = {
        'Khao Pad (Fried Rice)': 14.99,
        'Som Tum (Spicy Green Papaya Salad)': 12.99,
        'Tom Yum Goong (Spicy Shrimp Soup)': 14.99
    };

    // Function to update total cost
    function updateTotalCost() {
        let cost = 0;
        selectedDishes.querySelectorAll('li').forEach(function(item) {
            cost += parseFloat(item.dataset.price);
        });
        totalCost.textContent = '$' + cost.toFixed(2);
    }

    // Function to handle adding a dish to the meal plan
    function addDish(dishName, price) {
        const listItem = document.createElement('li');
        listItem.textContent = dishName + ' - $' + price;
        listItem.dataset.price = price; // Store price as a data attribute
        listItem.innerHTML += `<button class="remove-btn">Remove</button>`;
        selectedDishes.appendChild(listItem);
        updateTotalCost();
    }

    // Event delegation to handle removing a dish
    selectedDishes.addEventListener('click', function(event) {
        if (event.target.classList.contains('remove-btn')) {
            event.target.parentElement.remove();
            updateTotalCost();
        }
    });

    // Function to create menu items dynamically
    function createMenuItems(menu) {
        for (const item in menu) {
            const menuItem = document.createElement('li');
            menuItem.textContent = `${item} - $${menu[item]}`;
            menuItem.innerHTML += `<button class="add-btn">Add</button>`;
            menuItems.appendChild(menuItem);
        }
    }

    // Event delegation to handle adding a dish from the menu
    menuItems.addEventListener('click', function(event) {
        if (event.target.classList.contains('add-btn')) {
            const dishName = event.target.parentElement.textContent.split(' - ')[0];
            const price = parseFloat(event.target.parentElement.textContent.split(' - ')[1].replace('$', ''));
            addDish(dishName, price);
        }
    });

    // Create menu items
    createMenuItems(menu);
});
