import { AlpacaClient, AlpacaStream } from "@master-chief/alpaca";

const Alpaca = require('@alpacahq/alpaca-trade-api');

const client = new AlpacaClient({
  credentials: {
    key: "",
    secret: "",
    paper: true,
  },
  rate_limit: true,
});

export const alpaca = new Alpaca({
    keyId: '',
    secretKey: '',
    paper: true,
});

export let getAlpaca = (): AlpacaClient => client;
