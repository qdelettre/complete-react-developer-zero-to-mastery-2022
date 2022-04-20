import { Component } from "react";
import "./App.css";
import CardList from "./components/card-list/card-list.component";
import SearchBox from "./components/search-box/search-box.component";

class App extends Component {
  constructor() {
    super();

    this.state = {
      searchField: "",
      monsters: [],
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((json) => this.setState({ monsters: json }));
  }

  onSearchChange = ({ target }) => {
    const searchField = target.value.toLocaleLowerCase();
    this.setState(() => ({
      searchField,
    }));
  };

  render() {
    const { monsters, searchField } = this.state;
    const { onSearchChange } = this;

    const filtered = monsters.filter(({ name }) =>
      name.toLocaleLowerCase().includes(searchField)
    );

    return (
      <div className="App">
        <h1 className="app-title">Monsters Rolodex</h1>
        <SearchBox
          className="monsters-search-box"
          onChangeHandler={onSearchChange}
          placeholder="search monsters"
        ></SearchBox>
        <CardList monsters={filtered}></CardList>
      </div>
    );
  }
}

export default App;
