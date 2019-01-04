'use strict';
import { Users  } from '../../models';
import jwt from 'jsonwebtoken';

/**
 * @description - This classs hendles all the user's auth
 */

export default class UserController{

	/**
     * @description - This method signs a new user into the database
     * @param {object} req 
     * @param {object} res 
     */
	static signupUser(req,res){
		Users.create(req.body)
			.then(user=>{
				res.send({
					user,
					message : 'success',
					alert : 'Signed Up Sucessfully'
				});
			})
			.catch(err=>{
				res.send({
					err,
					message : 'failed',
					alert : 'Please Fill Out The Form'
				});
			});
	}
    

	/**
     * @description - This methods logs in a user
     * @param {object} req
     * @param {object} res
     */
	static loginUser(req,res){
		Users.findOne({
			where : {
				email : req.body.email
			}
		})
			.then(user=>{
				const token = jwt.sign({
					data: 'foobar'
				}, 'secret', { expiresIn: '1h' });
				res.send({
					user,token,
					message : 'success',
					alert : 'Success'
				});
			})
			.catch(err=>{
				res.send({
					message : 'failed',
					alert : 'Incorrect Username or Password',
					err
				});
			});
	}

	/**
     * @description - The method gets all the users
     * @param {object} req 
     * @param {object} res 
     */
    
	static getAllUsers(req,res){
		Users.findAll()
			.then(users=>{
				res.send(users);
			})
			.catch(err=>{
				res.send(err);
			});
	}

	static getUserById(req,res){
		Users.findOne({
			where : {
				id : req.params.userid
			}
		})
			.then(user=>{
				if(user=== null){
					res.send({
						message : 'failed',
						alert : 'No user found'
					});
				} else{
					res.send({
						user,
						message: 'success',
						alert: 'User was found',
					});
				}
				
			})
			.catch(err=>{
				res.send({
					err,
					message : 'failed',
					alert : 'Something went wrong please try again'
				});
			});
	}
    
	static deleteUser(req,res){
		Users.destroy({
			where : {
				id : req.params.userid
			}
		})
			.then(user=>{
				res.send({
					user,
					message : 'success',
					userid : req.params.userid,
					alert : 'Goodbye'
				});
			})
			.catch(err=>{
				res.send({
					err,
					message : 'failed',
					alert : 'Something went wrong please try again'
				});
			});
	}
}