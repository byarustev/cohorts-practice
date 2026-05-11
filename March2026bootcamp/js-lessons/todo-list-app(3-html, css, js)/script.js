/* ============================================
   Todo List App - JavaScript
   ============================================
   
   This script handles all app logic including:
   - Adding new todos
   - Displaying todos
   - Marking todos as complete/incomplete
   - Deleting todos
   - Filtering todos
   - Managing app state
*/

// ============================================
// Data Structure
// ============================================

// Array to store all todo items
// Each todo is an object with: { id, text, completed }
// Example: { id: 1, text: "Learn JavaScript", completed: false }
let todos = [

];

// Variable to track the current filter (all, active, completed)
let currentFilter = 'all';

// Counter for generating unique IDs for each todo
let nextId = 1;

// ============================================
// DOM Element References
// ============================================

// Get reference to the input field
const todoInput = document.getElementById('todo-input');

// Get reference to the add button
const addButton = document.getElementById('add-btn');

// Get reference to the todo list container
const todoList = document.getElementById('todo-list');

// Get reference to the todo count display
const todoCount = document.getElementById('todo-count');

// Get reference to the empty message
const emptyMessage = document.getElementById('empty-message');

// Get reference to filter buttons
const filterButtons = document.querySelectorAll('.filter-btn');

// Get reference to clear completed button
const clearCompletedBtn = document.getElementById('clear-completed-btn');

// Get reference to clear all button
const clearAllBtn = document.getElementById('clear-all-btn');

// ============================================
// Initialize App
// ============================================

// Start the app when page loads
// This function sets up the initial app state
function initApp() {
    // TODO: Load todos from localStorage if they exist
    // Hint: Use localStorage.getItem() to retrieve saved todos
    // If todos exist, parse them with JSON.parse()
    // Set the todos array to the loaded data
    // Update nextId based on the highest id in loaded todos

    const storedTodos = localStorage.getItem('todos')
    nextId = Number(localStorage.getItem('nextId') ?? nextId)
    todos = JSON.parse(storedTodos) // return it to an object
    // Render the initial todo list
    renderTodos();

    // Update the todo count display
    updateTodoCount();
}

// ============================================
// Add Todo Function
// ============================================

// This function adds a new todo to the list
// TODO: Implement the addTodo function
// Hint: This function should:
// 1. Get the text from the input field
// 2. Trim whitespace and check if it's not empty
// 3. Create a new todo object with id, text, and completed properties
// 4. Add the todo to the todos array
// 5. Clear the input field
// 6. Save todos to localStorage
// 7. Re-render the todo list
// 8. Update the todo count
function addTodo() {
    // TODO: Add your logic here
    // Remember to:
    // - Get and validate the input text
    const singleTodo = todoInput.value
    if (singleTodo != "") {
        // - Create a todo object with { id, text, completed: false }
        const todoObj = { id: nextId, text: singleTodo, completed: false }
        nextId += 1
        // - Add it to the todos array
        todos.push(todoObj)
        // - Clear the input
        todoInput.value = ""
        // - Save to localStorage (call saveTodos())
        saveTodos()
        updateTodoCount()
    }
}

// ============================================
// Render Todos Function
// ============================================

