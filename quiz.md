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



1. What is "conditional rendering"?

Conditional rendering means showing different UI elements or components based on certain conditions (e.g., state, props, or logic).
It’s how React decides what to show and when.eg:
{isLoggedIn && <p>Welcome back!</p>}



2. When would you use &&?

Use && when you want to conditionally render something if a condition is true, and render nothing if it's false.eg:
{isLoggedIn && <LogoutButton />}
If isLoggedIn is true, it renders the <LogoutButton />.
If false, it renders nothing.



3. When would you use a ternary?

Use a ternary when you want to choose between two things — one if the condition is true, another if false.eg:
{isLoggedIn ? <p>Welcome!</p> : <p>Please log in</p>}



4. What if you need to decide between > 2 options on
   what to display?

   Use a switch statement, if/else if chain, or nested ternaries (carefully!) inside a function or before the return.eg using if else:
   function getMessage(status) {
      if (status === "loading") return <p>Loading...</p>;
      else if (status === "error") return <p>Error occurred!</p>;
      else return <p>Data loaded</p>;
      }

      // In JSX:
      {getMessage(apiStatus)}

      eg using nested ternaries:
            {
      status === "loading" ? <Loading /> :
      status === "error" ? <Error /> :
      <Content />
      }

      🔺 Note: Avoid deeply nested ternaries — they become hard to read.


