class HelloWorld extends HTMLElement {
  constructor() {
    // Always call super first in constructor
    super();

    // Element functionality written in here
    var shadow = this.attachShadow({mode: 'open'});
    // Create spans
    var wrapper = document.createElement('span');
    wrapper.classList.add("wrapper");
    var text = this.getAttribute('text');
    console.log(text);
    wrapper.innerText = text;
    let style = document.createElement('style');
    style.textContent = `
      .wrapper{
        font-weight: bold;
        font-size: 2em;
      }
    `;
    shadow.appendChild(style);
    shadow.appendChild(wrapper);
  }
}


export default HelloWorld;