class WC extends HTMLElement{
    constructor(){
        super();
        //This is the shadow root, where you append everything
        this.attachShadow({mode: 'open'});
        // Initalize the css
        this._css = ``;
        // This is the `wrapper` or container for the Component
        this.ctx = document.createElement('template');
        this.styleCtx = document.createElement('style');
        //this.context.classList.add('root');
        const parseCSS = css => {
            const regex = /(\w+[-]?\w+)(?:[:][\s]?)([aA-zZ0-9\-()\s]+)(?:[;])/g;
            let styles = {};
            let m;
            while ((m = regex.exec(css)) !== null) {
                m.shift();
                let [key,val] = [...m];
                Object.assign(styles, {[key]: val});
                // This is necessary to avoid infinite loops with zero-width matches
                if (m.index === regex.lastIndex) regex.lastIndex++;
                // The result can be accessed through the `m`-variable.
            }
            return styles;
        };
        this.styled = (t, v=[]) => {
            t.forEach((s, i)=>{this.css+=s+(v[i]||'')});
            Object.assign(this.style, parseCSS(this.css));
        };
    }
    set css(v) {
        this._css = v.replace(/([\\][n])?([\s]+)+/g, " ");
    }
    get css() {
        return this._css;
    }
    connectedCallback() {
        //this.styleCtx.textContent = this.style() || '';
        //this.style
        //this.shadowRoot.appendChild(this.styleCtx);
        this.ctx.innerHTML = this.render();
        console.log(this.render());
        this.shadowRoot.appendChild( document.importNode(this.ctx.content, true) )
    }
    render(){}
}

export default WC;