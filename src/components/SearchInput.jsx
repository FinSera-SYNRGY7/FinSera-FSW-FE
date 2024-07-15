import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import '../App.css';

function SearchInput() {
    return (
        <div className="search-input-container">
            <FontAwesomeIcon icon={faSearch} className="search-icon" />
            <input type="text" className="search-input" placeholder="Search..." />
        </div>
    );
}

export default SearchInput;