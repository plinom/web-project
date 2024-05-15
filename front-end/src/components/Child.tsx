// ChildComponent.js
import React, { useState } from 'react';

const ChildComponent = () => {
  const [jsonData, setJsonData] = useState(null);

  const handleButtonClick = () => {
    // Simulated JSON data
    const data = {
      name: "John Doe",
      age: 30,
      occupation: "Developer"
    };
    setJsonData(data);
  };

  return (
    <div>
      <h3>Child Component</h3>
      <p>This is the child component.</p>
      <button onClick={handleButtonClick} className='bg-black text-white'>Show JSON Info</button>
      {jsonData && (
        <pre>{JSON.stringify(jsonData, null, 2)}</pre>
      )}
    </div>
  );
};

export default ChildComponent;
