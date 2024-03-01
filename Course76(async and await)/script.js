// async function getData() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve(455)
//         }, 10000);
//     })
// }
async function getData() {
    let x = await fetch('https://jsonplaceholder.typicode.com/todos/1')
    let data = await x.json()
      console.log(data)
      return 455;
}

async function main() {
    console.log("Loading modules")

    console.log("Do something else")

    let data = await getData()

    console.log(data)

    console.log("Process Data")
    console.log("task 2")
}

main()

// data.then((v) => {
//     console.log(data)

//     console.log("Process Data")
//     console.log("task 2")
// })