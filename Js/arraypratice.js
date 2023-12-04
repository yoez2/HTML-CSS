
// let numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// for (let i = 0; i < numbers.length; i++) {
//     for (let j = 0; j <= numbers[i]; j++) {
//         if (j === numbers[i]) {
//             if (j % 2 === 0) {
//                 console.log(`${j} is even`);
//             } else {
//                 console.log(`${j} is odd`);
//             }
//         }
//     }
// }

// const prompt = require("prompt-sync")();
// let choice;

// do {
//   let user = [];

// for (let i = 0; i < 5; i ++) {
//   let newUser = prompt("Enter a 5 user: ");
//   user.push(newUser);
// }

// for (let i = 0; i < 4; i++) {
//   let newNumber = prompt("Enter a number 0 - 4: ");
//   if(newNumber >= 0 && newNumber <= 4) {
//     console.log(user[newNumber]);
//   } else {
//     console.log("Invalid choice");
//   }
// }
// choice = prompt("Do you want ot continue? yes/no: ");
// } while(choice === 'yes')




// const prompt = renter employee ID: ");
//     let date = prompt("Enter date: ");

//     console.log("\n\t EMPLOYEE MANAGEMENT SYSTEM  \n\t");
//     console.log("\n\t EMPLOYEE list  \n\t");
//     console.log("\n\t EMPLOYEE NAME:\tEMPLOYEEID:\tDATE:\n");
//     for (let i = 0; i < EMPLOYEE_NAME.LENGTH; i++) {
//         cvonsole.log(EMPLOYEE_NAME[i] + "\t\t" + EM[i] + EMPLOYEE_ID[i] + "\t\t" + DATE[i]);
//     }

// }quire("prompt-sync")();
// let choice;
// let EMPLOYEE_NAME = [];
// let EMPLOYEE_ID = [];
// let DATE = [];
// do {


//     let name = prompt("Enter employee name: ");
//     let id = prompt("E
const prompt = require("prompt-sync")(); 
 
 
let employees = []; 
 
function displayEmployeeList() { 
    console.log('\n\t\t\t\t\ EMPLOYEE MANAGEMENT SYSTEM\n'); 
    console.log('\t\t\t\t\tEMPLOYEE LIST'); 
    console.log('EMPLOYEE NAME:\tEMPLOYEE ID:\tDATE:\n'); 
 
    for (let i = 0; i < employees.length; i++) { 
        console.log(`${employees[i].name}\t\t${employees[i].id}\t\t${employees[i].date}`); 
    } 
 
    console.log('\n'); 
} 
 
 
function addEmployee() { 
    let name = prompt('Enter employee name: '); 
    let id = prompt('Enter employee ID: '); 
    let date = prompt('Enter date: '); 
 
    employees.push({ name, id, date }); 
    console.log('\nEmployee added successfully.\n'); 
} 
 
function removeEmployee() { 
    let idToRemove = prompt('Enter employee ID to remove: '); 
    employees = employees.filter(employee => employee.id !== idToRemove); 
    console.log('\nEmployee removed successfully.\n'); 
} 
 
 
function updateEmployee() { 
    let idToUpdate = prompt('Enter employee ID to update: '); 
    let index = employees.findIndex(employee => employee.id === idToUpdate); 
 
    if (index !== -1) { 
        let newName = prompt('Enter new employee name: '); 
        let newId = prompt('Enter new employee ID: '); 
        let newDate = prompt('Enter new date: '); 
 
        employees[index] = { name: newName, id: newId, date: newDate }; 
        console.log('Employee updated successfully.\n'); 
    } else { 
        console.log('Employee not found.\n'); 
    } 
} 
 
 
while (true) { 
    displayEmployeeList(); 
 
    console.log('1. ADD EMPLOYEE'); 
    console.log('2. REMOVE EMPLOYEE'); 
    console.log('3. UPDATE EMPLOYEE'); 
    console.log('4. EXIT'); 
 
    let choice = prompt('Enter number 1-4: '); 
 
    switch (choice) { 
        case '1': 
            addEmployee(); 
            break; 
        case '2': 
            removeEmployee(); 
            break; 
        case '3': 
            updateEmployee(); 
            break; 
        case '4': 
            console.log('Exiting Employee Management System.'); 
            process.exit(); 
        default: 
            console.log('Invalid choice. Please enter a number between 1 and 4.\n'); 
    } 
}