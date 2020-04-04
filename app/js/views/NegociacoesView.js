System.register(["./View"], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var View_1, NegociacoesView;
    return {
        setters: [
            function (View_1_1) {
                View_1 = View_1_1;
            }
        ],
        execute: function () {
            NegociacoesView = class NegociacoesView extends View_1.View {
                template(model) {
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
          ${model.paraArray().map(negociacao => `
                        <tr>
                          <td>${negociacao.getDate().getDate()}/${negociacao.getDate().getMonth() + 1}/${negociacao.getDate().getFullYear()}</td>
                          <td>${negociacao.getQuantidade()}</td>
                          <td>${negociacao.getvalor()}</td>
                          <td>${negociacao.getVolume()}</td>
                        </tr>
                      `).join('')}
        </tbody>

        <tfoot>
        </tfoot>
      </table>
    `;
                }
            };
            exports_1("NegociacoesView", NegociacoesView);
        }
    };
});
