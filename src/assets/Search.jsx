import React from 'react';

const Search = ({search, setSearch, setCount}) => {
    return (
        <input
            type="search"
            className='home__search'
            placeholder='Поиск...'
            value={search}
            onChange={(e) => {
                setSearch(e.target.value)
                setCount(1)
            }}
        />
    );
};

export default Search;