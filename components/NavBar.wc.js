import Component from '../lib/Component';

class NavBar extends Component{
    constructor(){
        super();

        this.css(`
            nav{
                display: grid;
                grid-template-columns: 10vw 70vw 20vw;
                border: 1px solid black;
                padding: 1vh 0.5vw;
                margin: 0;
            }
            .nav-link-group{
                display: flex;
                flex-direction: row;
                justify-content: space-around;
            }
            .nav-link-group{

            }
        `);

        this.render(`
            <nav>
                <a href="#">Company</a>
                <span>&nbsp;</span>
                <section class='nav-link-group'>
                    <a>Login</a>
                    <a>Signup</a>
                </section>
            </nav>
        `);
    }
}

export default NavBar;