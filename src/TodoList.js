import React from "react";
import Todo from "./Todo";

function TodoList(props){
  return(
      <div className="TodoList">
        <h1>{props.title}<br/>{props.value.length}</h1>
        <p>{props.value.content}</p>
        <ul>
          <li>
        {props.value.map(item =>
        <Todo showOnlyImportant={props.showOnlyImportant} toggleImportant={props.toggleImportant} toggleChecked={props.toggleChecked} removeItem={props.removeItem} {...item} key={item.id}/>
        )}
          </li>
        </ul>
      </div>
  )
}

export default TodoList;
