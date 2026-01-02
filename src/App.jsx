import TodoHeading from "./components/TodoHeading";
import TodoList from "./components/TodoList";
import AddTodo from "./components/AddTodo";
import "./App.css";

function App() {
  let TodoItems = [
    {
      name: "buy milk",
      date: "4/10/2025",
    },
    {
      name: "buy fish",
      date: "5/10/2025",
    },
    {
      name: "buy drink",
      date: "6/10/2025",
    },
  ];
  return (
    <>
      <div className="screen">
        <div className="borderContainer">
          <TodoHeading />
          <div className="container kg-container">
            <AddTodo />
            <TodoList TodoItems={TodoItems} />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
