import { useEffect, useState } from "react";

export default function SearchForm() {
  const [searchText, setSearchText] = useState("");
  const [jobItems, setJobItems] = useState([]);

  useEffect(() => {
    if (!searchText) return;

    const fetchData = async () => {
      const response = await fetch(
        `https://bytegrad.com/course-assets/projects/rmtdev/api/data?search=${searchText}`
      );
      const data = await response.json();
      setJobItems(data);
    };

    fetchData(); // Call the fetchData function when searchText changes
  }, [searchText]); // Only re-run effect if searchText changes

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
        }}
        spellCheck="false"
        type="text"
        required
        placeholder="Find remote developer jobs..."
      />
    </form>
  );
}
