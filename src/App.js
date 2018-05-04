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
    data: [],
    originalData: [],
    renderFav: false,
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
      let index = 0;
      response.data.marketsList.forEach(element => {
        element.derivedCurrencyList.forEach(newArray => {
          finalArray = [
            ...finalArray,
            {
              id: index,
              currencyName: element.currencyName,
              volume: newArray.volume,
              derivedCurrencyName: newArray.derivedCurrencyName,
              price: newArray.price,
              favorite: false
            }
          ];
          index++;
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

  orderByVolume = () => {
    const { data, orderedByVolume } = this.state;
    let sortedArray = [];
    if (orderedByVolume) {
      sortedArray = data.sort(function(a, b) {
        if (a.volume < b.volume) return -1;
        else if (a.volume > b.volume) return 1;
        return 0;
      });
    } else if (!orderedByVolume) {
      sortedArray = data.sort(function(a, b) {
        if (a.volume > b.volume) return -1;
        else if (a.volume < b.volume) return 1;
        return 0;
      });
    }
    this.setState({
      data: sortedArray,
      orderedByVolume: !this.state.orderedByVolume
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
            id: element.id,
            derivedCurrencyName: element.currencyName,
            price: element.price,
            volume: element.volume
          };
        }
      })
      .filter(value => value !== undefined);

    this.setState({
      data: newArray,
      renderFav: false
    });
  };

  addFavorite = dataToFav => {
    const { data } = this.state;
    const arrayWithFav = data.map(element => {
      if (dataToFav.id === element.id) return { ...element, favorite: true };
      return element;
    });

    this.setState({
      data: arrayWithFav,
      originalData: arrayWithFav
    });
  };

  deleteFavorite = id => {
    const { data } = this.state;
    const arrayWithFav = data.map(element => {
      if (id === element.id) return { ...element, favorite: false };
      return element;
    });

    this.setState({
      data: arrayWithFav,
      originalData: arrayWithFav
    });
  };

  renderFavorites = () => {
    this.setState({
      renderFav: true
    });
  };

  resetArray = () => {
    this.setState({
      data: this.state.originalData,
      renderFav: false
    });
  };

  render() {
    const {
      data,
      width,
      loading,
      orderedByPrice,
      orderedByAlphabet,
      renderFav,
      orderedByVolume
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
          renderFavorites={this.renderFavorites}
        />
        <HeaderTable
          orderedByPrice={orderedByPrice}
          orderedByAlphabet={orderedByAlphabet}
          orderedByVolume={orderedByVolume}
          orderByVolume={this.orderByVolume}
          orderByPrice={this.orderByPrice}
          orderByAlphabet={this.orderByAlphabet}
        />
        <MainTable
          data={data}
          renderFav={renderFav}
          addFavorite={this.addFavorite}
          deleteFavorite={this.deleteFavorite}
        />
      </div>
    );
  }
}

export default App;
