class Recipe {
    constructor(recipe)
    {
        this.recipe = recipe;
    }

    //need to switch from regular json objects to this explicit mode to handle
    //long properties which need to be excluded from the index (the instructions 
    //go over the 1500 byte limit).
    convertToExplicit()
    {
        return [
            {  name: 'Id', value: this.recipe.Id, },
            {  name: 'Name', value: this.recipe.Name, },
            {  name: 'CategoryName', value: this.recipe.CategoryName, },
            {  name: 'Description', value: this.recipe.Description, },
            {  name: 'Source', value: this.recipe.Source, },
            {  name: 'Instructions', value: this.recipe.Instructions, excludeFromIndexes: true },
            {  name: 'IngredientsSearchText', value: this.recipe.IngredientsSearchText, },
            {  name: 'Visible', value: this.recipe.Visible, },
            {  name: 'Ingredients', value: this.recipe.Ingredients, },
        ];
    }
}

module.exports = Recipe;
