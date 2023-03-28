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
const dropdown = document.getElementById('myDropdown')
const submitButn = document.getElementById('submitButton')
const input = document.getElementById('myInput')
function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}

function filterFunction() {
  var input, filter, ul, li, a, i;
  input = document.getElementById("myInput");
  filter = input.value.toUpperCase();
  div = document.getElementById("myDropdown");
  a = div.getElementsByTagName("a");
  for (i = 0; i < a.length; i++) {
    txtValue = a[i].textContent || a[i].innerText;
    if (txtValue.toUpperCase().indexOf(filter) > -1) {
      a[i].style.display = "";
    } else {
      a[i].style.display = "none";
    }
  }
}




  
  

fetch("https://restcountries.com/v3.1/all")
  .then(response => response.json())
  .then(data => {
    data.forEach(el => {
      let option = document.createElement('a')
      option.innerText = el.name.official
      dropdown.append(option)
    });
  })


 fetch("https://restcountries.com/v3.1/all")
   .then(response => response.json())
 .then(data => {
     console.log(data)
   })

 submitButn.addEventListener('click', submitClickEvent)
 input.addEventListener('click', myFunction)
 input.addEventListener('keyup', filterFunction)
 
 