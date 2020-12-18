import React, {useState} from 'react';

import {
    FlatList,
    View,
    Text,
    SafeAreaView,
    StyleSheet,
    Image
} from 'react-native';

const productList = [
    {id: '1', value: 'name1 ',designation: 'post1' },
    {id: '2', value: 'name2 ', designation: 'post2' },
    {id: '3', value: 'name3 ', designation: 'post3'},
    {id: '4', value: 'name4 ', designation: 'post4' },
  
];

const Employee = ({navigation}) => {
  const [listItems, setListItems] = useState(productList);

  const ItemView = ({item}) => {
    return (
      // FlatList Item
      <View style={{flexDirection: 'row'}}>
        <Text

          style={styles.item}
          onPress={() => {navigation.navigate('EmployeeDetail')}}>
          {item.value}
        </Text>
        <Text style={[styles.item]}>
          {item.designation}
        </Text>
      </View>
    );
  };

  const ItemSeparatorView = () => {
    return (
      <View
          style={{
              height: 0.5,
              width: '100%',
              backgroundColor: '#C8C8C8'
          }}
      />
    );
  };

  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={styles.container}>
        <FlatList
          data={listItems}
          ItemSeparatorComponent={ItemSeparatorView}
          renderItem={ItemView}
          keyExtractor={(item, index) => index.toString()}
        />
      </View>
    </SafeAreaView>
  );
}
export default Employee

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    flex: 1,
    marginLeft: 10,
    marginRight: 10,
    marginBottom: 10,
    marginTop: 30,
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
    flexDirection: 'row',
    justifyContent: 'space-evenly'
  },
});