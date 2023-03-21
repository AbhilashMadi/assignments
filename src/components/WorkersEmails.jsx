import React,{useContext} from 'react'

import { membersContext } from "../Context/MembersContextProvider";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashAlt,faRedo } from "@fortawesome/free-solid-svg-icons";

function WorkersEmails() {
  const context = useContext(membersContext);
  console.log(context.members)
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
          {
            context.members.map((member) => {
              return (
                <tr key={member.id}>
                  <td>{member.mail}</td>
                  <td>{member.type}</td>
                  <td>
                    {member.mail !== "" && (
                      <FontAwesomeIcon icon={faTrashAlt} />
                    )}
                  </td>
                  <td>
                    {member.mail !== "" && (
                      <FontAwesomeIcon icon={faRedo} />
                    )}
                  </td>
                </tr>
              );
            })
          }
        </tbody>
      </table>
    </section>
  );
}

export default WorkersEmails