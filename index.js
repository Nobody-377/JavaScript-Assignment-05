// Create an array of numbers
let arr=[1,2,4,5,8,9]

// Start sum at 0 (we will add each number to this)
let sum = 0

// Loop through every element in the array
for(let i = 0; i<arr.length; i++){

    // Add the current element to the sum
    sum+= arr[i]
}
alert(sum)   //29