/* eslint-disable indent */
import RenderDom from './pages/Render.js';
import home from './pages/Home.js';
import login from './pages/login.js';
import signup from './pages/signup.js';
import notFound from './pages/notFound.js';
import profile from './pages/profile.js';
import addRecipe from './pages/addRecipe.js';
import edit from './pages/crud.js';
import details from './pages/details.js';
const { Render } = RenderDom;


/**
 * @description - This function render only the home page
 */

(()=>{
	switch (window.location.pathname) {
		case '/':
			Render(home);
			break;
		default : Render(notFound);
	}
})();

/**
 * @description - This switches on window hash change and renders pages
 */
window.onhashchange = ()=>{
	switch (window.location.hash) {
		case '#login':
			Render(login);
			break;
		case '#signup':
			Render(signup);
			break;
		case '#profile':
			Render(profile);
			break;
		case '#recipe':
			Render(addRecipe);
			break;
		case '#edit':
			Render(edit);
			break;
		case '#recipe/details':
			Render(details);
			break;
		default : Render(notFound);
	}
};

