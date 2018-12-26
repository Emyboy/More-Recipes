import express from 'express';
const recipeRoute = express.Router();
import RecipeController from '../controllers/recipeController';
const {  postRecipe  } = RecipeController;


recipeRoute.post('/recipe',postRecipe);



export default recipeRoute;