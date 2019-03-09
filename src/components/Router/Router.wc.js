import Component from "../../lib/WC";

class Router extends Component{
    constructor(routes){
        super();
        this.render = () => routes[window.location.pathname]
        console.log(routes[window.location.pathname])
    }
}

export default Router;