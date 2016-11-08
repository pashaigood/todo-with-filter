import React from 'react';

const List = (props) =>
<ul>
  {
    props.items.map((item) =>
        <li
          onClick={() => props.onStatusChange(item.id)}
          key={item.id}
          style={{textDecoration: item.done ? 'line-through' : 'none'}}
        >{item.name}</li>
    )
  }
</ul>
;

List.propTypes = {
  items: React.PropTypes.array.isRequired,
  onStatusChange: React.PropTypes.func.isRequired
};

export default List;
