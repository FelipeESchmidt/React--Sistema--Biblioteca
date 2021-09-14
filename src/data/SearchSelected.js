class SearchSelected {
    constructor() {
        this.searchSelected = null;
        this._inscritos = [];
    }

    alterarValor(newSelected) {
        this.searchSelected = newSelected;
        this.notificar();
    }

    notificar() {
        this._inscritos.forEach(func => func(this.searchSelected));
    }

    inscrever(func) {
        this._inscritos.push(func);
    }

    desinscrever(func) {
        this._inscritos = this._inscritos.filter(f => f !== func);
    }
}

export default SearchSelected;