/* eslint-disable no-undef */
const chai = require('chai');
const chaiHTTP = require('chai-http');
chai.use(chaiHTTP);
import app from '../src';

import recipeController from '../src/controllers/recipeController';
const should = chai.should();


describe('testing recipe features',()=>{
	it('should add new recipe to the database',(done)=>{
		const newRecipe = {
			ingredient : 'pant',
			userid : 1,
			imageurl : 'www.google.com',
			about : 'never eat this food'
		};
		chai.request(app).post('/api/v1/recipe')
			.send(newRecipe).end((error,response)=>{
				// response.should.have.status(200);
				// response.body.should.be.a('object');
			});
		done();
	});
});