import css from "./SearchBox.module.css";
import {useId} from "react";

export const SearchBox = ({searchValue, onSearchValue}) => {
  const idSearch = useId();
  return (
    <label htmlFor={idSearch}>
      <span>Find contacts by name</span>
      <input
        type="search"
        id={idSearch}
        placeholder="Search..."
        value={searchValue}
        onChange={(event) =>
          onSearchValue(event.target.value)
        }
      />
    </label>
  );
};
export default SearchBox;
