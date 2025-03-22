import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import HomeScreen from '../Pages/Homes/Home';
import FavoriteScreen from '../Pages/FavoriteItem/Favourite';
import ProfileScreen from '../Pages/ProfileDetails/ProfileDetail';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();

const searchScreen = () => {
  return (
    <></>
  )
}

const AppNavigator = () => {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      activeColor="#4CAF50"
      inactiveColor="gray"
      barStyle={{ backgroundColor: '#fff' }}
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color }) => {
          let iconName;

          if (route.name === 'Home') {
            iconName = focused ? 'calendar' : 'calendar';
          } else if (route.name === 'Favourites') {
            iconName = focused ? 'heart' : 'heart';
          } else if (route.name === "Profile") {
            iconName = focused ? 'user' : "user";
          } else if (route.name === "Search") {
            iconName = focused ? 'search' : "search";
          }

          return <Icon name={iconName} size={24} color={color} />;
        },
      })}
    >
      <Tab.Screen name="Search" component={searchScreen} options={{ headerShown: false }} />
      <Tab.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} />
      <Tab.Screen name="Favourites" component={FavoriteScreen} options={{ headerShown: false }} />
      <Tab.Screen name="Profile" component={ProfileScreen} options={{ headerShown: false }} />
    </Tab.Navigator>
  );
};

export default AppNavigator;
