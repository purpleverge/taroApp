// import 自定义的操作类型
import { ADD, DELETE } from "../constants/todos";

// 定义需要管理的states
const INITIAL_STATE = {
  todos: [
    {id: 0, text: '第一条todo'}
  ]
}

function todos(state = INITIAL_STATE, action) {
  const todoNum = state.todos.length

  switch (action.type) {
    case ADD:
      /* 这里不能直接对原来的state进行变更，
         所以第一个参数是...state
         第二个参数是需要修改的状态，用concat返回一个修改的副本，不影响原有state的内容
       */
      return {
        ...state,
        todos: state.todos.concat({
          id: todoNum,
          text: action.data
        })
      }
    case DELETE:
      let newTodos = state.todos.filter(item => item.id !== action.id)
      return {
        ...state,
        todos: newTodos
      }
    default:
      return state
  }
}

export default todos
