import React from "react";

class AddTodo extends React.Component{
  constructor(props){
    super(props)
    this.state={
      inputValue:""
    }
    this.handleValueChange = this.handleValueChange.bind(this)
    this.updateTheInputValue = this.updateTheInputValue.bind(this)
  }

  updateTheInputValue(event){
    this.setState({inputValue: event.target.value})
  }

  handleValueChange(event){
    event.preventDefault()
    this.setState({inputValue:""})
    this.props.inputValue(this.state.inputValue)
  }

  render(){
    return(
      <section>
        <form onSubmit={this.handleValueChange}>
          <input className="addToInput" type="text" value={this.state.inputValue} onChange={this.updateTheInputValue}/>
          <button className="addToButton">Add</button>
        </form>
      </section>
    )
  }
}

export default AddTodo;
