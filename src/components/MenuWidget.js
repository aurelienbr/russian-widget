import React from "react";

class MenuWidget extends React.Component {
  state = {
    selected: "ALL"
  };
  findCurrency = name => {
    const { findByCurrency, resetArray, renderFavorites } = this.props;

    if (name === "ALL") {
      resetArray();
    } else if (name === "FAVS") {
      renderFavorites();
    } else {
      findByCurrency(name);
    }
    this.setState({
      selected: name
    });
  };

  render() {
    const { selected } = this.state;

    return (
      <div style={styles.container}>
        <div onClick={() => this.findCurrency("ALL")} className="buttonHeader">
          <p
            className="textHeader"
            style={selected === "ALL" ? styles.buttonSelected : {}}
          >
            ALL
          </p>
        </div>
        <div onClick={() => this.findCurrency("BTC")} className="buttonHeader">
          <p
            className="textHeader"
            style={selected === "BTC" ? styles.buttonSelected : {}}
          >
            BTC
          </p>
        </div>
        <div onClick={() => this.findCurrency("ETH")} className="buttonHeader">
          <p
            className="textHeader"
            style={selected === "ETH" ? styles.buttonSelected : {}}
          >
            ETH
          </p>
        </div>
        <div onClick={() => this.findCurrency("FIAT")} className="buttonHeader">
          <p
            className="textHeader"
            style={selected === "FIAT" ? styles.buttonSelected : {}}
          >
            FIAT
          </p>
        </div>
        <div onClick={() => this.findCurrency("FAVS")} className="buttonHeader">
          <p
            className="textHeader"
            style={selected === "FAVS" ? styles.buttonSelected : {}}
          >
            FAVS
          </p>
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
  },
  buttonSelected: {
    fontWeight: "bold",
    borderBottom: "2px solid black"
  }
};

export default MenuWidget;
