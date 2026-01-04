import TodoHeading from "./components/TodoHeading";
import TodoList from "./components/TodoList";
import AddTodo from "./components/AddTodo";
import styles from "./App.module.css";
import { useState, useRef } from "react";

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
      completed: false,
    },
    {
      name: "buy fish",
      date: "2026-01-03",
      completed: false,
    },
    {
      name: "buy drink",
      date: "2026-01-03",
      completed: false,
    },
  ]);

  const OnDeleteButtonClicked = (TodoName, TodoDate) => {
    setTodoItems((prevItems) =>
      prevItems.map((item) => {
        if (item.name === TodoName && item.date === TodoDate) {
          return {
            ...item,
            completed: true,
          };
        }
        return item;
      })
    );
  };

  return (
    <>
      <div className={styles.screen}>
        <div className={styles.borderContainer}>
          <TodoHeading />
          <div className={`${styles.kgContainer} container`}>
            <AddTodo setTodoItems={setTodoItems} />
            <TodoList
              TodoItems={TodoItems}
              handleOnDeleteButtonClicked={OnDeleteButtonClicked}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
