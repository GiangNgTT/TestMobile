import React from 'react';
import {Image, View, StyleSheet} from 'react-native';

const Banner = () => {
  return (
    <View style={styles.container}>
      <Image
        style={styles.banner_img}
        source={{
          uri: 'https://img.freepik.com/free-vector/gradient-medical-twitter-header_23-2149025334.jpg?size=626&ext=jpg',
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  banner_img: {
    width: 380,
    height: 200,
    marginLeft: 13,
  },
});
export default Banner;
