import React from 'react';
import "./Reset.css"
import './App.css';
import Header from "./Header";
import AddTodo from "./AddTodo";
import TodoList from "./TodoList";
import ShowOnlyImportant from "./ShowOnlyImportant"
import RemoveItems from "./RemoveItems";
import Footer from "./Footer";

class App extends React.Component{
  constructor(props){
    super(props)
    this.state={
      todos:[]
    }
    this.addTodo=this.addTodo.bind(this)
    this.removeAll=this.removeAll.bind(this)
    this.removeItem=this.removeItem.bind(this)
    this.toggleChecked=this.toggleChecked.bind(this)
    this.toggleImportant=this.toggleImportant.bind(this)
    this.showOnlyImportant=this.showOnlyImportant.bind(this)
  }

  componentDidMount(){
    let localTodos = window.localStorage.getItem("todos");
    if(localTodos){
      localTodos  = JSON.parse(localTodos);
    }
    this.setState({
      todos: localTodos || []
    })
  }

  addTodo(inputValue){
    if (inputValue.length<5 || this.state.todos.find(item => item.content === inputValue)){
      return;
    }else{
      this.setState({todos: this.state.todos.concat([{content: inputValue,id: Math.random(),checked: false,important: false,visible: true}])
  },()=>window.localStorage.setItem("todos",JSON.stringify(this.state.todos)))}
  }

  toggleChecked(id){
    const newArr = this.state.todos.map(todo=>{
      if (id === todo.id){
        let currentTodo = {...todo};
        currentTodo.checked = !currentTodo.checked;
        return currentTodo;
      } else{
        return todo;
      }
    });
    this.setState({
      todos: newArr
    },()=>window.localStorage.setItem("todos",JSON.stringify(this.state.todos)))
  }

  showOnlyImportant(){
    const newArr = this.state.todos.map(todo=>{
      if (todo.important ===false ){
        let currentTodo = {...todo};
        currentTodo.visible = !currentTodo.visible;
        return currentTodo;
      } else{
        return todo;
      }
    });
    this.setState({todos: newArr},()=>window.localStorage.setItem("todos",JSON.stringify(this.state.todos)))
  }

  removeItem(id){
    this.setState({todos: this.state.todos.filter(todo=>{
      return todo.id !== id
    })},()=>window.localStorage.setItem("todos",JSON.stringify(this.state.todos)))
  }

  removeAll(){
    this.setState({todos: []},()=>window.localStorage.setItem("todos",JSON.stringify(this.state.todos)))
  }

  toggleImportant(id){
    const newArr = this.state.todos.map(todo=>{
      if (id === todo.id){
        let currentTodo = {...todo};
        currentTodo.important = !currentTodo.important;
        return currentTodo;
      } else{
        return todo;
      }
    });
    this.setState({todos: newArr},()=>window.localStorage.setItem("todos",JSON.stringify(this.state.todos)))
  }

  render(){
    return (
      <div className="App">
        <Header />
        <main>
          <AddTodo inputValue={this.addTodo}/>
          <div className="TodoLists">
            <TodoList title={"Not Completed"} toggleImportant={this.toggleImportant} toggleChecked={this.toggleChecked} removeItem={this.removeItem} value={this.state.todos.filter(todo=>todo.checked!==true)}/>
            <TodoList title={"Completed"} toggleImportant={this.toggleImportant} toggleChecked={this.toggleChecked} removeItem={this.removeItem} value={this.state.todos.filter(todo=>todo.checked===true)}/>
          </div>
          <ShowOnlyImportant showOnlyImportant={this.showOnlyImportant}/>
          <RemoveItems removeAll={this.removeAll}/>
        </main>
        <Footer />
      </div>
    )
  }
}

export default App;
