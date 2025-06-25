
console.log("Start");

setTimeout(() => {
    console.log("✔️ Data ready");
}, 0);

Promise.resolve().then(() => {
    console.log("Loading...");
});

console.log("Done");