const language = document.getElementById('language')
const currency = document.getElementById('currency')
const capital = document.getElementById('capital')
const dropdown = document.getElementById('myDropdown')
const submitButn = document.getElementById('submitButton')
const input = document.getElementById('myInput')
const container = document.getElementById('container')
const flag = document.getElementById('flag')
const population = document.getElementById('population')
const countryName = document.getElementById('country-name')
const googleMaps = document.getElementById('google-maps')

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
    console.log("Input not valid")
    // to do- stop modal from opening
  } else {
    capital.innerText += ` ${data[0].capital}`
  

    for(val in data[0].languages){


      if(data[0].languages[val].length > 1){
        language.innerText += ` ${data[0].languages[val]}`
        
      } else {
        language.innerText += data[0].languages[val]
      }
    }
    // language.innerText = language.innerText.slice(0, -1);

    
    for(val in data[0].currencies){
      console.log(data[0].currencies[val].name);

      if (data[0].currencies[val].length > 1) {
      currency.innerText += ` ${data[0].currencies[val].name} `;
    } else {
      currency.innerText += ` ${data[0].currencies[val].name}, ${data[0].currencies[val].symbol}`;
    }
  }
  // currency.innerText = currency.innerText.slice(0, -1);


  population.innerText += ` ${data[0].population}`


    for (val in data[0].flags) {
      flag.src = data[0].flags['png']

    }
    
    countryName.innerText += ` ${data[0].name.official}`


    googleMaps.src += data[0].maps.googleMaps
    console.log(data[0].maps.googleMaps);

    }
  }


 submitButn.addEventListener('click', submitClickEvent)
 input.addEventListener('click', myFunction)
 input.addEventListener('keyup', filterFunction)
 
 



