import React, { Component } from 'react';
import './ColorPicker.css';
class ColorPicker extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
      selectedColor: null,
    };
  }

  toggleColorList = () => {
    this.setState((prevState) => ({
      isOpen: !prevState.isOpen,
    }));
  };

  selectColor = (color) => {
    this.setState({
      isOpen: false,
      selectedColor: color,
    });
  };

  render() {
    const { colors } = this.props;
    const { isOpen, selectedColor } = this.state;

    return (
      <div className="color-picker">
        <button onClick={this.toggleColorList}>Pick a color</button>
        {isOpen && (
          <div className="color-list">
            {colors.map((color, index) => (
              <div
                key={index}
                className="color-square"
                style={{ backgroundColor: color }}
                onClick={() => this.selectColor(color)}
              ></div>
            ))}
          </div>
        )}
        {selectedColor && (
          <div className="selected-color">
            Selected Color: <span style={{ backgroundColor: selectedColor }}></span>
          </div>
        )}
      </div>
    );
  }
}

export default ColorPicker;
