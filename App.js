import * as React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Login from './src/screens/Auth/Login';
import BottomTabs from './src/navigation/BottomTabs';
// import ProductDetail from './src/screens/Home/ProductDetail';
import CategoryListing from './src/screens/Home/CategoryListing';

function HomeScreen() {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Home Screen</Text>
    </View>
  );
}

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={({navigation}) => {
          return {
            animation: 'fade_from_bottom',
            headerLeft: () => {
              return (
                <TouchableOpacity
                  onPress={() => {
                    navigation.goBack();
                  }}>
                  <Text>Back</Text>
                </TouchableOpacity>
              );
            },
          };
        }}>
        <Stack.Screen
          name="Login"
          component={Login}
          options={{headerShown: false}}
        />

        <Stack.Screen
          name="Main"
          component={BottomTabs}
          options={{headerShown: false}}
        />

        <Stack.Screen
          options={({route, navigation}) => {
            return {
              headerTitleAlign: 'center',
              title: 'Category Listing',
            };
          }}
          name={'CategoryListing'}
          component={CategoryListing}
        />

        <Stack.Screen name="Home" component={HomeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;