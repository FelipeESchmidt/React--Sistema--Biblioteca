import React, { useContext, useEffect, useState } from 'react';
import Book from '../Book';
import Loading from '../Loading';
import { Grid, Container } from '@material-ui/core/';
import ApiContext from '../../contexts/ApiContext';

function BooksList({ type }) {

    const context = useContext(ApiContext);

    const [library, setLibrary] = useState(null);
    const [change, setChange] = useState(false);

    useEffect(() => {
        setLibrary(null);

        context.controller.getMyBooksFilterd(type, setLibrary);
        context.controller.inscrever(handleChangeBooks);

        setChange(false);

        return function cleanUP(){
            context.controller.desinscrever(handleChangeBooks);
        }
    }, [type, context, change]);

    function handleChangeBooks(){
        setChange(true);
    }

    if(!library){
        return <Loading position="middle" padding={4}></Loading> ;
    }

    return (
        <>
            <Container>
                <Grid
                    container
                    direction="row"
                    alignItems="flex-start"
                    spacing={2}
                >
                    {library.map((book) => <Book key={book.id} book={book}></Book>)}
                </Grid>
            </Container>
        </>
    );
}

export default BooksList;