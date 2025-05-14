1. What does the `.map()` array method do?
Returns a new array. Whatever gets returned from the callback
function provided is placed at the same index in the new array.
Usually we take the items from the original array and modify them
in some way.

.map() creates a new array by applying a function to each element of the original array. It returns the result of that function for every item. eg:
[1, 2, 3].map(n => n * 2); // returns [2, 4, 6]


2. What do we usually use `.map()` for in React?
Convert an array of raw data into an array of JSX elements
that can be displayed on the page.

In React, we use .map() to dynamically generate a list of components from an array of data. eg:
const items = ["Home", "About", "Contact"];
const listItems = items.map(item => <li>{item}</li>);


3. Critical thinking: why is using `.map()` better than just
   creating the components manually by typing them out?

✅ Scalability – You can render 3 or 300 items with the same code.
✅ Maintainability – Data and rendering logic stay separate.
✅ Dynamic rendering – You can update the data (e.g. from an API), and .map() updates the UI automatically.
✅ Cleaner code – Avoids repetitive, manual JSX blocks.