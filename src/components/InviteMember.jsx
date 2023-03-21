import React from 'react'

function InviteMember() {
  return (
    <section className="invite-form">
      <p>Invite your co-workers to collaborate on Cashwise.</p>

      <div className="invite-form__addUser">
        <input type="email" autoComplete="off" name="userMail" placeholder='Email'/>
        <select name="userType">
          <option value="MemberType" disabled selected>Select Member</option>
          <option value="Admin">Admin</option>
          <option value="Manager">Manager</option>
          <option value="Worker">Worker</option>
          <option value="Other">Other</option>
        </select>
        <button className="add-btn">
          Add Member
        </button>
      </div>

      <p role="button" className="add-more">+ Add More</p>
    </section>
  );
}

export default InviteMember