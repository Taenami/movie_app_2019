import React from 'react';

class App extends React.Component {

  constructor(props){
    super(props);
    console.log("hello");
  }
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

  componentDidMount(){
    console.log("component rendered");
  }

  componentDidUpdate(){
    console.log("I just updated");
  }

  componentWillUnmount(){
    console.log("Goodbye, component");
  }

  render() {
    console.log("I'm rendering");
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
