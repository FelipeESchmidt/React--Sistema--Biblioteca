import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    footer: {
        position: "fixed",
        bottom: 0,
        display: "flex",
        justifyContent: "center",
        width: "100%",
        padding: "20px",
        backgroundColor: theme.palette.grey[300]
    },
    text: {
        color: theme.palette.grey[800]
    }
}));

function Footer() {

    const classes = useStyles();

    return (
        <footer className={classes.footer}>
            <Typography className={classes.text}>ReactJS with Material-UI ©2021 Created by Felipe Schmidt</Typography>
        </footer>
    );
}

export default Footer;