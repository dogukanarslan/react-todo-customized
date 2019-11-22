import React from "react";

class ShowOnlyImportant extends React.Component{
  constructor(props){
    super(props)
    this.state={button: true}
  }

  componentDidMount(){
    let button = window.localStorage.getItem("button");
    if(button){
      button  = JSON.parse(button);
    }
    this.setState({
      button: !button
    })
  }

  showOnlyImportant(){
    this.props.showOnlyImportant();
    this.setState({button: !this.state.button},()=>window.localStorage.setItem("button",JSON.stringify(this.state.button)))
  }

  render(){
    return(
      <div>
        {this.state.button ? <button className="removeButton" onClick={()=>this.showOnlyImportant()}>Show Only Important</button> :
        <button className="removeButton" onClick={()=>this.showOnlyImportant()}>Show All</button>}
      </div>
    )
  }
}

export default ShowOnlyImportant
