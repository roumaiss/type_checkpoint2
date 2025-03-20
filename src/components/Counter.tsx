import { Component } from "react";

// 1. Define an interface for the component's state
interface CounterState {
  count: number; // Ensures that count is always a number
}

// 2. Define a class component with state type
class Counter extends Component<Record<string, never>, CounterState> {
  state: CounterState = {
    count: 0, // Initial count state as a number
  };

  // 3. Define increment function with proper type annotation
  increment = (): void => {
    this.setState({ count: this.state.count + 1 });
  };

  render() {
    return (
      <div>
        <p>Count: {this.state.count}</p>
        <button onClick={this.increment}>Increment</button>
      </div>
    );
  }
}

export default Counter;
