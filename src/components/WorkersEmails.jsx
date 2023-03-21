import React from 'react'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashAlt,faRedo } from "@fortawesome/free-solid-svg-icons";

function WorkersEmails() {
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
        
          <tr>
            <td>abhilash</td>
            <td>admin</td>
            <td>
              <FontAwesomeIcon icon={faTrashAlt} />
            </td>
            <td>
              <FontAwesomeIcon icon={faRedo} />
            </td>
          </tr>
        </tbody>
      </table>
    </section>
  );
}

export default WorkersEmails