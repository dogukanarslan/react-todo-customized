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
        {visible ? <button className="itemRemoveButton" onClick={()=>props.toggleImportant(id)}>!</button> : <button disabled className="itemRemoveButton" onClick={()=>props.toggleImportant(id)}>!</button>}
        {visible ? <button className="itemRemoveButton" onClick={()=>props.removeItem(id)}>X</button> : <button disabled className="itemRemoveButton" onClick={()=>props.removeItem(id)}>X</button>}
      </div>
  )
}

export default Todo;
