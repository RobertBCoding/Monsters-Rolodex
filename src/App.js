import { Component } from 'react';
import CardList from './components/card-list/card-list-component.jsx'
import SearchBox from './components/search-box/search-box.component.jsx'
import './App.css';

class App extends Component {
  constructor() {
    super();
    // Set the initial state (empty)
    this.state = {
      monsters: [],
      searchField: ''
    };
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((users) =>
        this.setState(
          () => {
            return { monsters: users };
          })
      );
  }

  // This func var was moved out of the render return for optimization
  // The function is only built once (initialized)
  onSearchChange = (event) => {
    const searchField = event.target.value.toLocaleLowerCase(); // For string matching
    this.setState(() => {
      return { searchField };
    });
  }

  render() {
    // To reduce repetition of 'this.state'
    const { monsters, searchField } = this.state; 
    // To reduce repetition of 'this'
    const { onSearchChange } = this;
    const filteredMonsters = monsters.filter((monster) => {
      return monster.name.toLocaleLowerCase().includes(searchField);
    });

    return (
      <div className="App">
      <h1 className="app-title">Monsters Rolodex</h1>
        <SearchBox 
          onChangeHandler={onSearchChange}
          placeholder="search monsters"
          className="monsters-search-box"
        />
        <CardList monsters={filteredMonsters} />
      </div>
    );
  }
}

export default App;
