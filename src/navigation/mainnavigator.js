import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator} from '@react-navigation/stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Ionicons } from '@expo/vector-icons';


import Home from '../screens/Homescreen'
import Settings from '../screens/SettingsScreen'
import Details from '../screens/DetailScreen'


const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

 export default function MainStackNavigator(){
return(
    <NavigationContainer>
        <Stack.Navigator initialRouteName={Home}>
        <Stack.Screen name = 'Home' component={MainTabNavigator}
        options={{title: "Home"}} 
    
        />
        <Stack.Screen name = 'Details' component={Details}
        />
        <Stack.Screen name = 'Settings' component={Settings}
        options={{title: "Settings"}}/>


        </Stack.Navigator>
    </NavigationContainer>
);
}


 function MainTabNavigator() {
  return (
        <Tab.Navigator 
        screenOptions={({ route }) => ({
            tabBarIcon: ({focused, color, size}) =>
            {
                let iconName;
                if(route.name == 'Home'){
                    iconName = focused
                    ? 'ios-home'
                    : 'ios-home';
                }
                else if(route.name = 'Settings'){
                    iconName = focused ? 'ios-list-box' : 'ios-list';
                }
                return <Ionicons name={iconName} size={size} color={color} />;
            },

        })
    }
    tabBarOptions={{
        activeTintColor: 'blue',
        inactiveTintColor: 'gray',
      }}
        >
            <Tab.Screen name = 'Home' component={Home}/>
            <Tab.Screen name = 'Settings' component={Settings}/>
        </Tab.Navigator>

  );
}