/**
 * @class - ErrorHandler
 */

export default class ErrorHandler{
	/**
	 * @description - This method handles request errors
	 * @param error
	 * @param response
	 */
	static sendResponseError(error,response){
		response.send({
			alert : 'Soemthing went wrong please try again',
			message : 'failed',
			error
		});
	}
}
