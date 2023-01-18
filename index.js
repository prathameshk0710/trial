const sequelize = require("./database");
const Department = require("./department");
const Employee = require("./employee");

const path = require("path");
const express = require("express");
const { doesNotMatch } = require("assert");
const app = express();
const bodyParser = require("body-parser");
const { urlencoded } = require("body-parser");
app.use(bodyParser.urlencoded());

Department.hasMany(Employee);

app.get('/', (req, res)=>{
    res.sendFile(path.join(__dirname, "./homePage.html"));
});

app.post('/empData', (req, res)=>{
    res.sendFile(path.join(__dirname, "./empData.html"));
})

app.post('/empData/done', async(req, res)=>{

    const data=await sequelize.sync();
    let empName = req.body.Ename;
    let empEmail = req.body.Eemail;
    const employee=await Employee.create({Ename:`${empName}`, Eemail: `${empEmail}`});

    console.log(employee);
    res.send("data inserted...");
})

app.post('/deptData', (req, res)=>{
    res.sendFile(path.join(__dirname, "./deptData.html"));
})

app.post('/deptData/done', async(req, res)=>{
    
    const data = sequelize.sync();
    var deptName = req.body.Dname;
    const department = await Department.create({Dname: `${deptName}`});

    console.log(department);
    res.send("data inserted...")
})

app.listen(4000, ()=>{
    console.log("Your server is live at port 4000");
})


// sequelize.sync({force: true})
//     .then((result)=>{
//         // console.log(result);
//         return Employee.create({Ename: "parush", Eemail: "parush@gmail.com"});
//     }).then((Employee)=>{
//         console.log(Employee);
//         // return Department.create({Dname: "Computer"});
//         return Department.bulkCreate([{Dname: "Computer"}, {Dname: "Electrical"}, {Dname: "Electronics"}, {Dname: "Mechanical"}, {Dname: "Civil"}]);
//     }).then((Department)=>{
//         console.log(Department);
//     }).catch((err)=>{
//         console.error(err);
//     });

/*
console.9'
 async()=>{

 }
asynccall
 consl.og()
*/ 

   
//     sequelize.sync()
//         .then((result)=>{

//             let empName = req.body.Ename;
//             let empEmail = req.body.Eemail;

//             console.log(empName);
//             console.log(empEmail);

//             return Employee.create({Ename:`${empName}`, Eemail: `${empEmail}`});
//         }).then(employee=>{
//             console.log(employee);
//         })
//         .catch((err)=>{
//             console.log("Failed to insert data!!!\n"+err);
//             res.send("Failed to insert data...")
//         })
 

// .then((result)=>{
//     console.log(req.body.Dname);
//     var deptName = req.body.Dname;
//     Department.create({Dname: `${deptName}`});
// })
// .catch((err)=>{
//     console.log("Failed to insert data!!!\n"+err);
//     return res.send("Failed to insert data...");
// })