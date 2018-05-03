import React from "react";

const BUTTONS = [
  {
    name: "Tickers"
  },
  {
    name: "Volume"
  },
  {
    name: "Price"
  },
  {
    name: "Change"
  }
];

class HeaderTable extends React.Component {
  render() {
    return (
      <div style={styles.containerStyle}>
        {BUTTONS.map(button => (
          <div className="buttonHeader">
            <p>{button.name}</p>
          </div>
        ))}
      </div>
    );
  }
}

const styles = {
  containerStyle: {
    display: "flex",
    justifyContent: "space-around"
  }
};

export default HeaderTable;
