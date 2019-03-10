import Component, {JSXRenderer} from "../lib/WC";

const Welcome = <h1>Hello there, my name is Ian Fabs</h1>;

Welcome.styled();

class Home extends Component{
    constructor(){
        super();

        /* this.css(`
        .flex{
            display: flex;
            justify-content: center;
        }
        `); */
    }
    render() {
        return (
            <div>
                {Welcome}
                <wc-test name="Ian"></wc-test>
            </div>
        );
    }
}

export default Home;