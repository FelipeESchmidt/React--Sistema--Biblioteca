import React from 'react';
import useSearch from '../../hooks/useSearch';

function Search() {

    const [value] = useSearch();

    return (
        <>
            <h1>{value}</h1>
        </>
    );
}

export default Search;