// Wait for the DOM content to be fully loaded
document.addEventListener("DOMContentLoaded", function() {
    // Get references to HTML elements
    const addItemBtn = document.getElementById("addBtn"); // Button to add new items
    const itemInput = document.getElementById("newInput"); // Input field for new item
    const shoppingList = document.getElementById("shoppingList"); // <ul> element for the shopping list
    const clearListBtn = document.getElementById("clearBtn"); // Button to clear the shopping list
    let items = []; // Array to store items (currently not used)

    // Event listener for adding a new item
    addItemBtn.addEventListener("click", function() {
        const item = itemInput.value.trim(); // Get the trimmed value of the input field
        if (item !== "") { // Check if the input is not empty
            items.push(item); // Add the item to the array
            console.log(items);
            const newItem = document.createElement("li"); // Create a new <li> element
            newItem.textContent = item; // Set the text content of the new <li> element
            // Add click event listener to toggle 'purchased' class on the new item
            newItem.addEventListener("click", function() {
                newItem.classList.toggle("purchased"); // Toggle the 'purchased' class on click
            });
            shoppingList.appendChild(newItem); // Append the new <li> to the shopping list <ul>
            itemInput.value = ""; // Clear the input field after adding the item
        }
    });

    // Event listener for clearing the shopping list
    clearListBtn.addEventListener("click", function() {
        shoppingList.innerHTML = ""; // Clear all content inside the shopping list <ul>
    });
});
