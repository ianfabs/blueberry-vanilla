import Component from "../lib/Component";

class About extends Component{
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
            <h1>and I'm in love with nicole balzano</h1>
        </div>
        `);
    }
}

export default About;