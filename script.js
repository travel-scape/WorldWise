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
const key = "zfZIu0ppELhFJLQ98TIe4mYGTObtJasg"

function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}
function change(e) {
  input.value = e.target.innerText
}


function filterFunction() {
  let input, filter, ul, li, a, i;
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
      option.addEventListener('click', change)
      option.innerText = el.name.official
      option.href = '#pageTop'
      dropdown.append(option)
    });
  })



//  fetch("https://restcountries.com/v3.1/all")
//    .then(response => response.json())
//  .then(data => {
//      console.log(data)
//    })


async function submitClickEvent() {
  const data = await fetch(`https://restcountries.com/v3.1/name/${input.value}?fullText=true`)
  .then(res => res.json())
  if (data.message === "Not Found") {
    console.log("Input not valid")
    // to do- stop modal from opening
  } else {
    currency.innerText = "Currency: "
    language.innerText = "Language: "
    capital.innerText = "Capital: "
    population.innerText = "Population: "
    // flagMoji.innerText = 'Flag: '
    let iso3166 = data[0].cca2
    // console.log(iso3166)
    const getWebcam = async (isoCode) => {
      let webcamData = await fetch(`https://api.windy.com/api/webcams/v2/list/country=${isoCode}?show=webcams:player&property=live&key=${key}`)
      let videoJSon = await webcamData.json()
      console.log(videoJSon.result)
      let videoTrue = videoJSon.result.webcams[0].player
       console.log(videoTrue)
      //for(let el in videoTrue){
        //if()
      //}

    }
    let video = await getWebcam(iso3166)
    console.log(video)
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
    
    countryName.innerText = data[0].name.official


    googleMaps.src += data[0].maps.googleMaps
    console.log(data[0].maps.googleMaps);

    }
  }


 submitButn.addEventListener('click', submitClickEvent)
 input.addEventListener('click', myFunction)
 input.addEventListener('keyup', filterFunction)
 
 


