import { Negociacao, Negociacoes, NegociacaoParcial } from './../models/index';
import { NegociacoesView, MensagemView } from '../views/index';
import { logarTempoExecucao, domInject, throttle } from '../helpers/decorators/index';
import { NegociacaoService } from '../serivces/index';
import { imprime } from '../helpers/Utils';
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

  private _service = new NegociacaoService();

  constructor() {
    this._negociacaoView.update(this._negociacoes);
  }

  @throttle()
  @logarTempoExecucao(true)
  adiciona() {

    const negociacao = new Negociacao(
      new Date(this._inputData.val().replace(/-/g, ',')),
      parseInt(this._inputQuantidade.val()),
      parseFloat(this._inputValor.val())
    );

    this._negociacoes.adiciona(negociacao);
    this._negociacaoView.update(this._negociacoes);
    this._mensagemView.update('Negociação incluída com sucesso!');

    imprime(negociacao, this._negociacoes);
  }

  @throttle()
  async importarDados() {

    try {
      const negociacoesParaImportar = await this._service
        .obterNegociacoes(res => {
          if (res.ok) {
            return res;
          } else {
            throw new Error(res.statusText);
          }
        });

      const negociacoesJaImportadas = this._negociacoes.paraArray();

      negociacoesParaImportar
        .filter(negociacao => !negociacoesJaImportadas
          .some(jaImportada => negociacao.ehIgual(jaImportada)))
        .forEach(negociacao =>
          this._negociacoes.adiciona(negociacao));
      this._negociacaoView.update(this._negociacoes);

    } catch (err) {
      this._mensagemView.update(err.message);
    }

  }

}