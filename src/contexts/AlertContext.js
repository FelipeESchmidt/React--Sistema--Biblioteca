import React from 'react';
import AlertMessage from '../data/AlertMessage';

const alertMessage = new AlertMessage();

const AlertContext = React.createContext({
    message: alertMessage
});

export default AlertContext;