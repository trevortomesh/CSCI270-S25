console.log("Start");

setTimeout(() => {
    console.log("Timer done")
}, 0);

Promise.resolve().then(() => {
    console.log("Promise Done");
});

console.log("End");