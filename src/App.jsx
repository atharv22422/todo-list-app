import TodoHeading from "./components/TodoHeading";
import TodoList from "./components/TodoList";
import AddTodo from "./components/AddTodo";
import styles from "./App.module.css";
import { useState } from "react";

function App() {
  // let TodoItems = [
  //   {
  //     name: "buy milk",
  //     date: "4/10/2025",
  //   },
  //   {
  //     name: "buy fish",
  //     date: "5/10/2025",
  //   },
  //   {
  //     name: "buy drink",
  //     date: "6/10/2025",
  //   },
  // ];

  const [TodoItems, setTodoItems] = useState([
    {
      name: "buy milk",
      date: "2026-01-03",
    },
    {
      name: "buy fish",
      date: "2026-01-03",
    },
    {
      name: "buy drink",
      date: "2026-01-03",
    },
  ]);

  const [TodoItemName, setTodoItemName] = useState("");

  const [TodoItemDate, setTodoItemDate] = useState("");

  const OnDateChange = (event) => {
    setTodoItemDate(event.target.value);
  };

  const OnTextChange = (event) => {
    setTodoItemName(event.target.value);
  };

  const OnAddButtonClicked = () => {
    setTodoItems((prevItems) => [
      ...prevItems,
      {
        name: TodoItemName,
        date: TodoItemDate,
      },
    ]);
    setTodoItemDate("");
    setTodoItemName("");
  };

  return (
    <>
      <div className={styles.screen}>
        <div className={styles.borderContainer}>
          <TodoHeading />
          <div className={`${styles.kgContainer} container`}>
            <AddTodo
              handleOnDateChange={OnDateChange}
              handleOnTextChange={OnTextChange}
              handleOnAddButtonClicked={OnAddButtonClicked}
              TodoItemDate={TodoItemDate}
              TodoItemName={TodoItemName}
            />
            <TodoList TodoItems={TodoItems} />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
