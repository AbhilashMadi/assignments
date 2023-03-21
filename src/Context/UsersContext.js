import React,{Children, createContext,useReducer} from "react";
import UserReducer from "./UserReducer";


const UsersContext = createContext();
function Context({children}) {

  const intialState = [
    { userMail: "abhilash@gmail.com", userType: "Admin", id: Date.now() },
    { userMail: "kumar@gmail.com", userType: "Manager", id: Date.now() },
  ];

  const [users,dispatch] = useReducer(UserReducer,intialState)

  return (
    <UsersContext.Provider value={{users,dispatch}}>
      {children}
    </UsersContext.Provider>
    
  )
}

export {UsersContext,Context,UserReducer};