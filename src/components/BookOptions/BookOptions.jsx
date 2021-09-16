import React, { useRef, useEffect, useState, useContext } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Paper, MenuList, MenuItem, Button, ClickAwayListener, Popper } from '@material-ui/core/';
import NavigationPages from "../../data/NavigationPages";
import ApiContext from '../../contexts/ApiContext';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        justifyContent: 'center'
    },
    button: {
        width: "100%",
        backgroundColor: "#ddd"
    }
}));

function BookOptions({ book }) {

    const classes = useStyles();

    const context = useContext(ApiContext);
    
    const pages = NavigationPages.pages;
    const currentPage = pages.filter(page => page.shelf === book.shelf);
    const moveToPages = pages.filter(page => page.shelf !== book.shelf);

    const [open, setOpen] = useState(false);
    const anchorRef = useRef(null);
    const prevOpen = useRef(open);

    useEffect(() => {
        if (prevOpen.current === true && open === false) {
            anchorRef.current.focus();
        }

        prevOpen.current = open;
    }, [open]);

    const handleToggle = () => {
        setOpen((prevOpen) => !prevOpen);
    };

    const handleClose = (event, option) => {
        if (anchorRef.current && anchorRef.current.contains(event.target)) {
            return;
        }

        context.controller.updateBook(book, option);
        // Criar alerta

        setOpen(false);
    };

    return (
        <div className={classes.root}>
            <Button
                ref={anchorRef}
                aria-controls={open ? 'books-option' : undefined}
                aria-haspopup="true"
                onClick={handleToggle}
                className={classes.button}
            >
                ...
            </Button>
            <Popper open={open} anchorEl={anchorRef.current} role={undefined} disablePortal>
                <Paper elevation={6}>
                    <ClickAwayListener onClickAway={handleClose}>
                        <MenuList autoFocusItem={open} id="books-option">
                            {moveToPages.map((page) => (
                                <MenuItem key={page.id} onClick={event => handleClose(event, page.shelf)}>Move to {page.title}</MenuItem>
                            ))}
                            {currentPage.map((page) => (
                                <MenuItem key={page.id} onClick={event => handleClose(event, "noshelf")}>Remove from {page.title}</MenuItem>
                            ))}
                        </MenuList>
                    </ClickAwayListener>
                </Paper>
            </Popper>
        </div>
    );
}

export default BookOptions;