const language = document.getElementById('language')
const currency = document.getElementById('currency')
const capital = document.getElementById('capital')
const dropdown = document.getElementById('myDropdown')
const submitButn = document.getElementById('submitButton')
const input = document.getElementById('myInput')

// submitButton.addEventListener('submit', async event => {
//   event.preventDefault();
//   const countryName = input.value;

//   try {
//     const response = await fetch(`https://flagsapi.com/BE/shiny/64.png`);
//     flag.src = response;
//     const data = await response.json();

//     if (data.languages && data.languages.length > 0) {
//       const languages = data.languages.map(lang => lang.name).join(', ');
//       languagesElement.textContent = `Languages spoken in ${countryName}: ${languages}`;
//     } else {
//       languagesElement.textContent = `No information available about languages spoken in ${countryName}`;
//     }
//   } catch (error) {
//     console.error(`Error fetching data for ${countryName}`, error);
//     languagesElement.textContent = `An error occurred while fetching data for ${countryName}`;
//   }
// });

function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}
function change(e) {
  input.value = e.target.innerText
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
      option.addEventListener('click',change)
      option.innerText = el.name.official
      dropdown.append(option)
    });
  })


 fetch("https://restcountries.com/v3.1/all")
   .then(response => response.json())
 .then(data => {
     console.log(data)
   })


async function submitClickEvent() {
  const data = await fetch(`https://restcountries.com/v3.1/name/${input.value}?fullText=true`)
  .then(res => res.json())
  if (data.message === "Not Found") {
    console.log("not valid input")
  } else {
    console.log(data)
  }
    }
    


 submitButn.addEventListener('click', submitClickEvent)
 input.addEventListener('click', myFunction)
 input.addEventListener('keyup', filterFunction)
 
 



