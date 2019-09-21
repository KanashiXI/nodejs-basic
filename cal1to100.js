let i = 0;
let sum = 0;
while (i <= 1000) {
    sum = sum + i;
    i++;
}
console.log(sum);

let student = {
    Id: "60113834",
    Name: "Panyapat",
    Major: "SWE"
};

console.log(student.Id);
console.log(student.Name);
student.Name = "Awatif";

console.log(student["Name"]);