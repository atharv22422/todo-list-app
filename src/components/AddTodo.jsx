import styles from "./AddTodo.module.css";
import { IoIosAddCircle } from "react-icons/io";

function AddTodo({ myTodoItemDate, myTodoItemName, handleOnAddButtonClicked }) {
  return (
    <>
      <div className={`row ${styles.KgRow}`}>
        <div className="col-6">
          <input
            type="text"
            className={styles.AddTodo}
            placeholder="enter the item"
            ref={myTodoItemName}
          />
        </div>
        <div className="col-4">
          <input type="date" className={styles.AddTodo} ref={myTodoItemDate} />
        </div>
        <div className="col-2">
          <button
            type="button"
            cd
            className={`btn btn-success ${styles.KgButton}`}
            onClick={handleOnAddButtonClicked}
          >
            <IoIosAddCircle />
          </button>
        </div>
      </div>
    </>
  );
}

export default AddTodo;
