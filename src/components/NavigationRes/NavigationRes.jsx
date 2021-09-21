import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Link, useHistory } from "react-router-dom";
import useContent from '../../hooks/useContent';
import NavigationPages from '../../data/NavigationPages';
import { Tabs, Tab, Button, Toolbar, IconButton, Paper } from '@material-ui/core';
import { Menu as MenuIcon, Close as CloseIcon, LibraryBooks, ImportContacts, Bookmarks, CheckCircle } from '@material-ui/icons';
import SearchInput from '../SearchInput';
import useSearch from '../../hooks/useSearch';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
    },
    link: {
        textDecoration: "none",
        color: 'inherit'
    },
    menuItems: {
        zIndex: 2,
        position: "absolute",
        top: "64px",
        width: "92%",
        display: "flex",
        flexWrap: "wrap",
        [theme.breakpoints.down('xs')]: {
            top: "56px",
        },
    },
    menuItem: {
        width: "100%",
    },
}));

function Navigation() {

    const classes = useStyles();
    const history = useHistory();
    const [value, navValue] = useContent();
    const [menuOpen, setMenuOpen] = useState(false);

    const search = useSearch();

    const pages = NavigationPages.pages;
    const pagesIcons = [<ImportContacts />, <Bookmarks />, <CheckCircle />];

    const clearSearch = () => {
        search[1].selected.alterarValor(null);
    }

    const handleChangeEvent = (event, newValue) => {
        history.push(pages[newValue].link);
        navValue.selected.alterarValor(newValue);
        clearSearch();
        setMenuOpen(false);
    };

    const handleClickEvent = (event) => {
        history.push('');
        navValue.selected.alterarValor(0);
        clearSearch();
        setMenuOpen(false);
    };

    const handleUseSearch = (newSelection) => {
        history.push(`/search/${newSelection}`);
        setMenuOpen(false);
    };

    const handleMenuClick = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <div className={classes.root}>
            <Toolbar>
                <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu" onClick={handleMenuClick}>
                    {(menuOpen) ? <CloseIcon /> : <MenuIcon />}
                </IconButton>
                <Button onClick={handleClickEvent} startIcon={<LibraryBooks />} variant="contained"><Link className={classes.link} to="/">Library</Link></Button>
                {(menuOpen) ?
                    <Paper className={classes.menuItems} elevation={10} >
                        <Tabs
                            value={value}
                            onChange={handleChangeEvent}
                            indicatorColor={"primary"}
                            orientation="vertical"
                            variant="fullWidth"
                            className={classes.menuItem}
                        >
                            {pages.map(page => {
                                return <Tab icon={pagesIcons[page.id]} key={page.id} label={page.title} />
                            })}
                        </Tabs>
                        <SearchInput className={classes.menuItem} onUse={handleUseSearch} searchWidth={"100%"} />
                    </Paper>
                    : <></>}
            </Toolbar>
        </div>
    );
}

export default Navigation;