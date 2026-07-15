import { useState} from "react";

function SearchBar({onSearch}) {
    const [term, setTerm] = useState('');

    const handleSearch = () => {
        onSearch(term);
    }
 
    return (
        <div className="searchbar">
            <input
                onKeyDown={(e) => e.key === 'Enter' && handleSearch()} //zoekt ook met enter
                type='text'
                placeholder="Find what you are looking for"
                onChange={(e) => setTerm(e.target.value)}
                value={term}
            />
            <button onClick={() => handleSearch(term)}>Search</button>
        </div>
    );
}

export default SearchBar;