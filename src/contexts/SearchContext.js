import React from 'react';
import SearchSelected from '../data/SearchSelected';

const searchSelected = new SearchSelected();

const urlValue = window.location.pathname.split('/')[2];
if(urlValue !== '' && urlValue !== undefined){
    searchSelected.alterarValor(decodeURI(urlValue));
}

const SearchContext = React.createContext({
    selected: searchSelected
});

export default SearchContext;