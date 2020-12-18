import 'react-native-gesture-handler';

import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';


import Home from './component/Home/Home';
import Product from './component/Product/Product';
import Chocolate from './component/Product/Chocolate';
import Employee from './components/Employee';
import EmployeeDetail from './component/Employee/EmployeeDetail'
import Order from './component/Order';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={Home}
          options={{
            title: 'Home Page', 
            headerStyle: {
              backgroundColor: 'cyan', 
            },
            headerTintColor: 'blue', 
            headerTitleStyle: {
              fontWeight: 'bold', 
            },
          }}
        />
        <Stack.Screen
          name="Product"
          component={Product}
          options={{
            title: 'Products', 
            headerStyle: {
              backgroundColor: 'cyan', 
            },
            headerTintColor: 'blue', 
            headerTitleStyle: {
              fontWeight: 'bold', 
            },
          }}
        />
        <Stack.Screen
          name="Chocolate"
          component={Chocolate}
          options={{
            title: 'Products', 
            headerStyle: {
              backgroundColor: 'cyan', 
            },
            headerTintColor: 'blue', 
            headerTitleStyle: {
              fontWeight: 'bold', 
            },
          }}
        />
        <Stack.Screen
          name="Employee"
          component={Employee}
          options={{
            title: 'Employees',
            headerStyle: {
              backgroundColor: 'cyan', 
            },
            headerTintColor: 'blue', 
            headerTitleStyle: {
              fontWeight: 'bold', 
            },
          }}
        />
        <Stack.Screen
          name="EmployeeDetail"
          component={EmployeeDetail}
          options={{
            title: 'Employee Data', 
            headerStyle: {
              backgroundColor: 'cyan', 
            },
            headerTintColor: 'blue', 
            headerTitleStyle: {
              fontWeight: 'bold', 
            },
          }}
        />
        <Stack.Screen
          name="Order"
          component={Order}
          options={{
            title: 'Orders', 
            headerStyle: {
              backgroundColor: 'cyan', 
            },
            headerTintColor: 'blue',
            headerTitleStyle: {
              fontWeight: 'bold', },
          }}
        />
        
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;