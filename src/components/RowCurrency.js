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
  render() {
    const { data } = this.props;

    return (
      <div>
        <div style={styles.containerRow}>
          <div>
            <p>
              {data.currencyName} / {data.derivedCurrencyName}
            </p>
          </div>
          <div />
          <div>
            <p>{data.price}</p>
          </div>
          <div>
            <p>change</p>
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
  }
};

export default RowCurrency;
