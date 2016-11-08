import React from 'react';

export default class Filter extends React.Component {

  onChange(event) {

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
