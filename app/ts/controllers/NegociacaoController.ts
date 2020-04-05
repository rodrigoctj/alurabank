import { Negociacao, Negociacoes } from './../models/index';
import { NegociacoesView, MensagemView } from '../views/index';
import { logarTempoExecucao, domInject } from '../helpers/decorators/index';

export class NegociacaoController {

  @domInject('#quantidade')
  private _inputQuantidade: JQuery;

  @domInject('#data')
  private _inputData: JQuery;

  @domInject('#valor')
  private _inputValor: JQuery;
  private _negociacoes = new Negociacoes();
  private _negociacaoView = new NegociacoesView('#negociacoesView');
  private _mensagemView = new MensagemView('#mensagemView');

  constructor() {
    this._negociacaoView.update(this._negociacoes);
  }

  @logarTempoExecucao(true)
  adiciona(event: Event) {
    event.preventDefault();

    const negociacao = new Negociacao(
      new Date(this._inputData.val().replace(/-/g, ',')),
      parseInt(this._inputQuantidade.val()),
      parseFloat(this._inputValor.val())
    );

    this._negociacoes.adiciona(negociacao);
    this._negociacaoView.update(this._negociacoes);
    this._mensagemView.update('Negociação incluída com sucesso!');
  }

}