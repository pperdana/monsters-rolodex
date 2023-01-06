import { Component } from "react";
import CardList from "./components/card-list/card-list.component";
import "./App.css";
import SearchBox from "./components/search-box/search-box.component";

class App extends Component {
  constructor() {
    super();
    this.state = {
      monsters: [],
      searchField: "",
    };
    console.log("1. constructor");
  }

  componentDidMount() {
    console.log("3. componentDidMount");
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) =>
        this.setState(
          () => {
            return { monsters: users };
          },
          () => {
            // console.log(this.state);
          }
        )
      );
  }

  onSearchChange = (e) => {
    // console.log(e.target.value);
    console.log("This call from onSearchChange function");
    const searchField = e.target.value.toLocaleLowerCase();
    this.setState(() => {
      return { searchField };
    });
  };
  render() {
    console.log("2. render");

    const { monsters, searchField } = this.state;
    const { onSearchChange } = this;

    const filteredMonsters = monsters.filter((monster) =>
      monster.name.toLocaleLowerCase().includes(searchField)
    );
    return (
      <div className="App">
        <h1 className="app-title">Monster Rolodex</h1>
        <SearchBox
          className="monsters-search-box"
          onChangehandler={onSearchChange}
          placeholder="search monsters"
        />
        <CardList monsters={filteredMonsters} />
      </div>
    );
  }
}

export default App;
