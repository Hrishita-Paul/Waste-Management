import React, { useState } from 'react';

export default function UserPage({ onEntrySaved }) {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const [nature, setNature] = useState('');
  const [location, setLocation] = useState('');
  const [date, setDate] = useState('');

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleNumberChange = (event) => {
    setNumber(event.target.value);
  };

  const handleNatureChange = (event) => {
    setNature(event.target.value);
  };

  const handleLocationChange = (event) => {
    setLocation(event.target.value);
  };

  const handleDateChange = (event) => {
    setDate(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    let wasteObj = localStorage.getItem('wastes') ? JSON.parse(localStorage.getItem('wastes')) : [];

    const obj = {
      name,
      number,
      nature,
      location,
      date,
      isDone: false,
    };

    wasteObj.push(obj);
    localStorage.setItem('wastes', JSON.stringify(wasteObj));

    setName('');
    setNumber('');
    setNature('');
    setLocation('');
    setDate('');
    // Invoke the callback function to notify the parent component (App) about the entry being saved
    onEntrySaved();
  };

  return (
    <div className="page-content">
      <h2 className="heading">Details of wastes</h2>
      <img src="https://wallpaperaccess.com/full/4190899.jpg"/>

      <form onSubmit={handleSubmit}>
        <div className="row g-3">
          <div className="col-md-6">
            <label htmlFor="addName" className="form-label">
              Name
            </label>
            <input
              type="text"
              className="form-control"
              id="addName"
              placeholder="Enter your name"
              value={name}
              onChange={handleNameChange}
            />
          </div>
          <div className="col-md-6">
            <label htmlFor="addNumber" className="form-label">
              Contact number
            </label>
            <input
              type="text"
              className="form-control"
              id="addNumber"
              placeholder="Enter your contact number"
              value={number}
              onChange={handleNumberChange}
            />
          </div>
          <div className="col-12">
            <label htmlFor="addLocation" className="form-label">
              Location
            </label>
            <input
              type="text"
              className="form-control"
              id="addLocation"
              placeholder="Location of the waste"
              value={location}
              onChange={handleLocationChange}
            />
          </div>

          <div className="col-md-6">
            <label htmlFor="addDate" className="form-label">
              Waste found on:
            </label>
            <input
              type="date"
              className="form-control"
              id="addDate"
              placeholder="Enter the date on which waste was spotted"
              value={date}
              onChange={handleDateChange}
            />
          </div>
          <div className="col-md-6">
            <label htmlFor="addNature" className="form-label">
              Nature of waste
            </label>

            <input
              className="form-control"
              list="datalistOptions"
              id="addNature"
              placeholder="Type to search..."
              value={nature}
              onChange={handleNatureChange}
            />
            <datalist id="datalistOptions">

              <option value="Dairy" />
              <option value="Pulp and Paper" />
              <option value="Fertilizer" />
              <option value="Plastic waste" />
              <option value="Food waste" />
              <option value="Dispensary waste" />
              <option value="Other" />

            </datalist>
          </div>
        </div>

        <button  type="submit" className="btn btn-primary mt-3 save">
          Save your entry
        </button>
      </form>
      <footer className="footer">
        <div className="references">
          <p>References</p>
          <a href="https://www.nature.org/en-us/about-us/where-we-work/united-states/delaware/stories-in-delaware/delaware-eight-ways-to-reduce-waste/" target="_blank">Community waste management</a>
          <a href="https://www.epa.gov/homeland-security-waste/waste-management-benefits-planning-and-mitigation-activities-homeland" target="_blank">Benefits of Waste Management</a>
          <a href="https://www.linkedin.com/advice/0/how-can-community-participation-education" target="_blank">Improving health outcomes</a>
        </div>
        <div className="social">
          <p>Social</p>
          <a href="https://www.linkedin.com/school/national-institute-of-technology-silchar" target="_blank">LinkedIn</a>
          <a href="https://twitter.com/IIC_NITSilchar" target="_blank">Twitter</a>
          <a href="https://www.facebook.com/NIT.Silchar.Assam.India/" target="_blank">Facebook</a>
        </div>
        <div className="terms">
          <a href="https://www.example.com/terms-of-condition" target="_blank">Terms of Condition</a>
          <a href="https://www.example.com/privacy-policy" target="_blank">Privacy Policy</a>
        </div>
      </footer>
    </div>

  );
}