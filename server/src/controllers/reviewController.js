'use strict';
// import { Reviews } from '../../models';




export default class ReviewController {

	static addReview(req,res){
		res.send(`review added => ${req.body.review}`);
	}
}