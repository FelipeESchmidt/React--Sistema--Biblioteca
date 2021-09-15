import React, { useState } from 'react';
import Loading from '../Loading';
import { Grid, Container } from '@material-ui/core/';
import NavigationPages from '../../data/NavigationPages';

let startLibrary = {};
NavigationPages.pages.forEach((page) => startLibrary[page.sharf] = null);

function BooksList({ type, getBooks }) {

    const [library, setLibrary] = useState(startLibrary);

    if (library[type] === null) {
        getBooks(type).then(books => {
            const tempLibrary = { ...library };
            tempLibrary[type] = books;
            setLibrary(tempLibrary);
        });
        return (<Loading></Loading>);
    }

    return (
        <>
            <Container>
                <Grid
                    container
                    direction="row"
                    justifyContent="space-between"
                    alignItems="flex-start"
                    spacing={2}
                >
                    {library[type].map((book) => <h1 key={book.id}>{book.title}</h1>)}
                </Grid>
            </Container>
        </>
    );
}

export default BooksList;