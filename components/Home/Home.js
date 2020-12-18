import React from 'react'
import {View, Text} from 'react-native'

const Home = ({navigation}) => {
    return(
        <View style={{height: '100%', padding: 20,justifyContent: 'center', alignItems: 'center',backgroundColor: 'yellow'}}>
            <View style={{ justifyContent: 'center'}}>
            <Text onPress={() => {navigation.navigate('Product')}}
            style={{padding: 50, fontSize: 25, alignContent: 'center', backgroundColor: 'aquamarine', borderRadius: 20, marginBottom: 15}}>
                Manage Products
            </Text>
            <Text onPress={() => {navigation.navigate('Employee')}}
             style={{padding: 50, fontSize: 25, alignContent: 'center', backgroundColor: 'burlywood', borderRadius: 20, marginBottom: 15}}>
                Manage Employees
            </Text>
            <Text onPress={() => {navigation.navigate('Order')}} 
            style={{padding: 50, fontSize: 25, alignContent: 'center', backgroundColor: 'lightgreen', borderRadius: 20, marginBottom: 15}}>
                Manage Orders
            </Text>
            </View>
        </View>
    )
}

export default Home