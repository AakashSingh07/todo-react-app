import React from 'react'
import { TodoItem } from './TodoItem';

export const Todos = (props) => {
  let mystyle = {
    minHeight: "70vh",
    margin: "40px auto"
  }
  return (
    <div className="container" style={mystyle}>
      <h3 className="my-3">Todos List</h3>
      {props.todos.length === 0 ? "No Todos to display" :
      props.todos.map( (todo) => {
        return (<TodoItem todo={todo} onDelete={props.onDelete} key={todo.sno}/> 
      )
      })
      }
    </div>
  )
}
