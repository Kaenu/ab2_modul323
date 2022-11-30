const studentGrades = [
    { name: 'Joe', grade: 88 },
    { name: 'Jen', grade: 94 },
    { name: 'Steph', grade: 77 },
    { name: 'Allen', grade: 60 },
    { name: 'Gina', grade: 54 },
];

const gradeLetter = (grade) => {
    if (grade >= 90) return 'a';
    if (grade >= 80) return 'b';
    if (grade >= 70) return 'c';
    if (grade >= 60) return 'd';
    return 'f';
}

const gradeComment = (name, grade) => `Nice Job ${name}, you got an ${gradeLetter(grade)}`;

const studentFeedback = studentGrades.map(student => gradeComment(student.name, student.grade));

console.log(studentFeedback);

const r = require('./ramda.min.js');
const array = ["Messi", "Neymar", "Vinicius"];
const prefixFunction = r.curry((prefix, item) => prefix + item);
const prefixedArray = r.map(prefixFunction('Meine Lieblingsspieler sind: '), array);
console.log(prefixedArray);

// Impure function
function arrayLength(array) {
    return array.length;
}

// Pure function
function arrayLength(array) {
    let length = 0;
    for (let i = 0; i < array.length; i++) {
        length++;
    }
    return length;
}