import React from "react";

const BUTTONS = [
  {
    name: "ALL"
  },
  {
    name: "BTC"
  },
  {
    name: "ETH"
  },
  {
    name: "FIAT"
  },
  {
    name: "FAVS"
  }
];

class MenuWidget extends React.Component {
  render() {
    return (
      <div style={styles.container}>
        {BUTTONS.map(button => (
          <div key={button.name} className="buttonHeader">
            <p>{button.name}</p>
          </div>
        ))}
      </div>
    );
  }
}

const styles = {
  container: {
    width: "100%",
    display: "flex",
    justifyContent: "space-around",
    flex: 1
  }
};

export default MenuWidget;
