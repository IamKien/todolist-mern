import React from 'react';
import TodoList from './TodoList';

class App extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      items: [],
      text: '',
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.deleteItem = this.deleteItem.bind(this);
    this.editItem = this.editItem.bind(this);
  }

  handleChange(e){
    this.setState({
      text: e.target.value
    })
  }

  handleSubmit(e){
    e.preventDefault();
    if(!this.state.text.length){
      return;
    }
    const newItem = {
      text: this.state.text,
      id: Date.now()
    }
    this.setState(prevState => ({
      items: prevState.items.concat(newItem),
      text: ''
    }))
  }

  deleteItem(key){
    var filteredItems = this.state.items.filter(function(item){
      return (item.id !== key);
    });

    this.setState({
      items: filteredItems
    });

  }

  editItem(id){
    const oldItem = this.state.items.find(c => c.id === id)

    if (!oldItem) return;
    this.setState({

        items: oldItem.text,

    });
  }

  render() {

    return (
      <div>
        <h1>To Do List</h1>
        
        
        <form onSubmit={this.handleSubmit}>

          <input type="text"
          onChange={this.handleChange}
          value={this.state.text}
          />

          <button>
            Add # {this.state.items.length + 1}
          </button>

        </form>

        <TodoList 
          items={this.state.items}
          delete={this.deleteItem}
          edit={this.editItem}
         />
      </div>
    );
  }
}


export default App;