import { Negociacoes } from './../models/Negociacoes';
import { View } from './View';

export class NegociacoesView extends View<Negociacoes> {

  template(model: Negociacoes): string {
    return `
      <table class="table table-hover table-bordered">
        <thead>
            <tr>
                <th>DATA</th>
                <th>QUANTIDADE</th>
                <th>VALOR</th>
                <th>VOLUME</th>
            </tr>
        </thead>

        <tbody>
          ${model.paraArray().map(negociacao =>
      `
                        <tr>
                          <td>${negociacao.getDate().getDate()}/${negociacao.getDate().getMonth() + 1}/${negociacao.getDate().getFullYear()}</td>
                          <td>${negociacao.getQuantidade()}</td>
                          <td>${negociacao.getvalor()}</td>
                          <td>${negociacao.getVolume()}</td>
                        </tr>
                      `
    ).join('')}
        </tbody>

        <tfoot>
        </tfoot>
      </table>
    `
  }

}