import React from 'react';

const Form = (props) =>
<div>
  <input
    value={props.name}
    onChange={(event) => props.onChange(event.target.value)}
    type="text"
  />
  <button onClick={() => props.onAdd()}>Add</button>
</div>
;


Form.propTypes = {
  name: React.PropTypes.string.isRequired,
  onChange: React.PropTypes.func.isRequired,
  onAdd: React.PropTypes.func.isRequired
};


export default Form;
