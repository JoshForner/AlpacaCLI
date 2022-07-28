#!/usr/bin/env node
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mainMenu = void 0;
var findstock_1 = require("./commands/findstock");
var chalk = require("chalk");
var clear = require("clear");
var figlet = require("figlet");
var path = require("path");
var program = require("commander");
var inquirer = require("inquirer");
console.log(chalk.red(figlet.textSync("alpaca", { horizontalLayout: "full" })));
mainMenu();
function mainMenu() {
    inquirer
        .prompt([
        {
            type: "list",
            name: "command",
            message: "What would you like to do?",
            choices: ["Find a stock", "Current Balance", "Exit"],
        },
    ])
        .then(function (answers) {
        switch (answers.command) {
            case "Find a stock":
                (0, findstock_1.findStock)();
                break;
            case "Current Balance":
                console.log(chalk.green("Current Balance"));
                break;
            case "Exit":
                console.log(chalk.green("Exiting"));
                process.exit(0);
        }
    })
        .catch(function (error) {
        if (error.isTtyError) {
            // Prompt couldn't be rendered in the current environment
            console.log(chalk.red("Prompt couldn't be rendered in the current environment"));
        }
        else {
            console.log(chalk.red("Something wrong with inquirer"));
        }
    });
    ;
}
exports.mainMenu = mainMenu;
