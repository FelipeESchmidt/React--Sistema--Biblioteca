import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Paper, Typography } from '@material-ui/core';
import useAlert from '../../hooks/useAlert';

const useStyles = makeStyles((theme) => ({
    paper: {
        zIndex: 2,
        position: "absolute",
        top: "1vh",
        left: "50%",
        transform: "translateX(-50%)",
        padding: "1em 1.5em"
    },
    mensagem: {
        color: theme.palette.primary.light
    }
}));

function Alert() {

    const classes = useStyles();
    const [mensagem, setMensagem, messageContext] = useAlert();
    const [resetTimeout, setResetTimeout] = useState(null);

    const handleChange = (newMessage) => {
        clearTimeout(resetTimeout);
        setResetTimeout(setTimeout(() => {
            resetMensagem();
            setResetTimeout(null);
        }, 3000));
        setMensagem(newMessage);
    };

    const resetMensagem = () => {
        setMensagem({ text: '', display: 'none' });
    }

    useEffect(() => {
        messageContext.message.inscrever(handleChange);
        return (() => {
            messageContext.message.desinscrever(handleChange);
        });
    });

    return (
        <Paper className={classes.paper} style={{ display: mensagem.display }} elevation={10}>
            <Typography className={classes.mensagem}>{mensagem.text}</Typography>
        </Paper>
    );
}

export default Alert;