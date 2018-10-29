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
        </div>
        `);
    }
}

export default Home;