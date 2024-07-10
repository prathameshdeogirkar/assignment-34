//Program to find the largest number from the array

const numbers = [12, 65, 4, 95, 63, 96, 33, 69, 10]
let largestNum = numbers[0]

for (const num of numbers) {

    if (num > largestNum) {
       largestNum = num

    }
}
console.log(largestNum);
