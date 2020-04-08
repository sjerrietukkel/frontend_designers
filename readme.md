# Frontend voor Designers
Daniel van der Schuur,
500733183

![Logo](/img/logo.png "Logo")

## Concept
Wat eten we vanavond? is een applicatie voor iedere werkende, ouder of student die helemaal klaar is met de meest gestelde vraag van Nederland. In de app vult hij/zij 3 simpele requirements in en de applicatie geeft bijbehorende recepten terug. Dut zuhb er 3 om de cognitieve load van het moeten kiezen te beperken. Binnen de app kunnen gebruikers snel scannen of het wat voort ze is door de prijs, aantal mensen en kookduur te bekijken. Ook kunnen ze een korte samenvatting van de kookinstrcuties bekijken. Voor het hele recept moeten ze echter naar de bijbehorende site navigeren. 

![Screenshot](/img/screenshot.png "Screenshot")

## API 
### Spoonacular Random Recipe API
Calls worden gedaan door de volgende url te fetchen:
```js
fetch(`https://api.spoonacular.com/recipes/random?number={Hoeveelheid}&tags={tags}&apiKey={******}`);
```

De Api geeft de volgende json terug:
```js
recipes: {
    0: {
        analyzedInstructions: ,
        author: ,
        cheap: ,
        creditsText: ,
        cuisines: ,
        dairyFree: ,
        diets: ,
        dishTypes: ,
        extendedIngredients: , 
        gaps: ,
        glutenFree: , 
        healthScore: ,
        id: ,
        image: ,
        imageType: ,
        instructions: ,
        license: ,
        lowFodmap: ,
        occasions: ,
        originalId: ,
        pricePerServing: ,
        readyInMinutes: ,
        servings: ,
        sourceName: ,
        sourceUrl: ,
        spoonacularScore: ,
        summary: ,
        sustainable: ,
        title: ,
        vegan: ,
        vegetarian:  ,
        veryHealthy: ,
        veryPopular: ,
        weightWatcherSmartPoints: ,
    }
}
```
 
Ik maak binnen het product gebruik van `image`, `readyInMinutes`, `vegetarian`, `title`, `price`, `veryHealthy` & `sourceUrl`.

### Limitaties binnen de API
Als gratis gebruiker van de api is de hoeveelheid calls die je per dag kan maken gelimiteerd naar 50, ik raad dan ook aan wanneer je deze app gebruikt zelf een key aan te vragen en deze als endpoint bijvoegen. 

## States & UI Events
Binnen het Design wordt de blank state weergegeven in de vorm van een skeleton frame en de text met instrcuties hoe de gebruikers content kunnen aanvragen.

![Skeleton](/img/skeletonframe.png "Skeleton")

De tweede state die in de applicatie zit is de loading state, deze zorgt ervoor dat de gebruiker de juiste feedback krijgt bij het aanvragen van data. De loading state laat zich zien als een loader van onder een seconde die wordt getriggerd wanneer de gebruiker het form verzend. 

### !! Image Loader !!


## Code
De code werkt als volgt: De gefetchde data wordt als json binnen de code opgeslagen, en hier mapt een `.then` overheen zodat de data asynchroon kan worden opgeroepen. De data voegt de requirements van de gebruiker in en de json wordt uitgelezen d.m.v. template literals die de volgende HTML code invoegen in de `#app` HTML div. 

```html
<div class="card">
    <div class="card-head">
        <img src="${data.image}" alt="recipe image" class="card-image">
    </div>
    <div class="card-title">
        <h1>${data.title}</h1>
        <div class="flex-info">
            <p class="icon-text"><i class="fas fa-clock"></i> ${data.readyInMinutes}m</p>
            <p class="icon-text"><i class="fas fa-users"></i> ${data.servings}</p>
        </div>
        <a href="${data.sourceUrl}" class="link">Bekijk Recept</a>
    </div>
</div>
```

Deze code wordt voor elk JSON object uitgevoerd en genereerd een kaart.

## Iteraties


## Future