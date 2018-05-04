import React from "react";

class MenuWidget extends React.Component {
  render() {
    const { findByCurrency, resetArray } = this.props;
    return (
      <div style={styles.container}>
        <div onClick={resetArray} className="buttonHeader">
          <p>ALL</p>
        </div>
        <div onClick={() => findByCurrency("BTC")} className="buttonHeader">
          <p>BTC</p>
        </div>
        <div onClick={() => findByCurrency("ETH")} className="buttonHeader">
          <p>ETH</p>
        </div>
        <div className="buttonHeader">
          <p>FIAT</p>
        </div>
        <div className="buttonHeader">
          <p>FAVS</p>
        </div>
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
