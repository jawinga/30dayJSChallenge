function map(arr, fn) {
  const result = []; // Initialize an empty array to store results

  for (let i = 0; i < arr.length; i++) {
    result[i] = fn(arr[i], i); // Apply fn to each element and store the result
  }

  return result; // Return the transformed array
}

// Example usage:
const arr = [1, 2, 3, 4];
const fn = (value, index) => value * 2 + index; // Example function

const transformedArray = map(arr, fn);
console.log(transformedArray); // Outputs: [2, 5, 8, 11]
