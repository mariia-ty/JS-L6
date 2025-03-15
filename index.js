// const math = require('./math');
// console.log(math.add(1, 2));


// import { add, multiply } from "./math";
// console.log(add(2, 3));
// console.log(multiply(2, 5));

// import { add } from "./math";
document.getElementById("btn").addEventListener("click", async () => {
    const { add } = await import("./math");
    console.log("5 + 7 = ", add(5, 7));
    
})