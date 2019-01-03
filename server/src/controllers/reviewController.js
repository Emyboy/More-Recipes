'use strict';
import { Reviews } from '../../models';




export default class ReviewController {

	static addReview(req,res){
		Reviews.create(req.body)
			.then(review=>{
				res.send(review);
			})
			.catch(err=>{
				res.send(err);
			});
	}
}