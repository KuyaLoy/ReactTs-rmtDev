export default function SearchForm({ searchText, onSearchTextChange }) {
  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
      }}
      action="#"
      className="search"
    >
      <button type="submit">
        <i className="fa-solid fa-magnifying-glass"></i>
      </button>

      <input
        value={searchText}
        onChange={(event) => {
          onSearchTextChange(event.target.value);
        }}
        spellCheck="false"
        type="text"
        required
        placeholder="Find remote developer jobs..."
      />
    </form>
  );
}
