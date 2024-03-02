//class 1
// Class to represent a menu item
class MenuItem {
    constructor(name) {
        this.name = name;
    }
}

//class 2
// Class to manage the menu operations like adding, viewing, and deleting items
class MenuManager {
    constructor() {
        //1 array
        // Array to store menu items
        this.items = []; 
    }

    // Function to add a new item to the menu
    addItem(itemName) {
        const newItem = new MenuItem(itemName);
        this.items.push(newItem);
        this.displayItems();
    }

    // Function to display all items in the menu
    displayItems() {
        const itemList = document.getElementById('itemList');
        itemList.innerHTML = ''; // Clearing the list before displaying updated items
        this.items.forEach((item, index) => {
            const listItem = document.createElement('li');
            listItem.textContent = item.name;
            const deleteButton = document.createElement('button');
            deleteButton.textContent = 'Delete';
            deleteButton.onclick = () => { this.deleteItem(index); };
            listItem.appendChild(deleteButton);
            itemList.appendChild(listItem);
        });
    }

    // Function to delete an item from the menu
    deleteItem(index) {
        // Removes the item at the specified index
        this.items.splice(index, 1); 
        // Update the display after deletion
        this.displayItems(); 
    }
}

// Creating an instance of MenuManager
const menu = new MenuManager();

// Function to show input field for adding a new item
document.getElementById('createAdd').addEventListener('click', () => {
    document.getElementById('inputField').style.display = 'block';
});

// Function to add an item when the add button is clicked
function addItem() {
    const itemName = document.getElementById('itemName').value;
    // Check if the input field is not empty
    if(itemName) { 
        menu.addItem(itemName);
        // Clear input field after adding
        document.getElementById('itemName').value = ''; 
        // Hide input field
        document.getElementById('inputField').style.display = 'none'; 
    } else {
        alert('Please enter an item name.');
    }
}

// Function to view items when the view button is clicked
document.getElementById('createView').addEventListener('click', () => {
    menu.displayItems();
});
