import {Button, StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';

const Home = ({navigation}) => {
  return (
    <View>
      <View styl={styles.background_home}>
        <Image
          style={styles.img}
          source={{
            uri: 'https://static.vecteezy.com/system/resources/thumbnails/002/769/508/small/young-asian-woman-wearing-medical-face-mask-and-finger-pointing-photo.jpg',
          }}
        />
        <Text style={{fontSize: 24, fontWeight: 'bold', textAlign: 'center', paddingVertical: 30}}>Home</Text>
        <Button
          title="Go to category listing"
          onPress={() => {
            navigation.navigate('CategoryListing', {
              headerTitle: 'Category Listing',
            });
          }}
        />
      </View>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  img: {
    position: 'absolute',
    width: '100%',
    height: 700,
  },
});
