import React,{useCallback, useContext, useEffect, useState} from 'react'

import { membersContext } from "../Context/MembersContextProvider";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashAlt,faRedo } from "@fortawesome/free-solid-svg-icons";

function WorkersEmails() {
  const context = useContext(membersContext);
  const [users,setUsers] = useState([...context.members])

  useEffect(() => {
    setUsers([...context.members]);
  },[context.members])

  const handleRemove = useCallback(
    (id) => {
      const updatedUsers = users.filter((item) => item.id !== id);
      setUsers(updatedUsers);
    },
    [users]
  );

  return (
    <section
      className="mails-container"
      role="group"
      aria-label="workers mails">
      <table>
        <thead>
          <tr>
            <th>Co-Workers Emails</th>
            <th>Role</th>
            <th>Remove</th>
            <th>Re-Invite</th>
          </tr>
        </thead>
        <tbody>
          {users.map((member) => {
            return (
              <tr key={member.id}>
                <td>{member.mail}</td>
                <td>{member.type}</td>
                {member.mail && (
                  <React.Fragment>
                    <td title="remove">
                      <FontAwesomeIcon
                        icon={faTrashAlt}
                        onClick={() => {
                          handleRemove(member.id);
                        }}
                        role="button"
                      />
                    </td>
                    <td title="resend">
                      <FontAwesomeIcon icon={faRedo} />
                    </td>
                  </React.Fragment>
                )}
              </tr>
            );
          })}
        </tbody>
      </table>
    </section>
  );
}

export default WorkersEmails