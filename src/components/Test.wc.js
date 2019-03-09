import WC from '../lib/WC';

export default class extends WC {
    constructor() {
        super();
        this.styled`
            color: blue;
            background: ghostwhite;
            border: 1px solid black;
        `;
    }
    static get observedAttributes() {
        return ['name'];
    }
    attributeChangedCallback(name, old, change) {
        console.log(old, change);
        this.innerText = change;
    }
    render() {
        return `
            Hello <slot></slot>
        `;
    }
}