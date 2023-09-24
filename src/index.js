import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import ReactDom from 'react-dom';
import React, {useState} from 'react';
import App from './App';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
  </StrictMode>

);

class Hello extends React.Component{

  state = {
    name: " Pals"
  }
  render(){
    return <h3>Hello
      {this.state.name}, learning State in React.
    </h3>;
  }
}

const el = <Hello/>;
ReactDom.render(
  el,
  document.getElementById('state')
);

class Counter extends React.Component{
  state = {
    counter: 0
  }
  increment = () => {
    this.setState({
      counter: this.state.counter+1
    });
  }
  render(){
    return <div>
      <p> {this.state.counter}</p>
      <button onClick={this.increment}> Increment </button>
      </div>
  }
}
const elem = <Counter/>;
ReactDom.render(
  elem,
  document.getElementById('counter')
);