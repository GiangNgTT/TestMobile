import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from '../screens/Home';
import Favourite from '../screens/Favourite';
import MyBooking from '../screens/Mybooking';
import Chat from '../screens/Chat';
import Setting from '../screens/Setting';

const BottomTab = createBottomTabNavigator();

const iconHome =
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmrjmWv58Qw-Cjo05ZBK8XWtOU0IDsrHhATg&usqp=CAU';

const iconFavourite =
  'data:image/png;base64,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';

const iconChat =
  'data:image/png;base64,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';

const iconAuth =
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxi623Vp1SM-FkwcYMnZFIH9mwRKTvwWPdvA&usqp=CAU';

const iconMyBooking =
  'data:image/png;base64,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';

const iconSetting =
  'data:image/png;base64,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';

const BottomTabs = () => {
  return (
    <BottomTab.Navigator sceneContainerStyle={{backgroundColor: 'white'}}>
      <BottomTab.Screen
        name="HomeTab"
        component={Home}
        options={() => {
          return {
            tabBarLabel: ({focused}) => {
              return (
                <Text style={{color: focused ? 'red' : 'black'}}>{'Home'}</Text>
              );
            },
            tabBarIcon: () => (
              <Image
                source={{
                  uri: iconHome,
                }}
                style={styles.icon}
              />
            ),
            headerShown: false,
          };
        }}
      />

      <BottomTab.Screen
        name="FavouriteTab"
        component={Favourite}
        options={() => {
          return {
            tabBarLabel: ({focused}) => {
              return (
                <Text style={{color: focused ? 'red' : 'black'}}>
                  {'Favourite'}
                </Text>
              );
            },
            tabBarIcon: () => (
              <Image
                source={{
                  uri: iconFavourite,
                }}
                style={styles.icon}
              />
            ),
            headerShown: false,
          };
        }}
      />

      <BottomTab.Screen
        name="MyBookingTab"
        component={MyBooking}
        options={() => {
          return {
            tabBarLabel: ({focused}) => {
              return (
                <Text style={{color: focused ? 'red' : 'black'}}>
                  {'Booking'}
                </Text>
              );
            },
            tabBarIcon: () => (
              <Image
                source={{
                  uri: iconMyBooking,
                }}
                style={styles.icon}
              />
            ),
            headerShown: false,
          };
        }}
      />

      <BottomTab.Screen
        name="ChatTab"
        component={Chat}
        options={() => {
          return {
            tabBarLabel: ({focused}) => {
              return (
                <Text style={{color: focused ? 'red' : 'black'}}>{'Chat'}</Text>
              );
            },
            tabBarIcon: () => (
              <Image
                source={{
                  uri: iconChat,
                }}
                style={styles.icon}
              />
            ),
            headerShown: false,
          };
        }}
      />

      <BottomTab.Screen
        name="SettingTab"
        component={Setting}
        options={() => {
          return {
            tabBarLabel: ({focused}) => {
              return (
                <Text style={{color: focused ? 'red' : 'black'}}>
                  {'Setting'}
                </Text>
              );
            },
            tabBarIcon: () => (
              <Image
                source={{
                  uri: iconSetting,
                }}
                style={styles.icon}
              />
            ),
            headerShown: false,
          };
        }}
      />
    </BottomTab.Navigator>
  );
};

export default BottomTabs;

const styles = StyleSheet.create({
  icon: {width: 30, height: 30},
});