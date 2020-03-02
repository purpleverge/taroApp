// reducers的主文件

import { combineReducers } from "redux";
// 在这里import其他
import todos from "./todoReducer";

export default combineReducers({
  todos
})
