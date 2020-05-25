import 'react-native-gesture-handler';
import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';


import { SplashScreen } from '../screens/splash-screen';
// import { OnbordingScreen } from '../screens/onbording-screen';
// import { WelcomeScreen } from '../screens/welcome-screen';
// import { DiscoverScreen } from '../screens/discover-screen';
// import { LibraryScreen } from '../screens/library-screen';
// import { StoreScreen }  from '../screens/store-screen';
// import { ProfileScreen } from '../screens/profile-screen';

const Stack = createStackNavigator();

const AuthStack = () => {
    return(
        <Stack.Navigator>
            <Stack.Screen name="splash" component={SplashScreen} />
            <Stack.Screen name="onbording" component={OnbordingScreen} />
            <Stack.Screen name="welcome" component={WelcomeScreen} />
        </Stack.Navigator>
    )
}

const Tab = createBottomTabNavigator();

const BottomTabs = () => {
    return(
        <Tab.Navigator>
            <Tab.Screen name="discovery" component={DiscoverScreen} />
            <Tab.Screen name="library" component={LibraryScreen} />
            <Tab.Screen name="store" component={StoreScreen} />
            <Tab.Screen name="profile" component={ProfileScreen} />
        </Tab.Navigator>
    )
}


const RootNavigation = () => {
    return(
        <Stack.Navigator>
            <Stack.Screen name="AuthStack" component={AuthStack} />
            <Stack.Screen name="BottomTabs" component={BottomTabs} />
        </Stack.Navigator>
    )
}

export default RootNavigation