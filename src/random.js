//Makes a random selection from an array

const selection = (arr) =>{
    const randIdx = Math.floor(Math.random() * arr.length);
    return arr[randIdx];
}

export { selection };
