const isEmpty = document.getElementById("app").childNodes.length
// function validate(){
//     if (document.getElementById('remember').checked){
//         console.log("checked")
//     }else{
//     console.log("Unchecked")
//     }
// }    

if (isEmpty == 1) {
    document.querySelector('#app').insertAdjacentHTML('beforeend', `<div class="full-width"><h1>Vul eerst je voorkeuren in</h1></div><div class="card-loading"></div><div class="card-loading"></div><div class="card-loading"></div>`)
}

const vegetarian = document.getElementById('vegetarian')
const student = document.getElementById('student')
const healthy = document.getElementById('healthy')
// function Submit() {
//     event.preventDefault()
//     const fname = document.getElementById("fname").value
//     const vegetarian = 
//     // const points = document.getElementById("points").value
//     // const persons = document.getElementById("aantalMensen").value
    
//     fetch(`https://api.spoonacular.com/recipes/random?number=3&tags=${fname},dinner&apiKey=dabe659634cb4253ae5f4f1a393456f3`)
//     .then((response) => {
//     return response.json()
//     })
//     .then((data) => {
//         console.log(data)
//         const html = data.recipes.map (data => {
//             return `<div class="card"><div class="card-head"><img src="${data.image}" alt="recipe image" class="card-image"></div><div class="card-title"><h1>${data.title}</h1><div class="flex-info"><p class="icon-text"><i class="fas fa-clock"></i> ${data.readyInMinutes}m</p><p class="icon-text"><i class="fas fa-users"></i> ${data.servings}</p></div><a href="${data.sourceUrl}" class="link">Bekijk Recept</a></div></div>`
//         });
//         const app = document.getElementById('app')
//         app.innerHTML = ""
//         document.querySelector('#app').insertAdjacentHTML('beforeend', html)
//     })
// }


// 'https://api.spoonacular.com/recipes/random&apiKey=a840e03e4ca140dfb16812ea490c8007'
// 'https://api.spoonacular.com/recipes/search?instructionsRequired=true?limitLicense=true?query=yogurt&apiKey=a840e03e4ca140dfb16812ea490c8007'

function Submit() {
    event.preventDefault()
    const fname = document.getElementById("fname").value

    // const points = document.getElementById("points").value
    // const persons = document.getElementById("aantalMensen").value
    if (vegetarian.checked == true){
        fetch(`https://api.spoonacular.com/recipes/random?number=3&tags=${fname},vegetarian,dinner&apiKey=dabe659634cb4253ae5f4f1a393456f3`)
        .then((response) => {
        return response.json()
        })
        .then((data) => {
            console.log(data)
            const html = data.recipes.map (data => {
                return `<div class="card"><div class="card-head"><img src="${data.image}" alt="recipe image" class="card-image"></div><div class="card-title"><h1>${data.title}</h1><div class="flex-info"><p class="icon-text"><i class="fas fa-clock"></i> ${data.readyInMinutes}m</p><p class="icon-text"><i class="fas fa-users"></i> ${data.servings}</p></div><a href="${data.sourceUrl}" class="link">Bekijk Recept</a></div></div>`
            });
            const app = document.getElementById('app')
            app.innerHTML = ""
            document.querySelector('#app').insertAdjacentHTML('beforeend', html)
            console.log("vegetarian pizza")
    })
    }else{
        fetch(`https://api.spoonacular.com/recipes/random?number=3&tags=${fname},dinner&apiKey=dabe659634cb4253ae5f4f1a393456f3`)
        .then((response) => {
        return response.json()
        })
        .then((data) => {
            console.log(data)
            const html = data.recipes.map (data => {
                return `<div class="card"><div class="card-head"><img src="${data.image}" alt="recipe image" class="card-image"></div><div class="card-title"><h1>${data.title}</h1><div class="flex-info"><p class="icon-text"><i class="fas fa-clock"></i> ${data.readyInMinutes}m</p><p class="icon-text"><i class="fas fa-users"></i> ${data.servings}</p></div><a href="${data.sourceUrl}" class="link">Bekijk Recept</a></div></div>`
            });
            const app = document.getElementById('app')
            app.innerHTML = ""
            document.querySelector('#app').insertAdjacentHTML('beforeend', html)
            console.log("meat pizza")
    }
        )}
}

