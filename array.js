let marks = [85, 90, 78, 92, 88];
let sum = 0;
for (let i = 0; i < marks.length; i++) {
    sum = sum + marks[i];
}
let avg = sum / marks.length;
console.log("Average marks: " + avg);