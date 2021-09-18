class AlertMessage {
    constructor() {
        this.mensagem = { text: '', display: 'none' };
        this._inscritos = [];
    }

    alterarMensagem(newMessage) {
        this.mensagem = newMessage;
        this.notificar();
    }

    notificar() {
        this._inscritos.forEach(func => func(this.mensagem));
    }

    inscrever(func) {
        this._inscritos.push(func);
    }

    desinscrever(func) {
        this._inscritos = this._inscritos.filter(f => f !== func);
    }
}

export default AlertMessage;