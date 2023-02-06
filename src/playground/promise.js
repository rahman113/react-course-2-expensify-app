const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    // resolve({
    //     name: "Andrew joseph Mead",
    //     age: 25,
    //     location: {
    //         city: "Philadelphia",
    //         country: "New Zealand"
    //     }
    // })
    reject("Something went wrong!")
  }, 5000)
})
console.log("Before");
promise.then((res) => {
  console.log("1", res);
}).catch((e) => {
  console.log("error", e);
})
// promise.then((res) => {
//     console.log("2", res);
// })
console.log("after");

let x = [1, 2, 3]

let y = [...x]

let z = x
x.push(4)
x[2] = 5
console.log(y);
console.log(z);

