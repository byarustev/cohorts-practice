# Todo List App 📝

A beginner-friendly Todo List application built with HTML, CSS, and Vanilla JavaScript. This project helps you practice your JavaScript skills while building a practical, real-world application.

## Project Overview

This is a fully functional todo list app where users can add, complete, delete, and filter tasks. The app includes local storage functionality to persist todos between sessions.

## Learning Objectives

By completing this project, you will practice:
- DOM manipulation (creating, updating, removing elements)
- Event handling (clicks, keyboard input, form submission)
- Array methods (push, filter, find, findIndex, forEach, splice)
- Object manipulation (creating and updating todo objects)
- Local Storage API (saving and loading data)
- State management (tracking todos and filter state)
- Conditional logic and data filtering

## How the App Works

1. **Adding Todos**: Type a task in the input field and click "Add Task" or press Enter
2. **Completing Todos**: Click the checkbox next to a task to mark it as complete
3. **Deleting Todos**: Hover over a task and click the "Delete" button
4. **Filtering Todos**: Use filter buttons to view All, Active, or Completed tasks
5. **Clearing Todos**: Use "Clear Completed" to remove finished tasks, or "Clear All" to remove everything
6. **Persistence**: Todos are saved to browser's local storage and persist after page refresh

## Project Structure

```
todo-list-app/
├── index.html      # HTML structure and layout
├── style.css       # Styling and layout (Flexbox)
├── script.js       # App logic and interactivity
└── README.md       # This file
```

## What's Already Implemented

The following features are **fully implemented** and you don't need to modify them:

### HTML (`index.html`)
- ✅ Complete semantic HTML structure
- ✅ Input field for adding todos
- ✅ Filter buttons (All, Active, Completed)
- ✅ Todo list container
- ✅ Action buttons (Clear Completed, Clear All)
- ✅ Status display area
- ✅ Proper file linking

### CSS (`style.css`)
- ✅ Complete styling with Flexbox layout
- ✅ Todo item styles (normal, completed states)
- ✅ Smooth transitions and hover effects
- ✅ Responsive design for mobile devices
- ✅ Input and button styling
- ✅ Filter button active states

### JavaScript (`script.js`)
- ✅ Data structure setup (todos array, state variables)
- ✅ DOM element references
- ✅ Todo rendering function (`renderTodos()`)
- ✅ Todo count update function (`updateTodoCount()`)
- ✅ Event listeners for add button and Enter key
- ✅ App initialization structure

## What You Need to Complete

You will find **TODO sections** in `script.js` that you need to implement. Each TODO includes hints and explanations.

### 1. Load Todos from Local Storage
**Location**: `initApp()` function

**Status**: ⚠️ **TODO - Not yet implemented**

**Task**: Load saved todos from localStorage when the app starts.

**Requirements**:
- Use `localStorage.getItem('todos')` to retrieve saved data
- Parse the JSON string using `JSON.parse()`
- Set the `todos` array to the loaded data (or empty array if none exists)
- Load `nextId` from localStorage and update the counter
- Handle cases where no data exists yet

**Hints**:
- Check if data exists before parsing
- Use try-catch or conditional check to handle missing data
- Remember that localStorage stores strings, so you need to parse JSON

**Why**: This allows todos to persist between browser sessions, making the app more useful.

---

### 2. Add Todo Function
**Location**: `addTodo()` function

**Status**: ⚠️ **TODO - Not yet implemented**

**Task**: Implement logic to add a new todo to the list.

**Requirements**:
- Get text from the input field using `todoInput.value`
- Trim whitespace and validate that text is not empty
- Create a new todo object: `{ id: nextId, text: text, completed: false }`
- Add the todo to the `todos` array using `push()`
- Increment `nextId` for the next todo
- Clear the input field
- Save todos to localStorage
- Re-render the todo list
- Update the todo count

**Hints**:
- Use `.trim()` to remove whitespace
- Check if text length > 0 before adding
- Use `nextId++` to increment the ID counter
- Set `todoInput.value = ''` to clear the input

**Why**: This is the core functionality - without it, users can't add tasks!

---

### 3. Get Filtered Todos Function
**Location**: `getFilteredTodos()` function

**Status**: ⚠️ **TODO - Not yet implemented**

**Task**: Return todos based on the current filter setting.

**Requirements**:
- Check the `currentFilter` variable
- If filter is `'all'`, return all todos
- If filter is `'active'`, return todos where `completed === false`
- If filter is `'completed'`, return todos where `completed === true`
- Use the `array.filter()` method

**Hints**:
- Use conditional statements (if/else or switch)
- Filter syntax: `todos.filter(todo => condition)`
- For active: `!todo.completed`
- For completed: `todo.completed`

**Why**: This allows users to view different subsets of their todos.

---

