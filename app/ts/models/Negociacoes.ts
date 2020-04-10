import { MeuObjeto } from './MeuObjeto';
import { Negociacao } from './Negociacao';

export class Negociacoes implements MeuObjeto<Negociacoes> {

  ehIgual(dado: Negociacoes): boolean {
    return JSON.stringify(dado) == JSON.stringify(this._negociacoes);
  }

  private _negociacoes: Negociacao[] = [];

  adiciona(negociacao: Negociacao) {
    this._negociacoes.push(negociacao);
  }

  paraArray(): Negociacao[] {
    return [].concat(this._negociacoes);
  }

  paraTexto(): void {
    console.log(JSON.stringify(this._negociacoes));
  }
}