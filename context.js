import React, { Component } from "react";
const ProductContext = React.createContext();
import axios from "axios";
import { Text} from "react-native";
import AsyncStorage from '@react-native-community/async-storage'
import Country from "./component/Country";

class ProductProvider extends Component {
  state = {
    totalCases: [{}],
    countryCases: [{}],
    totalPopulation: 0,
    isLoading: true,
    allCountries: [],
    keyIndex:0,
    favourites: []
  };

  componentDidMount() {
    this.getCases();
    this.getPopulation();
    this.getCountries();
    this.getFavourite();
  }
  getCases() {
    return fetch("https://covid-19-data.p.rapidapi.com/totals", {
      method: "GET",
      headers: {
        "x-rapidapi-key": "4d09bd9429msh332584f2d2ff7d2p1dc200jsn7f7a253fad40",
        "x-rapidapi-host": "covid-19-data.p.rapidapi.com",
      },
    })
      .then((response) => response.json())
      .then((responseJson) => {
        this.setState(
          {
            isLoading: false,
            totalCases: responseJson,
          },
          function () {
            console.log(this.state.totalCases);
          }
        );
      })
      .catch((error) => {
        console.error(error);
      });
  }
  getPopulation() {
    return fetch("https://world-population.p.rapidapi.com/worldpopulation", {
      method: "GET",
      headers: {
        "x-rapidapi-key": "4d09bd9429msh332584f2d2ff7d2p1dc200jsn7f7a253fad40",
        "x-rapidapi-host": "world-population.p.rapidapi.com",
      },
    })
      .then((response) => response.json())
      .then((responseJson) => {
        console.log(responseJson);
        this.setState(
          {
            totalPopulation: responseJson.body.world_population,
          },
          function () {
            console.log(this.state.totalPopulation);
          }
        );
      })
      .catch((error) => {
        console.error(error);
      });
  }
  getCountries() {
    return fetch("https://world-population.p.rapidapi.com/allcountriesname", {
      method: "GET",
      headers: {
        "x-rapidapi-key": "4d09bd9429msh332584f2d2ff7d2p1dc200jsn7f7a253fad40",
        "x-rapidapi-host": "world-population.p.rapidapi.com",
      },
    })
      .then((response) => response.json())
      .then((responseJson) => {
        this.setState({
          allCountries: responseJson.body.countries,
        });
      })
      .catch((error) => {
        console.error(error);
      });
  }
  getCountry = (e,i) => {
    console.log(e);
    return fetch(`https://covid-19-data.p.rapidapi.com/country?name=${e}`, {
      method: "GET",
      headers: {
        "x-rapidapi-key": "4d09bd9429msh332584f2d2ff7d2p1dc200jsn7f7a253fad40",
        "x-rapidapi-host": "covid-19-data.p.rapidapi.com",
      },
    })
      .then((response) => response.json())
      .then((responseJson) => {
        console.log(responseJson);
        this.setState(
          {
            isLoading: false,
            keyIndex:i,
            countryCases: responseJson,
          },
          function () {
            console.log(this.state.countryCases);
          }
        );
      })
      .catch((error) => {
        console.error(error);
      });
  };
  
setFavourite=(e)=>{
  let country = e.country
  let key = this.state.keyIndex.toString()
  AsyncStorage.setItem(key, country)
  this.getFavourite()
}
getFavourite = async () => {
  try {
    const keys = await AsyncStorage.getAllKeys()
    const items = await AsyncStorage.multiGet(keys)
    let objs = items.map((x)=> { 
      return { 
        id: x[0], 
        country: x[1] 
      }; 
    });
    console.log(objs)
    this.setState({
      favourites: objs
    })

} catch (error) {
    console.log(error, "problem")
}
}
removeItem = async (index)=>{
  await AsyncStorage.removeItem(index)
  this.getFavourite()
}
  render() {
    return this.state.isLoading ? (
      <Text style={{ textAlign: "center", marginTop: 100, fontSize: 20 }}>
        Loading...
      </Text>
    ) : (
      <ProductContext.Provider
        value={{
          totalCases: this.state.totalCases,
          totalPopulation: this.state.totalPopulation,
          selectedCountry: this.state.selectedCountry,
          allCountries: this.state.allCountries,
          getCountry: this.getCountry,
          countryCases: this.state.countryCases,
          favourites: this.state.favourites,
          setFavourite: this.setFavourite,
          getFavourite: this.getFavourite,
          removeItem: this.removeItem
        }}
      >
        {this.props.children}
      </ProductContext.Provider>
    );
  }
}
const ProductConsumer = ProductContext.Consumer;

export { ProductConsumer, ProductProvider };