### 4. Toggle Todo Function
**Location**: `toggleTodo(todoId)` function

**Status**: ⚠️ **TODO - Not yet implemented**

**Task**: Toggle the completed status of a todo when checkbox is clicked.

**Requirements**:
- Find the todo with matching `id` in the `todos` array
- Use `array.find()` or `array.findIndex()` to locate it
- Toggle the `completed` property (true becomes false, false becomes true)
- Save todos to localStorage
- Re-render the todo list
- Update the todo count

**Hints**:
- `find()` returns the object: `todos.find(todo => todo.id === todoId)`
- `findIndex()` returns the index: `todos.findIndex(todo => todo.id === todoId)`
- Toggle: `todo.completed = !todo.completed`

**Why**: This allows users to mark tasks as complete or incomplete.

---

### 5. Delete Todo Function
**Location**: `deleteTodo(todoId)` function

**Status**: ⚠️ **TODO - Not yet implemented**

**Task**: Remove a todo from the list when delete button is clicked.

**Requirements**:
- Find the index of the todo with matching `id`
- Remove it from the array using `splice()` or `filter()`
- Save todos to localStorage
- Re-render the todo list
- Update the todo count

**Hints**:
- Using `splice()`: Find index, then `todos.splice(index, 1)`
- Using `filter()`: `todos = todos.filter(todo => todo.id !== todoId)`
- Both approaches work, but `filter()` is more functional

**Why**: Users need to be able to remove tasks they no longer need.

---

### 6. Set Filter Function
**Location**: `setFilter(filter)` function

**Status**: ⚠️ **TODO - Not yet implemented**

**Task**: Handle filter button clicks to change the view.

**Requirements**:
- Update `currentFilter` variable with the new filter value
- Loop through `filterButtons` and update their 'active' class
- Remove 'active' class from all buttons
- Add 'active' class to the clicked button
- Re-render the todo list to show filtered results

**Hints**:
- Use `forEach()` to loop through filterButtons
- Use `classList.remove('active')` and `classList.add('active')`
- Or use `classList.toggle()` or conditional logic

**Why**: This provides a better user experience for managing many todos.

---

### 7. Clear Completed Function
**Location**: `clearCompleted()` function

**Status**: ⚠️ **TODO - Not yet implemented**

**Task**: Remove all completed todos from the list.

**Requirements**:
- Filter the todos array to keep only incomplete todos
- Update the `todos` array
- Save todos to localStorage
- Re-render the todo list
- Update the todo count

**Hints**:
- Use `filter()`: `todos = todos.filter(todo => !todo.completed)`
- This keeps only todos where completed is false

**Why**: Helps users clean up finished tasks quickly.

---

### 8. Clear All Function
**Location**: `clearAll()` function

**Status**: ⚠️ **TODO - Not yet implemented**

**Task**: Remove all todos after user confirmation.

**Requirements**:
- Use `confirm()` dialog to ask for user confirmation
- If confirmed:
  - Reset `todos` array to empty array `[]`
  - Reset `nextId` to 1
  - Save to localStorage (clear it)
  - Re-render the todo list
  - Update the todo count
- If not confirmed, do nothing

**Hints**:
- `confirm()` returns true if user clicks OK, false if Cancel
- Use `if (confirm('message')) { ... }`
- Clear localStorage: `localStorage.removeItem('todos')` or save empty array

**Why**: Provides a way to start fresh, with safety confirmation.

---

### 9. Save Todos Function
**Location**: `saveTodos()` function

**Status**: ⚠️ **TODO - Not yet implemented**

**Task**: Save todos array to browser's localStorage.

**Requirements**:
- Convert `todos` array to JSON string using `JSON.stringify()`
- Save to localStorage with key `'todos'`
- Also save `nextId` with key `'nextId'`

**Hints**:
- `localStorage.setItem('todos', JSON.stringify(todos))`
- `localStorage.setItem('nextId', nextId.toString())`
- Remember: localStorage only stores strings

**Why**: This enables data persistence between browser sessions.

---

### 10. Event Listeners for Checkboxes and Delete Buttons
**Location**: `renderTodos()` function

**Status**: ⚠️ **TODO - Not yet implemented**

**Task**: Add event listeners to dynamically created elements.

**Requirements**:
- Add 'change' event listener to checkbox
- Call `toggleTodo(todo.id)` when checkbox changes
- Add 'click' event listener to delete button
- Call `deleteTodo(todo.id)` when delete button is clicked

**Hints**:
- `checkbox.addEventListener('change', function() { toggleTodo(todo.id); })`
- `deleteBtn.addEventListener('click', function() { deleteTodo(todo.id); })`
- These are inside the `forEach` loop, so you have access to `todo`

**Why**: These elements are created dynamically, so they need event listeners attached.

