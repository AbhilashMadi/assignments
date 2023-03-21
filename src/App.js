import React from 'react';
import {SideBar,InviteMember} from "./components/exports";
import {Context} from "./Context/UsersContext";

function App() {
  return (
    <main className="dashbord">
      <SideBar/>
      <div className="dashbord__forms">
        <InviteMember/>
      </div>
    </main>
  )
}

export default App