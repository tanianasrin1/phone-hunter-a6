const details = document.getElementById('search-details')
const searchPhnone = () => {
    const searchInput = document.getElementById('search-phone')
    const searchInputValue = searchInput.value
    const errrInput = document.getElementById('error')
  
    if(searchInputValue == ''){
      errrInput.innerText = 'please Enter The value'
      searchInput.value = ''
      details.innerHTML= ''
    }

    else if(searchInputValue <= 0){
      errrInput.innerText = 'please Enter The  valid Input' 
      searchInput.value = ''
      details.innerHTML= ''
    }  
    
    
    
    else{
      const url = ` https://openapi.programming-hero.com/api/phones?search=${searchInputValue}`
      fetch(url)
      .then(res => res.json())
      .then(data => displaysearchphone(data.data))
      details.innerHTML= ''
      searchInput.value = ''
      error.innerHTML = ''
      
    }
    
  
}

const displaysearchphone = (phones) => {
 
    const searchResult = document.getElementById('search-result')
    const limitData = phones.slice(0,20)
    searchResult.innerHTML = ''
    limitData.forEach(phone => {
        // console.log(phone)
        const div = document.createElement('div')
        div.classList.add('col-lg-4')
        div.classList.add('mt-5')
        div.innerHTML =` 
        <div class="card" style="width: 18rem;">
  <img src="${phone.image}" class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">${phone.phone_name}</h5>
    <p class="card-text">${phone.brand}</p>
    <button onclick = "loadphoneDetails('${phone.slug}')" class="btn btn-primary">Details</button>
   
  </div>
</div>
        `
        
        searchResult.appendChild(div) 
    })

}

const loadphoneDetails = phoneId => {
  // console.log(phoneId)
  const url = `https://openapi.programming-hero.com/api/phone/${phoneId}`
  fetch(url)
  .then(res => res.json())
  .then(data => displayphoneData(data.data))
  
}

const displayphoneData = features => {
  // console.log(features)
  const details = document.getElementById('search-details')
  details.innerHTML = ''
  console.log(details)
  const div = document.createElement('div')
  div.innerHTML = `
  <div class="card mt-4 mx-auto" style="width: 18rem;">
  <img src="${features.image}" class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">${features.name}</h5>
    <h5 class="card-title">${features.releaseDate ? features.releaseDate:'No Result Found'}</h5>
    <h6> MainFeatures </h6>
    <p class="card-text">Storage: ${features.mainFeatures.storage}</p>
    <p> DisplaySixe: ${features.mainFeatures.displaySize}</p>
    <p> Chipset: ${features.mainFeatures.chipSet}</p>
    <p> Memory: ${features.mainFeatures.memory}</p>
    <h6> Others: </h6>
    <p> WLAN: ${features.others.WLAN}</p>
    <p> Bluetooth: ${features.others.Bluetooth}</p>
    <p> GPS: ${features.others.GPS}</p>
    <p> Radio: ${features.others.Radio}</p>
    <p> USB: ${features.others.USB}</p>
    <h6> sensors: </h6>
    <p>  ${features.mainFeatures.sensors[0]}</p>
    <p>  ${features.mainFeatures.sensors[1]}</p>
    <p>  ${features.mainFeatures.sensors[2]}</p>
    <p>  ${features.mainFeatures.sensors[3]}</p>
    <p>  ${features.mainFeatures.sensors[4]}</p>
    <p>  ${features.mainFeatures.sensors[5]}</p>
    <p>  ${features.mainFeatures.sensors[6]}</p>
  
  </div>
  </div> 
  `
  details.appendChild(div)
  
  
}