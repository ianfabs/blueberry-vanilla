import Component from "../../lib/Component";

class Router extends Component{
    constructor(routes){
        super();

        this.css();

        this.render(routes[window.location.pathname]);
    }
}

export default Router;