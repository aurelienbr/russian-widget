import React from "react";

class RowCurrency extends React.Component {
  state = {
    dataSockets: {},
    loading: true
  };
  /*constructor(props) {
    super(props);
    this.webSocketConnection = new WebSocket("wss://front.bitqi.com/wss");
  }
  componentDidMount() {
    const { data } = this.props;
    this.webSocketConnection.onopen = () => {
      data.forEach(derivedCurrency => {
        this.webSocketConnection.send(
          JSON.stringify({ marketId: derivedCurrency.marketID })
        );
      });
    };
    this.webSocketConnection.onmessage = event => {
      this.setState({
        dataSockets: JSON.parse(event.data)
      });
    };
  }
  componentWillunmount() {
    this.webSocketConnection.close();
  }*/
  renderCurrency(currencyName, derivedCurrencyName) {
    if (currencyName === undefined) {
      return derivedCurrencyName;
    }
    return `${currencyName} / ${derivedCurrencyName}`;
  }
  render() {
    const { data } = this.props;

    return (
      <div>
        <div style={styles.containerRow}>
          <div style={styles.containerText}>
            <p style={styles.text}>
              {this.renderCurrency(data.currencyName, data.derivedCurrencyName)}
            </p>
          </div>
          <div style={styles.containerText} />
          <div style={styles.containerText}>
            <p style={styles.text}>{data.price}</p>
          </div>
          <div style={styles.containerText}>
            <p style={styles.text}>change</p>
          </div>
        </div>
      </div>
    );
  }
}

const styles = {
  containerRow: {
    display: "flex",
    justifyContent: "space-around"
  },
  containerText: {
    flex: 1,
    display: "flex",
    justifyContent: "center"
  }
};

export default RowCurrency;
