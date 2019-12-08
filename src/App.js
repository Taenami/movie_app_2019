import React from 'react';
import PropTypes from "prop-types";

class App extends React.Component {
  state = {
    count: 0
  };
  add = () => {
    this.setState(current => ({
      count:current.count + 1
    }));
  };
    // state를 set할때 외부의 상태에 의존하지 않는 가장 좋은 방법 current function


  minus = () => {
    this.setState(current => ({
      count:current.count -1
    }));
  };

  render() {
    return (
      <>
        <h1>The number is: {this.state.count}</h1>
        <button onClick={this.add}>Add</button>
        <button onClick={this.minus}>Minus</button>
      </>
    );
  }
}

export default App;
