import css from "./SearchBox.module.css";

const SearchBox = ({ handleSearch }) => {
  const handleSearchInput = (e) => {
    handleSearch(e.target.value);
  };

  return (
    <div className={css.search}>
      <label htmlFor="search">Find contacts by name</label>
      <input
        type="text"
        id="search"
        onChange={handleSearchInput}
        className={css.searchField}
      />
    </div>
  );
};

export default SearchBox;
