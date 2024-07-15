// Wait for the DOM content to be fully loaded
document.addEventListener("DOMContentLoaded", function() {
    // Get references to HTML elements
    const addItemBtn = document.getElementById("addBtn"); // Button to add new items
    const itemInput = document.getElementById("newInput"); // Input field for new item
    const shoppingList = document.getElementById("shoppingList"); // <ul> element for the shopping list
    const clearListBtn = document.getElementById("clearBtn"); // Button to clear the shopping list
    let items = []; // Array to store items

    // Load items from local storage if available
    if (localStorage.getItem("items")) {
        items = JSON.parse(localStorage.getItem("items"));
        // Populate the shopping list with saved items
        items.forEach(function(itemText) {
            const newItem = document.createElement("li");
            newItem.textContent = itemText;
            newItem.addEventListener("click", function() {
                newItem.classList.toggle("purchased");
                saveItems(); // Save items after marking as purchased
            });
            shoppingList.appendChild(newItem);
        });
    }

    // Event listener for adding a new item
    addItemBtn.addEventListener("click", function() {
        const item = itemInput.value.trim(); // Get the trimmed value of the input field
        if (item !== "") { // Check if the input is not empty
            items.push(item); // Add the item to the array
            saveItems(); // Save items to local storage
            const newItem = document.createElement("li"); // Create a new <li> element
            newItem.textContent = item; // Set the text content of the new <li> element
            // Add click event listener to toggle 'purchased' class on the new item
            newItem.addEventListener("click", function() {
                newItem.classList.toggle("purchased"); // Toggle the 'purchased' class on click
                saveItems(); // Save items after marking as purchased
            });
            shoppingList.appendChild(newItem); // Append the new <li> to the shopping list <ul>
            itemInput.value = ""; // Clear the input field after adding the item
        }
    });

    // Event listener for clearing the shopping list
    clearListBtn.addEventListener("click", function() {
        shoppingList.innerHTML = ""; // Clear all content inside the shopping list <ul>
        items = []; // Clear the items array
        localStorage.removeItem("items"); // Remove items from local storage
    });

    // Function to save items array to local storage
    function saveItems() {
        localStorage.setItem("items", JSON.stringify(items));
    }
});
