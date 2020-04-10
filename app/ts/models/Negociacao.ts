import { MeuObjeto } from './MeuObjeto';

export class Negociacao implements MeuObjeto<Negociacao> {

  constructor(private _data: Date, private _quantidade: number, private _valor: number) {
  }
  ehIgual(negociacao: Negociacao): boolean {
    return this._data.getDate() == negociacao._data.getDate()
      && this._data.getMonth() == negociacao._data.getMonth()
      && this._data.getFullYear() == negociacao._data.getFullYear();
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

  public paraTexto(): void {
    console.log(
      `Data: ${this._data}
      Quantidade: ${this._quantidade}, 
      Valor: ${this._valor}, 
      Volume: ${this.getVolume()}`
    );
  }
}