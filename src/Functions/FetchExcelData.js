import React, { useState } from "react";
import * as XLSX from "xlsx";
import "./Excel.css";

const FetchExcelData = () => {
  const [data, setData] = useState([]); // State to store Excel data
  const [isDataRemoved, setIsDataRemoved] = useState(false);

  const handleFileUpload = (e) => {
    const reader = new FileReader();
    reader.readAsBinaryString(e.target.files[0], "UTF-8"); // Specify the encoding
    reader.onload = (e) => {
      const data = e.target.result;
      const workbook = XLSX.read(data, { type: "binary" });
      const sheetName = workbook.SheetNames[0];
      const sheet = workbook.Sheets[sheetName];
      const parsedData = XLSX.utils.sheet_to_json(sheet);
      setData(parsedData);
    };
  };

  const handleRemoveData = () => {
    setData([]);
    setIsDataRemoved(true);
  };

  return (
    <div>
      <input type="file" accept=".xlsx,.xls" onChange={handleFileUpload} />
      {data.length > 0 && !isDataRemoved && (
        <div>
          <table className="table">
            <thead>
              <tr>
                {Object.keys(data[0]).map((key) => (
                  <th key={key}>{key}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {data.map((row, index) => (
                <tr key={index}>
                  {Object.values(row).map((value, index) => (
                    <td key={index}>{value}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
          <button onClick={handleRemoveData}>Remove Excel</button>
        </div>
      )}
    </div>
  );
};

export default FetchExcelData;
