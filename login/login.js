const API_URL = 'http://ec2-18-184-55-200.eu-central-1.compute.amazonaws.com';

const form = document.querySelector('form');

const inputVardas = document.querySelector('input[name="vardas"]');
const inputPassword = document.querySelector('input[name="password"]');
const button = document.querySelector('button');


const errorAlert = document.querySelector('.alert--error');
const successAlert = document.querySelector('.alert--success');

form.addEventListener('submit', (e) => {
    e.preventDefault(); //sustabdome default veikimas
    const formData = createInputObject(); //sukuriamas input objektas
    const formDataString = JSON.stringify(formData); // reiksme padarome stringu
    login(formDataString); //ivyksta registracija su pries tai pateitais duomenimis
});

function createInputObject() {
    const formData = {
        name: inputVardas.value,
        password: inputPassword.value
    };
    return formData; // grazina name; surname email stringus
}

async function login(formDataString) { // async leidzia naudot.funkcijos aprasymas
    errorAlert.style.display = 'none'; //erro elemento stiliu keiciame
    successAlert.style.display = 'none';

    const responseObject = await fetch(API_URL + '/login', { //kreipimasis i serveri
        method: 'POST', // galesi issiusti i serveri body
        headers: {
            'Content-type': 'application/json' //siuntinio informacija json formatu
        },
        body: formDataString // siuntinys
    });

    if (responseObject.ok) { //
        successAlert.style.display = 'block';
    } else {
        errorAlert.style.display = 'block';
    }
};







// const API_URL = "http://ec2-18-184-55-200.eu-central-1.compute.amazonaws.com";
const token = "Bearer 91|L8FXjBLca6FB8x0ZmvGEivbnuDpkzbpyOY2di1ja";

async function skelbimas(token) {
    const responseObject = await fetch(API_URL + "/api/products", {
        method: "GET",
        headers: {
            Authorization: token
        }
    });
    const getData = await responseObject.json()
    console.log(getData)
};

async function newAdd(token) {
    const responseObject = await fetch(API_URL + "/api/products", {
        method: "POST",
        headers: {
            'Content-type': 'application/json',
            Authorization: token
        },

        body: JSON.stringify({
            name: "Grietine",
            thumbnail: "link",
            price: '10'
        }),

    });
    const getData = await responseObject.json()
    console.log(getData)
}

skelbimas(token)
newAdd(token)