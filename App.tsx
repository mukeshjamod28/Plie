import React, { useMemo } from 'react';
import { SafeAreaView, StatusBar, StyleSheet, View } from 'react-native';
import LoginScreen from './src/Pages/Auth/Login';
import { useSelector } from 'react-redux';
import { RootState } from './src/store/store';
import HomeScreen from './src/Pages/Homes/Home';
import { NavigationContainer } from '@react-navigation/native';
import AppNavigator from './src/Routes';

function App(): React.JSX.Element {
  const currentUser = useSelector((state: RootState) => state.apiData.CurrentUser)


  console.log('currenUser', currentUser)
  return (
    <>
      <NavigationContainer>
        <StatusBar
          barStyle="dark-content"
          backgroundColor="white"
        />
        <SafeAreaView style={[{ backgroundColor: "blue", flex: 1 }]}>
          <View style={[{ height: "100%", backgroundColor: "gray" }]}>
            {currentUser?.token ? <AppNavigator /> : <LoginScreen />}
          </View>
        </SafeAreaView>
        <SafeAreaView style={[{ backgroundColor: "gray", flex: 0 }]} />
      </NavigationContainer>
    </>

  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
