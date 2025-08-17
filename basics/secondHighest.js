function findSecondLargest(arr) {
  if (arr.length < 2) {
    return "Array should have at least two elements."
  }

  let largest = -Infinity
  let secondLargest = -Infinity

  for (let i = 0; i < arr.length; i++) {
    let current = arr[i]

    if (current > largest) {
      secondLargest = largest
      largest = current
    } else if (current > secondLargest && current !== largest) {
      secondLargest = current
    }
  }

  if (secondLargest === -Infinity) {
    return "There is no second largest (all elements are same)."
  }

  console.log('second largest = ',secondLargest) 
}


findSecondLargest([1, 2, 3, 4, 5, 6])
findSecondLargest([22, 30 ,12, 100, 56])
findSecondLargest([50,40,27,39])
findSecondLargest([29, 48 ,56,76,82])