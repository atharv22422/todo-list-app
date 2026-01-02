import styles from "./TodoItem.module.css";

function TodoItem({ TodoDate, TodoName }) {
  // let ItemName = "buy fish";
  // let ItemDate = "4/10/2025";
  return (
    <>
      <div className={`row ${styles.KgRow}`}>
        <div className="col-6">{TodoName}</div>
        <div className="col-4">{TodoDate}</div>
        <div className="col-2">
          <button type="button" className={`btn btn-danger ${styles.KgButton}`}>
            DELETE
          </button>
        </div>
      </div>
    </>
  );
}

export default TodoItem;
