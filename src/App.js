import React, { Component } from 'react';
import { NICE, SUPER_NICE } from './colors';

import 'react-toolbox/lib/commons';
import Button from 'react-toolbox/lib/button';

class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = { counter: 0 };
    this.interval = setInterval(() => this.tick(), 1000);
  }

  tick() {
    this.setState({
      counter: this.state.counter + this.props.increment
    });
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    return (
      <div>
        <h1>lets display some buttons here</h1>
        <div>
          <Button label="Flat button" />
          <Button kind="raised" label="Raised" />
          <Button kind="raised" label="Raised accent" accent icon="favorite" />
          <Button className="primary" kind="floating" icon="add" />
          <Button mini kind="floating" icon="add" accent />
        </div>
        <h1 style={{ color: this.props.color }}>
          Counter ({this.props.increment}): {this.state.counter}
        </h1>
      </div>
    );
  }
}

export class App extends Component {
  render() {
    return (
      <div>
        <Counter increment={1} color={NICE} />
        <Counter increment={5} color={SUPER_NICE} />
      </div>
    );
  }
}
