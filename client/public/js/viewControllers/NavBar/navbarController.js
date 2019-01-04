import Render from '../../pages/Render.js';
import about from '../../pages/About.js';
const { Clear } = Render;

/**
 * @class - Navigation Controller
 * @description - This class handles the navigaioin
 */

export default class NavbarController {


	static aboutNavigation(){
		Clear();
		setTimeout(() => {
			Render(about);
		}, 1000);
	}
}
