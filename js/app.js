const searchPhnone = () => {
    const searchInput = document.getElementById('search-phone')
    const searchInputValue = searchInput.value
    searchInput.value = ''
    const url = ` https://openapi.programming-hero.com/api/phones?search=${searchInputValue}`
    fetch(url)
    .then(res => res.json())
    .then(data => displaysearchphone(data.data))
}

const displaysearchphone = (phones) => {
    const searchResult = document.getElementById('search-result')
    searchResult.innerHTML = ''
    phones.forEach(phone => {
        // console.log(phone.slug)
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
  .then(data => console.log(data.data.mainFeatures))
}

const displayphoneDeta