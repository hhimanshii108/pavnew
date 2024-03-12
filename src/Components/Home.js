import React from "react";
import { useNavigate } from "react-router-dom";
import "./Home.css"; // Import the CSS file for styling

const Home = () => {
  const navigate = useNavigate(); // Initialize useHistory hook

  // Function to handle button click for upload
  const handleUploadClick = () => {
    navigate("/upload"); // Redirect to the /upload route
  };

  // Function to handle button click for scan
  const handleScanClick = () => {
    navigate("/scanner"); // Redirect to the /scanner route
  };

  return (
    <div className="card">
      <center>
        <h2>PAV</h2>
      </center>
      <div className="button-container">
        {/* Attach onClick handlers to the buttons */}

        <button className="button" onClick={handleUploadClick}>
          Upload
        </button>
        <button className="button" onClick={handleScanClick}>
          Scan
        </button>
      </div>
    </div>
  );
};

export default Home;
