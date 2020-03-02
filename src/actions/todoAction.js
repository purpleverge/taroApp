import {ADD, DELETE } from "../constants/todos";

export const add = (data)=>{
  return {
    type: ADD,
    data
  }
}

export const del =(id)=>{
  return {
    type:DELETE,
    id
  }
}
