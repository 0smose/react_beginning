import React from "react";
import ReactDOM from "react-dom";
import 'bootstrap/dist/css/bootstrap.css';
import Clients from './components';

class App extends React.Component {
  render() {
    return (
        <Clients />
    )
  }
}

ReactDOM.render(<App />, document.querySelector("#root"))