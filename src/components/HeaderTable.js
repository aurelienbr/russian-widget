import React from "react";
import ArrowDown from "react-icons/lib/fa/long-arrow-down";
import ArrowUp from "react-icons/lib/fa/long-arrow-up";

class HeaderTable extends React.Component {
  renderArrow = value => (value ? <ArrowDown /> : <ArrowUp />);
  render() {
    const {
      orderByAlphabet,
      orderByPrice,
      orderedByAlphabet,
      orderedByPrice,
      orderedByVolume,
      orderByVolume,
      orderedBy
    } = this.props;

    return (
      <div style={styles.containerStyle}>
        <div
          onClick={orderByAlphabet}
          style={styles.containerButton}
          className="buttonHeader"
        >
          <p style={styles.text}>
            Tickers{" "}
            {orderedBy === "alphabet"
              ? this.renderArrow(orderedByAlphabet)
              : null}
          </p>
        </div>
        <div
          onClick={orderByVolume}
          style={styles.containerButton}
          className="buttonHeader"
        >
          <p style={styles.text}>
            Volume{" "}
            {orderedBy === "volume" ? this.renderArrow(orderedByVolume) : null}
          </p>
        </div>
        <div
          onClick={orderByPrice}
          style={styles.containerButton}
          className="buttonHeader"
        >
          <p style={styles.text}>
            Price{" "}
            {orderedBy === "price" ? this.renderArrow(orderedByPrice) : null}
          </p>
        </div>
        <div style={styles.containerButton} className="buttonHeader">
          <p style={styles.text}>Change</p>
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
  },
  text: {
    fontStyle: "italic"
  }
};

export default HeaderTable;
