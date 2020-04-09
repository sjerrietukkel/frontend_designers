const isEmpty = document.getElementById("app").childNodes.length
const vegetarian = document.getElementById('vegetarian')
const student = document.getElementById('student')
const gezond = document.getElementById('healthy')

var loaderPlaceholder = document.getElementById('loader-placeholder')

const loader = () => {
  sanitize()
  const markup =
    `<p class="center">Recepten worden opgehaald!</p><div class="lds-ring" id="loader"><div></div><div></div><div></div><div></div></div>`
    loaderPlaceholder.insertAdjacentHTML("afterbegin", markup)
}

const sanitize = () => {
    loaderPlaceholder.innerHTML = ''
}

const error = () => {
    sanitize()
    const errorMessage = `<p class="error">Er ging iets fout, probeer het later nog een keer</p>`
    loaderPlaceholder.insertAdjacentHTML("afterbegin", errorMessage)
}

if (isEmpty == 1) {
    document.querySelector('#app').insertAdjacentHTML('beforeend', `<div class="full-width"><h1>Vul eerst je voorkeuren in</h1></div><div class="card-loading"></div><div class="card-loading"></div>`)
}


function Submit() {
    event.preventDefault()
    if (vegetarian.checked == true & student.checked == false & gezond.checked == false){
        loader()
        fetch(`https://api.spoonacular.com/recipes/random?number=3&tags=vegetarian,dinner&apiKey=dabe659634cb4253ae5f4f1a393456f3`)
        .then((response) => {
        return response.json()
        })
        .then((data) => {
            console.log(data)
            const html = data.recipes.map (data => {
                return `<div class="card"><div class="card-head"><img src="${data.image}" alt="recipe image" class="card-image"></div><div class="card-title"><h1>${data.title}</h1><div class="flex-info"><p class="icon-text"><i class="fas fa-clock"></i> ${data.readyInMinutes}m</p><p class="icon-text"><i class="fas fa-users"></i> ${data.servings}</p></div><div class="instructions">${data.instructions}</div><div><a class="preview">instructies</a><a href="${data.sourceUrl}" class="link">Bekijk Recept</a></div></div></div>`
            });
            const app = document.getElementById('app')
            const titleText = `<h1 class="results">Resultaten voor: vegetarisch</h1>`
            app.innerHTML = ""
            document.querySelector('#app').insertAdjacentHTML('beforeend', html)
            document.querySelector('#app').insertAdjacentHTML('afterbegin', titleText)
            console.log("vegetarian")
            sanitize()
            const preview = document.querySelectorAll('.preview')
            console.log(preview)
            preview.forEach(function (preview){
                preview.addEventListener('click', function () {
                    var instructions = document.querySelector('.instructions')
                    if (instructions.classList) {
                        instructions.classList.toggle("instructions-shown")
                    } else {
                    }
                })
            })
    }).catch(err => {
        console.error(err) 
        error()
        return Promise.resolve(3)
    })
    }else if(vegetarian.checked == true & student.checked == true & gezond.checked == false) {
        fetch(`https://api.spoonacular.com/recipes/random?number=3&tags=vegetarian,dinner&apiKey=dabe659634cb4253ae5f4f1a393456f3`)
        .then((response) => {
        return response.json()
        })
        .then((data) => {
            console.log(data)
            const html = data.recipes.map (data => {
                return `<div class="card"><div class="card-head"><img src="${data.image}" alt="recipe image" class="card-image"></div><div class="card-title"><h1>${data.title}</h1><div class="flex-info"><p class="icon-text"><i class="fas fa-clock"></i> ${data.readyInMinutes}m</p><p class="icon-text"><i class="fas fa-users"></i> ${data.servings}</p></div><div class="instructions">${data.instructions}</div><div><a class="preview">instructies</a><a href="${data.sourceUrl}" class="link">Bekijk Recept</a></div></div></div>`
            });
            const app = document.getElementById('app')
            app.innerHTML = ""
            const titleText = `<h1 class="results">Resultaten voor: vegetarisch & student</h1>`
            document.querySelector('#app').insertAdjacentHTML('beforeend', html)
            document.querySelector('#app').insertAdjacentHTML('afterbegin', titleText)
            console.log("vegetarian student")
            sanitize()
            const preview = document.querySelectorAll('.preview')
            console.log(preview)
            preview.forEach(function (preview){
                preview.addEventListener('click', function () {
                    var instructions = document.querySelector('.instructions')
                    if (instructions.classList) {
                        instructions.classList.toggle("instructions-shown")
                    } else {
                    }
                })
            })
    }).catch(err => {
        console.error(err) 
        error()
        return Promise.resolve(3)
    })
    }else if(vegetarian.checked == true & student.checked == true & gezond.checked == true) {
        loader()
        fetch(`https://api.spoonacular.com/recipes/random?number=3&tags=vegetarian,dinner&apiKey=dabe659634cb4253ae5f4f1a393456f3`)
        .then((response) => {
        return response.json()
        })
        .then((data) => {
            console.log(data)
            const html = data.recipes.map (data => {
                return `<div class="card"><div class="card-head"><img src="${data.image}" alt="recipe image" class="card-image"></div><div class="card-title"><h1>${data.title}</h1><div class="flex-info"><p class="icon-text"><i class="fas fa-clock"></i> ${data.readyInMinutes}m</p><p class="icon-text"><i class="fas fa-users"></i> ${data.servings}</p></div><div class="instructions">${data.instructions}</div><div><a class="preview">instructies</a><a href="${data.sourceUrl}" class="link">Bekijk Recept</a></div></div></div>`
            });
            const app = document.getElementById('app')
            const titleText = `<h1 class="results">Resultaten voor: vegetarisch, student & gezond</h1>`
            app.innerHTML = ""
            document.querySelector('#app').insertAdjacentHTML('beforeend', html)
            document.querySelector('#app').insertAdjacentHTML('afterbegin', titleText)
            console.log("vegetarian student gezond")
            sanitize()
            const preview = document.querySelectorAll('.preview')
            console.log(preview)
            preview.forEach(function (preview){
                preview.addEventListener('click', function () {
                    var instructions = document.querySelector('.instructions')
                    if (instructions.classList) {
                        instructions.classList.toggle("instructions-shown")
                    } else {
                    }
                })
            })
    }).catch(err => {
        console.error(err) 
        error()
        return Promise.resolve(3)
    })
    }else if(vegetarian.checked == true & student.checked == false & gezond.checked == true) {
        loader()
        fetch(`https://api.spoonacular.com/recipes/random?number=3&tags=vegetarian,dinner&apiKey=dabe659634cb4253ae5f4f1a393456f3`)
        .then((response) => {
        return response.json()
        })
        .then((data) => {
            console.log(data)
            const html = data.recipes.map (data => {
                return `<div class="card"><div class="card-head"><img src="${data.image}" alt="recipe image" class="card-image"></div><div class="card-title"><h1>${data.title}</h1><div class="flex-info"><p class="icon-text"><i class="fas fa-clock"></i> ${data.readyInMinutes}m</p><p class="icon-text"><i class="fas fa-users"></i> ${data.servings}</p></div><div class="instructions">${data.instructions}</div><div><a class="preview">instructies</a><a href="${data.sourceUrl}" class="link">Bekijk Recept</a></div></div></div>`
            });
            const app = document.getElementById('app')
            const titleText = `<h1 class="results">Resultaten voor: vegetarisch & gezond</h1>`
            app.innerHTML = ""
            document.querySelector('#app').insertAdjacentHTML('beforeend', html)
            document.querySelector('#app').insertAdjacentHTML('afterbegin', titleText)
            console.log(" vegetarisch gezond")
            sanitize()
            const preview = document.querySelectorAll('.preview')
            console.log(preview)
            preview.forEach(function (preview){
                preview.addEventListener('click', function () {
                    var instructions = document.querySelector('.instructions')
                    if (instructions.classList) {
                        instructions.classList.toggle("instructions-shown")
                    } else {
                    }
                })
            })
    }).catch(err => {
        console.error(err) 
        error()
        return Promise.resolve(3)
    })
    }else if(vegetarian.checked == false & student.checked == true & gezond.checked == true) {
        loader()
        fetch(`https://api.spoonacular.com/recipes/random?number=3&tags=vegetarian,dinner&apiKey=dabe659634cb4253ae5f4f1a393456f3`)
        .then((response) => {
        return response.json()
        })
        .then((data) => {
            console.log(data)
            const html = data.recipes.map (data => {
                return `<div class="card"><div class="card-head"><img src="${data.image}" alt="recipe image" class="card-image"></div><div class="card-title"><h1>${data.title}</h1><div class="flex-info"><p class="icon-text"><i class="fas fa-clock"></i> ${data.readyInMinutes}m</p><p class="icon-text"><i class="fas fa-users"></i> ${data.servings}</p></div><div class="instructions">${data.instructions}</div><div><a class="preview">instructies</a><a href="${data.sourceUrl}" class="link">Bekijk Recept</a></div></div></div>`
            });
            const app = document.getElementById('app')
            const titleText = `<h1 class="results">Resultaten voor: student & gezond</h1>`
            app.innerHTML = ""
            document.querySelector('#app').insertAdjacentHTML('beforeend', html)
            document.querySelector('#app').insertAdjacentHTML('afterbegin', titleText)
            console.log(" student gezond")
            sanitize()
            const preview = document.querySelectorAll('.preview')
            console.log(preview)
            preview.forEach(function (preview){
                preview.addEventListener('click', function () {
                    var instructions = document.querySelector('.instructions')
                    if (instructions.classList) {
                        instructions.classList.toggle("instructions-shown")
                    } else {
                    }
                })
            })
    }).catch(err => {
        console.error(err) 
        error()
        return Promise.resolve(3)
    })
    }else if(vegetarian.checked == false & student.checked == true & gezond.checked == false) {
        loader()
        fetch(`https://api.spoonacular.com/recipes/random?number=3&tags=vegetarian,dinner&apiKey=dabe659634cb4253ae5f4f1a393456f3`)
        .then((response) => {
        return response.json()
        })
        .then((data) => {
            console.log(data)
            const html = data.recipes.map (data => {
                return `<div class="card"><div class="card-head"><img src="${data.image}" alt="recipe image" class="card-image"></div><div class="card-title"><h1>${data.title}</h1><div class="flex-info"><p class="icon-text"><i class="fas fa-clock"></i> ${data.readyInMinutes}m</p><p class="icon-text"><i class="fas fa-users"></i> ${data.servings}</p></div><div class="instructions">${data.instructions}</div><div><a class="preview">instructies</a><a href="${data.sourceUrl}" class="link">Bekijk Recept</a></div></div></div>`
            });
            const app = document.getElementById('app')
            const titleText = `<h1 class="results">Resultaten voor: student</h1>`
            app.innerHTML = ""
            document.querySelector('#app').insertAdjacentHTML('beforeend', html)
            document.querySelector('#app').insertAdjacentHTML('afterbegin', titleText)
            console.log(" student")
            sanitize()
            const preview = document.querySelectorAll('.preview')
            console.log(preview)
            preview.forEach(function (preview){
                preview.addEventListener('click', function () {
                    var instructions = document.querySelector('.instructions')
                    if (instructions.classList) {
                        instructions.classList.toggle("instructions-shown")
                    } else {
                    }
                })
            })
    }).catch(err => {
        console.error(err) 
        error()
        return Promise.resolve(3)
    })
    }else if(vegetarian.checked == false & student.checked == false & gezond.checked == true) {
        loader()
        fetch(`https://api.spoonacular.com/recipes/random?number=3&tags=vegetarian,dinner&apiKey=dabe659634cb4253ae5f4f1a393456f3`)
        .then((response) => {
        return response.json()
        })
        .then((data) => {
            console.log(data)
            const html = data.recipes.map (data => {
                return `<div class="card"><div class="card-head"><img src="${data.image}" alt="recipe image" class="card-image"></div><div class="card-title"><h1>${data.title}</h1><div class="flex-info"><p class="icon-text"><i class="fas fa-clock"></i> ${data.readyInMinutes}m</p><p class="icon-text"><i class="fas fa-users"></i> ${data.servings}</p></div><div class="instructions">${data.instructions}</div><div><a class="preview">instructies</a><a href="${data.sourceUrl}" class="link">Bekijk Recept</a></div></div></div>`
            });
            const app = document.getElementById('app')
            const titleText = `<h1 class="results">Resultaten voor: gezond</h1>`
            app.innerHTML = ""
            document.querySelector('#app').insertAdjacentHTML('beforeend', html)
            document.querySelector('#app').insertAdjacentHTML('afterbegin', titleText)
            console.log(" gezond")
            sanitize()
            const preview = document.querySelectorAll('.preview')
            console.log(preview)
            preview.forEach(function (preview){
                preview.addEventListener('click', function () {
                    var instructions = document.querySelector('.instructions')
                    if (instructions.classList) {
                        instructions.classList.toggle("instructions-shown")
                    } else {
                    }
                })
            })
    }).catch(err => {
        console.error(err) 
        error()
        return Promise.resolve(3)
    })
    }else{
        loader()
        fetch(`https://api.spoonacular.com/recipes/random?number=3&tags=dinner&apiKey=dabe659634cb4253ae5f4f1a393456f3`)
        .then((response) => {
        return response.json()
        })
        .then((data) => {
            console.log(data)
            const html = data.recipes.map (data => {
                return `<div class="card"><div class="card-head"><img src="${data.image}" alt="recipe image" class="card-image"></div><div class="card-title"><h1>${data.title}</h1><div class="flex-info"><p class="icon-text"><i class="fas fa-clock"></i> ${data.readyInMinutes}m</p><p class="icon-text"><i class="fas fa-users"></i> ${data.servings}</p></div><div class="instructions">${data.instructions}</div><div><a class="preview">instructies</a><a href="${data.sourceUrl}" class="link">Bekijk Recept</a></div></div></div>`
            });
            const app = document.getElementById('app')
            app.innerHTML = ""
            const titleText = `<h1 class="results">Resultaten voor: alles</h1>`
            document.querySelector('#app').insertAdjacentHTML('beforeend', html)
            document.querySelector('#app').insertAdjacentHTML('afterbegin', titleText)
            console.log("no input")
            sanitize()
            const preview = document.querySelectorAll('.preview')
            console.log(preview)
            preview.forEach(function (preview){
                preview.addEventListener('click', function () {
                    var instructions = document.querySelector('.instructions')
                    if (instructions.classList) {
                        instructions.classList.toggle("instructions-shown")
                    } else {
                    }
                })
            })
        }
    )}
}


// 'https://api.spoonacular.com/recipes/random&apiKey=a840e03e4ca140dfb16812ea490c8007'
// 'https://api.spoonacular.com/recipes/search?instructionsRequired=true?limitLicense=true?query=yogurt&apiKey=a840e03e4ca140dfb16812ea490c8007'
