let __WC_DEFAULT_PREFIX__ = "wc";

const parseCSS = css => {
  const regex = /(\w+[-]?\w+)(?:[:][\s]?)([aA-zZ0-9\-()\s]+)(?:[;])/g;
  let styles = {};
  let m;
  while ((m = regex.exec(css)) !== null) {
    m.shift();
    let [key, val] = [...m];
    Object.assign(styles, { [key]: val });
    // This is necessary to avoid infinite loops with zero-width matches
    if (m.index === regex.lastIndex) regex.lastIndex++;
    // The result can be accessed through the `m`-variable.
  }
  return styles;
};

function JSXRenderer(element, props, ...children) {
  if (typeof element === 'function') {
    return element({ ...props, children });
  }
  //console.log(element, props);
  let el = document.createElement(element);
  //console.log(el)
  if (props) {
    for (let key of Object.keys(props)) {
      let eventName = key.match(/^on([A-Z]\w+)$/);
      if (eventName) {
        el.addEventListener(eventName[1].toLowerCase(), props[key]);
        //el[eventName[0].toLowerCase()] = props[key];
        console.dir(el);
      } else {
        el.setAttribute(key, props[key]);
      }
    }
  }

  for(let child of children) {
    el.appendChild(
      child instanceof HTMLElement 
      ? child 
      : document.createTextNode(child)
    );
  }

  return el;
}

class Component extends HTMLElement {
    constructor() {
      super();
      //This is the shadow root, where you append everything
      this.attachShadow({ mode: 'open' });
      // Initalize the css
      this._css = ``;
      // This is the `wrapper` or container for the Component
      this.ctx = document.createElement('template');
      this.styleCtx = document.createElement('style');
      //this.context.classList.add('root');
      
      this.styled = (t, v = []) => {
        t.forEach((s, i) => { this.css += s + (v[i] || '') });
        Object.assign(this.style, parseCSS(this.css));
      };
      this.style.display = "block"
    }
    set css(v) {
      this._css = v.replace(/([\\][n])?([\s]+)+/g, " ");
    }
    get css() {
      return this._css;
    }
    connectedCallback() {
      this.styleCtx.textContent = this.styleTag() || '';
      this.shadowRoot.appendChild(this.styleCtx);

      let el = this.render();
      if(typeof el === "string") this.ctx.innerHTML = el;
      else this.ctx.content.appendChild(el);
      this.shadowRoot.appendChild(document.importNode(this.ctx.content, true))
    }
    render() { }
    styleTag() {}
    setState(obj){
      Object.assign(this.state, obj);
    }
  }
  
  const Register = components => Object.keys(components).forEach( component => {
    let tokens = component.split(/([A-Z]\w+)/g).map(s=>s.toLowerCase());
    tokens = tokens.slice(1,tokens.length-1)
    if(tokens.length === 1) {
      tokens.unshift(__WC_DEFAULT_PREFIX__);
    }
    let name = tokens.join("-");
    customElements.define(name, components[component])
  });

  HTMLElement.prototype.styled = function() {
    console.dir(this);
  }

  export default Component;
  export {
    Component,
    JSXRenderer,
    Register,
    __WC_DEFAULT_PREFIX__,
  };