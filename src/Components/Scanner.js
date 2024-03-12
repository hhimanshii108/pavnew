import React, { useState } from "react";
import { QrReader } from "react-qr-reader_multiformatreader";
import "./Scanner.css"; // Import the CSS file for styling

const Scanner = (props) => {
  const [data, setData] = useState("No result");
  const [found, setFound] = useState(false); // State to track if the ID is found

  // Predefined list of IDs
  const predefinedIds = [
    "CILAPH18315",
    "CILAPH14000",
    "FDLT210834",
    "ADLT210829",
  ];

  // Function to check if the extracted ID matches any predefined ID
  const checkId = (id) => {
    return predefinedIds.includes(id);
  };

  // Function to extract ID from data
  const extractId = (data) => {
    const dataArray = data.split(",");
    const id = dataArray[1];
    return id;
  };

  // Function to reset the scanner
  const handleReset = () => {
    setData("No result");
    setFound(false);
  };

  return (
    <div className="scanner-container">
      <QrReader
        onResult={(result, error) => {
          if (!!result) {
            const extractedId = extractId(result.text);
            const isFound = checkId(extractedId);
            setData(result.text);
            setFound(isFound);
          }
          if (!!error) {
            console.error(error);
          }
        }}
        style={{ width: "100%" }}
        facingMode="environment" // Set facing mode to environment
      />
      <div className="result-container">
        <p className="data">{data}</p>
        <p className={found ? "found" : "not-found"}>
          {found ? "Found" : "Not found"}
        </p>
        <button onClick={handleReset} className="reset-button">
          Reset
        </button>
      </div>
    </div>
  );
};

export default Scanner;
