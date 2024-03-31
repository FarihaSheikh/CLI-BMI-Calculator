#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
const questions = [
    { type: 'number',
        name: 'weight',
        message: 'Enter your weight(kg):' //Weight in kg
    },
    { type: 'number',
        name: 'height',
        message: 'Enter your height(m):'
    }, //Height in meters
];
const calculateBMI = (weight, height) => weight / (height * height);
const main = async () => {
    const { weight, height } = await inquirer.prompt(questions);
    console.log(chalk.bgRed(`\nYour BMI is: ${calculateBMI(weight, height).toFixed(2)}`));
};
main();
