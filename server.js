// Includes packages/imports needed for program
const inquirer = require('inquirer');
const mysql = require("mysql2");

// Connect to database
const db = mysql.createConnection(
    {
        host: "localhost",
        user: "root",
        password: "Byhzof-myngap-vacwa5",
        database: "employees_db",
    },
    console.log(`Connected to the employees_db database.`)
);

// Array of questions to be generated
const questions = [
    {
        type: 'list',
        message: "What would you like to do? ",
        name: "initial",
        choices: ["View all departments", "View all roles", "View all employees", "Add a department", "Add a role", "Add an employee", "Update an employee role", "Quit"]
    }
];

// Function to initialize application
function init(promptQuestions){
    inquirer
        .prompt(promptQuestions)
        .then((response) => {
                if (response.initial === "View all departments") {
                    console.log("Viewing Departments:")
                    db.query('SELECT * FROM department;', function (err, results) {
                        console.log(results);
                        init(promptQuestions);
                      });
                } else if (response.initial === "View all roles") {
                    console.log("Viewing Roles:")
                    db.query('SELECT * FROM role;', function (err, results) {
                        console.log(results);
                        init(promptQuestions);
                      });
                }  else if (response.initial === "View all employees") {
                    console.log("Viewing Employees:")
                    db.query('SELECT * FROM employee;', function (err, results) {
                        console.log(results);
                        init(promptQuestions);
                      });
                }  else if (response.initial === "Add a department") {
                    // console.log("Viewing Departments:")
                    // db.query('SELECT * FROM department;', function (err, results) {
                    //     console.log(results);
                    init(promptQuestions);
                    //   });
                } else if (response.initial === "Add a role") {
                    // console.log("Viewing Departments:")
                    // db.query('SELECT * FROM department;', function (err, results) {
                    //     console.log(results);
                    init(promptQuestions);
                    //   });
                } else if (response.initial === "Add an employee") {
                    // console.log("Viewing Departments:")
                    // db.query('SELECT * FROM department;', function (err, results) {
                    //     console.log(results);
                    init(promptQuestions);
                    //   });
                } else if (response.initial === "Update an employee role") {
                    // console.log("Viewing Departments:")
                    // db.query('SELECT * FROM department;', function (err, results) {
                    //     console.log(results);
                    init(promptQuestions);
                    //   });
                } else {
                    console.log ("Goodbye!");
                }
        });
    }

// Function call to initialize app
init(questions);