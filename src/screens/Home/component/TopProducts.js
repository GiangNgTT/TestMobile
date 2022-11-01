import React, {useEffect, useState} from 'react';
import {
  ScrollView,
  StyleSheet,
  FlatList,
  View,
  ActivityIndicator,
  Image,
  Text,
} from 'react-native';

const TopProducts = () => {
  const [data, setData] = useState([]);
  const [isLoading, setisLoading] = useState(true);

  useEffect(() => {
    getListPhotos();
    return () => {};
  }, []);

  getListPhotos = () => {
    const apiURL = 'https://61d6e1cf35f71e0017c2e86e.mockapi.io/items';
    fetch(apiURL)
      .then(res => res.json())
      .then(resJson => {
        setData(resJson);
      })
      .catch(error => {
        console.log('Error: ', error);
      })
      .finally(() => setisLoading(false));
  };

  renderItem = ({item, index}) => {
    return (
      <View>
        <View style={styles.item}>
          <Image style={styles.image} source={{uri: item.url}} />
          <View style={styles.wrapText}>
            <Text>{item.title}</Text>
          </View>
        </View>
      </View>
    );
    x;
  };
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.name}>Diabetic Diet</Text>
      {isLoading ? (
        <ActivityIndicator />
      ) : (
        <FlatList
          horizontal
          showsHorizontalScrollIndicator={false}
          style={styles.list}
          data={data}
          renderItem={renderItem}
          keyExtractor={item => `key-${item.id}`}></FlatList>
      )}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  name: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#0B0A0A',
    marginLeft: 15,
  },
  list: {
    flex: 1,
    paddingHorizontal: 2,
  },
  item: {
    flexWrap: 'wrap',
    width: '50%',
    shadowColor: '#000',
    shadowRadius: 4,
    shadowOpacity: 0.25,
    marginLeft: 10,
    paddingVertical: 10,
  },
  image: {
    width: 130,
    height: 130,
  },
  wrapText: {
    marginLeft: 8,
    fontSize: 16,
  },
});

export default TopProducts;
