import { useState } from "react";
import validator from "validator";

function TodoForm(props) {
  const [input, setInput] = useState(props.todo?.title || "");
  const [error, setError] = useState("");

  const handdleSubmit = (event) => {
    event.preventDefault();
    if (validator.isEmpty(input, { ignore_whitespace: true })) {
      setError("Title is required");
    } else {
      setInput("");
      setError("");
      props.addTask?.(input);
      props.updateTask?.(props.todo.id, { title: input });
      props.closeEdit?.();
    }
  };

  return (
    <form onSubmit={handdleSubmit}>
      <div className="input-group">
        <input
          type="text"
          className={`form-control ${error ? "is-invalid" : ""}`}
          placeholder="Enter Todo-list :"
          value={input}
          onChange={(event) => setInput(event.target.value)}
        />
        <button className="btn btn-primary">
          <i className="fa-solid fa-check" />
        </button>
        <button
          type="button"
          className="btn btn-secondary"
          onClick={() => {
            setInput("");
            // !props.closeEdit || props.closeEdit();
            props.closeEdit?.();
          }}
        >
          <i className="fa-solid fa-xmark" />
        </button>
      </div>
      {error && <small className="text-danger">{error}</small>}
    </form>
  );
}

export default TodoForm;
