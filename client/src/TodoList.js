import React from 'react';

class TodoList extends React.Component{

  
  render(){
    return(
      <ul>
        {this.props.items.map(item => (
          <li key={item.id}>
          <input value={item.text} />

            <button onClick={() => this.props.delete(item.id)}
            >
              Delete
            </button>
            <button onClick={() => this.props.edit(item.id)}>
              Edit
            </button>
          </li>

        ))}

      </ul>
    );
  }
}

export default TodoList;