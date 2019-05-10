import React, { Component } from 'react';

import CounterControl from '../../components/CounterControl/CounterControl';
import CounterOutput from '../../components/CounterOutput/CounterOutput';

import { connect } from 'react-redux';


class Counter extends Component {


  render() {
    return (
      <div>
        <CounterOutput value={this.props.ctr} />
        <CounterControl label="Increment" clicked={this.props.onIncrementCounter} />
        <CounterControl label="Decrement" clicked={this.props.onDecrementCounter} />
        <CounterControl label="Add 5" clicked={this.props.onAddCounter} />
        <CounterControl label="Subtract 5" clicked={this.props.onSubstractCounter} />
        <hr />
        <button onClick={this.props.onStoreResult}>Store Results</button>

        <ul>
          {this.props.storedResults.map((el) =>
            (<li
              key={el.id}
              onClick={() => this.props.onDeleteResult(el.id)}>{el.value}
            </li>)

          )}

        </ul>
      </div>
    );
  }
}

const mapStateToProps = state => {
  // console.log(state);

  return {
    ctr: state.counter,
    storedResults: state.results
  }

}

const mapDispatchToProps = dispatch => {
  return {
    onIncrementCounter: () => dispatch({
      type: 'INCREMENT'
    }),
    onDecrementCounter: () => dispatch({
      type: 'DECREMENT'
    }),
    onAddCounter: () => dispatch({
      type: 'ADD',
      value: 5
    }),
    onSubstractCounter: () => dispatch({
      type: 'SUBSTRACT',
      value: 5
    }),
    onStoreResult: () => dispatch({
      type: 'STORE_RESULT'
    }),
    onDeleteResult: (id) => dispatch({
      type: 'DELETE_RESULT',
      resultElemId: id
    })

  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter);