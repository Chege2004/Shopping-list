# Shopping-list
## Shopping List Application

This JavaScript code sets up a basic shopping list application that allows users to add items, mark them as purchased, clear the list, and persist the list state using local storage.

### Overview

This application consists of an HTML file with corresponding JavaScript that handles interactions with the shopping list. The main functionalities include:

- Adding new items to the shopping list.
- Marking items as purchased by clicking on them.
- Clearing the entire shopping list.
- Saving the list to local storage, so it persists across page reloads.

### Files

- **index.html**: Contains the structure of the shopping list app.
- **script.js**: JavaScript code that provides the functionality for the shopping list.

### How to Use

1. **Adding Items**:
   - Type an item into the input field labeled "New Item" and click the "Add" button.
   - The item will be added to the list below the input field.

2. **Marking Items as Purchased**:
   - Click on any item in the list to mark it as purchased. This action toggles a "purchased" class which visually indicates the item has been marked.

3. **Clearing the List**:
   - Click the "Clear List" button to remove all items from the list. This action will also clear the stored items from local storage.

4. **Persistence**:
   - The application uses local storage to store the shopping list items. This means that even if you reload the page or close the browser, the items will persist until you clear them manually.

### Implementation Details

- The shopping list items are stored in an array (`items`).
- Events such as clicking the "Add" button, clicking on an item to mark it as purchased, and clicking the "Clear List" button are handled using event listeners.
- Local storage is used to save and retrieve the list of items, ensuring persistence between sessions.
- The DOM content is loaded fully before the JavaScript executes, ensuring all elements are available for manipulation.

### Technologies Used

- **HTML**: Provides the structure for the shopping list.
- **CSS**: Basic styling (not included in this snippet).
- **JavaScript**: Handles dynamic functionality and interaction with the shopping list.

### Dependencies

- No external libraries or frameworks are used in this implementation.

### Compatibility

- This code should work in all modern browsers that support HTML5 and ES6 JavaScript features.

### Future Enhancements

- Improve styling to enhance the user interface.
- Add functionality such as editing items in the list.
- Implement sorting or filtering options for the list.

### Author

- Created by Manasseh

### License

- This project is licensed under the MIT License - see the LICENSE file for details.