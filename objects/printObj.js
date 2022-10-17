let obj = {
    name: 'meaw',
    age: 2,
    nature: {
        sleep: 16,
        eat: ['fish', 'milk', 'meat'],
        like: {
            hunt: 'mouse',
            climb: 'trees'
        }
    }
}

console.log(JSON.stringify(obj));
console.log(JSON.stringify(obj, null, 4)); // indent: 4 

console.dir(obj, { depth: 1 });
console.dir(obj, { depth: null });

console.log('%o', obj);