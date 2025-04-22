import React, { useState } from "react";

const Matrix3 = () => {
  const size = 3;
  const total = size * size;
  const lastBoxIndex = total - 1;

  const [colors, setColors] = useState(Array(total).fill("white"));
  const [clickSequence, setClickSequence] = useState([]);

  const handleBoxClick = (index) => {
    if (index === lastBoxIndex) {
      clickSequence.forEach((clickedIndex, i) => {
        setTimeout(() => {
          setColors((prevColors) => {
            const updated = [...prevColors];
            updated[clickedIndex] = "orange";
            return updated;
          });
        }, i * 200);
      });
      return;
    }
    
    if (!clickSequence.includes(index)) {
      const updatedColors = [...colors];
      updatedColors[index] = "green";
      setColors(updatedColors);
      setClickSequence([...clickSequence, index]);
    }
  };
  return (
    <div className="main">
      
      <div className="grid_container">
      <h1>Welcome to Matrix Game</h1>
      <div className="grid">
      {Array.from({ length: total }).map((_, index) => (
        <div
          key={index}
          style={{backgroundColor:colors[index],transition: "background-color 100ms"}}
          onClick={() => handleBoxClick(index)}
          className="box"
        >{index + 1}</div>
      ))}
      </div>
      </div>
    </div>
  );
};

export default Matrix3;
