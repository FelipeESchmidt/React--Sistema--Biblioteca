import React, { useContext, useEffect } from 'react';
import SearchContext from '../contexts/SearchContext';

function useSearch() {

    const searchValue = useContext(SearchContext);
    
    const [value, setValue] = React.useState(searchValue.selected.searchSelected);

    const handleChange = (newValue) => {
        setValue(newValue);
    };

    useEffect(() => {
        searchValue.selected.inscrever(handleChange);
        return (() => {
            searchValue.selected.desinscrever(handleChange);
        });
    });

    return [value, searchValue];

}

export default useSearch;

