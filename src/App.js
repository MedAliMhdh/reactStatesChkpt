import React from "react";
import "./App.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      Person: {
        name: "Mohamed ",
        age: "28",
        profession: "engineer",
        imgSrc: "/photo.jpg",
      },
      x: false,
    };
  }

  clickHandler = () => {
    let { x } = this.state;
    x ? this.setState({ x: false }) : this.setState({ x: true });
  };

  timeCount = () => {
    const { timer } = this.state;
    this.state.x
      ? this.setState({ timer: timer + 1 })
      : this.setState({ timer: 0 });
  };

  componentDidMount = () => {
    setInterval(this.timeCount, 1000);
  };

  render() {
    return (
      <div className="App">
        <button onClick={this.clickHandler}>
          {this.state.x === true ? <p>Hide</p> : <p>Show</p>}
        </button>
        {this.state.x
          ? Object.keys(this.state.Person).map((key) =>
              key !== "imgSrc" ? (
                <div>{key + ":" + this.state.Person[key]}</div>
              ) : (
                <img
                  src={this.state.Person.imgSrc}
                  style={{ width: "400px" }}
                  alt="profile img"
                />
              )
            )
          : ""}
        <div>{this.state.timer}</div>
      </div>
    );
  }
}

export default App;
