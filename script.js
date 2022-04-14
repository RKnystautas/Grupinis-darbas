const modal = document.getElementById("myModal");

const btn = document.getElementById("myBtn");

const span = document.getElementsByClassName("close")[0];

btn.onclick = function() {
    modal.style.display = "block";
}

span.onclick = function() {
    modal.style.display = "none";
}

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}


























// formEl.addEventListener('submit', (event) => {
//     event.preventDefault();
//     const formData = userObject();
//     const formDataString = JSON.stringify(formData);
//     register(formDataString);
// });

// const API_URL = 'http://ec2-18-184-55-200.eu-central-1.compute.amazonaws.com'

// function userObject() {
//     console.log('iskviecia')
//     const userData = {
//         email: emailEl.value,
//         password: passwordEl.value
//     };
//     console.log(userData)
//     return userData;
// };

// async function register(formDataString) {
//     const responseObject = await fetch(API_URL + '/login', {
//         method: 'POST',
//         headers: {
//             'Content-type': 'application/json'
//         },
//         body: formDataString
//     });
// }