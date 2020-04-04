System.register([], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var Negociacao;
    return {
        setters: [],
        execute: function () {
            Negociacao = class Negociacao {
                constructor(_data, _quantidade, _valor) {
                    this._data = _data;
                    this._quantidade = _quantidade;
                    this._valor = _valor;
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
            };
            exports_1("Negociacao", Negociacao);
        }
    };
});
