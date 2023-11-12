import React, { useState } from 'react';
import './UserPage.css'
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
    alert('Entry saved successfully');
    setName('');
    setNumber('');
    setNature('');
    setLocation('');
    setDate('');

    // Invoke the callback function to notify the parent component (App) about the entry being saved
    onEntrySaved();
  };

  return (
    <div className="userpage-content">
      
      
      <img src="https://th.bing.com/th/id/OIG.HXYgMofmjsq2pKMKVbYd?pid=ImgGn" />
      <div id="#about">
      <div class="accordion" id="accordionExample">
        <div className="accordion-item">
          <h2 class="accordion-header">
            <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
            <p className="header">1. What we do?</p>
            </button>
          </h2>
          <div id="collapseOne" class="accordion-collapse collapse show" data-bs-parent="#accordionExample">
            <div class="accordion-body">
              <strong>At the forefront of environmental sustainability, our Waste Management website aims to transform how we handle and dispose of waste on campus.
                Our comprehensive system seamlessly integrates information collection, waste sorting, and efficient communication with third-party organizations for responsible waste disposal and recycling.</strong>
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 class="accordion-header">
            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
            <p className="header">2. Data collection and sorting</p>
            </button>
          </h2>
          <div id="collapseTwo" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
            <div class="accordion-body">
              <strong>Our innovative platform facilitates the easy and systematic collection of information about various types of waste found on the campus.
                Through user-friendly interfaces, students, faculty, and staff can report and categorize waste items effortlessly.
                Leveraging advanced sorting algorithms, our system categorizes reported waste items based on their nature.
                Whether it's recyclable materials, organic waste, or general refuse, our technology ensures precise identification.</strong>
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 class="accordion-header">
            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
              <p className="header">3. Implementation</p>
            </button>
          </h2>
          <div id="collapseThree" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
            <div class="accordion-body">
              <strong>This website features a centralized management page that acts as the nerve center for overseeing the waste management process.
                Through this interface, designated personnel can access detailed reports, monitor trends, and make informed decisions regarding waste handling.
                The management page serves as a powerful tool for optimizing waste management strategies and improving overall sustainability efforts.</strong>
            </div>
          </div>
        </div>
      </div>
      </div>
      <h2 className="heading">Details of wastes</h2>
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
              required
            />
          </div>
          <div className="col-md-6">
            <label htmlFor="addNumber" className="form-label">
              Contact number
            </label>
            <input
              type="number"
              className="form-control"
              id="addNumber"
              placeholder="Enter your contact number"
              value={number}
              onChange={handleNumberChange}
              required
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
              required
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
              required
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

        <button type="submit" className="btn btn-primary mt-3 save">
          Save your entry
        </button>
      </form>
      <div className="para"><p>Your interest in our services and commitment to responsible waste disposal is deeply appreciated.
        We are dedicated to providing efficient and sustainable waste management solutions that make a positive impact on our environment.
        Your visit demonstrates your commitment to this cause, and for that, we thank you.</p></div>
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