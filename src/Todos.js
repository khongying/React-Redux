import React from 'react'

const Todos = ({todos, deleteTodo}) => {

    const todoList = todos.length ? (
        todos.map(todo => {
            return (
                <div className="conllection-item" key={todo.id}>
                    <span onClick={() => { React.deleteTodo(todo.id)}}>{todo.content}</span>
                </div>
            )
        })
    ) : (
        <p className="center">You have no todo's left</p>
    )
    return(
        <div className="todos conllection" >
            {todoList}
        </div>
    )
}

export default Todos;