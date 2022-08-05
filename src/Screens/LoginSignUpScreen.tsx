import {View, Text, Image} from 'react-native';
import React from 'react';
import tw from 'twrnc';
import Button from '../components/Button';
import {FontStyle} from '../../assets/styles/GlobalStyles';

const LoginSignUp = ({navigation}) => {
  const navigationHandler = (type: string) =>
    navigation.navigate('SignInUpScreen', {
      type: type,
    });
  return (
    <View style={tw`flex justify-center h-full items-center`}>
      <Image
        source={require('../../assets/images/splashLogo.png')}
        style={tw`w-80 h-80 mt-5 `}
      />
      <View style={tw`p-3 flex justify-end items-center w-full h-1/3`}>
        <Text style={[{fontFamily: FontStyle.NunitoBold}, tw`text-3xl mb-10 `]}>
          My Password Manager
        </Text>
        <Button
          title="Sign Up"
          onPressHandler={() => navigationHandler('SignUp')}
          style="w-50"
        />
        <Button
          title="Sign In"
          onPressHandler={() => navigationHandler('SignIn')}
          style="w-50"
        />
      </View>
    </View>
  );
};

export default LoginSignUp;
