import React, { Component, Fragment } from 'react'
import Counter from './components/Counter/Counter';
import Counter02 from './components/Counter/Counter02';
import Band from './components/Band';

export default class App extends Component {
  constructor() {
    super();

    this.state = {
      currentCounter: 3,
      steps: 0,
    };
  }


  handleCount = (clickType)  => {
            const { currentCounter, steps } = this.state;

        this.setState({
            currentCounter: clickType === '+' ? currentCounter + 1 : currentCounter - 1,
            steps: steps + 1,
        });
  };

  render() {
    const {currentCounter, steps} = this.state;

    return (
      <Fragment>
        <h3>Band</h3>
        <Band />

        <h3>Counter 01</h3>
        <Counter />
        <Counter />
        <Counter />

        <h3>Counter 02</h3>
        <Counter02 onCount={this.handleCount} countValue={currentCounter} currentStep={steps} />
        <Counter02 onCount={this.handleCount} countValue={currentCounter} currentStep={steps} />
        <Counter02 onCount={this.handleCount} countValue={currentCounter} currentStep={steps} />
      </Fragment>
    );
  }
}
