import React, { Component } from 'react';
import NavMenu from './Components/NavMenu';
import Form from './Components/form'
import FormList from './Components/nameList'

class App extends Component {

  state = {
    names: [ ]
  }

  getName = name => {
    this.setState({
      names: [ ...this.state.names, name]
    }) 
  }

  render() {
    return (
      <div>
        <NavMenu />
        <Form appName={ this.getName } />
        <div className="container">
          <div className="col s12 l6 center">
            <FormList propNames={ this.state.names } />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
