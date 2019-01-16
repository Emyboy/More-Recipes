import reviewController from '../controllers/reviewController';
const {  addReview,getReviewById,getAllReviews,updateAReview,deleteAReview  } = reviewController;
import express from 'express';
const reviewRoute = express.Router();


reviewRoute.post('/review',addReview);
reviewRoute.get('/review',getAllReviews);
reviewRoute.get('/review/:reviewid',getReviewById);
reviewRoute.put('/review/:reviewid',updateAReview);
reviewRoute.delete('/review/:reviewid',deleteAReview);

export default reviewRoute;