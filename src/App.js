import React from "react";
import "./App.css";
import myimg from "./photo.jpg";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      Person: {
        fullName: "Mohamed Aliiiiiiiiiiiiiiiiiiiiiiiiiiii",
        bio: "xxxxxxxxxxxxxx",
        // imgSrc: { myImg },
        profession: "engineer",
      },
      toggle: false,
    };
  }

  handleClick = () =>
    this.state.toggle
      ? this.setState({ toggle: false })
      : this.setState({ toggle: true });

  render() {
    return (
      <div>
        <button
          onClick={this.handleClick}
          style={{ width: "100px", height: "30px" }}
        >
          {this.state.toggle ? "Hide" : "show"}
        </button>
        {this.state.toggle && (
          <div
            className="App"
            style={{ display: "flex", justifyContent: "center" }}
          >
            <div className="ImgSide">
              <img src={myimg} style={{ width: "400px" }} />
            </div>
            <div className="rightSide">
              <div>{this.state.Person.fullName}</div>
              <div>{this.state.Person.bio}</div>
              <div>{this.state.Person.profession}</div>
            </div>
          </div>
        )}
      </div>
    );
  }
}

export default App;
