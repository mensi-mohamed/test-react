import React from 'react'
import { render } from 'react-dom'
import { cowclicker } from './CowClicker'
var App = React.createClass({
    getInitialState() {
        return { name : 'test' };
    },
    onNameChange(event){
        this.setState({name : event.target.value});
    },
    render() {
        return (
            <div>
                <p>Hello {this.state.name}</p>
                <input type="text" onChange={this.onNameChange} />
                <div><cowclicker/></div>
            </div>
        );

    }
});
render(<App/>, document.getElementById('app'))