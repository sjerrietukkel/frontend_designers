// fetch('https://api.spoonacular.com/recipes/search'+'/information?apiKey=7e3b86996dc644bdb57b338e8adec93f')
//   .then((response) => {
//     return response.json();
//   })
//   .then((data) => {
//     console.log(data);
//   });

// const dotenv = require('dotenv')
// const title = document.getElementById('title')
// const apiKey = dotenv.config

// console.log(dotenv)
  

fetch('https://api.spoonacular.com/recipes/search?instructionsRequired=true?limitLicense=true?query=yogurt&apiKey=a840e03e4ca140dfb16812ea490c8007')
.then((response) => {
return response.json()
})
.then((data) => {
    console.log(data)
    const html = data.results.map (data => {
        return `<div class="card"><h1>${data.title}</h1><img src="https://spoonacular.com/recipeImages/${data.imageUrls[0]}" alt="recipe image" class="card-image"></div>`
    }) ;
    // console.log(html)
    document.querySelector('#app').insertAdjacentHTML('beforeend', html)
})




