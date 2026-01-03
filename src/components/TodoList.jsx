import TodoItem from "./TodoItem";

function TodoList({ TodoItems, handleOnDeleteButtonClicked }) {
  return (
    <>
      {TodoItems.map((items, index) => (
        <TodoItem
          key={index}
          TodoName={items.name}
          TodoDate={items.date}
          TodoState={items.completed}
          handleOnDeleteButtonClicked={handleOnDeleteButtonClicked}
        ></TodoItem>
      ))}
    </>
  );
}

export default TodoList;
