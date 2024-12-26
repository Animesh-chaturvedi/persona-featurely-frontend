import React from "react";

const DisplayText = ({ data }) => {
  const renderContent = (data) => {
    if (Array.isArray(data)) {
      return (
        <ul className="list-disc list-inside pl-4">
          {data.map((item, index) => (
            <li key={index} className="text-gray-700">{item}</li>
          ))}
        </ul>
      );
    } else if (typeof data === "object" && data !== null) {
      return Object.entries(data).map(([key, value]) => (
        <div key={key} className="mb-4">
          <h3 className="text-lg font-bold text-gray-800 capitalize">{key.replace(/_/g, " ")}</h3>
          {renderContent(value)}
        </div>
      ));
    } else {
      return <p className="text-gray-700">{data}</p>;
    }
  };

  return <div>{renderContent(data)}</div>;
};

export default DisplayText;
