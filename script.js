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
const continents = document.getElementById('continents')
const independent = document.getElementById('independent')
const flagDisplay = document.getElementsByClassName('flag-display')
const flagBtn = document.getElementById('flagBtn')


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


// fetch("https://restcountries.com/v3.1/all") 
//   .then(response => response.json())
//   .then(data => {
//     data.forEach(element => {
//       let image = document.createElement('img')
//       image.src = element.flags.png
//       image.classList = "flag-images"
//       flagDisplay[0].append(image)
//     })
//   });





fetch("https://restcountries.com/v3.1/all")
  .then(response => response.json())
  .then(data => {
    console.log(data)
    data.forEach(el => {
      let option = document.createElement('a')
      option.addEventListener('click',change)
      option.innerText = el.name.official
      option.href = '#pageTop'
      dropdown.append(option)
    });
  })



async function submitClickEvent() {
  const data = await fetch(`https://restcountries.com/v3.1/name/${input.value}?fullText=true`)
  .then(res => res.json())
  if (data.message === "Not Found") {
    console.log("Input not valid")
  } else {
    currency.innerText = "Currency: "
    language.innerText = "Language: "
    capital.innerText = "Capital: "
    population.innerText = "Population: "
    continents.innerText = "Continent: "
    independent.innerText = "Independent: "


    capital.innerText += ` ${data[0].capital}`;
  

    for(val in data[0].languages){


      if(data[0].languages[val].length > 1){
        language.innerText += ` ${data[0].languages[val]}`
        
      } else {
        language.innerText += data[0].languages[val]
      }
    }


    
    for(val in data[0].currencies){
        console.log(data[0].currencies[val].name);

        if (data[0].currencies[val].length > 1) {
          currency.innerText += ` ${data[0].currencies[val].name} `;
        } else {
          currency.innerText += ` ${data[0].currencies[val].name}, ${data[0].currencies[val].symbol}`;
        }
    } 



  population.innerText += ` ${data[0].population}`


    for (val in data[0].flags) {
      flag.src = data[0].flags['png']
    }
    
  countryName.innerText += ` ${data[0].name.official}`



  if (!data[0].independent) {
    independent.innerText += " No"
  } else {
    independent.innerText += " Yes"
  }


  continents.innerText += ` ${data[0].continents}`
  console.log(data[0].continents)

  }
}



 submitButn.addEventListener('click', submitClickEvent)
 input.addEventListener('click', myFunction)
 input.addEventListener('keyup', filterFunction)
 
 

//  flagBtn.addEventListener("click", () => {
//   displayingFlags()
//  });

//  function displayingFlags() {
//    document.querySelector(".flag-display").style.display = "block";
//    document.querySelector('#flagBtn').style.display = 'none';
  // document.querySelector("#flagBtn") = let flagMoving;
  // flagMoving.style.display = flex;
  // flagMoving.style.

 }