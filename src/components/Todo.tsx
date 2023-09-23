import * as React from "react"
import { Dispatch } from "redux"
import { useDispatch } from "react-redux"

type Props = {
    todo:Todo
    removeTodo:(todo:Todo) => void
}

export const Todo: React.FC<Props> = ({todo, removeTodo}) =>{
    const dispatch: Dispatch<any> = useDispatch()

    const deleteTodo = React.useCallback(
        (article: Todo) => dispatch(removeTodo(todo)),
        [dispatch, removeTodo,todo]
    )
    
    return (
        <div className="Todo">
          <div>
            <h1 className="todo-title">{todo.title}</h1>
            <p className="todo-description">{todo.body}</p>
          </div>
          <button onClick={() => deleteTodo(todo)}>Delete Todo</button>
        </div>
      )
}