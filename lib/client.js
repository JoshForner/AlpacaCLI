"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAlpaca = void 0;
var alpaca_1 = require("@master-chief/alpaca");
var client = new alpaca_1.AlpacaClient({
    credentials: {
        key: "PKXN6UFTIPQXZ88FZV8M",
        secret: "hXyEw6MvDNbq5qTnWV0BovRIgY3lmcsjGqftX7ab",
        paper: true,
    },
    rate_limit: true,
});
var getAlpaca = function () { return client; };
exports.getAlpaca = getAlpaca;
