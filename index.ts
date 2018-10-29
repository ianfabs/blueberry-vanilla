//Node Modules

//Stylesheets
import './css/main.css';
//Components/WC Defs
import HelloWorld from './components/HelloWorld.wc.js';
import Card from './components/Card.wc.js';
import NavBar from './components/NavBar.wc.js';

//Globals
const root = (html = ``) => {
    const app = document.querySelector("#app");
    
    return {
        append(el:Element){
            app.appendChild(el);
        },
        afix(el:string){
            app.innerHTML += el;
        },
        render(){
            app.innerHTML = html;
        }
    }
}
//Define all elements
customElements.define('hello-world', HelloWorld);
customElements.define('blue-card', Card);
customElements.define('blue-nav', NavBar);

//Different methods for "rendering" that I came up with
//This is the pure javascript implementation, which prevents the
//  need for /direct/ DOM manipulation. But, methinks this is lack the
//  ability to specify attributes
//root().append(new NavBar);

//This method uses innerHTML, and the += concatenation operation to append the element
//root().afix(`<blue-card></blue-card>`);

//The all new render method!

root(`
    <blue-nav></blue-nav>
    <blue-card></blue-card>
`).render();