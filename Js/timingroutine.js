const prompt = require("prompt-sync")();
console.log('\n');

do {
  console.log("WAKE UP\ngo to morning class\nmorning break\nlunch\nevening class\nevening break\nclass off");
  console.log('\n');
  let routine = prompt("Enter your routine: ");
  let routineA;

  if (routine == "wake up") {
    routineA = '8:am';
  } else if (routine == "go to class")  {
    routineA = "9:am";
  } else if (routine == "morning break") {
    routineA = "10:30 am";
  } else if (routine == "lunch") {
    routineA = "1:pm";
  } else if (routine == "evening class") {
    routineA = "2:pm";
  } else if (routine == "evening break") {
    routineA = "3:30 pm";
  }else if(routine == "class off"){
    console.log("5:pm")
  }else{
    console.log("invalid time")
  }

  console.log('time:');
  console.log(routineA);
  response = prompt("Do you want to run it again? (yes/no): ");
  console.log('\n');

} while (response == 'yes');
