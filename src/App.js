import React from 'react';
import {SideBar,InviteMember,WorkersEmails} from "./components/exports";

import {MembersContextProvider} from "./Context/MembersContextProvider";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faAngleLeft} from "@fortawesome/free-solid-svg-icons";


function App() {
  return (
    <main className="dashbord">
      <MembersContextProvider>
        <SideBar />
        <div className="dashbord__forms">
          <div className="co-workers">
            <FontAwesomeIcon className="angle" icon={faAngleLeft} />
            <span>Co-Workers</span>
          </div>
          <InviteMember />
          <WorkersEmails/>
        </div>
      </MembersContextProvider>
    </main>
  );
}

export default App