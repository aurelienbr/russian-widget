import React from "react";
import Select from "react-select";
import "react-select/dist/react-select.css";

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
    const { dataSearch, dataInput, onChangeInput, options, value } = this.props;

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
        <div>
          <Select
            name="form-field-name"
            style={styles.select}
            onChange={onChangeInput}
            value={value}
            options={options}
          />
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
    flex: 1,
    alignItems: "center"
  },
  select: {
    width: 125
  },
  buttonSelected: {
    fontWeight: "bold",
    borderBottom: "2px solid black"
  },
  listData: {
    width: "100%",
    position: "relative",
    bottom: 0
  }
};

export default MenuWidget;
