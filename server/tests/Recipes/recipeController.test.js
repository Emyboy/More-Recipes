/* eslint-disable no-undef */
import chai from 'chai';
import chaiHTTP from 'chai-http';
chai.use(chaiHTTP);
import app from '../../src';





describe('testing recipe controllers',()=>{
	it('should post a new recipe each time',(done)=>{
		const newRecipe = {
			// UserId : 1,
			ingredient : 'fartzz',
			about : 'never eat this food',
			imageurl : 'www.google.com'
		};
		chai.request(app).post('/api/recipes')
			.send(newRecipe).end((err,res)=>{
				res.should.not.exist(err);
				res.should.have.status(200);
				res.body.should.be.a('object');
			});
		done();
	});

	// REMEMBER TO RUN UPDATE RECIPE TEST

	it('should delete a recipe by recipe id',(done)=>{
		const id = 6;
		chai.request(app)
			.del(`recipes/${id}`)
			.end((error ,res)=>{
				res.should.have.status(200);
				res.body.should.have.property('message').eql(`Recipe ${id} was deleted`);
				res.body.should.be.a('object');
			});
		done();
	});

	it('should get all recipes from the database',(done)=>{
		chai.request(app).get('/api/recipes')
			.end((error,res)=>{
				res.should.have.status(200);
				res.body.should.a('object');
			});
		done();
	});
});