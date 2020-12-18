import React from 'react';
import { DataTable } from 'react-native-paper';

const Order = () => {
    return(
        <DataTable>
    <DataTable.Header>
      <DataTable.Title>Product name</DataTable.Title>
      <DataTable.Title numeric>Order Number</DataTable.Title>
      <DataTable.Title numeric>Price</DataTable.Title>
    </DataTable.Header>

    <DataTable.Row onPress={()=>{navigation.navigate('Chocolate')}}>
      <DataTable.Cell>Chocolate</DataTable.Cell>
      <DataTable.Cell numeric>19</DataTable.Cell>
      <DataTable.Cell numeric>60</DataTable.Cell>
    </DataTable.Row>

  </DataTable>

    )
} 

export default Order