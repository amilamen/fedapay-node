"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var Resource_1 = require("./Resource");
var Currency = /** @class */ (function (_super) {
    __extends(Currency, _super);
    function Currency() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * @param {string|number} id
     * @param {Object|null} headers
     * @returns {Promise<Customer>}
     */
    Currency.retrieve = function (id, headers) {
        if (headers === void 0) { headers = {}; }
        return this._retrieve(id, headers);
    };
    /**
     * @param {Object|null} params
     * @param {Object|null} headers
     *
     * @returns {Promise<FedaPayObject>}
     */
    Currency.all = function (params, headers) {
        if (params === void 0) { params = {}; }
        if (headers === void 0) { headers = {}; }
        return this._all(params, headers);
    };
    return Currency;
}(Resource_1.Resource));
exports.Currency = Currency;
