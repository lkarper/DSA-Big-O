// 0(1); function takes same amount of time to complete, regardless of input
function isEven(value) {
    if (value % 2 === 0) {
        return true;
    }

    return false;
}

// O(n^2) polynomial time - nested for loops max runtime = n^2; though this function may break early if result found early
// This also assumes that the arrays are the same length.  If they aren't, maximum run time = (arr1.length * arr2.length) = n;
function areYouHere(arr1, arr2) {
    for (let i = 0; i < arr1.length; i++) {
        const el1 = arr1[i];
        for (let j = 0; j < arr2.length; j++) {
            const el2 = arr2[j];
            if (el1 === el2) return true;
        }
    }
    return false;
}

// O(n); linear time - function loops n time, where n = array.length
function doubleArrayValues(array) {
    for (let i = 0; i < array.length; i++) {
        array[i] *= 2;
    }
    return array;
}

// 0(n); linear time - function loops maximum of n times, where n = array.length; may break early if item is discovered early
function naiveSearch(array, item) {
    for (let i = 0; i < array.length; i++) {
        if (array[i] === item) {
            return i;
        }
    }
}

// O(n^2 / 2 - n / 2) - polynomial time
function createPairs(arr) {
    for (let i = 0; i < arr.length; i++) {
        for(let j = i + 1; j < arr.length; j++) {
            console.log(arr[i] + ", " +  arr[j] );
        }
    }
}

// Fibonacci linear function (O(n)), where n = num
function compute(num) {
    let result = [];
    for (let i = 1; i <= num; i++) {

        if (i === 1) {
            result.push(0);
        }
        else if (i === 2) {
            result.push(1);
        }
        else {
            result.push(result[i - 2] + result[i - 3]);
        }
    }
    return result;
}

// O(log(n)) logarithmic time - the dataset is halved with every search
function efficientSearch(array, item) {
    let minIndex = 0;
    let maxIndex = array.length - 1;
    let currentIndex;
    let currentElement;

    while (minIndex <= maxIndex) {
        currentIndex = Math.floor((minIndex + maxIndex) / 2);
        currentElement = array[currentIndex];

        if (currentElement < item) {
            minIndex = currentIndex + 1;
        }
        else if (currentElement > item) {
            maxIndex = currentIndex - 1;
        }
        else {
            return currentIndex;
        }
    }
    return -1;
}

// O(1) function will always run the same length of time
function findRandomElement(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
}

// Determines if a number is a prime number; O(n)
function isWhat(n) {
    if (n < 2 || n % 1 !== 0) {
        return false;
    }
    for (let i = 2; i < n; ++i) {
        if (n % i === 0) return false;
    }
    return true;
}

// O(2^n -1), where n = numDisks
const towerOfHanoi = (numDisks) => {
    const rodA = [];
    const rodB = [];
    const rodC = [];
    for (let i = numDisks; i > 0; i--) {
        rodA.push(i);
    }

    console.log(rodA, rodB, rodC);
    const towerIteration = (rodA, rodB, rodC, justMoved = 0) => {
        let a = rodA[rodA.length - 1] || 0;
        let b = rodB[rodB.length - 1] || 0;
        let c = rodC[rodC.length - 1] || 0;
        if (rodB.length === numDisks || rodC.length === numDisks) {
            console.log(rodA, rodB, rodC);
        }

        if (justMoved !== a && a !== 0 && (rodB.length === 0 || a < b)) {
            let move = rodA.pop();
            rodB.push(move);
            console.log(rodA, rodB, rodC);
            towerIteration([...rodA], [...rodB], [...rodC], move);
        } else if (justMoved !== a && a !== 0 &&(rodC.length === 0 || a < c)) {
            let move = rodA.pop();
            rodC.push(move);
            console.log(rodA, rodB, rodC);
            towerIteration([...rodA], [...rodB], [...rodC], move);
        } else if (justMoved !== b && b !== 0 && (rodC.length === 0 || b < c)) {
            let move = rodB.pop();
            rodC.push(move);
            console.log(rodA, rodB, rodC);
            towerIteration([...rodA], [...rodB], [...rodC], move);
        } else if (justMoved !== b && b !== 0 && (rodA.length === 0 || b < a)) {
            let move = rodB.pop();
            rodA.push(move);
            console.log(rodA, rodB, rodC);
            towerIteration([...rodA], [...rodB], [...rodC], move);
        } else if (justMoved !== c && c !== 0 &&(rodA.length === 0 || c < a)) {
            let move = rodC.pop();
            rodA.push(move);
            console.log(rodA, rodB, rodC);
            towerIteration([...rodA], [...rodB], [...rodC], move);
        } else if (justMoved !== c && c !== 0 && (rodB.length === 0 || c < b)) {
            let move = rodC.pop();
            rodB.push(move);
            console.log(rodA, rodB, rodC);
            towerIteration([...rodA], [...rodB], [...rodC], move);
        }        
    }

    towerIteration(rodA, rodB, rodC);
}

