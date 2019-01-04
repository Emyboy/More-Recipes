import express from 'express';
const rootRoute = express.Router();
import recipeRoute from './recipeRoute';
import reviewRoute from './ReviewRoute';
import userRoute from './userRoute';


rootRoute.use(userRoute);
rootRoute.use(recipeRoute);
rootRoute.use(reviewRoute);


export default rootRoute;