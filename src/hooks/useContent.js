import React, { useContext, useEffect } from 'react';
import NavigationContext from '../contexts/NavigationContext';

function useContent() {

    const navValue = useContext(NavigationContext);
    
    const [value, setValue] = React.useState(navValue.selected.navSelected);

    const handleChange = (newValue) => {
        setValue(newValue);
    };

    useEffect(() => {
        navValue.selected.inscrever(handleChange);
        return (() => {
            navValue.selected.desinscrever(handleChange);
        });
    });

    return [value, navValue];

}

export default useContent;

