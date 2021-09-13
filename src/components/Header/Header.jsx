import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import { AppBar, Toolbar, Container, Grid, Button } from '@material-ui/core';
import { Link } from 'react-router-dom';
import Navigation from "../Navigation/Navigation";

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    link: {
        textDecoration: "none",
        color: 'inherit'
    },
    container: {
        alignItems: 'center'
    }
}));

function Header() {

    const classes = useStyles();

    return (
        <header>
            <AppBar position="static">
                <Toolbar>
                    <Container maxWidth={false}>
                        <Grid className={classes.container} container spacing={3}>
                            <Grid item>
                                <Button variant="contained"><Link className={classes.link} to="/">Livraria</Link></Button>
                            </Grid>
                            <Grid item>
                                <Navigation></Navigation>
                            </Grid>
                        </Grid>
                    </Container>
                </Toolbar>
            </AppBar>
        </header>
    );
}

export default Header;