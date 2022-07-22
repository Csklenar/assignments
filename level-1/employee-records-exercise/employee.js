var employees = [];
function Employee(name, jobTitle, salary, status = 'Full Time') {
  this.name = name;
  this.jobTitle = jobTitle;
  this.salary = salary;
  this.status = status;
  this.printEmployeeForm = function () {
     console.log(this.name + " " + this.jobTitle + " " + this.salary + " " + this.status);
  };
}

var corey = new Employee('Corey', 'Software Developer', '30/hr', Employee.status);

var nick = new Employee('Nick', 'Police Officer', '$23/hr', 'Part time');

var cortez = new Employee(
  'Cortez',
  'Supply Specialist',
  '$2,000/mo',
  'Contract'
);

corey.printEmployeeForm();
nick.printEmployeeForm();
cortez.printEmployeeForm();

employees.push(corey, nick, cortez);
console.log(employees);
