import styles from "./AddTodo.module.css";

function AddTodo({
  handleOnTextChange,
  handleOnDateChange,
  handleOnAddButtonClicked,
  TodoItemName,
  TodoItemDate,
}) {
  return (
    <>
      <div className={`row ${styles.KgRow}`}>
        <div className="col-6">
          <input
            type="text"
            className={styles.AddTodo}
            placeholder="enter the item"
            value={TodoItemName}
            onChange={handleOnTextChange}
          />
        </div>
        <div className="col-4">
          <input
            type="date"
            className={styles.AddTodo}
            value={TodoItemDate}
            onChange={handleOnDateChange}
          />
        </div>
        <div className="col-2">
          <button
            type="button"
            className={`btn btn-success ${styles.KgButton}`}
            onClick={handleOnAddButtonClicked}
          >
            ADD
          </button>
        </div>
      </div>
    </>
  );
}

export default AddTodo;
