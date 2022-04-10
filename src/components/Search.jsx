var Search = (props) => (
  <div className="search-bar form-inline">
    <input
      className="form-control"
      type="text"
      required
      value={props.text}
      onChange={(event) => { props.searchText(event.target.value); }}
    />
    <button
      className="btn hidden-sm-down"
      onClick={props.searchOnClick}>
      <span
        className="glyphicon glyphicon-search">
      </span>
    </button>
  </div>
);

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
export default Search;
