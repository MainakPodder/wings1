import "./App.css";
import { Component } from "react";
class App extends Component {
  componentDidMount = () => {
    this.handleGetData();
  };
  handleGetData = () => {
    fetch("/api/notes")
      .then((response) => response.json())
      .then((json) => console.log(json));
  };
  render() {
    return (
      <>
        <div className="home">
          <header>
            <h2>ABC Learning</h2>
          </header>

          <div className="cardContainer">
            <div className="card">
              <ul>
                <div className="header">
                  <li></li>
                  <li></li>
                  <li></li>
                  <li></li>
                  <li>
                    Rate:
                    <select name="rating">
                      <option value="1">1</option>
                      <option value="2">2</option>
                      <option value="3">3</option>
                      <option value="4">4</option>
                      <option value="5">5</option>
                    </select>
                    <button className="rate">ADD</button>
                  </li>
                  <li>
                    <button className="drop">Drop Course </button>
                  </li>
                  <li>
                    <button className="btn">Apply</button>
                  </li>
                </div>
                <div className="footer">
                  <li></li>
                </div>
              </ul>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default App;
