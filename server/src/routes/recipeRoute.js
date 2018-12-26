import express from 'express';
const recipeRoute = express.Router();
import RecipeController from '../controllers/recipeController';
const {  postRecipe,updateRecipe,deleteRecipe  } = RecipeController;


recipeRoute.post('/recipe',postRecipe);
recipeRoute.put('/recipe/:recipeid',updateRecipe);
recipeRoute.delete('/recipe/:recipeid',deleteRecipe);



export default recipeRoute;