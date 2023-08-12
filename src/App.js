import { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      name: { firstName: 'Robert', lastName: 'Trump' },
      company: 'ZTM'
    };
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Hi {this.state.name.firstName} {this.state.name.lastName}, 
            I work at {this.state.company}
          </p>
          <button onClick={() => { // Because a function is used, the state will for sure
            this.setState(() => {  // update before the 'console.log(this.state)' line
             return {
              name: {firstName: 'Timmy', lastName: 'Little' },
             } 
            }, () => {
              console.log(this.state); // This is optional, just to see 
            });
          }}
          >Change name</button>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}
export default App;
