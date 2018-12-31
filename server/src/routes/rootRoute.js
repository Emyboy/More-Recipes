import express from 'express';
const rootRoute = express.Router();
import recipeRoute from './recipeRoute';
import reviewRoute from './ReviewRoute';


rootRoute.use(recipeRoute);
rootRoute.use(reviewRoute);


export default rootRoute;