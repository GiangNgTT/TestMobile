import React from 'react';
import {View} from 'react-native';
import Banner from './component/Banner';
import TopProducts from './component/TopProducts';
import AllProducts from './component/AllProducts';

const CategoryListing = ({navigation}) => {
  return (
    <View>
      <Banner/>
      <TopProducts/>
      <AllProducts/>
    </View>
  ); 
};

export default CategoryListing;