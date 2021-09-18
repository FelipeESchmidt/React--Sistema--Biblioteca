import React, { useContext } from 'react';
import AlertContext from '../contexts/AlertContext';

function useAlert() {

    const messageContext = useContext(AlertContext);

    const [mensagem, setMensagem] = React.useState(messageContext.message.mensagem);

    return [mensagem, setMensagem, messageContext];

}

export default useAlert;

