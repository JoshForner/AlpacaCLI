#!/usr/bin/env node
import { findStock } from "./commands/findstock";

const chalk = require("chalk");
const clear = require("clear");
const figlet = require("figlet");
const path = require("path");
const program = require("commander");
const inquirer = require("inquirer");

console.log(chalk.red(figlet.textSync("alpaca", { horizontalLayout: "full" })));

mainMenu();

export function mainMenu() {
  inquirer
    .prompt([
      {
        type: "list",
        name: "command",
        message: "What would you like to do?",
        choices: ["Find a stock", "Current Balance", "Exit"],
      },
    ])
    .then((answers: { command: string }) => {
      switch (answers.command) {
        case "Find a stock":
          findStock();
          break;
        case "Current Balance":
          console.log(chalk.green("Current Balance"));
          break;
        case "Exit":
          console.log(chalk.green("Exiting"));
          process.exit();
      }
    })
    .catch((error: any) => {
      if (error.isTtyError) {
        // Prompt couldn't be rendered in the current environment
        console.log(chalk.red("Prompt couldn't be rendered in the current environment"));
      } else {
        console.log(chalk.red("Something wrong with inquirer"));
      }
    });;
}