// This function displays all todos on the page
// It's fully implemented - you don't need to modify this
function renderTodos() {
    // Clear the current todo list
    todoList.innerHTML = '';

    // Filter todos based on current filter
    const filteredTodos = getFilteredTodos() || [];

    // Show/hide empty message
    if (filteredTodos?.length === 0) {
        emptyMessage.classList.remove('hidden');
    } else {
        emptyMessage.classList.add('hidden');
    }

    // Loop through filtered todos and create list items
    filteredTodos.forEach(todo => {
        // Create a list item element
        const listItem = document.createElement('li');
        listItem.classList.add('todo-item');

        // Add 'completed' class if todo is completed
        if (todo.completed) {
            listItem.classList.add('completed');
        }

        // Create checkbox for marking complete/incomplete
        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.classList.add('todo-checkbox');
        checkbox.checked = todo.completed;

        // TODO: Add change event listener to checkbox
        // Hint: Use addEventListener with 'change' event
        // When changed, call toggleTodo() with the todo's id
        // Example: checkbox.addEventListener('change', function() { ... });

        checkbox.addEventListener('change', function () {
            toggleTodo(todo.id)
        });


        // Create span for todo text
        const todoText = document.createElement('span');
        todoText.classList.add('todo-text');
        todoText.textContent = todo.text;

        // Create delete button
        const deleteBtn = document.createElement('button');
        deleteBtn.classList.add('delete-btn');
        deleteBtn.textContent = 'Delete';

        // TODO: Add click event listener to delete button
        // Hint: Use addEventListener with 'click' event
        // When clicked, call deleteTodo() with the todo's id
        // Example: deleteBtn.addEventListener('click', function() { ... });

        // Append elements to list item
        listItem.appendChild(checkbox);
        listItem.appendChild(todoText);
        listItem.appendChild(deleteBtn);

        // Append list item to todo list
        todoList.appendChild(listItem);
    });
}

// ============================================
// Get Filtered Todos Function
// ============================================

// This function returns todos based on the current filter
// TODO: Implement the filtering logic
// Hint: This function should:
// 1. Check the currentFilter variable
// 2. If filter is 'all', return all todos
// 3. If filter is 'active', return todos where completed is false
// 4. If filter is 'completed', return todos where completed is true
// Use array.filter() method
function getFilteredTodos() {
    // TODO: Add your logic here
    // Remember to:
    // - Check currentFilter value
    // complete: true or false
    if (currentFilter === 'all') {
        return todos
    } else {
        // if active return false 
        // else return true
        return todos.filter((item) => {
            if (currentFilter === 'active') {
                return item.completed === flase
            } else {
                return item.completed === true
            }
        })
    }

    // - Use array.filter() to filter based on completed status
    // - Return the filtered array

}

// ============================================
// Toggle Todo Function
// ============================================

// This function toggles the completed status of a todo
// TODO: Implement the toggle logic
// Hint: This function should:
// 1. Find the todo with the matching id in the todos array
// 2. Toggle its completed property (true becomes false, false becomes true)
// 3. Save todos to localStorage
// 4. Re-render the todo list
// 5. Update the todo count
function toggleTodo(todoId) {
    // TODO: Add your logic here
    // Remember to:
    // - Find the todo using array.find() or array.findIndex()
    const itemIndex = todos.findIndex((item) => item.id === todoId)

    let todo = todos[itemIndex]
    todo = {
        ...todo,
        completed: !todo.completed
    }

    todos[itemIndex] = todo

    saveTodos()
    renderTodos()
    updateTodoCount()

    // - Toggle the completed property
    // - Save to localStorage (call saveTodos())
    // - Render todos (call renderTodos())
    // - Update count (call updateTodoCount())
}

// ============================================
// Delete Todo Function
// ============================================

// This function deletes a todo from the list
// TODO: Implement the delete logic
// Hint: This function should:
// 1. Find the index of the todo with the matching id
// 2. Remove it from the todos array using array.splice() or array.filter()
// 3. Save todos to localStorage
// 4. Re-render the todo list
// 5. Update the todo count
function deleteTodo(todoId) {
    // TODO: Add your logic here
    // Remember to:
    // - Find the todo index using array.findIndex()
    // - Remove it using array.splice() or filter it out
    // - Save to localStorage (call saveTodos())
    // - Render todos (call renderTodos())
    // - Update count (call updateTodoCount())
}

// ============================================
// Update Todo Count Function
// ============================================

// This function updates the display showing how many todos remain
// It's fully implemented - you don't need to modify this
function updateTodoCount() {
    // Count only active (incomplete) todos
    const activeTodos = todos.filter(todo => !todo.completed);
    const count = activeTodos.length;

    // Update the display text
    if (count === 0) {
        todoCount.textContent = 'All tasks completed! 🎉';
    } else if (count === 1) {
        todoCount.textContent = '1 task remaining';
    } else {
        todoCount.textContent = `${count} tasks remaining`;
    }
}

