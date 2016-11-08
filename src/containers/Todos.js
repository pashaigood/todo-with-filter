import React from 'react';
import Form from '../components/Form';
import List from '../components/List';
import Filter from '../components/Filter';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as todo from '../actions/todo';


class Todos extends React.Component {
  static propTypes = {
    name: React.PropTypes.string.isRequired,
    items: React.PropTypes.array.isRequired,
    changeName: React.PropTypes.func.isRequired,
    addTodo: React.PropTypes.func.isRequired,
    changeTodoStatus: React.PropTypes.func.isRequired
  };

  render() {

    return (
      <div>
        <Form
          name={this.props.name}
          onChange={this.props.changeName}
          onAdd={this.props.addTodo}
        />
        <Filter/>
        <List
          items={this.props.items}
          onStatusChange={this.props.changeTodoStatus}
        />
      </div>
    );
  }
}

export default connect(
  (state) => ({
    name: state.todo.name,
    items: state.todo.items
  }),
  (dispatch) => bindActionCreators(todo, dispatch)
)(Todos);
