import {useState} from "react";
import React,{Children, createContext,useReducer} from "react";
import UserReducer from "./UserReducer";


const UsersContext = createContext();
function Context({children}) {

  const intialState = [{ userMail: "", userType: "", id: Date.now() }];
  const [users,dispatch] = useReducer(UserReducer,intialState)

  return (
    <UsersContext.Provider value={{users,dispatch}}>
      {children}
    </UsersContext.Provider>
    
  )
}

export {UsersContext,Context,UserReducer};