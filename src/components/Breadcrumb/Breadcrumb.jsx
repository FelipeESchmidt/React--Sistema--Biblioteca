import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography, Breadcrumbs, Link } from '@material-ui/core/';
import NavigationPages from '../../data/NavigationPages';
import useContent from '../../hooks/useContent';
import useSearch from '../../hooks/useSearch';

const useStyles = makeStyles((theme) => ({
    root: {
        margin: "30px 80px"
    }
}));

const pages = [...NavigationPages.pages];
pages.push({ title: "Searching for: " });

function Breadcrumb() {

    const classes = useStyles();

    const content = useContent();
    const search = useSearch();

    const [bcText, setBcText] = useState('');


    useEffect(() => {
        pages.forEach(page => {
            if (window.location.pathname === page.link) {
                setBcText(page.title);
            }
        });
        if (window.location.pathname === '/') {
            setBcText(pages[0].title);
        } else if (window.location.pathname.match('/search')) {
            setBcText(pages[3].title + search[0]);
        }
    }, [content, search]);

    return (
        <div className={classes.root}>
            <Breadcrumbs aria-label="breadcrumb">
                <Link color="inherit" href="/">
                    Home
                </Link>
                <Typography color="textPrimary">{bcText}</Typography>
            </Breadcrumbs>
        </div>
    );
}

export default Breadcrumb;