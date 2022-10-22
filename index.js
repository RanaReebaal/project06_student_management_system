"use strict";
exports.__esModule = true;
var inquirer = require('inquirer');
var ShortUniqueId = require('short-unique-id');
var uid = new ShortUniqueId();
var s_id = uid(5);
inquirer
    .prompt([
    {
        type: 'input',
        name: 'u_name',
        message: 'What is your name?'
    },
    {
        type: 'rawlist',
        name: 'course',
        message: 'In which course do you want to enroll?',
        choices: ['Artificial Intelligence', 'Cloud Native Computing', 'Block Chain', 'Internet Of Things']
    },
    {
        type: 'input',
        name: 'u_tfee',
        message: 'Did you paid your fee?'
    },
    {
        type: 'checkbox',
        name: 'opr',
        message: 'Select the operation you want to perform?',
        choices: ['Enroll', 'Show status']
    },
])
    .then(function (answers) {
    var n = answers.u_name;
    var c = answers.course;
    var t_f = answers.u_tfee;
    var o = answers.opr;
    if (o == 'Show status') {
        console.log("status is cleared");
        var user_data = {
            name: n,
            course: c,
            tution_fees: t_f,
            student_id: s_id
        };
        console.log(user_data);
    }
    else if (o == "Enroll") {
        console.log('Please complete the registration process first, run the program again...');
    }
});
