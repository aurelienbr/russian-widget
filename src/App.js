import React, { Component } from "react";
import "./App.css";
import axios from "axios";
import MenuWidget from "./components/MenuWidget";
import HeaderWidget from "./components/HeaderWidget";
import MainTable from "./components/MainTable";

const API = "https://front.bitqi.com/";

class App extends Component {
  state = {
    data: {},
    width: 0,
    loading: true
  };

  componentDidMount() {
    const width =
      window.innerWidth ||
      document.documentElement.clientWidth ||
      document.body.clientWidth;
    this.setState({
      width
    });
    axios.get(API + "/api/fo/Market/GetMarkets").then(response => {
      let finalArray = [];
      response.data.marketsList.forEach(element => {
        element.derivedCurrencyList.forEach(newArray => {
          finalArray = [
            ...finalArray,
            {
              currencyName: element.currencyName,
              derivedCurrencyName: newArray.derivedCurrencyName,
              price: newArray.price
            }
          ];
        });
      });
      this.setState({
        data: finalArray,
        loading: false
      });
    });
  }

  render() {
    const { data, width, loading } = this.state;
    if (loading) {
      return <div />;
    }

    return (
      <div
        style={{
          width: width * 0.3,
          height: width * 0.3,
          padding: 20,
          border: "1px solid #95a5a6",
          marginTop: 20,
          marginLeft: 20
        }}
      >
        <HeaderWidget />
        <MenuWidget />
        <MainTable data={data} />
      </div>
    );
  }
}

export default App;
