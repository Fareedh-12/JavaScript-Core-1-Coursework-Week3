const traineeGrades = {
  tom: 20,
  george: 17,
  abdul: 19,
};

for(i in traineeGrades){
  if(traineeGrades[i]>18){
    console.log(`${i.toUpperCase()}` + " -" + `${traineeGrades[i]}`);
  }
}
// Prints
// TOM - 20
// ABDUL - 19