export default function SearchForm(props) {
  return (
    <div className="input-group">
      <input
        type="text"
        className="form-control"
        value={props.text}
        onChange={(e) => props.setSearchP(e.target.value)}
      ></input>
      <button className="btn btn-warning" onClick={() => props.setSearchP("")}>
        <i className="fa-solid fa-xmark" />
      </button>
    </div>
  );
}
