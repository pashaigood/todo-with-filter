import React from 'react';

export default class Filter extends React.Component {

  static propTypes = {

  };

  onChange() {
  }

  render() {
    return (
      <select name="done" id="" onChange={this.onChange.bind(this)}>
        <option>Select status</option>
        <option value="true">Done</option>
        <option value="false">Undone</option>
      </select>
    );
  }
}
