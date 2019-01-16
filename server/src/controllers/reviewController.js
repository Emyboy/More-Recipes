'use strict';
import { Reviews } from '../../models';
import ErrorHandler from '../helpers/errorHandler';
const { sendResponseError } = ErrorHandler;



export default class ReviewController {
	/**
	 * @description - This method adds a new recipe to the database
	 * @param req
	 * @param res
	 */
	static addReview(req,res){
		Reviews.create(req.body)
			.then(review=>{
				res.send({
					message : 'success',
					alert : 'Review Added',
					review
				});
			})
			.catch(err=>{
				sendResponseError(err, res);
			});
	}
	static getAllReviews(req,res){
		Reviews.findAll()
			.then(reviews=>{
				res.send({
					message : 'success',
					alert : null,
					reviews
				});
			})
			.catch(err=>{
				res.send({
					message : 'failed',
					alert  : 'Something went wrong',
					err
				});
			});
	}
	/**
	 * @description - This method gets one review by review id
	 * @param req
	 * @param res
	 */
	static getReviewById(req,res){
		Reviews.findOne({
			where : {
				id : req.params.reviewid
			}
		})
			.then(review=>{
				res.send({
					message : 'success',
					alert : null,
					review
				});
			})
			.catch(err=>{
				res.send({
					message : 'failed',
					alert : 'Something went wrong please try again',
					err
				});
			});
	}

	/**
	 * @description - This method updates a review
	 * @param req
	 * @param res
	 */
	static updateAReview(req,res){
		Reviews.update(req.body,{
			where : {
				id : req.params.reviewid
			}
		})
			.then(update=>{
				res.send({
					message : 'success',
					alert : 'Updated',
					update
				});
			})
			.catch(err=>{
				sendResponseError(err,res);
			});
	}

	static deleteAReview(req,res){
		Reviews.destroy({
			where : {
				id : req.params.reviewid
			}
		})
			.then(review=>{
				res.send({
					message : 'success',
					alert : 'Deleted',
					review
				});
			})
			.catch(err=>{
				sendResponseError(err,res);
			});
	}
}