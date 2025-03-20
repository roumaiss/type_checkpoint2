import React from "react";

// 1. Define an interface for the component's props
interface GreetingProps {
  name: string; // Ensures that name is always a string
}

// 2. Define the functional component with props typed
const Greeting: React.FC<GreetingProps> = ({ name }) => {
  return <div>Hello, {name}!</div>;
};

export default Greeting;