// ============================================
// Filter Change Function
// ============================================

// This function handles filter button clicks
// TODO: Implement the filter change logic
// Hint: This function should:
// 1. Update the currentFilter variable with the new filter value
// 2. Update the active state of filter buttons (add/remove 'active' class)
// 3. Re-render the todo list to show filtered results
function setFilter(filter) {
    // TODO: Add your logic here
    // Remember to:
    // - Set currentFilter to the new filter value
    // - Loop through filterButtons and update their 'active' class
    // - Render todos (call renderTodos())
}

// ============================================
// Clear Completed Function
// ============================================

// This function removes all completed todos
// TODO: Implement the clear completed logic
// Hint: This function should:
// 1. Filter out todos where completed is true
// 2. Update the todos array
// 3. Save todos to localStorage
// 4. Re-render the todo list
// 5. Update the todo count
function clearCompleted() {
    // TODO: Add your logic here
    // Remember to:
    // - Filter todos to keep only incomplete ones
    // - Update the todos array
    // - Save to localStorage (call saveTodos())
    // - Render todos (call renderTodos())
    // - Update count (call updateTodoCount())
}

// ============================================
// Clear All Function
// ============================================

// This function removes all todos
// TODO: Implement the clear all logic
// Hint: This function should:
// 1. Confirm with the user (use confirm() dialog)
// 2. If confirmed, clear the todos array
// 3. Reset nextId to 1
// 4. Save to localStorage (clear it)
// 5. Re-render the todo list
// 6. Update the todo count
function clearAll() {
    // TODO: Add your logic here
    // Remember to:
    // - Use confirm() to ask user for confirmation
    // - If confirmed, reset todos array to []
    // - Reset nextId to 1
    // - Save to localStorage (call saveTodos())
    // - Render todos (call renderTodos())
    // - Update count (call updateTodoCount())
}

// ============================================
// Local Storage Functions
// ============================================

// This function saves todos to localStorage
// TODO: Implement the save function
// Hint: This function should:
// 1. Convert the todos array to a JSON string using JSON.stringify()
// 2. Save it to localStorage using localStorage.setItem()
// 3. Also save the nextId value
function saveTodos() {
    // TODO: Add your logic here
    // Remember to:
    // - Use JSON.stringify() to convert todos array to string
    // - Use localStorage.setItem() to save with key 'todos'
    // - Also save nextId with key 'nextId'

    const stringTodo = JSON.stringify(todos)
    // key, value
    localStorage.setItem('todos', stringTodo)
    localStorage.setItem('nextId', nextId)
}

// This function loads todos from localStorage
// It's called in initApp() - you'll implement it there
// But you can also create a helper function here if needed

// ============================================
// Event Listeners
// ============================================

// Add event listener to add button
// This is fully implemented - you don't need to modify this
addButton.addEventListener('click', addTodo);

// Add event listener to input field (Enter key)
// This is fully implemented - you don't need to modify this
todoInput.addEventListener('keypress', function (event) {
    if (event.key === 'Enter') {
        addTodo();
    }
});

// Add event listeners to filter buttons
// TODO: Add click event listeners to each filter button
// Hint: Loop through filterButtons and add event listener to each
// When clicked, get the filter value from data-filter attribute
// Call setFilter() with that value
// Example: filterBtn.addEventListener('click', function() { ... });

// Add event listener to clear completed button
// TODO: Add click event listener
// When clicked, call clearCompleted()
clearCompletedBtn.addEventListener('click', clearCompleted);

// Add event listener to clear all button
// TODO: Add click event listener
// When clicked, call clearAll()
clearAllBtn.addEventListener('click', clearAll);

// ============================================
// Start the App
// ============================================

// Initialize the app when the page loads
// This is fully implemented - you don't need to modify this
initApp();

