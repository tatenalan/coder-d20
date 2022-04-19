import axios from 'axios';

axios.get('http://localhost:27017/api/products/625e5812cbca429421afd3f6', {})
    .then((response) => {
        console.log(response)
    })
    .catch((error) => {
        console.log(error)
    })
    .then(() => { console.log('END')})


// const data = {
//     aaa: 'Buy beers'
// }
// axios.post('https://jsonplaceholder.typicode.com/posts', 
// data, 
// {
//     params: {
//         name: 'r2'
//     },
//     headers: {
//         'Content-Type': 'application/json'
//     }  
// })
//     .then((response) => {
//         console.log(response)
//     })
//     .catch((error) => {
//         console.log(error)
//     })
//     .then(() => { console.log('END')})