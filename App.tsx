import React, { useEffect } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
// import HomeScreen from './src/screens/HomeScreen';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { StyleSheet, LogBox } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import HomeScreen from './src/screens/HomeScreen';
import DetailCourse from './src/screens/DetailCourse';
// import 'react-native-gesture-handler';
import AppLovinMAX from "react-native-applovin-max";

AppLovinMAX.initialize("p4-ZVZRe610i09Huw-7hZpRkgsKU8inCMZRoPqU-UwAeTQfnETPyxMrL0xEkcE1cS2HCovADheTSxWPE9Uf00u", (configuration) => {
  // SDK is initialized, start loading ads
});

export type RootStackParamList = {
  BotTab : undefined
  HomeScreen: undefined;
  DetailCourse: undefined;
};

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator<RootStackParamList>();

const StackScreen = () => {
  return(
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name='BotTab' component={BotTab}/>
        <Stack.Screen name='HomeScreen' component={HomeScreen}/>
        <Stack.Screen name='DetailCourse' component={DetailCourse}/>
        {/* <Stack.Screen name='ProductScreen' component={ProductScreen}/>
        <Stack.Screen name='DetailSnack' component={DetailSnack}/> */}
      </Stack.Navigator>
    </NavigationContainer>
  )
}
function BotTab() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName: any;

          if (route.name === 'HomeScreen') {
            iconName = focused ? 'library' : 'library-outline';
          } else if (route.name === 'Home') {
            iconName = focused ? 'person': 'person-outline';
          } else if (route.name === 'H') {
            iconName = focused ? 'settings': 'settings-outline';
          }

          // You can return any component that you like here!
          return <Ionicons name={iconName} size={size} color={color} />;
        },
        headerShown:false,
        tabBarActiveTintColor: 'white',
        tabBarInactiveTintColor: '#262626',
        tabBarShowLabel:false,
        tabBarStyle:{
          position:'absolute',
          bottom:25,
          left:'20%',
          right:'20%',
          // elevation:0,
          backgroundColor:'#eab308',
          borderRadius:30,
          height:70,
          width:250,
          ...styles.shadow
        }
      })}>
      <Tab.Screen name="HomeScreen" component={HomeScreen} />
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="H" component={HomeScreen} />
      {/* <Tab.Screen name="ProductScreen" component={ProductScreen} />
      <Tab.Screen name="ContactScreen" component={ContactScreen} /> */}
    </Tab.Navigator>
  );
}
const App = () => {
  useEffect(()=> {
    LogBox.ignoreLogs(['VirtualizedLists should never be nested']),
    LogBox.ignoreLogs([
      "[react-native-gesture-handler] Seems like you\'re using an old API with gesture components, check out new Gestures system!",
    ])
  },[])
  return (
    
    <StackScreen />
  );
};

const styles = StyleSheet.create({
  shadow:{
    shadowColor:'#facc15',
    elevation:4
  }
})

export default App;
