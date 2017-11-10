import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  constructor() {
    super();
    this.state = {
      persons: [],
    }
  }

  componentDidMount() {
    fetch('http://localhost:3001/api/chels/').
      then((Response) => Response.json()).
      then((findresponse) => {
        console.log(findresponse)
        this.setState({
          persons: findresponse,
        });
      });
  }


  nameChangedHandler = (event, id) => {
    //find the person object index via ID
    const personIndex = this
      .state
      .persons
      .findIndex(p => {
        return p.id === id;
      });

    //using spread operator to copy the object, dont want by reference!!
    const person = {
      ...this.state.persons[personIndex]
    };
    //updating name with new value from textbox
    person.name = event.target.value;
    //copying persons array, dont want reference!!
    const persons = [...this.state.persons];
    //Updating old object with new object
    persons[personIndex] = person;
    //updating state with copied array
    this.setState({ persons: persons });
  }

  ageChangedHandler = (event, id) => {
    //find the person object index via ID
    const personIndex = this
      .state
      .persons
      .findIndex(p => {
        return p.id === id;
      });

    //using spread operator to copy the object, dont want by reference!!
    const person = {
      ...this.state.persons[personIndex]
    };
    //updating name with new value from textbox
    person.age = event.target.value;
    //copying persons array, dont want reference!!
    const persons = [...this.state.persons];
    //Updating old object with new object
    persons[personIndex] = person;
    //updating state with copied array
    this.setState({ persons: persons });
  }

  positionChangedHandler = (event, id) => {
    //find the person object index via ID
    const personIndex = this
      .state
      .persons
      .findIndex(p => {
        return p.id === id;
      });

    //using spread operator to copy the object, dont want by reference!!
    const person = {
      ...this.state.persons[personIndex]
    };
    //updating name with new value from textbox
    person.position = event.target.value;
    //copying persons array, dont want reference!!
    const persons = [...this.state.persons];
    //Updating old object with new object
    persons[personIndex] = person;
    //updating state with copied array
    this.setState({ persons: persons });
  }

  nationChangedHandler = (event, id) => {
    //find the person object index via ID
    const personIndex = this
      .state
      .persons
      .findIndex(p => {
        return p.id === id;
      });

    //using spread operator to copy the object, dont want by reference!!
    const person = {
      ...this.state.persons[personIndex]
    };
    //updating name with new value from textbox
    person.nation = event.target.value;
    //copying persons array, dont want reference!!
    const persons = [...this.state.persons];
    //Updating old object with new object
    persons[personIndex] = person;
    //updating state with copied array
    this.setState({ persons: persons });
  }

  deletePersonHandler = (personIndex) => {
    //copy old array with spread operator
    const persons = [...this.state.persons];
    //remove person
    persons.splice(personIndex, 1);
    //update state with copied array, with person removed.
    this.setState({ persons: persons });
  }

  addPersonHandler = () => {
    const persons = [...this.state.persons];
    let newId = persons.length;
    this.setState({
      persons: this.state.persons.concat([{ id: newId + 1, name: '', age: '', position: '', nation: '' }])
    });
  }

  togglePersonsHandler = () => {
    //booleans will copy by value
    const doesShow = this.state.showPersons;

    //update state with opposite of what it was.
    this.setState({
      showPersons: !doesShow
    });
  }

  render() {
    //css object
    const style = {
      backgroundColor: 'lightgrey',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    };

    let persons = null;
    //should we should the person lists? dependant on state then we will either render the persons or not.
    if (this.state.showPersons) {
      //map function to turn an array into html
      persons = (
        <div>
          {this
            .state
            .persons
            .map((person, index) => {
              return <Person
                click={() => this.deletePersonHandler(index)}
                name={person.name}
                age={person.age}
                position={person.position}
                nation={person.nation}
                key={person.id}
                changed={(event) => this.nameChangedHandler(event, person.id)} />
            })}
        </div>
      );
    }

    return (
      <div className="App">
        <header className="App-header">
          <img src='https://upload.wikimedia.org/wikipedia/en/c/cc/Chelsea_FC.svg' className="App-logo" alt="logo" />
          <h1 className="App-title">Chelsea</h1>
        </header>

        {this.state.persons.map((person) => (
          <div className="names">
            <input
              type="text"
              placeholder="name"
              value={person.name}
              onChange={(event) => this.nameChangedHandler(event, person.id)}
            />
            <input
              type="number"
              placeholder="age"
              value={person.age}
              onChange={(event) => this.ageChangedHandler(event, person.id)}
            />
            <input
              type="text"
              placeholder="position"
              value={person.position}
              onChange={(event) => this.positionChangedHandler(event, person.id)}
            />
            <input
              type="text"
              placeholder="nation"
              value={person.nation}
              onChange={(event) => this.nationChangedHandler(event, person.id)}
            />
          </div>
        ))}
        <button style={style} type="button" onClick={this.addPersonHandler} className="small">Add Person</button>
        <button style={style} onClick={this.togglePersonsHandler}>Toggle Persons</button>
        {persons}
      </div>
    );
  }
}

export default App;
