export class Negociacao {

  constructor(private _data: Date, private _quantidade: number, private _valor: number) {
  }

  getDate() {
    return this._data;
  }

  getvalor() {
    return this._valor;
  }

  getQuantidade() {
    return this._quantidade;
  }

  getVolume() {
    return this._valor * this._quantidade;
  }
}