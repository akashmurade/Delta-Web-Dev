// Callback Hell
// let h1 = document.querySelector('h1');

// function changeColor(color, delay, nextColorChange) {
//     setTimeout(() => {
//         h1.style.color = color;
//         if(nextColorChange) nextColorChange();
//     }, delay);
// }

// changeColor('green', 1000, () => {
//     changeColor('yellow', 1000, () => {
//         changeColor('red', 1000)
//     })
// })

// Promises
// let h1 = document.querySelector('h1');
// function changeColor(color, delay) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             h1.style.color = color;
//             resolve('color changed');
//         }, delay);
//     });
// };

// changeColor('red', 1000)
// .then(() => {
//     console.log('red color');
//     return changeColor('orange', 1000);
// })
// .then(() => {
//     console.log('orange color');
//     return changeColor('green', 1000);
// })
// .then(() => {
//     console.log('green color');
// })

// Load Script using promises

// function loadScript(src) {
//     return new Promise((resolve, reject) => {
//         let script = document.createElement('script');
//         script.src = src;
//         let loaded = true;
//         script.onload = () => {
//             console.log('in onload');
//             loaded = true;
//             resolve('Successfully loaded');
//         };
//         script.onerror = () => {
//             console.log('in onerror');
//             if(!loaded) {
//                 console.log('in if of onerror');
//                 reject('Not loaded');
//             }
//         };
//         document.head.appendChild(script);
//     })
// }

// let prom = loadScript('https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js')
// .then((resolve) => {
//     return resolve;
// })
// .catch((reject) => {
//     return reject;
// })

// console.dir(prom);

// Async function
// async function greet() {
//     return 'hello';
// }


// greet()
// .then((result) => {
//     console.log('promise was resolved');
//     console.log('result was : ', result);
// })
// .catch((err) => {
//     console.log('error was err: ', err);
// })

// let demo = async () => {
//     return 'demo';
// }

// ChangeColor using await
let h1 = document.querySelector('h1');
function changeColor1s(color) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            h1.style.color = color;
            resolve();
        }, 1000);
    })
}

async function rgb() {
    await changeColor1s('red');
    await changeColor1s('green');
    changeColor1s('blue');
}
