
/**
 * @description - This is renders elements to the dom 
 */
const root = document.getElementById('root');

export default class Render {

	static renderHome (element){
		root.innerHTML = element;
	}
}