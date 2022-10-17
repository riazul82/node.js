const promiseFunc = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve('resolved!');
        }, 1000);
    });
}

const myFunc = async (callback) => {
    const res = await promiseFunc();
    console.log(res);
    callback();
}

const callMeLater = () => {
    console.log('bye!bye!');
}

myFunc(callMeLater);