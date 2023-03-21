import React from 'react'

function InviteMember() {
  return (
    <section className="invite-form">
      <p>Invite your co-workers to collaborate on Cashwise.</p>

      <div className="invite-form__addUser">
        <input
          type="email"
          autoComplete="off"
          name="userMail"
          placeholder="Email"
        />
        <select name="userType">
          <option value="MemberType" disabled selected>
            Select Member
          </option>
          <option value="Admin">Admin</option>
          <option value="Manager">Manager</option>
          <option value="Worker">Worker</option>
          <option value="Other">Other</option>
        </select>
      </div>

      <div className="buttons">
        <button className="buttons__add-more">
          + Add More
        </button>
        <button className="buttons__send-invite">Send Invite</button>
      </div>
    </section>
  );
}

export default InviteMember