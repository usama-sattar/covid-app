import React, { Component } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { createStackNavigator } from "@react-navigation/stack";
import "react-native-gesture-handler";
import { ProductProvider } from "./context";
import World from "./component/World";
import Countries from "./component/Countries";
import Favourite from "./component/Favourite";
import Country from "./component/Country";

const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();
class App extends Component {
  state = {};
  drawer = () => {
    return (
      <Drawer.Navigator initialRouteName="World">
        <Drawer.Screen name="World" component={World} />
        <Drawer.Screen name="Countries" component={Countries} />
        <Drawer.Screen name="Favourite" component={Favourite} />
      </Drawer.Navigator>
    );
  };
  render() {
    return (
      <ProductProvider>
        <NavigationContainer>
          <Stack.Navigator initialRouteName="drawer">
            <Stack.Screen
              name="drawer"
              component={this.drawer}
              options={{
                title: "Covid-app",
                headerStyle: {
                  backgroundColor: "#eb4f34",
                },
                headerTintColor: "#fff",
                headerTitleStyle: {
                  fontWeight: "bold",
                  color: "black",
                },
              }}
            />
            <Stack.Screen
              name="Country"
              component={Country}
              options={{
                title: "Covid-app",
                headerStyle: {
                  backgroundColor: "#eb4f34",
                },
                headerTintColor: "#fff",
                headerTitleStyle: {
                  fontWeight: "bold",
                  color: "black",
                },
              }}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </ProductProvider>
    );
  }
}

export default App;
