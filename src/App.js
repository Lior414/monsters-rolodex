import React, { Component } from 'react';
import { CardList } from './components/card-list/card-list.component'
import { SearchBox } from './components/search-box/search-box.component'
import './App.css';


class App extends React.Component {
  constructor(){ //constructor() is a method that runs first in the DOM and will be used to set up the component
    super(); //super() is a method the extends the scope of the component to the rest of the app
    this.state = {
      monsters: [],
      searchField: ''
    }
  }

  componentDidMount(){ //componentDidMount() is lifecycle method. lifecycle methods are functions that can reference the state of a component and alter it
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => this.setState({monsters: users}))
  }

  render(){ // render() is a lifecycle method which will create the HTML elements of a component
    const { monsters, searchField } = this.state;
    const filteredMonsters = monsters.filter( monster => 
      monster.name.toLowerCase().includes(searchField.toLowerCase())
    )
    return(
      <div className="App">
        <h1>Monsters Rolodex</h1>    
        <SearchBox
          placeholder='search monsters'
          handleChange={e => this.setState({ searchField: e.target.value })}
        />
        <CardList monsters={filteredMonsters}/>        
      </div>
    )
  };
}

export default App;
