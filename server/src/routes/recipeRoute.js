import express from 'express';
const recipeRoute = express.Router();
import RecipeController from '../controllers/recipeController';
const {  postRecipe,updateRecipe,deleteRecipe,getAllRecipe,addRecipeReview  } = RecipeController;


recipeRoute.post('/recipes',postRecipe);
recipeRoute.put('/recipes/:recipeid',updateRecipe);
recipeRoute.delete('/recipes/:recipeid',deleteRecipe);
recipeRoute.get('/recipes',getAllRecipe);
recipeRoute.post('/recipes/:recipeid/reviews',addRecipeReview);


export default recipeRoute;