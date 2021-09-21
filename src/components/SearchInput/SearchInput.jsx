import React from 'react';
import useSearch from '../../hooks/useSearch';
import SearchTerms from '../../data/SearchTerms';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';

function SearchInput({ onUse, searchWidth }) {

    const [value, searchValue] = useSearch();

    const terms = SearchTerms.terms;

    const handleChange = (event, newSelection) => {
        if (newSelection != null) {
            searchValue.selected.alterarValor(newSelection);
            onUse(newSelection);
        }
    }

    return (
        <Autocomplete
            id="search-box"
            value={value}
            onChange={handleChange}
            disableClearable
            options={terms}
            getOptionLabel={(option) => option}
            style={{ width: searchWidth }}
            renderInput={(params) => (<TextField {...params} placeholder="Search other books" variant="outlined" />)}
        />
    );
}

export default SearchInput;