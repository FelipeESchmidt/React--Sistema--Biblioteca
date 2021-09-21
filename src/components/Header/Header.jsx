import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import { AppBar, Toolbar, Container, Grid, useTheme, useMediaQuery } from '@material-ui/core';
import Navigation from "../Navigation";
import NavigationRes from "../NavigationRes";

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

    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.up('lg'));

    return (
        <header>
            <AppBar color={"transparent"} position="static">
                <Toolbar>
                    <Container maxWidth={false}>
                        {(matches) ?
                            <Grid className={classes.container} container spacing={3} >
                                <Navigation></Navigation>
                            </Grid>
                            :
                            <NavigationRes></NavigationRes>
                        }
                    </Container>
                </Toolbar>
            </AppBar>
        </header>
    );
}

export default Header;