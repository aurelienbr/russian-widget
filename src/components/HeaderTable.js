import React from "react";
import ArrowDown from "react-icons/lib/fa/long-arrow-down";

class HeaderTable extends React.Component {
  renderArrow = value => (value ? <ArrowDown /> : null);
  render() {
    const {
      orderByAlphabet,
      orderByPrice,
      orderedByAlphabet,
      orderedByPrice,
      orderedByVolume,
      orderByVolume
    } = this.props;

    return (
      <div style={styles.containerStyle}>
        <div
          onClick={orderByAlphabet}
          style={styles.containerButton}
          className="buttonHeader"
        >
          <p>Tickers {this.renderArrow(orderedByAlphabet)}</p>
        </div>
        <div
          onClick={orderByVolume}
          style={styles.containerButton}
          className="buttonHeader"
        >
          <p>Volume {this.renderArrow(orderedByVolume)}</p>
        </div>
        <div
          onClick={orderByPrice}
          style={styles.containerButton}
          className="buttonHeader"
        >
          <p>Price {this.renderArrow(orderedByPrice)}</p>
        </div>
        <div style={styles.containerButton} className="buttonHeader">
          <p>Change</p>
        </div>
      </div>
    );
  }
}

const styles = {
  containerStyle: {
    display: "flex",
    justifyContent: "space-around",
    border: "1px solid #95a5a6",
    borderBottom: "0px"
  },
  containerButton: {
    flex: 1,
    alignText: "center",
    display: "flex",
    justifyContent: "center"
  }
};

export default HeaderTable;
