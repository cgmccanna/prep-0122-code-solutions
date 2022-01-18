var person = {
  firstName: 'Finn',
  lastName: 'Ridley',
  hobby: 'fencing'
};
console.log(person);
var fullName = person.firstName + ' ' + person.lastName;
console.log('The person\'s name is:', fullName);
person.job = 'Pilot.';
console.log('The person\'s current job is:', person.job);
person.previousJob = 'Soldier.';
console.log('The person\'s previous job is:', person.previousJob);
console.log('The complete person object:', person);
