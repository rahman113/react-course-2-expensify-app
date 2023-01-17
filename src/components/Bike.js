import React from 'react'
import ReactDOM from 'react-dom';

class Bike extends React.Component {
    constructor(props){
        super(props)
        this.state  = {
            make: "Yamaha",
            model: "R15",
            color: "blue"
        }

    }
    changeBikeColor = () => {
        this.setState(() => ({color: "black"}))
    }
    render() {
        return (
          <div>
          <h1>{this.state.make}</h1>
          <p>It is a {this.state.model}</p>
          <button type='button' onClick={this.changeBikeColor}>ChangeColor</button>
          </div>
        )
        }  
}
//ReactDOM.render(<Bike />, document.getElementById('app'));