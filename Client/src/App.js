import React, { Component } from 'react';
import logo from './logo.svg';
import './css/style.css';
import { connect } from 'react-redux';
import * as actions from './actions/general.act';

class App extends Component {
  state = {
    id: '',
    name: '',
    age: '',
    employeeType: '',
    seniority: '',
    wage: ''
  }

  _onChange(inputType, e) {
    this.setState({ [inputType]: e.target.value })
  }

  _submit() {
    let data = {
      id: this.state.id,
      name: this.state.name,
      age: this.state.age,
      employeeType: this.state.employeeType,
      seniority: this.state.seniority,
      wage: this.state.wage,
    }

    this.props.formSubmit(data);
  }

  render() {
    return (
      <div className="App">
        <div className="form">
          <label>
            Id:<input type="text" value={this.state.id} onChange={(e) => this._onChange('id', e)}></input>
          </label>
          <label>
            Name:<input type="text" value={this.state.name} onChange={(e) => this._onChange('name', e)}></input>
          </label>
          <label>
            Age:<input type="text" value={this.state.age} onChange={(e) => this._onChange('age', e)}></input>
          </label><label>
            EmployeeType:<input type="text" value={this.state.employeeType} onChange={(e) => this._onChange('employeeType', e)}></input>
          </label><label>
            Seniority:<input type="text" value={this.state.seniority} onChange={(e) => this._onChange('seniority', e)}></input>
          </label>
          <label>
            Wage:<input type="text" value={this.state.wage} onChange={(e) => this._onChange('wage', e)}></input>
          </label>
          <button onClick={() => this._submit()}>submit</button>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  ...state
})

export default connect(mapStateToProps, actions)(App);

