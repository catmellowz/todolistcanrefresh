import { useState } from "react";
import Task from "./Task";
import TodoForm from "./TodoForm";

export default function TotoItem(props) {
  const [isEdit, setIsEdit] = useState(false);

  const openEdit = () => setIsEdit(true);
  const closeEdit = () => setIsEdit(false);

  return (
    <li
      className={`list-group-item p-3 text-bg-${
        props.todo.completed ? "success" : "danger"
      }`}
    >
      {isEdit ? (
        <TodoForm
          closeEdit={closeEdit}
          todo={props.todo}
          updateTask={props.updateTask}
        />
      ) : (
        <Task
          todo={props.todo}
          deleTaskP={props.deleTaskP}
          updateTask={props.updateTask}
          openEdit={openEdit}
        />
      )}
    </li>
  );
}
