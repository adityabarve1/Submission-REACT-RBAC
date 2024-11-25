import React, { useState } from "react";
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import MembersTable from "./components/MembersTable";
import AddEditMemberModal from "./components/AddEditMemberModal";
import "./App.css";

const App = () => {
  const [members, setMembers] = useState([
    {
      id: 1,
      name: "Konstantin Konstantinopolsky",
      username: "@konstantinkonstantinopolsky",
      projects: 1000,
      accessExpires: "In 12 months",
      role: "Multiple roles",
      expiration: "2021.06.20",
    },
    {
      id: 2,
      name: "Jane Doe",
      username: "@janedoe",
      projects: 500,
      accessExpires: "In 6 months",
      role: "Single role",
      expiration: "2021.12.20",
    },
  ]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingMember, setEditingMember] = useState(null);

  const openModal = (member = null) => {
    setEditingMember(member);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setEditingMember(null);
    setIsModalOpen(false);
  };

  const addMember = (newMember) => {
    setMembers([...members, { ...newMember, id: members.length + 1 }]);
  };

  const updateMember = (updatedMember) => {
    setMembers(
      members.map((member) =>
        member.id === updatedMember.id ? updatedMember : member
      )
    );
  };

  const deleteMember = (id) => {
    setMembers(members.filter((member) => member.id !== id));
  };

  return (
    <div className="app-container">
      <Sidebar />
      <div className="main-content">
        <Header />
        <div className="content-area">
          <div className="members-header">
            <h1>Members ({members.length})</h1>
            <div className="actions">
              <button className="primary-button" onClick={() => openModal()}>
                Add Member
              </button>
            </div>
          </div>
          <div className="tabs">
            <button className="active">All</button>
            <button>Members</button>
            <button>Groups</button>
          </div>
          <MembersTable
            members={members}
            deleteMember={deleteMember}
            openModal={openModal}
          />
        </div>
      </div>
      {isModalOpen && (
        <AddEditMemberModal
          member={editingMember}
          closeModal={closeModal}
          saveMember={(member) =>
            member.id ? updateMember(member) : addMember(member)
          }
        />
      )}
    </div>
  );
};

export default App;
