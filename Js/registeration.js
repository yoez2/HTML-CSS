 const prompt = require('prompt-sync')();


 let users = {};
 let userCount = 0;
 const user_limit = 3;
 
 function loginOrRegister() {
     let choice;
     do {
         console.log("\n");
         console.log("Press 1 for login \nPress 2 for Registration")
         choice = parseInt(prompt(': '));
 
         if (choice === 1) {
             let userName = prompt('Enter your username: ');
             let passWord = prompt('Enter your password: ');
             if (users[userName] && users[userName] === passWord) {
                 console.log("Login Successful!");
             } else {
                 console.log("Invalid username or password");
             }
         } else if (choice === 2) {
             if (userCount < user_limit) {
                 let newUserName = prompt('Enter your name: ');
                 let newPassWord = prompt('Enter your password: ');
                 let confirmation = prompt("Confirm your password: ");
 
                 if (users[newUserName]) {
                     console.log('This username already exists!');
                 }
                 else if (newPassWord === confirmation) {
                     users[newUserName] = newPassWord;
                     userCount++;
                     console.log('Registration successful!');
                 } else {
                     console.log('Passwords do not match.');
                 }
 
             } else {
                 console.log('Maximum user limit reached.');
             }
         } else if (choice !== 0) {
             console.log('Invalid choice. Please try again.');
         }
         response = prompt("Do you want to check again? (yes/no): ");
 
     } while (response == 'yes');
 }
 
 loginOrRegister();