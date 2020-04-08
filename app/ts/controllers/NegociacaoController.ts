import { Negociacao, Negociacoes, NegociacaoParcial } from './../models/index';
import { NegociacoesView, MensagemView } from '../views/index';
import { logarTempoExecucao, domInject, throttle } from '../helpers/decorators/index';

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
  }

  @throttle()
  importarDados() {

    function isOK(res: Response) {
      if (res.ok) {
        return res;
      } else {
        throw new Error(res.statusText);
      }

    }

    fetch('http://localhost:8080/dados')
      .then(res => isOK(res))
      .then(res => res.json())
      .then((dados: NegociacaoParcial[]) => {
        dados
          .map(dado => new Negociacao(new Date(), dado.vezes, dado.montante))
          .forEach(negociacao => this._negociacoes.adiciona(negociacao));

        this._negociacaoView.update(this._negociacoes);
      })
      .catch(err => console.log(err.message));



  }

}