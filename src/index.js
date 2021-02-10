// write your code here

let allSpice

// ******** DOM ELEMENTS *********

const spiceImage = document.querySelector('#spice-images')
const spiceDetail = document.querySelector('#spice-blend-detail')
const spiceIngredients = document.querySelector('.ingredients-container')
const ingredientsForm = document.querySelector('#ingredient-form')
// ******** Event Listeners *********

spiceImage.addEventListener('click', spiceView)
ingredientsForm.addEventListener('submit', spiceForm)

const url = 'http://localhost:3000/spiceblends'

function fetchSpice(){
    fetch(url)
        .then(resp => resp.json())
        .then(spiceData => spiceData.forEach(spiceBar))
}


function spiceBar(spice){
    
    const spiceSpan = document.createElement('span')
    spiceSpan.setAttribute('spice-data-id', spice.id)
    const spiceImg = document.createElement('img')
    spiceImg.src = spice.image
    spiceImg.alt = spice.title

    
    spiceSpan.append(spiceImg)
    spiceImage.append(spiceSpan)
}


function spiceView(event){
    
const spiceId = event.target.parentElement.getAttribute('spice-data-id')
const spiceVal = parseInt(spiceId)

    fetch(`${url}/${spiceId}`)
        .then(resp => resp.json())
        // .then(data => allSpice = data)
        .then(spiceData => spiceInfo(spiceData))

        // console.log(spiceVal)
    
}


function spiceInfo(spice){



spiceDetail.innerHTML = ""
spiceDetail.innerHTML += `
<img class="detail-image" src="${spice.image}" alt="${spice.title}" />
<h2 class="title">${spice.title}</h2>
`

// const spiceLi = document.createElement('li')
// const spiceUl = document.querySelector('.ingredients-list')

// spiceIngredients.innerHTML = ""
// spiceIngredients.innerHTML += `<h4>Ingredients: ${spice.name}</h4>`

// spiceUl.append(spiceLi)

}

function spiceForm(event){

    event.preventDefault();
    console.log(event.target)
}


// fetch images 
fetchSpice()