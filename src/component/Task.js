export default function Task(props) {
  return (
    <div className='d-flex align-items-center'>
      <span className='flex-fill' role='button' onClick={props.openEdit}>
        {props.todo.title}
      </span>
      <div className='btn-group'>
        <button
          className='btn btn-outline-light'
          onClick={() =>
            props.updateTask(props.todo.id, {
              completed: !props.todo.completed,
              title: props.todo.title,
            })
          }
        >
          <i className='fa-solid fa-repeat' />
        </button>
        <button
          className='btn btn-outline-light'
          onClick={() => props.deleTaskP(props.todo.id)}
        >
          <i className='fa-regular fa-trash-can' />
        </button>
      </div>
    </div>
  );
}
