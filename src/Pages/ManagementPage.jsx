import React, { useState } from 'react';

export default function ManagementPage({ wastes, setWastes }) {
  const [password, setPassword] = useState('');
  const [loggedIn, setLoggedIn] = useState(false);
  const [toggle, setToggle] = useState("bio");

  // Deletes a waste entry from the list
  const handleDeleteWaste = (index) => {
    const wasteObj = JSON.parse(localStorage.getItem('wastes'));
    const filteredData = toggle === "bio"
      ? wastes.filter(waste => waste.nature !== "Plastic waste")
      : toggle === "non-bio"
        ? wastes.filter(waste => waste.nature === "Plastic waste")
        : wastes;

    // Find the index of the item to delete in the filtered data
    const itemToDelete = filteredData[index];
    const itemIndexToDelete = wastes.indexOf(itemToDelete);

    if (itemIndexToDelete > -1) {
      wasteObj.splice(itemIndexToDelete, 1);
      localStorage.setItem('wastes', JSON.stringify(wasteObj));
      setWastes(wasteObj);
    }
  };




  // Handles the toggle switch
  const handleToggle = () => {
    if (toggle === "bio") {
      setToggle("non-bio");
    } else {
      setToggle("bio");
    }
  }

  // Handles the login form submission
  const handleLogin = (e) => {
    e.preventDefault();
    if (password === '123') {
      setLoggedIn(true);
    } else {
      alert('Invalid password');
    }
  };

  // Filter the data based on the toggle state
  const filteredData = toggle === "bio"
    ? wastes.filter(waste => waste.nature !== "Plastic waste")
    : toggle === "non-bio"
      ? wastes.filter(waste => waste.nature === "Plastic waste")
      : wastes;

  // If the user is not logged in, display the login form
  if (!loggedIn) {
    return (
      <div className="login-container">
        <div className="login-card">
          <h2>Login</h2>
          <form onSubmit={handleLogin} className="login-form">
            <input
              type="password"
              placeholder="Enter password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="login-input"
            />
            <button type="submit" className="login-button">
              Login
            </button>
          </form>
        </div>
      </div>
    );
  }

  // If the user is logged in, display the waste management content
  return (
    <div className="page-content">
      <h2 className="entries">Entries of Waste</h2>
      <div className="toggle-slider">
        <label className="switch">
          <input
            type="checkbox"
            onChange={handleToggle}
            checked={toggle === "non-bio"}
          />
          <span className="slider round"></span>
        </label>
      </div>

      {filteredData.length === 0 ? (
        <p className="empty">No entries found.</p>
      ) : (
        <Table data={filteredData} onDelete={handleDeleteWaste} />
      )}
    </div>
  );
}


// Table component to handle data rendering
function Table({ data, onDelete }) {
  return (
    <table className="table">
      <thead>
        <tr>
          <th>Name</th>
          <th>Contact Number</th>
          <th>Location</th>
          <th>Date</th>
          <th>Nature of Waste</th>
          <th className="action">Action</th>
        </tr>
      </thead>
      <tbody>
        {data.map((waste, index) => (
          <tr key={index}>
            <td>{waste.name}</td>
            <td>{waste.number}</td>
            <td>{waste.location}</td>
            <td>{waste.date}</td>
            <td>{waste.nature}</td>
            <td>
              <button className="btn btn-danger mb-3 btn-sm" onClick={() => onDelete(index)}>Delete</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}