
import React, { useState} from 'react';
export default function ManagementPage({ wastes, setWastes }) {
  const [password, setPassword] = useState('');
  const [loggedIn, setLoggedIn] = useState(false);

  // Deletes a waste entry from the list
  const handleDeleteWaste = (index) => {
    const wasteObj = [...wastes];
    wasteObj.splice(index, 1);
    localStorage.setItem('wastes', JSON.stringify(wasteObj));
    setWastes(wasteObj);
  };

  // Clears all waste entries
  const handleClearAll = () => {
    localStorage.removeItem('wastes');
    setWastes([]);
  };

  // Handles the login form submission
  const handleLogin = (e) => {
    e.preventDefault();
    if (password === '123') {
      setLoggedIn(true);
    } else {
      alert('Invalid password');
    }
  };

  // If user is not logged in, display the login form
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

  // If user is logged in, display the waste management content
  return (
    <div className="page-content">
      <h2>Entries of Waste</h2>

      {wastes.length > 0 ? (
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
            {wastes.map((waste, index) => (
              <tr key={index}>
                <td>{waste.name}</td>
                <td>{waste.number}</td>
                <td>{waste.location}</td>
                <td>{waste.date}</td>
                <td>{waste.nature}</td>
                <td>
                  <button className="btn btn-danger mb-3 btn-sm" onClick={() => handleDeleteWaste(index)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p>No waste entries found.</p>
      )}

      <button className="btn btn-danger mb-3 clear-all-button" onClick={handleClearAll}>
        Clear All
      </button>
    </div>
  );
}
