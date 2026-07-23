import { useState } from "react";
import { useDispatch } from "react-redux";
import { setSearchTerm } from "../store/postSlice";

function SearchBar() {
  const [term, setTerm] = useState('');
  const dispatch = useDispatch();

  const handleSearch = () => {
    dispatch(setSearchTerm(term));
  };

  return (
    <div className="searchbar">
      <input
        onKeyDown={(e) => e.key === 'Enter' && handleSearch()}
        type="text"
        placeholder="Find what you are looking for"
        onChange={(e) => setTerm(e.target.value)}
        value={term}
      />
      <button onClick={handleSearch}>Search</button>
    </div>
  );
}

export default SearchBar;