import React from 'react';
import { useHistory } from "react-router-dom";
import { Tabs, Tab } from '@material-ui/core';
import useContent from '../../hooks/useContent';
import NavigationPages from '../../data/NavigationPages';


function Navigation() {

    const [value, navValue] = useContent();
    const pages = NavigationPages.pages;

    let history = useHistory();

    const handleChangeEvent = (event, newValue) => {
        history.push(pages[newValue].link);
        navValue.selected.alterarValor(newValue);
    };

    return (
        <Tabs
            value={value}
            onChange={handleChangeEvent}
            indicatorColor={"secondary"}
        >
            {pages.map(page => {
                return <Tab key={page.id} label={page.title} />
            })}
        </Tabs>
    );
}

export default Navigation;