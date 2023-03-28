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
// const myModalEl = document.getElementById('modal')
// myModalEl.addEventListener('show.bs.modal', event => {
//   // do something...
// })

const language = document.getElementById('language')
const currency = document.getElementById('currency')
const capital = document.getElementById('capital')

const name = document.getElementById('name')
const flag = document.getElementById('flag')
const holidays = document.getElementById('holidays')

// const body = document.body;
// async function getData() {
//   try {
//     const response = await fetch('https://reqres.in/api/users');
//     const data = await response.json();

//     console.log(`Email: ${data.data[0].email}, Name: ${data.data[0].first_name}`);
//     let text = document.createElement('p');
//     text.innerText = `Email: ${data.data[0].email}, Name: ${data.data[0].first_name}`;
//     body.appendChild(text);
//   } catch (error) {
//     console.error(error);
//   }
// }

// getData();

// async function getInfo(){

// }

// fetch('https://restcountries.com/v3.1/all')
// .then((response) => response.json())
// .then((data) => {
//   console.log(data);
//     language.innerText = data.language.languages
// })
// .catch(error => {
//       console.error(error);
//     })

// fetch( )


// async function fetchData() {
//   const fetchCall = await fetch("https://calendarific.com/api/v2/holidays?&api_key=B03b5f43ece1a5e993cd87fb017d2c5e06be6b22&country=US&year=2019")
//   const data = await fetchCall.json()
//   console.log(data) 
//   displayData(data);
// }

// fetchData();



// fetch('https://restcountries.com/v3.1/lang')
// .then((response) => response.json())
// .then((data) => {
//   console.log(data)

// })


// const form = document.querySelector('form');
// const input = document.querySelector('input');
// const languagesElement = document.querySelector('#languages');

submitButton.addEventListener('submit', async event => {
  event.preventDefault();
  const countryName = input.value;

  try {
    const response = await fetch(`https://flagsapi.com/BE/shiny/64.png`);
    flag.src = response;
    const data = await response.json();

    if (data.languages && data.languages.length > 0) {
      const languages = data.languages.map(lang => lang.name).join(', ');
      languagesElement.textContent = `Languages spoken in ${countryName}: ${languages}`;
    } else {
      languagesElement.textContent = `No information available about languages spoken in ${countryName}`;
    }
  } catch (error) {
    console.error(`Error fetching data for ${countryName}`, error);
    languagesElement.textContent = `An error occurred while fetching data for ${countryName}`;
  }
});


