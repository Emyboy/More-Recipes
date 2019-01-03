
/**
 * @description - This is renders elements to the dom 
 */
const root = document.getElementById('root');

export default class RenderDom {

	static Render (element){
		root.innerHTML = element;
	}
	static Clear (){
		root.innerHTML = '<div></div>';
	}
}