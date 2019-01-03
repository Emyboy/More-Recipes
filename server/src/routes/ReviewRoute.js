import reviewController from '../controllers/reviewController';
const {  addReview  } = reviewController;
import express from 'express';
const reviewRoute = express.Router();


reviewRoute.post('/review',addReview);


export default reviewRoute;