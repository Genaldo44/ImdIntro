import React from 'react';
import ReactDOM from 'react-dom';

class ClockClass extends React.Component {

  constructor(props) {
    super(props)
    this.state = { date: new Date() }
  }

  componentDidMount() {
    setInterval(() => {
      this.setState({ date: new Date() });
    }, 1000);
  }

  render() {
    return (<div><h1>Hora: {this.state.date.toLocaleTimeString()} </h1></div>);
  };
}

ReactDOM.render(
  <ClockClass />,
  document.getElementById('root')
);