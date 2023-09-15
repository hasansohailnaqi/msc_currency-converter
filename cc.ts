
import chalk from "chalk";
import inquirer from "inquirer";


let apilink = "https://v6.exchangerate-api.com/v6/9f6b43a8b33664d9be7d9425/latest/PKR";

let fetchData = async (data:any) => {
let fetchData = await fetch(data)
let res = await fetchData.json()
return res.conversion_rates;
};

let data = await fetchData(apilink);

let cuntries = Object.keys(data);

let firstCuntry = await inquirer.prompt({
    type: "list",
    name: "name",
    message: " please select first country..",
    choices: cuntries,
});




