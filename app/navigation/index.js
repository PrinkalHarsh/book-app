import 'react-native-gesture-handler';
import * as React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import {
  SplashScreen,
  OnbordingScreen,
  WelcomeScreen,
  DiscoverScreen,
  LibraryScreen,
  StoreScreen,
  ProfileScreen,
  LandingScreen,
  SigninScreen,
  SignupScreen,
  DetailScreen,
  test,
  context,
} from '@screens';

const Stack = createStackNavigator();

const AuthStack = () => {
  return (
    <Stack.Navigator headerMode="none">
      <Stack.Screen name="splash" component={SplashScreen} />
      <Stack.Screen name="onbording" component={OnbordingScreen} />
      <Stack.Screen name="landing" component={LandingScreen} />
      <Stack.Screen name="signin" component={SigninScreen} />
      <Stack.Screen name="signup" component={SignupScreen} />
      <Stack.Screen name="welcome" component={WelcomeScreen} />
      <Stack.Screen name="detail" component={DetailScreen} />
      <Stack.Screen name="test" component={test} />
      <Stack.Screen name="context" component={context} />
    </Stack.Navigator>
  );
};

const Tab = createBottomTabNavigator();

const BottomTabs = () => {
  return (
    <Tab.Navigator headerMode="none">
      <Tab.Screen name="discovery" component={DiscoverScreen} />
      <Tab.Screen name="library" component={LibraryScreen} />
      <Tab.Screen name="store" component={StoreScreen} />
      <Tab.Screen name="profile" component={ProfileScreen} />
    </Tab.Navigator>
  );
};

const RootNavigation = () => {
  return (
    <Stack.Navigator headerMode="none">
      <Stack.Screen name="context" component={context} />
      {/* <Stack.Screen name="AuthStack" component={AuthStack} />
      <Stack.Screen name="BottomTabs" component={BottomTabs} /> */}
    </Stack.Navigator>
  );
};

export default RootNavigation;
