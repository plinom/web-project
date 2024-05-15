import React from "react";
import InputWindow from "../components/InputWindow";

const App: React.FC = () => {
  return (
    <div>
      <h1>Input Window Example</h1>
      <div style={{marginTop: "20px"}}>
        <InputWindow />
      </div>
      <div style={{marginTop: "20px"}}>
        <InputWindow />
      </div>
      <div style={{marginTop: "20px"}}>
        <InputWindow />
      </div>
      <div style={{marginTop: "20px"}}>
        <InputWindow />
      </div>
      <div style={{marginTop: "20px"}}>
        <InputWindow />
      </div>
    </div>
  );
};

export default App;
