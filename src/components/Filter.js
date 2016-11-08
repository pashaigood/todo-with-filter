import React from 'react';
import TodoStatuses from '../constants/TodoStatuses';

export default class Filter extends React.Component {

  static propTypes = {
    filter: React.PropTypes.object.isRequired,
    onChange: React.PropTypes.func.isRequired
  };

  render() {
    return (
      <select
        name="done"
        value={this.props.filter.done+''}
        onChange={event => this.props.onChange({done: event.target.value == TodoStatuses.ALL ? TodoStatuses.ALL : event.target.value == 'true'})}
      >
        <option value={TodoStatuses.ALL}>All</option>
        <option value={TodoStatuses.DONE}>Done</option>
        <option value={TodoStatuses.UNDONE}>Undone</option>
      </select>
    );
  }
}
