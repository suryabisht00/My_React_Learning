import React, { useState } from "react";

function ColorPicker() {
  const [color, setcolor] = useState("#FFFFFF");
  const [bgcolor, setbackgruoundcolor] = useState("#FFFFFF");

  function handlecolorchange(event) {
    setcolor(event.target.value);
  }

  function handlebgcolorchange(event) {
    setbackgruoundcolor(event.target.value);
  }

  return (
    <div className="color-picker-container">
      <div
        className="bg-color-picker-container"
        style={{ backgroundColor: bgcolor }}
      >
        <h1>Color Picker</h1>
        <label>select a color : </label>
        <input type="color" value={color} onChange={handlecolorchange} />
        <div className="color-display" style ={{ backgroundColor: color }}>
          <p>Selected Color : {color} </p>
        </div>

        <div className="bg-color-display">
        <label>select a color for background : </label>
        <input type="color" value={bgcolor} onChange={handlebgcolorchange} />
          <p>Selected Color : {bgcolor} </p>
        </div>
      </div>
    </div>
  );
}

export default ColorPicker;
