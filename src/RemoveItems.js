import React from "react";

class RemoveItems extends React.Component{
  RemoveItems(){
    this.props.removeAll()
  }
  render(){
    return(
      <div>
        <button className="removeButton" onClick={()=>{this.RemoveItems()}}>Remove All</button>
      </div>
    )
  }
}

export default RemoveItems
