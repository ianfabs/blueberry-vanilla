//Node Modules
import {JSXRenderer, Register} from './src/lib/WC';
//Stylesheets
import './css/main.css';
//Components/WC Defs
import HelloWorld from './src/components/HelloWorld.wc.js';
import Card from './src/components/Card.wc.js';
import NavBar from './src/components/NavBar.wc.js';
import Router from './src/components/Router/Router.wc.js';
import Test from './src/components/Test.wc';

Register({Test});

//Pages
import { Home, About } from "./src/pages";

//Globals
const root = (selector) => {
    const app = document.querySelector(selector);
    
    return {
        append(el){
            app.appendChild(el);
        },
        afix(el){
            app.innerHTML += el;
        },
        render(html = ``){
            app.innerHTML = html;
        },
        el: app
    }
}
//Define all elements
customElements.define('hello-world', HelloWorld);
customElements.define('blue-card', Card);
customElements.define('blue-nav', NavBar);
//customElements.define('blue-test', Test);
customElements.define('blue-router', Router);
//define pages
customElements.define('blue-page-home', Home);
customElements.define('blue-page-about', About);

//Different methods for "rendering" that I came up with
//This is the pure javascript implementation, which prevents the
//  need for /direct/ DOM manipulation. But, methinks this is lack the
//  ability to specify attributes
//root().append(new NavBar);

//This method uses innerHTML, and the += concatenation operation to append the element
//root().afix(`<blue-card></blue-card>`);

//The all new render method!

root("#app").render(`
    <blue-nav></blue-nav>
`);
root("#app").append(new Router({
    '/' : <blue-page-home></blue-page-home>,
    '/about' : <blue-page-about></blue-page-about>
}));