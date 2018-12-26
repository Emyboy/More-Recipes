import express from 'express';
const rootRoute = express.Router();
import recipeRoute from './recipeRoute';


rootRoute.use(recipeRoute);


export default rootRoute;