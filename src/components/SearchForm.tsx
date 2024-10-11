import { useState } from "react";

export default function SearchForm() {
  const [searchText, setSearchText] = useState("");
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
          setSearchText(event.target.value);
          console.log(searchText);
        }}
        spellCheck="false"
        type="text"
        required
        placeholder="Find remote developer jobs..."
      />
    </form>
  );
}
