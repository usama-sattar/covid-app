import React, { Component } from 'react';
import {
    Text,
    View,
    TouchableOpacity,
    StyleSheet,
    ScrollView,
  } from "react-native";
  import { ProductConsumer } from "../context";

  class Favourite extends Component {
    state = {}
    render() { 
        return (
            <ProductConsumer>
            {(value) => {
              return (
                <View style={styles.container}>
                  <View>
                    <Text style={{ fontSize: 30, fontWeight: "bold" }}>
                      Favourite Stats
                    </Text>
                  </View>
                  <ScrollView style={styles.scroll}>
                    {value.favourites.map((item, index) => (
                      <View>
                      <TouchableOpacity
                        style={styles.btn}
                        onPressIn={() =>
                          value.getCountry(item.country)
                        }
                        onPressOut={() => this.props.navigation.navigate("Country")}
                      >
                        <Text style={{ fontSize: 20 }}>{item.country}</Text>
                      </TouchableOpacity>
                      <TouchableOpacity
                        style={styles.remove}
                        onPress={() => value.removeItem(item.id)}
                      >
                        <Text style={styles.cross}>X</Text>
                      </TouchableOpacity>
                      </View>

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
    remove: {
      backgroundColor: "maroon",
      width: 25,
      height: 25,
      textAlign: "center",
      borderRadius: 20,
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      alignSelf:'center',
    },
  });
export default Favourite;