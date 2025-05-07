function generateNRandom(n) {
    let randomNums = []
    for(let i = 0; i < n; i++) {
        randomNums.push(Math.floor(Math.random() * 10));
    }
    return randomNums;
}

function sum(elements) {
    return elements.reduce((acc, curr) => acc + curr, 0);
}

export {generateNRandom, sum};