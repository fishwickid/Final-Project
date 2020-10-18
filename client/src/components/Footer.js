import React from "react";

// Material UI Components
import "fontsource-roboto";



// Background 
var sectionStyle = {
  width: "100%",
  height: "100px",
  backgroundColor: "#282728",
  position: "fixed",
  bottom: "0",
  padding: "20px",
};

const footer = () => {
  return (
    <div style={sectionStyle}>
      
        <h4
          style={{
            width: "100%",
            fontFamily: "pacifico",
            fontSize: "23px",
            color: "#fff",
            letterSpacing: "1.7px",
          }}
        >
          Thanks for jamming on Jam Sesh
        </h4>
    
    </div>
  );
};

export default footer;
