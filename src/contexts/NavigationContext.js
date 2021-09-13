import React from 'react';
import NavigationSelected from '../data/NavigationSelected';
import NavigationPages from '../data/NavigationPages';

const navSelected = new NavigationSelected();

const navPages = NavigationPages.pages;
navPages.forEach(page => {
    if(window.location.pathname === page.link){
        navSelected.alterarValor(page.id);
    }
});
console.log(navSelected);
const NavigationContext = React.createContext({
    selected: navSelected
});


export default NavigationContext;