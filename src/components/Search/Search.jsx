import React, { useContext, useEffect, useState } from 'react';
import Book from '../Book';
import Loading from '../Loading';
import { Grid, Container } from '@material-ui/core/';
import ApiContext from '../../contexts/ApiContext';
import useSearch from '../../hooks/useSearch';

function Search() {

    const [value] = useSearch();

    const context = useContext(ApiContext);

    const [library, setLibrary] = useState(null);

    useEffect(() => {
        setLibrary(null);

        context.controller.searchBooks(value, setLibrary);
        
    }, [value, context]);

    if (!library) {
        return <Loading position="middle" padding={4}></Loading>;
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

export default Search;