import Component from '../lib/Component';

class NavBar extends Component{
    constructor(){
        super();

        this.css`
            nav{
                display: flex;
                border: 1px solid black;
                padding: 1vh 0.5vw;
                margin: 0;
                justify-content: space-between;
            }
            .nav-link-group{
                display: flex;
                flex-direction: row;
                justify-content: space-between;
                align-self: flex-end;
                margin: auto 5px;
            }
            .nav-link-group > *{
                margin: auto 1vw;
            }
        `;

        this.render(`
            <nav>
                <a href="/">Company</a>
                <span>&nbsp;</span>
                <section class='nav-link-group'>
                    <a href="/about">About</a>
                    <span>|</span>
                    <a>Login</a>
                    <a>Signup</a>
                </section>
            </nav>
        `);
    }
}

export default NavBar;