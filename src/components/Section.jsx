// import React, { useState } from "react";

// const Section = ({ title, data }) => {
//   const [isOpen, setIsOpen] = useState(true);

//   const toggleOpen = () => {
//     setIsOpen(!isOpen);
//   };

//   const renderContent = () => {
//     if (Array.isArray(data)) {
//       return data.map((item, index) => (
//         <Section key={index} title={`Item ${index + 1}`} data={item} />
//       ));
//     } else if (typeof data === "object" && data !== null) {
//       return Object.entries(data).map(([key, value]) => (
//         <Section key={key} title={key} data={value} />
//       ));
//     } else {
//       return <p className="text-gray-700">{data}</p>;
//     }
//   };

//   return (
//     <div className="border border-gray-300 rounded-lg p-4 mb-4">
//       <button
//         onClick={toggleOpen}
//         className="flex items-center justify-between w-full text-left font-bold text-gray-800"
//       >
//         {title}
//         <span>{isOpen ? "-" : "+"}</span>
//       </button>
//       {isOpen && <div className="mt-2 pl-4">{renderContent()}</div>}
//     </div>
//   );
// };

// export default Section;
"use client"
import React, { useState } from "react";

const Section = ({ title, data }) => {
  const [isOpen, setIsOpen] = useState(true);

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

  const renderContent = () => {
    if (Array.isArray(data)) {
      // Handle arrays (could contain objects or primitive values)
      return data.map((item, index) => {
        if (typeof item === "object" && item !== null) {
          // Render object items inside the array
          return (
            <div key={index} className="ml-4 mb-2">
              {Object.entries(item).map(([key, value]) => (
                <p key={key} className="text-gray-700">
                  <strong>{key}:</strong> {typeof value === "string" ? value : JSON.stringify(value)}
                </p>
              ))}
            </div>
          );
        } else {
          // Render primitive items (e.g., strings, numbers)
          return (
            <p key={index} className="text-gray-700 ml-4">
              - {item}
            </p>
          );
        }
      });
    } else if (typeof data === "object" && data !== null) {
      // Handle nested objects
      return Object.entries(data).map(([key, value]) => (
        <div key={key} className="ml-4 mb-2">
          <p className="font-semibold text-gray-800">{key}:</p>
          {typeof value === "object" && value !== null ? (
            renderContent(value) // Recursively handle nested objects
          ) : (
            <p className="text-gray-700">{value}</p>
          )}
        </div>
      ));
    } else {
      // Handle primitive values (e.g., strings, numbers)
      return <p className="text-gray-700 ml-4">{data}</p>;
    }
  };

  return (
    <div className="border border-gray-300 rounded-lg p-4 mb-4">
      <button
        onClick={toggleOpen}
        className="flex items-center justify-between w-full text-left font-bold text-gray-800"
      >
        {title}
        <span>{isOpen ? "-" : "+"}</span>
      </button>
      {isOpen && <div className="mt-2">{renderContent()}</div>}
    </div>
  );
};

export default Section;
