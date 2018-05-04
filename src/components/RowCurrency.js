import React from "react";
import FavEmpty from "react-icons/lib/md/favorite-border";
import FavFull from "react-icons/lib/md/favorite";

class RowCurrency extends React.Component {
  state = {
    /*dataSockets: {},
    loading: true*/
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

  addFavorite = () => {
    const { addFavorite, data } = this.props;
    addFavorite(data);
  };

  deleteFavorite = () => {
    const { deleteFavorite, data } = this.props;
    deleteFavorite(data.id);
  };

  render() {
    const { data } = this.props;

    return (
      <div>
        <div style={styles.containerRow}>
          {data.favorite ? (
            <FavFull onClick={this.deleteFavorite} />
          ) : (
            <FavEmpty onClick={this.addFavorite} />
          )}
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
    justifyContent: "space-around",
    alignItems: "center",
    padding: 5
  },
  containerText: {
    flex: 1,
    display: "flex",
    justifyContent: "center"
  }
};

export default RowCurrency;
