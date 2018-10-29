class Component extends HTMLElement{
    constructor(){
        super();
        //This is the shadow root, where you append everything
        this.attachShadow({mode: 'open'});
        //This is the `wrapper` or container for the Component
        this.context = document.createElement('div');
        this.context.classList.add('root');
        this.cssTextContent = ``;
        this.css = (style_rules)=>{
            this.cssTextContent += style_rules;
        }
        //this.html = ``;
    }
    render(html){
        let style = document.createElement('style');
        style.textContent = this.cssTextContent;
        this.context.innerHTML = html;
        this.shadowRoot.appendChild(style);
        this.shadowRoot.appendChild(this.context);
    }
    toString(){
        return this.innerHTML;
    }
}

export default Component;