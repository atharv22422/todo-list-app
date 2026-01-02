import TodoItem from "./TodoItem";

function TodoList({ TodoItems }) {
  return (
    <>
      {TodoItems.map((items, index) => (
        <TodoItem
          key={index}
          TodoName={items.name}
          TodoDate={items.date}
        ></TodoItem>
      ))}
    </>
  );
}

export default TodoList;
