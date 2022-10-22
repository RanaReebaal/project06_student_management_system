export{}
const inquirer = require('inquirer');
const ShortUniqueId = require('short-unique-id');
const uid:any = new ShortUniqueId();
const s_id:any = uid(5)
inquirer
  .prompt([
    {
        type:'input',
        name:'u_name',
        message:'What is your name?'
    },
    {
        type:'rawlist',
        name:'course',
        message:'In which course do you want to enroll?',
        choices:['Artificial Intelligence', 'Cloud Native Computing', 'Block Chain', 'Internet Of Things']
    },
    {
        type:'input',
        name:'u_tfee',
        message:'Did you paid your fee?'
    },
    {
        type:'checkbox',
        name:'opr',
        message:'Select the operation you want to perform?',
        choices:['Enroll', 'Show status']
    },
  ])
  .then((answers) => {
        const n:string = answers.u_name;
        const c:string = answers.course;
        const t_f:string = answers.u_tfee;
        const o:string = answers.opr
        if (o == 'Show status'){
            console.log("status is cleared")
            let user_data = 
            {
                name: n,
                course: c,
                tution_fees: t_f,
                student_id: s_id,
            }
            console.log(user_data)
        }else if(o == "Enroll"){
            console.log('Please complete the registration process first, run the program again...')
        }
});







