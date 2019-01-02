/* eslint-disable no-undef */
import chai from 'chai';
import app from '../../src/index';
import chaiHTTP from 'chai-http';
chai.use(chaiHTTP);



describe('tests for all review controllers',()=>{
    
	it('should add a review without errors',(done)=>{
		const newReview = {UserId:1,review:'i hate this recipe'};
		chai.request(app).post('/api/review')
			.send(newReview).end((err,res)=>{
				res.status.should.eql(200);
				res.should.not.exist(err);
				res.body.should.be.a('object');
			});
		done();
	});

});


