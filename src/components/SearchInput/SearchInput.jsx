import React from 'react';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';

function SearchInput({onUse}) {

    const handleChange = (event, newSelection) => {
        if(newSelection != null){
            onUse(newSelection);
        }
    }

    let startValue = '';
    if(window.location.pathname.split('/')[2] !== ''){
        let urlValue = window.location.pathname.split('/')[2];
        startValue = decodeURI(urlValue);
    }else{
        startValue = 'Search other books';
    }

    return (
        <Autocomplete
            id="search-box"
            onChange={handleChange}
            disableClearable
            options={filters}
            getOptionLabel={(option) => option}
            style={{ width: 300 }}
            renderInput={(params) => (<TextField {...params} placeholder={startValue} variant="outlined" />)}
        />
    );
}

const filters = ['Android', 'Art', 'Artificial Intelligence', 'Astronomy', 'Austen', 'Baseball', 'Basketball', 'Bhagat', 'Biography', 'Brief', 'Business', 'Camus', 'Cervantes', 'Christie', 'Classics', 'Comics', 'Cook', 'Cricket', 'Cycling', 'Desai', 'Design', 'Development', 'Digital Marketing', 'Drama', 'Drawing', 'Dumas', 'Education', 'Everything', 'Fantasy', 'Film', 'Finance', 'First', 'Fitness', 'Football', 'Future', 'Games', 'Gandhi', 'Homer', 'Horror', 'Hugo', 'Ibsen', 'Journey', 'Kafka', 'King', 'Lahiri', 'Larsson', 'Learn', 'Literary Fiction', 'Make', 'Manage', 'Marquez', 'Money', 'Mystery', 'Negotiate', 'Painting', 'Philosophy', 'Photography', 'Poetry', 'Production', 'Programming', 'React', 'Redux', 'River', 'Robotics', 'Rowling', 'Satire', 'Science Fiction', 'Shakespeare', 'Singh', 'Swimming', 'Tale', 'Thrun', 'Time', 'Tolstoy', 'Travel', 'Ultimate', 'Virtual Reality', 'Web Development', 'iOS'];

export default SearchInput;