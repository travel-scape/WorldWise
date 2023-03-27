// const form = document.querySelector('.form')
// document.createElement('form');

 //form.addEventListener('click', event => {
  //   event.preventDefault();
 //})

// const submit = document.querySelector('.submit')
// document.createElement('submit');

// submit.addEventListener('click', event => {
//     event.preventDefault();
    
// })


// fetch('https://reqres.in/api/users')
//   .then(response => {
//     if (!response.ok) {
//       throw new Error('Network response was not ok');
//     }
//     return response.json();
//   })
//   .then(data => {
//     console.log(data);
//   })
//   .catch(error => {
//     console.error('Error fetching data:', error);
//   });
const myModalEl = document.getElementById('modal')
myModalEl.addEventListener('show.bs.modal', event => {
  // do something...
})



const body = document.body;
async function getData() {
  try {
    const response = await fetch('https://reqres.in/api/users');
    const data = await response.json();

    console.log(`Email: ${data.data[0].email}, Name: ${data.data[0].first_name}`);
    let text = document.createElement('p');
    text.innerText = `Email: ${data.data[0].email}, Name: ${data.data[0].first_name}`;
    body.appendChild(text);
  } catch (error) {
    console.error(error);
  }
}

getData();

async function getInfo(){

}

fetch('https://restcountries.com/v3.1/all')
.then((response) => response.json())
.then((data) => console.log(data))