
import React,{useState,createContext} from "react";

const membersContext = createContext();

function MembersContextProvider({ children }) {
  const [members, setMembers] = useState([{id:Date.now(),mail:"",type:""}]);
  return (
    <membersContext.Provider value={{ members, setMembers }}>
      {children}
    </membersContext.Provider>
  );
}

export { MembersContextProvider , membersContext};