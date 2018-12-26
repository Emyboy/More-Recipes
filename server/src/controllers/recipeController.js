/* eslint-disable indent */
'use strict';
import { Recipe } from '../../models';


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
}