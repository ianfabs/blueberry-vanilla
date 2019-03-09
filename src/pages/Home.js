import Component from "../lib/Component";

class Home extends Component{
    constructor(){
        super();

        this.css(`
        .flex{
            display: flex;
            justify-content: center;
        }
        `);

        this.render(`
        <div class='flex'>
            <h1>Hello there, my name is Ian Fabs</h1>
            <blue-test name=Ian></blue-test>
        </div>
        `);
    }
}

export default Home;