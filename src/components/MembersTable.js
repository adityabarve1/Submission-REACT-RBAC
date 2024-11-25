import React from "react";
import "./MembersTable.css";

const MembersTable = ({ members, deleteMember, openModal }) => {
  return (
    <div className="members-table">
      <div className="table">
        {members.map((member) => (
          <div className="table-row" key={member.id}>
            <div className="table-cell profile-cell">
              <img
                src={`https://via.placeholder.com/40?text=${member.name.charAt(0).toUpperCase()}`}
                alt="profile"
                className="profile-pic"
              />
            </div>
            <div className="table-cell message-cell">
              <div className="message-header">
                <div className="name">{member.name}</div>
                <div className="username">{member.username}</div>
                <div className="email">{member.email}</div> {/* Added email here */}
              </div>
              <div className="message-body">
                <div className="projects">Projects: {member.projects}</div>
                <div className="access-expiration">
                  Access expires: {member.accessExpires}
                </div>
                <div className="role">Role: {member.role}</div>
                <div className="expiration">Expiration: {member.expiration}</div>
              </div>
            </div>
            <div className="table-cell actions-cell">
              <button onClick={() => openModal(member)} className="action-btn edit-btn">
                Edit
              </button>
              <button className="action-btn delete-btn" onClick={() => deleteMember(member.id)}>
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MembersTable;
