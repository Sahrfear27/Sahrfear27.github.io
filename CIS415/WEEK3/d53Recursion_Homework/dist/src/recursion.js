// import { type } from "os";
export { sumTo, factorial, fibonacci, outputListLoop, outputList, reverseList, reverseListLoop, sumTreeValues };
function sumTo(n) {
    // case 1
    if (n == 1) {
        return 1;
    }
    else {
        return n + sumTo(n - 1);
    }
}
function factorial(n) {
    if (n === 0) {
        return 1;
    }
    else {
        return n * factorial(n - 1);
    }
}
function fibonacci(n) {
    if (n === 0) {
        return 0;
    }
    else if (n === 1) {
        return 1;
    }
    else {
        return fibonacci(n - 1) + fibonacci(n - 2);
    }
}
let list = {
    value: 1,
    next: {
        value: 2,
        next: {
            value: 3,
            next: {
                value: 4,
                next: null
            }
        }
    }
};
list;
// Using iterator
function outputListLoop(list) {
    let result = "";
    let current = list;
    while (current !== null) {
        // Get the value
        result += current.value + " ";
        // Set the current to current the next
        current = current.next;
    }
    console.log(result.trim());
    return result.trim() + " printed to console";
}
// Recursive approach
function outputList(list) {
    // Base case: Check if the first node is empty
    if (list === null) {
        return "";
    }
    else {
        // Add the current value with the result of the current recursive call
        let result = list.value + " " + outputList(list.next);
        console.log(list.value);
        return result.trim();
    }
}
function reverseList(list) {
    // Base case: Check if the first node is empty
    if (list === null) {
        return "";
    }
    else {
        // Add the result of the current recursive call to the current value
        let result = reverseList(list.next) + " " + list.value;
        console.log(list.value);
        return result.trim();
    }
}
function reverseListLoop(list) {
    let result = "";
    let current = list;
    while (current !== null) {
        // Get the value
        result += current.value + " ";
        // Set the current to current the next
        current = current.next;
    }
    // Put the string into a list
    let resultArray = result.split(" ");
    // Reverse the array
    let reverseArray = resultArray.reverse();
    // Put the reverse array back into a string
    let newResult = reverseArray.join(" ");
    console.log(newResult.trim());
    return newResult.trim() + " printed to console";
}
// const tn3 = { value: 3, left: null, right: null };
// const tn5 = { value: 5, left: null, right: null };
// const tn4 = { value: 4, left: null, right: null };
// const tn2 = { value: 2, left: tn4, right: tn5 };
// const binaryTree = { value: 1, left: tn2, right: tn3 };
function sumTreeValues(node) {
    // Base case
    if (node === null) {
        return 0;
    }
    else {
        // Add the current node value with the sum of the values of it left and right
        return (node.value + sumTreeValues(node.left) + sumTreeValues(node.right));
    }
}
