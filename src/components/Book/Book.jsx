import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Paper, Typography } from '@material-ui/core/';
import BookOptions from '../BookOptions';

const useStyles = makeStyles((theme) => ({
    paper: {
        width: "210px",
        height: "348px"
    },
    image: {
        width: "100%",
        height: "220px",
        objectFit: "cover"
    },
    texts: {
        padding: "1em",
        textAlign: "center"
    },
    title: {
        marginBottom: "0.5em",
        color: "black",
        fontWeight: "400",
    },
    authors: {
        color: "#888",
        fontWeight: "300"
    },
    optionsWrapper: {
        height: "48px"
    }
}));

function Book({book}) {

    const classes = useStyles();

    function limitText(text, limiter){
        return text.slice(0, limiter) + (text.length > limiter ? "..." : "");
    }

    if(!book.authors){
        book.authors = ["Unknown Author"];
    }

    if(!book.imageLinks){
        book["imageLinks"] = {};
        book["imageLinks"]["smallThumbnail"] = "https://t3.ftcdn.net/jpg/04/34/72/82/360_F_434728286_OWQQvAFoXZLdGHlObozsolNeuSxhpr84.jpg";
    }

    return (
        <Grid item>
            <Paper className={classes.paper}>
                <img className={classes.image} src={book.imageLinks.smallThumbnail} alt={"Capa livro: " + book.title} />
                <div className={classes.texts}>
                    <Typography className={classes.title} variant="subtitle1">{limitText(book.title, 17)}</Typography>
                    <Typography className={classes.authors} variant="subtitle2">{limitText(book.authors.join(', '), 20)}</Typography>
                </div>
                <div className={classes.optionsWrapper}>
                    <BookOptions book={book}></BookOptions>
                </div>
            </Paper>
        </Grid>
    );
}

export default Book;