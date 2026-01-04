import styles from "./TodoItem.module.css";
import { MdDeleteForever } from "react-icons/md";

function TodoItem({
  TodoDate,
  TodoName,
  handleOnDeleteButtonClicked,
  TodoState,
}) {
  // let ItemName = "buy fish";
  // let ItemDate = "4/10/2025";
  return (
    <>
      <div className={`row ${styles.KgRow}`}>
        <div className="col-6">{TodoName}</div>
        <div className="col-4">{TodoDate}</div>
        <div className="col-2">
          {TodoState ? (
            <span className={styles.completedLabel}>Completed</span>
          ) : (
            <button
              className={`btn btn-danger ${styles.KgButton}`}
              onClick={() => handleOnDeleteButtonClicked(TodoName, TodoDate)}
            >
              <MdDeleteForever />
            </button>
          )}
        </div>
      </div>
    </>
  );
}

export default TodoItem;
