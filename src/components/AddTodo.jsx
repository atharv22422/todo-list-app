import styles from "./AddTodo.module.css";

function AddTodo() {
  return (
    <>
      <div className={`row ${styles.KgRow}`}>
        <div className="col-6">
          <input
            type="text"
            className={styles.AddTodo}
            placeholder="enter the item"
          />
        </div>
        <div className="col-4">
          <input type="date" className={styles.AddTodo} />
        </div>
        <div className="col-2">
          <button
            type="button"
            className={`btn btn-success ${styles.KgButton}`}
          >
            ADD
          </button>
        </div>
      </div>
    </>
  );
}

export default AddTodo;
