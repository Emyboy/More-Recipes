const Render = require('./pages/Render');
const Home = require('./pages/Home');


(()=>{
	if(window.location.pathname === '/'){
		Render.renderHome(Home);
	}
})();