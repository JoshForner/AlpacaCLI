import { mainMenu } from "../alpaca";
import { getAlpaca, alpaca } from "../client";


const inquirer = require("inquirer");
const chalk = require("chalk");

let ticker = "";
let today = new Date();
today.setDate(today.getDate() - 7);
let date = today.toISOString().slice(0, 10);

export async function findStock() {
  return inquirer
    .prompt([
      {
        type: "input",
        name: "stock",
        message: "What stock would you like to find?",
      },
    ])
    .then(async (answers: { stock: string }) => {
      console.log(chalk.green(`Finding ${answers.stock}`));
      ticker = answers.stock;
      let stock = await getAlpaca()
        .getAsset({
          asset_id_or_symbol: ticker.toUpperCase(),
        })
        .then(async (data: any) => {
            let resp = alpaca.getBarsV2(
                data.symbol,
                {
                    start: date,
                    end: date,
                    limit: 1,
                    timeframe: "1Day",
                    adjustment: "all",
                },
                alpaca.configuration
            );
            console.log(chalk.green(`Symbol: ${data.symbol} Name: ${data.name}`));
            for await (let b of resp) {
                console.log(b)
            }
        })
        .catch((err: any) => {
          console.log(chalk.red(ticker + " is not a valid ticker symbol"));
        });

      mainMenu();
    });
}
