import React, { useState } from 'react';
import './Header.css'; // Import the CSS file for header styling

function Header() {
  const [showModal, setShowModal] = useState(false);

  // Function to handle the "Create" button click
  const handleCreateClick = () => {
    setShowModal(true); // Show modal when button is clicked
  };

  // Function to close the modal
  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <header className="header">
      <div className="header-left">
        <h1>My Application</h1>
      </div>
      <div className="header-right">
        <button onClick={handleCreateClick} className="create-btn">
          Create
        </button>
      </div>

      {/* Modal for creating a new item */}
      {showModal && (
        <div className="modal-overlay">
          <div className="modal">
            <h2>Create New Item</h2>
            <form>
              {/* Form fields for creating a new item */}
              <input type="text" placeholder="Enter title" />
              <textarea placeholder="Enter description"></textarea>
              <button type="submit">Save</button>
            </form>
            <button onClick={closeModal} className="close-btn">Close</button>
          </div>
        </div>
      )}
    </header>
  );
}

export default Header;
