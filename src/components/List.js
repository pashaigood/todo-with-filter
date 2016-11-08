import React from 'react';
import TodoStatuses from '../constants/TodoStatuses';

const List = (props) =>
<ul>
  {
    props.items.filter(item => props.filter.done === TodoStatuses.ALL || item.done === props.filter.done).map((item) =>
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
  filter: React.PropTypes.object.isRequired,
  items: React.PropTypes.array.isRequired,
  onStatusChange: React.PropTypes.func.isRequired
};

export default List;
