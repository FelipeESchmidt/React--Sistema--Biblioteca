import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import { AppBar, Toolbar, Container, Grid } from '@material-ui/core';
import Navigation from "../Navigation/Navigation";

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    container: {
        alignItems: 'center'
    }
}));

function Header() {

    const classes = useStyles();

    return (
        <header>
            <AppBar color={"transparent"} position="static">
                <Toolbar>
                    <Container maxWidth={false}>
                        <Grid className={classes.container} container spacing={3}>
                            <Navigation></Navigation>
                        </Grid>
                    </Container>
                </Toolbar>
            </AppBar>
        </header>
    );
}

export default Header;