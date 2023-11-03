const express = require("express");
const mysql = require("mysql2");
const inquirer = require("inquirer");

const PORT = process.env.PORT || 3001;
const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "D.BurrWang2008!",
  database: "employee_db",
});

inquirer
  .prompt([
    {
      type: "list",
      name: "1st-question-options",
      message: "What would you like to do?",
      choices: [
        { name: "View All Employee", value: "View All Employee" },
        { name: "Add Employee", value: "Add Employee" },
        { name: "Update Employee Role", value: "Update Employee Role" },
        { name: "View All Role", value: "View All Role" },
        { name: "Add Role", value: "Add Role" },
        { name: "View All Departments", value: "View All Departments" },
        { name: "Add Department", value: "Add Department" },
      ],
    },
  ])
  .then((answer) => {
    switch (answer["1st-question-options"]) {
      case "View All Employee":
        view_all_employee();
        break;
      case "Add Employee":
        add_employee();
        break;
      case "Update Employee Role":
        update_employee_role();
        break;
      case "View All Role":
        view_all_role();
        break;
      case "Add Role":
        add_role();
        break;
      case "View All Departments":
        view_all_departments();
        break;
      case "Add Department":
        add_department();
        break;
      default:
        console.log("No answer");
    }
  });

function view_all_employee() {
  db.query("SELECT * FROM employee", function (err, results) {
    console.log(results);
  });
}

function add_employee() {}

function update_employee_role() {}

function view_all_role() {}

function add_role() {}

function view_all_departments() {}

function add_department() {}

app.use((req, res) => {
  res.status(404).end();
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
