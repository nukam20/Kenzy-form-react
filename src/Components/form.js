import React, { Component } from 'react'

class Form extends Component{

  state = {
    firstName: "",
    lastName: ""
  }

  handleChange = e => {
    e.preventDefault();

    this.setState({
      [e.target.id]: e.target.value
    })

  }

  submit = e => {
    e.preventDefault();

    this.props.appName(this.state);
    
    this.setState({
      firstName: "",
      lastName: ""
    })

  }

  render(){
    return(
      <div className="container">
        <div style={{ marginTop: '10%' }}>
          <form onSubmit={ this.submit }>
            <div className="row">
              <div className="col s12 l12"> 
                <div className="input-field col s12">
                  <label htmlFor="">First name</label>
                  <input type="text" id="firstName" required  onChange={ this.handleChange } value={ this.state.firstName } />
                </div>
                <div className="input-field col s12">
                  <label htmlFor="">Last name</label>
                  <input type="text" id="lastName" required onChange={ this.handleChange } value={ this.state.lastName } />
                </div>
                <button className="btn btn-large right" id="add">ADD</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    )
  }
}

export default Form