import React from 'react';

export default (props) =>
<ul>
  {
    props.items.map((item) =>
        <li
          onClick={event => props.onStatusChange(item.id)}
          key={item.id}
          style={{textDecoration: item.done ? 'line-through' : 'none'}}
        >{item.name}</li>
    )
  }
</ul>
