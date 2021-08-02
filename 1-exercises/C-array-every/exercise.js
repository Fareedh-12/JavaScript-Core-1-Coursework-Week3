/*
   This program should check if the array `group` contains only students
*/

var students = ["Omar", "Austine", "Dany", "Swathi", "Lesley"];
var group = ["Austine", "Dany", "Swathi", "Daniel"];

function checkForMentors(a){
  check = group.includes(a);
  return check;
} 

var groupIsOnlyStudents =  students.some(checkForMentors); // complete this statement

if (groupIsOnlyStudents) {
  console.log("The group does not contain only students");
} else {
  console.log("The group contains only students");
}

/* EXPECTED RESULT */

// The group does not contain only students
