
// Imports the Google Cloud client library
const Datastore = require('@google-cloud/datastore');
const recipeData = require('./recipes.json');
const Recipe = require('./Recipe.js');

// Your Google Cloud Platform project ID
const projectId = 'cookbook-1180';

// Instantiates a client
const datastore = Datastore({
    projectId: projectId
});

// The kind for the new entity
const kind = 'Recipe';

recipeData.forEach(r => {
     const taskKey = datastore.key([kind, r.Id]);
     const recipeInstance = new Recipe(r);
     if(r.Instructions.length> 1500) {
         console.log(`Recipe: ${r.Name}`);
     }
     const dsRecipe = {
         key: taskKey,
         data: recipeInstance.convertToExplicit(),
     }
     datastore.upsert(dsRecipe).then(() => {
         console.log(`Saved ${dsRecipe.key.id}`);
     });
})