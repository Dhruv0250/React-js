import React, { useContext } from "react";
import { createContext } from "react";

 export const TodoContext=createContext({
    Todos:[
        {
            id:1,
            todo:"TodoMsg",
            completed:false
        }
    ],
    addTodo:(todo)=>{},
    deleteTodo:(id)=>{},
    updateTodo:(id,todo)=>{},
    toggleComplete:(id)=>{}
 })

 export const useTodo=()=>{
      return useContext(TodoContext)
 }

 export const TodoProvider=TodoContext.Provider

