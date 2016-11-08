import React from 'react';

export default (props) =>
<div>
  <input
    value={props.name}
    onChange={(event) => props.onChange(event.target.value)}
    type="text"
  />
  <button onClick={() => props.onAdd()}>Add</button>
</div>
