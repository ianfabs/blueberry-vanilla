import WC, {JSXRenderer} from '../lib/WC';


function Counter(props={}) {
    let state = {
        count: 0
    };

    let mutators = [];

    const setState = handler =>{
        state = handler(state);
        mutators.forEach(fn => fn(state));
    }

    const incrementCount = () => {
        setState(state => ({
            ...state,
            count: state.count+1 
        }))
    }

    let Button = () => {
        let button = (
            <button onClick={ incrementCount }>
                {state.count}
            </button>
        );

        mutators.push(state => button.innerText = state.count);

        return button;
    }

    return (
        <div>
            <Button/>
        </div>
    );
}

export default class extends WC {
    constructor() {
        super();

        this.state = {
            name: this.getAttribute('name'),
            counter: 0
        }
        //Event handlers need to bind!
    }
    static get observedAttributes() {
        return ['name'];
    }
    attributeChangedCallback(name, old, change) {
        this.setState({name: change});
    }
    render() {
        this.styled`
            color: red;
            background: ghostwhite;
            border: 1px solid black;
        `;
        return (
        <div>
            <Counter/>
        </div>
        )
    }
}