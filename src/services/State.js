import { Component } from "react";

class State extends Component {

    constructor (props) {
        
        super(props);
        this.state = {Value: ''};

    }

    newState () {

        const value = this.state.Value;
        return value;

    }

}

module.exports = new State();