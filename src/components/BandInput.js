// Add BandInput component
import React, { Component } from 'react'


class BandInput extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       name: "",
    }
  }

  handleChange = (e) => {
    this.setState({
      name: e.target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault()
    this.props.addBand(this.state)
    this.setState({
      name: ""
    })
  }
  
  render() {
    return(
      <div>
        <form onSubmit={this.handleSubmit}>
          <input type="text" 
          placeholder="bands name" 
          onChange={this.handleChange}
          value={this.state.name}
          />
          <button type="submit">Submit</button>
        </form>
        {this.state.name}
      </div>
    )
  }
}



export default BandInput
