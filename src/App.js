import React from 'react';
import ColorPicker from './ColorPicker';
import './App.css';
function App() {
  const colors = ['#FF5733', '#33FF57', '#5733FF', '#FF33AA', '#33AABB','#D43614','#CB14D4','#CED414'];
  return (
    <div className="App">
      <h1>Color Picker App</h1>
      <ColorPicker colors={colors}/>
    </div>
  );
}
export default App;
