import React, { Component } from "react";
import "./App.css";
import axios from "axios";
import MenuWidget from "./components/MenuWidget";
import HeaderWidget from "./components/HeaderWidget";
import MainTable from "./components/MainTable";
import HeaderTable from "./components/HeaderTable";

const API = "https://front.bitqi.com/";

class App extends Component {
  state = {
    data: {},
    originalData: {},
    width: 0,
    loading: true,
    orderedByAlphabet: false,
    orderedByPrice: false
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
        originalData: finalArray,
        loading: false
      });
    });
  }

  orderByAlphabet = () => {
    const { data, orderedByAlphabet } = this.state;
    let sortedArray = [];
    if (!orderedByAlphabet) {
      sortedArray = data.sort(function(a, b) {
        if (a.currencyName < b.currencyName) return -1;
        else if (a.currencyName > b.currencyName) return 1;
        return 0;
      });
    } else if (orderedByAlphabet) {
      sortedArray = data.sort(function(a, b) {
        if (a.currencyName > b.currencyName) return -1;
        else if (a.currencyName < b.currencyName) return 1;
        return 0;
      });
    }
    this.setState({
      data: sortedArray,
      orderedByAlphabet: !this.state.orderedByAlphabet
    });
  };

  orderByPrice = () => {
    const { data, orderedByPrice } = this.state;
    let sortedArray = [];
    if (orderedByPrice) {
      sortedArray = data.sort(function(a, b) {
        if (a.price < b.price) return -1;
        else if (a.price > b.price) return 1;
        return 0;
      });
    } else if (!orderedByPrice) {
      sortedArray = data.sort(function(a, b) {
        if (a.price > b.price) return -1;
        else if (a.price < b.price) return 1;
        return 0;
      });
    }
    this.setState({
      data: sortedArray,
      orderedByPrice: !this.state.orderedByPrice
    });
  };

  findByCurrency = currencyName => {
    const { originalData } = this.state;
    const newArray = originalData
      .map(element => {
        if (element.derivedCurrencyName === currencyName) {
          return {
            derivedCurrencyName: element.currencyName,
            price: element.price
          };
        }
      })
      .filter(value => value !== undefined);
    this.setState({
      data: newArray
    });
  };

  resetArray = () => {
    this.setState({
      data: this.state.originalData
    });
  };

  render() {
    const {
      data,
      width,
      loading,
      orderedByPrice,
      orderedByAlphabet
    } = this.state;
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
          marginLeft: 20,
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between"
        }}
      >
        <HeaderWidget />
        <MenuWidget
          resetArray={this.resetArray}
          findByCurrency={this.findByCurrency}
        />
        <HeaderTable
          orderedByPrice={orderedByPrice}
          orderedByAlphabet={orderedByAlphabet}
          orderByPrice={this.orderByPrice}
          orderByAlphabet={this.orderByAlphabet}
        />
        <MainTable data={data} />
      </div>
    );
  }
}

export default App;
