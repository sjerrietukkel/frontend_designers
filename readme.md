# Frontend voor Designers
Daniel van der Schuur,
500733183

## Concept

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

## States & UI Events

## Code

## Iteraties