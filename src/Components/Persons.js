import React, {Component} from 'react'

class Person extends React.Component 
{
  constructor(props)
  {
    super(props);
    this.state = {
      todosInit: ['100 kg Meat','Ham', 'Cheese'],
      todos: [],
      todoText: '',
      message: false
  };
    this.updateTodoText = this.updateTodoText.bind(this);
    this.createTodo = this.createTodo.bind(this);
    this.filterTodo = this.filterTodo.bind(this);
  }
  
  componentDidMount()
  {
    this.setState({
      todos: this.state.todosInit,
    });
  }
  
  updateTodoText (e)
  {
    this.setState({
      todoText: e.target.value
    });
  }
  
  createTodo (e)
  {
    e.preventDefault();
    this.setState({ 
      todos: [...this.state.todos, this.state.todoText],
      todoText: '',
    });
  }
  
  filterTodo(e)
  {   
     var updatedList = this.state.todosInit;
    updatedList = updatedList.filter((item =>{
      return item.toLowerCase().search(
        e.target.value.toLowerCase()) !== -1;
    }) );
       this.setState({ 
      todos: updatedList,
    });
    if (updatedList == 0 ) {
      this.setState({ 
      message: true,
    });
    } else {
      this.setState({ 
      message: false,
    });
    
    
    }
    
  }
  

  render() 
  {
    return (
      <div>
      <div className="container top">
        <div className="row">
          <div className="col-lg-12">
             <h2 className="text-center">Shopping List</h2>
          </div>
        </div>
      </div>
         <div className="container wb">
        <div className="row">
          <form onSubmit={this.createTodo}>
          <div className="col-lg-12 input-group">
             <input type="text"
               className="center-block"
               placeholder="Insert here..."
               value={this.state.todoText}
               onChange={this.updateTodoText}
               />
            <button className="btn btn-success center-block">Create</button>
          </div>
        </form>
          <ul>
            {this.state.todos.map((todo) => 
            {
             return (<li key={Math.floor(Math.random() * 10000) + 1}>{todo}</li>);
            }
       )} 
            {this.state.message ? <li>No search results.</li> : '' }
          </ul>
        </div>
           <input type="text"
               className="center-block"
               placeholder="Filter here..."
               onChange={this.filterTodo}
               />
      </div>
        </div>
    );  
  }
  
}

export default Person