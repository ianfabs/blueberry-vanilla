import Component from '../lib/Component';

class Card extends Component{
    constructor(){
        super();
        //retrieve attributes
        const title = this.getAttribute("title");
        const subtitle = this.getAttribute("subtitle");
        this.css(`
            article{
                border: 1px solid black;
                padding: 1vh 2vw;
            }
            h1,h2{
                line-height: 10px;
            }
            h1{
                font-size: 1.5em;
            }
            h2{
                font-size: 1em;
            }
            article>hgroup{
                border-bottom: 1px solid #3c3c3c;
                padding-bottom: 1vh;
            }
            article>main{
                margin: 8vh 0;
            }
            article>footer{
                text-align: center;
                border-top: 1px solid #3c3c3c;
                padding-top: 1vh;
            }
        `);

        this.render(`
            <article>
                <hgroup>
                    <h1>${title || "Title"}</h1>
                    <h2>${subtitle || "Subtitle"}</h2>
                </hgroup>
                <main>
                    <p>
                        This is the main content of the card. Pretty neat, right?
                    </p>
                </main>
                <footer>
                    <small>Author @ianfabs</small>
                </footer>
            </article>
        `);
    }
}

export default Card;