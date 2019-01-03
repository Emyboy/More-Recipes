import routeTable from './rootRoute.js';
const pageDisplay = document.getElementById('root');



const renderPage = ()=>{
    if (!routeTable[window.location.hash]) routeTable[window.location.hash] = pageDisplay.innerHTML;
    pageDisplay.innerHTML = routeTable[window.location.hash] || routeTable[''];
};


window.addEventListener('hashchange', renderPage);
window.addEventListener('load', renderPage);