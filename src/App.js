import React from "react";
import "./App.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      Person: {
        fullName: "Mohamed Ali",
        bio: "Here is my bio",
        imgSrc: "/photo.jpg",
        profession: "engineer",
      },
      toggle: false,
    };
  }

  handleClick = () =>
    this.state.toggle
      ? this.setState({ toggle: false })
      : this.setState({ toggle: true });

  incrementCounter = () => {
    const { counter } = this.state;
    this.state.toggle
      ? this.setState({ counter: counter + 1 })
      : this.setState({ counter: 0 });
  };

  componentDidMount = () => {
    setInterval(this.incrementCounter, 1000);
  };

  render() {
    return (
      <div>
        <p>{this.state.counter}</p>
        <button onClick={this.handleClick}>
          {this.state.toggle ? "Hide" : "show"}
        </button>
        {this.state.toggle && (
          <div className="App">
            <div className="ImgSide">
              <img src={this.state.Person.imgSrc} />
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
