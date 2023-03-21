import React, { useState } from 'react'

function InviteMember() {
  const [invites, setInvites] = useState([
    { id: Date.now(), mail: "", type: "" }
  ]);

    function handleInputChange(e, index) {
      const { name, value } = e.target;
      const newInvites = [...invites];
      newInvites[index][name] = value;
      setInvites(newInvites);
    }

    function handleSelectChange(e, index) {
      const { value } = e.target;
      const newInvitees = [...invites];
      newInvitees[index].type = value;
      setInvites(newInvitees);
    }

    function handleAddMore() {
      setInvites([...invites, { id: Date.now(),mail: "", type: "" }]);
    }

    function handleSendInvite() {
      console.log(invites);
      // TODO: send invite
    }

  return (
    <section className="invite-form">
      <p>Invite your co-workers to collaborate on Cashwise.</p>

      {invites.map((invite, index) => {
        return (
          <div className="invite-form__addUser" key={index}>
            <input
              type="email"
              autoComplete="off"
              name="mail"
              value={invite.mail}
              placeholder="Email"
              onChange={(e) => handleInputChange(e, index)}
            />
            <select
              value={invite.type}
              onChange={(e) => handleSelectChange(e, index)}>
              <option value="MemberType" disabled>
                Select Member
              </option>
              <option value="Admin">Admin</option>
              <option value="Manager">Manager</option>
              <option value="Worker">Worker</option>
              <option value="Other">Other</option>
            </select>
          </div>
        );
      })}

      <div className="buttons">
        <button className="buttons__add-more" onClick={handleAddMore}>
          + Add More
        </button>
        <button className="buttons__send-invite" onClick={handleSendInvite}>
          Send Invite
        </button>
      </div>
    </section>
  );
}

export default InviteMember