---

### 11. Event Listeners for Filter Buttons
**Location**: Event Listeners section

**Status**: ⚠️ **TODO - Not yet implemented**

**Task**: Add click event listeners to filter buttons.

**Requirements**:
- Loop through `filterButtons` (use `forEach()`)
- Add 'click' event listener to each button
- Get the filter value from `data-filter` attribute
- Call `setFilter()` with that value

**Hints**:
- `filterBtn.getAttribute('data-filter')` gets the filter value
- `filterButtons.forEach(filterBtn => { ... })`

**Why**: Connects filter buttons to the filtering functionality.

---

## Learning Tips

1. **Read the Comments**: Every function has detailed comments explaining what it should do.

2. **Test Incrementally**: After implementing each TODO, test your code before moving on.

3. **Use Console.log**: Add `console.log()` statements to debug and see what's happening:
   ```javascript
   console.log('Todos:', todos);
   console.log('Current filter:', currentFilter);
   ```

4. **Understand the Data Structure**: Each todo is an object:
   ```javascript
   { id: 1, text: "Learn JavaScript", completed: false }
   ```

5. **Practice Array Methods**: This project uses many array methods - take time to understand each one.

6. **Local Storage**: Remember it only stores strings, so you must stringify/parse JSON.

## Development Setup

1. **Open the Project**: 
   - Open `index.html` in your web browser

2. **Edit the Code**:
   - Open `script.js` in your code editor
   - Find the TODO sections
   - Implement the missing logic
   - Save and refresh your browser to test

3. **Test Features**:
   - Try adding todos
   - Mark them as complete
   - Delete them
   - Use filters
   - Refresh the page to test persistence

## Debugging Tips

- **Todos not saving?** Check if you're calling `saveTodos()` after modifications
- **Todos not loading?** Check if you're parsing JSON correctly in `initApp()`
- **Filter not working?** Verify `getFilteredTodos()` logic and `setFilter()` function
- **Event listeners not working?** Make sure you're attaching them in `renderTodos()`
- **Can't add todos?** Check if `addTodo()` validates input and increments `nextId`

## Success Criteria

Your app is complete when:
- ⚠️ Todos persist after page refresh (localStorage working)
- ⚠️ You can add new todos
- ⚠️ You can mark todos as complete/incomplete
- ⚠️ You can delete individual todos
- ⚠️ Filter buttons work (All, Active, Completed)
- ⚠️ Clear Completed removes finished tasks
- ⚠️ Clear All removes everything (with confirmation)
- ⚠️ Todo count updates correctly
- ⚠️ Empty message shows when no todos exist

## Function Reference

Here's a quick reference of the functions you'll implement:

| Function | Purpose | Key Methods Used |
|----------|---------|------------------|
| `initApp()` | Load saved todos on startup | `localStorage.getItem()`, `JSON.parse()` |
| `addTodo()` | Add a new todo | `push()`, `trim()` |
| `getFilteredTodos()` | Filter todos by status | `filter()` |
| `toggleTodo(id)` | Toggle completed status | `find()` or `findIndex()` |
| `deleteTodo(id)` | Remove a todo | `filter()` or `splice()` |
| `setFilter(filter)` | Change active filter | `classList.add/remove()` |
| `clearCompleted()` | Remove all completed | `filter()` |
| `clearAll()` | Remove all todos | `confirm()`, array reset |
| `saveTodos()` | Save to localStorage | `JSON.stringify()`, `localStorage.setItem()` |

## Resources

- [MDN Web Docs - Array Methods](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)
- [MDN Web Docs - Local Storage](https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage)
- [MDN Web Docs - Event Listeners](https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener)
- [MDN Web Docs - JSON](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON)

## Bonus Challenges (For The Heroes)

Once you've completed the basic app, try these enhancements:

1. **Edit Todos**: Double-click a todo to edit it inline
2. **Drag and Drop**: Reorder todos by dragging them
3. **Due Dates**: Add date picker and show todos by due date
4. **Categories/Tags**: Add color-coded categories to todos
5. **Search**: Add a search box to filter todos by text
6. **Priority Levels**: Add high/medium/low priority with visual indicators
7. **Statistics**: Show completion percentage and streak counter

## Questions to Consider

As you work through this project, think about:
- Why do we need to re-render todos after every change?
- How does localStorage help improve user experience?
- What happens if localStorage is full or disabled?
- How could you improve the data structure for more features?
- What edge cases should you handle (empty input, special characters, etc.)?

## Getting Help

If you get stuck:
1. Re-read the comments in the code
2. Check the hints in each TODO section
3. Use `console.log()` to inspect variable values
4. Test each function independently
5. Review the success criteria to see what's missing
6. Check browser console for errors

Good luck, and have fun building your todo list app! 📝✨

