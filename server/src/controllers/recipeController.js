/* eslint-disable indent */
'use strict';
import { Recipe } from '../../models';
import { Review } from '../../models';


/**
 * @class - RecipeController
 * @description - This class handles the CRUD operations of a recipe
 */
export default class RecipeController {

	/**
     * @description - This method send a post request to add a recipe
     */
	static postRecipe(req,res){
        Recipe.create(req.body)
        .then(recipe=>{
            res.send(recipe);
        })
        .catch(err=>{
            res.send(err);
        });
    }
    
    static updateRecipe(req,res){
        Recipe.update({
            ingredient : req.body.ingredient
        },{
            where : {id:req.params.recipeid}
        }).then(update=>res.send(update))
        .catch(err=>res.send(err));
    }

    static deleteRecipe(req,res){
        Recipe.destroy({
            where : {
                id : req.params.recipeid
            }
        })
        .then(()=>res.send({message:`Recipe ${req.params.recipeid} was deleted`}))
        .catch(err=>res.send(err));
    }

    static getAllRecipe(req,res){
        Recipe.findAll()
        .then(recipe=>res.send(recipe))
        .catch(err=>res.send(err));
    }

    static addRecipeReview(req,res){
        Review.create(req.body)
        .then(review=>res.send(review))
        .catch(err=>res.send(err));
    }
}