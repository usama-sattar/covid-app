import React, { Component } from "react";
import {
  Text,
  View,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import { ProductConsumer } from "../context";

class World extends Component {
  state = {};
  render() {
    return (
      <ProductConsumer>
        {(value) => {
          return (
            <View style={styles.container}>
              <Text style={{ fontSize: 30, fontWeight: "bold", marginTop: 20 }}>
                World Stats
              </Text>
              <Text style={styles.heading}>Total Population</Text>
              <Text style={styles.text}>{value.totalPopulation}</Text>
              {value.totalCases.map((item, index) => (
                <View style={{ alignItems: "center" }}>
                  <Text style={styles.heading}>Total Cases</Text>

                  <Text style={styles.text}>{item.confirmed}</Text>

                  <Text style={styles.text}>{`Confirmed %: ${(
                    (item.confirmed * 100) /
                    value.totalPopulation
                  ).toFixed(2)}`}</Text>
                  <Text style={styles.text}>{`Recovered %: ${(
                    (item.recovered * 100) /
                    value.totalPopulation
                  ).toFixed(2)}`}</Text>
                  <Text style={styles.text}>{`Death %: ${(
                    (item.deaths * 100) /
                    value.totalPopulation
                  ).toFixed(2)}`}</Text>
                  <Text style={styles.text}>{`Critical %: ${(
                    (item.critical * 100) /
                    value.totalPopulation
                  ).toFixed(2)}`}</Text>
                  <Text
                    style={styles.text}
                  >{`Last Updated: \n${item.lastUpdate}`}</Text>
                </View>
              ))}
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

  heading: {
    fontSize: 25,
  },
  text: {
    fontSize: 20,
    color: "#520c00",
    fontWeight: "400"
  },
});
export default World;
