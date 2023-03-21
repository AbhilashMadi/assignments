import React from 'react';
import {SideBar,InviteMember,WorkersEmails} from "./components/exports";
import {Context} from "./Context/UsersContext";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faAngleLeft} from "@fortawesome/free-solid-svg-icons";

function App() {
  return (
    <main className="dashbord">
      <Context>
        <SideBar />
        <div className="dashbord__forms">
          <div className="co-workers">
            <FontAwesomeIcon className="angle" icon={faAngleLeft} />
            <span>Co-Workers</span>
          </div>
          <InviteMember />
          <WorkersEmails/>
        </div>
      </Context>
    </main>
  );
}

export default App