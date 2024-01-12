// const fakeRequestCallBack = (url, success, failure) => {
//     const delay = Math.floor(Math.random() * 4500) + 5;
//     setTimeout(() => {
//         if (delay > 4000) {
//             failure('Conection Timeout:(')
//         } else {
//             success(`Here is your fake data from ${url}`)
//         }

//     }, delay);
// }

const fakeRequestPromise = (url) => {
    return new Promise((resolve, reject) => {
        const delay = Math.floor(Math.random() * 4500) + 5;
        setTimeout(() => {
            if (delay > 4000) {
                reject('Conection Timeout:(')
            } else {
                resolve(`Here is your fake data from ${url}`)
            }

        }, delay);
    })
}

// fakeRequestPromise('Books.com/1')
//     .then(() => {
//         console.log('it worked')
//         fakeRequestPromise('Books.com/2')
//             .then(() => {
//                 console.log('it worked again')
//             })
//             .catch(() => {
//                 console.log('it didnt worked, num2')
//                 fakeRequestPromise('Books.com/3')
//                     .then(() => {
//                         console.log('it worked gain amd again!!')
//                     })
//                     .catch(() => {
//                         console.log('not this time')
//                     })
//             })
//     })
//     .catch(() => {
//         console.log('it didnt worked')
//     })

fakeRequestPromise('https://swapi.dev/api/people/1')
    .then((data) => {
        console.log('it worked!! page 1')
        console.log(data)
        return fakeRequestPromise('Books.com/2')
    })
    .then((data) => {
        console.log('it worked!! page 2')
        console.log(data)
        return fakeRequestPromise('Books.com/3')
    })
    .then((data) => {
        console.log('it worked!! page 3')
        console.log(data)
    })
    .catch(() => {
        console.log('oh no, failed')
    })

