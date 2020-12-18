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
    {id: '1', value: 'Chocolate',price: '$ 10', image: { uri: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fdepositphotos.com%2F2087650%2Fstock-photo-chocolates.html&psig=AOvVaw3H5hx5WSgfSlm4AQM4yKaJ&ust=1608401982041000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCKDO8L6S2O0CFQAAAAAdAAAAABAN'}},
    {id: '2', value: 'Chips', price: '$ 10', image: { uri: 'https://www.google.com/url?sa=i&url=http%3A%2F%2Fhome.bt.com%2Flifestyle%2Fwellbeing%2Fnational-french-fry-day-5-reasons-chips-can-be-good-for-you-after-all-11363962177801&psig=AOvVaw1mdgbk6gDxsIDDqLjhNgTL&ust=1608402010299000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCODk_cyS2O0CFQAAAAAdAAAAABAD'}},
    {id: '3', value: 'Biscuits', price: '$ 10', image: { uri: 'https://www.google.com/imgres?imgurl=https%3A%2F%2Fc.ndtvimg.com%2F2019-09%2Fpns0uing_eggless-butter-cookies_625x300_04_September_19.jpg&imgrefurl=https%3A%2F%2Ffood.ndtv.com%2Frecipe-atta-biscuits-99028&tbnid=6W0I4LVjzAOZ7M&vet=12ahUKEwjFt6nPktjtAhVIKxoKHZDyA08QMygKegUIARCWAg..i&docid=L7x6HJo94tYsSM&w=620&h=350&q=biscuits&ved=2ahUKEwjFt6nPktjtAhVIKxoKHZDyA08QMygKegUIARCWAg'}},
  
];

const Product = ({navigation}) => {
  const [listItems, setListItems] = useState(productList);

  const ItemView = ({item}) => {
    return (
      <View  style={styles.item}>
        <Image style={{width: 50, height: 30, marginHorizontal: 10}}
        source={require('../../assets/download.jpg')} />
        <Text
          onPress={() => {navigation.navigate('Chocolate')}}>
          {item.value}
        </Text>
        <Text style={{justifyContent: 'space-between'}}>{item.price}</Text>
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
export default Product

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
  },
});