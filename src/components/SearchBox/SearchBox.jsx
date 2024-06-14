import css from "./SearchBox.module.css";
import {useId} from "react";

export const SearchBox = ({searchValue, onSearchValue}) => {
  const idSearch = useId();
  return (
    <label className={css.search__block} htmlFor={idSearch}>
      <span className={css.label}>
        Find contacts by name
      </span>
      <input
        className={css.field}
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
