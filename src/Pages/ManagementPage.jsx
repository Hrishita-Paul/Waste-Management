import React, { useState,useEffect} from 'react';
import Table from "../Components/Table.jsx"
import './ManagementPage.css'
export default function ManagementPage({ wastes, setWastes }) {
  const [password, setPassword] = useState('');
  const [loggedIn, setLoggedIn] = useState(false);
  const [toggle, setToggle] = useState("bio");
  const [revenueCount, setRevenueCount] = useState(0);

  useEffect(() => {
    setRevenueCount(JSON.parse(localStorage.getItem("revenue")) || 10000);
  }, []);
  
  // Deletes a waste entry from the list
  const handleDeleteWaste = (index) => {
    const wasteObj = JSON.parse(localStorage.getItem('wastes'));
    const filteredData = toggle === "bio"
      ? wastes.filter(waste => waste.nature !== "Plastic waste")
      : toggle === "non-bio"
        ? wastes.filter(waste => waste.nature === "Plastic waste")
        : wastes;

    const itemToDelete = filteredData[index];
    const itemIndexToDelete = wastes.indexOf(itemToDelete);

    if (itemIndexToDelete > -1) {
      const nature = wasteObj[itemIndexToDelete].nature;
      let additionalRevenue = 0;
      if (nature === "Dairy") additionalRevenue = 500;
      else if (nature === "Pulp and Paper" || nature === "Fertilizer") additionalRevenue = 1000;
      else if (nature === "Plastic waste") additionalRevenue = 2000;
      else if (nature === "Food waste") additionalRevenue = 100;
      else if (nature === "Dispensary waste") additionalRevenue = 200;
      else if (nature === "Other") additionalRevenue = 100;

      setRevenueCount((prevRevenue) => prevRevenue + additionalRevenue);

      localStorage.setItem("revenue", JSON.stringify(revenueCount + additionalRevenue));

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
      <div className="managementpage-content">
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
      </div>
    );
  }

  // If the user is logged in, display the waste management content
  return (
    <div className="managementpage-content">
      <h2 classname="revenue">Revenue Generated:{revenueCount}</h2>
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


