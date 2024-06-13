// Testing API requests
// Hoppscoth
// Postman

// API Request example
let url = 'https://catfact.ninja/fact';
// let fet = fetch(url)
// .then((response) => {
//     return response.json();
// })
// .then((obj) => {
//     let p = document.createElement('p');
//         p.innerText = obj.fact;
//         document.body.appendChild(p);
// })
// .catch((err) => {
//     console.log(err);
// })

// Using async
// async function showFact() {
//     try {
//         let res = await fetch(url);
//         let data = await res.json();
//         console.log(data.fact);
//     }
//     catch(e) {
//         console.error('error: ',e);
//     }

// }

// Axios example
// async function showFact() {
//     try {
//         let res = await axios.get(url);
//         let p = document.querySelector('p');
//         p.innerText = res.data.fact;
//     }
//     catch(e) {
//         console.log(e);
//     }
// };

// let btn = document.querySelector('button');
// btn.addEventListener('click', () => {
//     showFact();
// })

// let url2 = 'https://dog.ceo/api/breeds/image/random';
// let btn = document.querySelector('button');
// btn.addEventListener('click', async function() {
//     let obj = await axios.get(url2);
//     let img = document.createElement('img');
//     img.setAttribute('src', obj.data.message);
//     img.classList.add('img');
//     document.querySelector('div').insertAdjacentElement('afterend', img);
// })

// let url3 = 'https://icanhazdadjoke.com/';
// let config = {headers: {Accept: 'application/json'}};
// async function getJokes() {
//     try {
//         let jokeObj = await axios.get(url3, config);
//         return jokeObj.data.joke;
//         // return jokePromise.data.joke;
        
//     } catch(err) {
//         console.log(err);
//         return 'Not found';
//     }
// }
// let p = document.querySelector('p');
// let btn = document.querySelector('button');
// btn.addEventListener('click', () => {
//     console.log(getJokes().then(res => {
//         p.innerText = res;
//     }));
// })

let url4 = 'http://universities.hipolabs.com/search?name=';

async function getColleges(search) {
    try{
        let res = await axios.get(url4+search);
        let output = [];
        for(let i = 0; i < res.data.length; i++) {
            output.push(res.data[i].name);
        }
        return output;
    } catch(e) {
        return [];
    }
}

let button = document.querySelector('button');
let input = document.querySelector('input');
let ul = document.querySelector('ul');

function createLi(str) {
    let li = document.createElement('li');
    li.innerText = str;
    ul.appendChild(li);
}

button.addEventListener('click', () => {
    ul.innerText = "";
    getColleges(input.value)
    .then((res) => {
        for(let i = 0; i < res.length; i++) {
            createLi(res[i]);
        }
    })
})