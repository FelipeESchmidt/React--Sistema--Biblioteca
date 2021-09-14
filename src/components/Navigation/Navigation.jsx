import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Link, useHistory } from "react-router-dom";
import useContent from '../../hooks/useContent';
import NavigationPages from '../../data/NavigationPages';
import { Tabs, Tab, Grid, Button } from '@material-ui/core';
import { LibraryBooks, ImportContacts, Bookmarks, CheckCircle } from '@material-ui/icons';
import SearchInput from '../SearchInput';

const useStyles = makeStyles((theme) => ({
    link: {
        textDecoration: "none",
        color: 'inherit'
    }
}));

function Navigation() {

    const classes = useStyles();
    const history = useHistory();
    const [value, navValue] = useContent();

    const pages = NavigationPages.pages;
    const pagesIcons = [<ImportContacts />, <Bookmarks />, <CheckCircle />];

    const handleChangeEvent = (event, newValue) => {
        history.push(pages[newValue].link);
        navValue.selected.alterarValor(newValue);
    };

    const handleClickEvent = (event) => {
        history.push('');
        navValue.selected.alterarValor(0);
    };

    const handleUseSearch = (newSelection) => {
        history.push(`/search/${newSelection}`);
    };

    return (
        <>
            <Grid item>
                <Button onClick={handleClickEvent} startIcon={<LibraryBooks />} variant="contained"><Link className={classes.link} to="/">Library</Link></Button>
            </Grid>
            <Grid item>
                <Tabs
                    value={value}
                    onChange={handleChangeEvent}
                    indicatorColor={"primary"}
                >
                    {pages.map(page => {
                        return <Tab icon={pagesIcons[page.id]} key={page.id} label={page.title} />
                    })}
                </Tabs>
            </Grid>
            <Grid item>
                <SearchInput onUse={handleUseSearch} />
            </Grid>
        </>
    );
}

export default Navigation;