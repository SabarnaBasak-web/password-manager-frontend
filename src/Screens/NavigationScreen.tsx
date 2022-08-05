import React from 'react';
import {useColorScheme} from 'react-native';
import {
  DarkTheme,
  DefaultTheme,
  NavigationContainer,
} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import LoginSignUp from './LoginSignUpScreen';
import SignInUpScreen from './SignInUpScreen';

const NavigationScreen = () => {
  const Stack = createNativeStackNavigator();
  const scheme = useColorScheme();
  return (
    <NavigationContainer theme={scheme === 'dark' ? DarkTheme : DefaultTheme}>
      <Stack.Navigator>
        <Stack.Screen
          name="LoginSignUp"
          component={LoginSignUp}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="SignInUpScreen"
          component={SignInUpScreen}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default NavigationScreen;
