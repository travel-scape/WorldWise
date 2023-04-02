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
const webcamView = document.getElementById('view-webcam')
const key = "zfZIu0ppELhFJLQ98TIe4mYGTObtJasg"



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
    data.forEach(element => {
      // element.flags.png
      let image = document.createElement('img')
      image.src = element.flags.png
      image.classList = "flag-images"
      // flagDisplay.append(image)
      flagDisplay[0].append(image)
    })
  });





fetch("https://restcountries.com/v3.1/all")
  .then(response => response.json())
  .then(data => {
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
    // to do- stop modal from opening
  } else {
    countryName.innerText = ""
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
  


  let iso3166 = data[0].cca2
     console.log(iso3166)
     async function getWebcam (isoCode) {
      let webcamData = await fetch(`https://api.windy.com/api/webcams/v2/list/country=${isoCode}?show=webcams:player&property=live&key=${key}`)
      let videoJSon = await webcamData.json()
      console.log(videoJSon.result)
      
      if(videoJSon.result.total === 0){
        //for no results
        console.log("No webcam availiable")
      } else{
        let videoTrue = videoJSon.result.webcams[0].player.day.link
        console.log(videoTrue)

      }

       //console.log(videoTrue)

      //for(let el in videoTrue){
        //if()
      //}
      

    }

    webcamView.addEventListener('click', getWebcam(iso3166))

  }
}








 submitButn.addEventListener('click', submitClickEvent)
 input.addEventListener('click', myFunction)
 input.addEventListener('keyup', filterFunction)
 
 



