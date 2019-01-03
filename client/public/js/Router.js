import RenderDom from './pages/Render.js';
import home from './pages/Home.js';
import login from './pages/login.js';
import signup from './pages/signup.js';
import notFound from './pages/notFound.js';
const { Render  } = RenderDom;



(()=>{
	switch(window.location.pathname){
	case '/':
		Render(home);
		break;
	case '/login':
		Render(login);
		break;
	case '/signup':
		Render(signup);
		break;
	default : Render(notFound);
	}
})();