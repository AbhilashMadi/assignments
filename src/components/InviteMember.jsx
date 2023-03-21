import React, { useState } from 'react'

function InviteMember() {
  const [invites,setInvites] = useState([{userMail:"",userType:"",id:""}]);

  const handleAddMore = () => {
    setInvites([...invites,{userMail:"",userType:"",id:""}])
  }

  const handleInputChange = (e,index) => {
    const {name,value} = e.target;
    const newInvites = [...invites];
    newInvites[index][name] = value;
    setInvites(newInvites);
  }

  const handleSelectChange = (e,index) => {
    const newInvites = [...invites];
    newInvites[index].type = e.target.value;
    setInvites(newInvites);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(invites);
  }

  return (
    <section className="invite-form">
      <p>Invite your co-workers to collaborate on Cashwise.</p>

      {
        invites.map((invite,index) => {
          return (
            <div className="invite-form__addUser" key={index}>
              <input
                type="email"
                autoComplete="off"
                name="userMail"
                placeholder="Email"
                onChange={(e) => handleInputChange(e, index)}
              />
              <select
                value={invite.type}
                onChange={(e) => handleSelectChange(e, index)}>
                <option value="MemberType" disabled selected>
                  Select Member
                </option>
                <option value="Admin">Admin</option>
                <option value="Manager">Manager</option>
                <option value="Worker">Worker</option>
                <option value="Other">Other</option>
              </select>
            </div>
          );
        })
      }

      <div className="buttons">
        <button className="buttons__add-more" onClick={handleAddMore}>
          + Add More
        </button>
        <button className="buttons__send-invite" onClick={handleSubmit}>Send Invite</button>
      </div>
    </section>
  );
}

export default InviteMember