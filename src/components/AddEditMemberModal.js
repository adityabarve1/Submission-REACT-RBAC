import React, { useState, useEffect } from "react";
import "./AddEditMemberModal.css";

const AddEditMemberModal = ({ member, closeModal, saveMember }) => {
  const [formData, setFormData] = useState({
    name: "",
    username: "",
    projects: "",
    accessExpires: "",
    role: "",
    expiration: "",
  });

  useEffect(() => {
    if (member) {
      setFormData(member);
    }
  }, [member]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    saveMember(formData);
    closeModal();
  };

  return (
    <div className="modal-backdrop">
      <div className="modal">
        <h2>{member ? "Edit Member" : "Add Member"}</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="username"
            placeholder="Username"
            value={formData.username}
            onChange={handleChange}
            required
          />
          <input
            type="number"
            name="projects"
            placeholder="Projects"
            value={formData.projects}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="accessExpires"
            placeholder="Access Expires"
            value={formData.accessExpires}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="role"
            placeholder="Role"
            value={formData.role}
            onChange={handleChange}
            required
          />
          <input
            type="date"
            name="expiration"
            value={formData.expiration}
            onChange={handleChange}
            required
          />
          <div className="modal-actions">
            <button type="button" onClick={closeModal}>
              Cancel
            </button>
            <button type="submit" className="primary-button">
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddEditMemberModal;
