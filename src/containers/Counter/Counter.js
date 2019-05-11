import React, { Component } from 'react';
import CounterControl from '../../components/CounterControl/CounterControl';
import CounterOutput from '../../components/CounterOutput/CounterOutput';
import { connect } from 'react-redux';
import * as actionTypes from '../../store/Actions';


class Counter extends Component {


  render() {

    return (
      <div>
        <CounterOutput value={this.props.ctr} />
        <CounterControl label="Increment" clicked={this.props.onIncrementCounter} />
        <CounterControl label="Decrement" clicked={this.props.onDecrementCounter} />
        <CounterControl label="Add 5" clicked={this.props.onAddCounter} />
        <CounterControl label="Subtract 5" clicked={this.props.onSubtractCounter} />
        <hr />
        <button onClick={() => this.props.onStoreResult(this.props.ctr)}>Store Results</button>

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
  console.log(state);

  return {
    ctr: state.ctr.counter,
    storedResults: state.res.results
  }

}

const mapDispatchToProps = dispatch => {
  return {
    onIncrementCounter: () => dispatch({
      type: actionTypes.INCREMENT
    }),
    onDecrementCounter: () => dispatch({
      type: actionTypes.DECREMENT
    }),
    onAddCounter: () => dispatch({
      type: actionTypes.ADD,
      value: 5
    }),
    onSubtractCounter: () => dispatch({
      type: actionTypes.SUBTRACT,
      value: 5
    }),
    onStoreResult: (result) => dispatch({
      type: actionTypes.STORE_RESULT,
      result: result
    }),
    onDeleteResult: (id) => dispatch({
      type: actionTypes.DELETE_RESULT,
      resultElemId: id
    })

  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter);