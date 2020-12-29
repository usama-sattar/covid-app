import React, { Component } from "react";
import {
  Text,
  View,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
  ScrollView,
} from "react-native";
import { ProductConsumer } from "../context";

class Countries extends Component {
  state = {};
  render() {
    return (
      <ProductConsumer>
        {(value) => {
          return (
            <View style={styles.container}>
              <View>
                <Text style={{ fontSize: 30, fontWeight: "bold" }}>
                  Countries Stats
                </Text>
              </View>
              <ScrollView style={styles.scroll}>
                {value.allCountries.map((country, index) => (
                  <TouchableOpacity
                    style={styles.btn}
                    onPress={() =>
                      value.getCountry(value.allCountries[index],index)
                      .then( this.props.navigation.navigate("Country"))
                    
                    }
                  >
                    <Text style={{ fontSize: 20 }}>{country}</Text>
                  </TouchableOpacity>
                ))}
              </ScrollView>
            </View>
          );
        }}
      </ProductConsumer>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5c1b8",
    alignItems: "center",
  },
  scroll: {
    marginTop: 20,
    backgroundColor: "#f5dad5",
    marginBottom: 50
  },
  btn: {
    height: 30,
  },
});
export default Countries;
