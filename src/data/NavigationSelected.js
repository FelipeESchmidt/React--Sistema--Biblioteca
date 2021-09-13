class NavigationSelected {
    constructor() {
        this.navSelected = 0;
        this._inscritos = [];
    }

    alterarValor(newSelected) {
        this.navSelected = newSelected;
        this.notificar();
    }

    notificar() {
        this._inscritos.forEach(func => func(this.navSelected));
    }

    inscrever(func) {
        this._inscritos.push(func);
    }

    desinscrever(func) {
        this._inscritos = this._inscritos.filter(f => f !== func);
    }
}

export default NavigationSelected;