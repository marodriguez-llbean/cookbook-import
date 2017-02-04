class Recipe {
    constructor(recipe)
    {
        this.recipe = recipe;
    }

    convertToExplicit()
    {
        return [
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