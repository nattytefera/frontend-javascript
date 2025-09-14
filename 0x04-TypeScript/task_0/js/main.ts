interface Student {
    firstName: string
    lastName: string
    age: number
    location: string
}

let student1: Student = {
    firstName: 'Economous',
    lastName: "John",
    age: 37,
    location: 'Newyork'
}

let student2: Student = {
    firstName: 'Harcourt',
    lastName: "Emily",
    age: 35,
    location: 'Newyork'
}

let studentsList: Student[] = [student1,student2]

const table = document.createElement("table");
const tableBody = document.createElement("tbody");

studentsList.forEach((student) => {
  const row = document.createElement("tr");

  const firstNameCell = document.createElement("td");
  firstNameCell.textContent = student.firstName;

  const locationCell = document.createElement("td");
  locationCell.textContent = student.location;

  row.appendChild(firstNameCell);
  row.appendChild(locationCell);
  tableBody.appendChild(row);
});

table.appendChild(tableBody);
document.body.appendChild(table);