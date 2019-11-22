import React from "react";

function Todo(props){
  const {id,checked,important,visible} = props;
  let itemClass= "listItem"
  let itemVisibility=""
  if (checked){
    itemClass += " checked"
  }

  if(important){
    itemClass += " important"
  }

  if(!visible){
    itemVisibility += " invisible"
  }

  return(
      <div className={itemVisibility}>
        <p className={itemClass} style={{display:"inline-block"}} onClick={()=>props.toggleChecked(id)}>{props.content}</p>
        <span className="itemRemoveButton" onClick={()=>props.toggleImportant(id)}>!</span>
        <span className="itemRemoveButton" onClick={()=>props.removeItem(id)}>X</span>
      </div>
  )
}

export default Todo;
