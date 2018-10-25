//Node Modules
import fs from 'fs';
//Stylesheets
import './css/main.css';
//Components/WC Defs
import HelloWorld from './components/HelloWorld.wc.js';
import Card from './components/Card.wc.js';
import NavBar from './components/NavBar.wc.js';

//Globals
const root = () => {
    const app = document.querySelector("#app");
    return {
        append(el:Element){
            app.appendChild(el);
        },
        afix(el:string){
            app.innerHTML += el;
        }
    }
}

customElements.define('hello-world', HelloWorld);
customElements.define('blue-card', Card);
customElements.define('blue-nav', NavBar);

root().afix(`<blue-nav></blue-nav>`);
root().afix(`<blue-card></blue-card>`);