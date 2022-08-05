import {StyleSheet, Text, TextInput, useColorScheme, View} from 'react-native';
import React from 'react';
import {Constants} from '../Constants/Constants';
import {FontStyle} from '../../assets/styles/GlobalStyles';
import {Formik} from 'formik';
import tw from 'twrnc';
import Button from '../components/Button';
import ArrowBackSharpIcon from '@mui/icons-material/ArrowBackSharp';
import {Icon} from '@mui/material';
interface ParamType {
  type: string;
}

interface RouteProp {
  params: ParamType;
}
const SignInUpScreen = ({route}) => {
  const {params}: RouteProp = route;
  const scheme = useColorScheme();
  let inputTextColor = scheme === 'dark' ? 'text-white' : 'text-black';
  const SignUp = () => {
    return (
      <Formik
        initialValues={{username: '', password: '', confirmPassword: ''}}
        onSubmit={values => console.log(values)}>
        {({handleChange, handleBlur, handleSubmit, values}) => (
          <View
            style={tw`flex justify-center items-center h-full mx-4 place-items-center`}>
            <Text style={[{fontFamily: FontStyle.NunitoBold}, tw`text-3xl`]}>
              Create Account
            </Text>
            <TextInput
              onChangeText={handleChange('username')}
              onBlur={handleBlur('username')}
              value={values.username}
              style={[
                {fontFamily: FontStyle.NunitoBold},
                tw`px-3 w-full border-2 border-blue-300 my-2 ${inputTextColor}`,
              ]}
              placeholder="Username"
            />
            <TextInput
              onChangeText={handleChange('password')}
              onBlur={handleBlur('password')}
              secureTextEntry={true}
              value={values.password}
              style={[
                {fontFamily: FontStyle.NunitoBold},
                tw`px-3 w-full border-2 border-blue-300 my-2 ${inputTextColor}`,
              ]}
              placeholder="Password"
            />
            <TextInput
              onChangeText={handleChange('confirmPassword')}
              onBlur={handleBlur('confirmPassword')}
              value={values.confirmPassword}
              style={[
                {fontFamily: FontStyle.NunitoBold},
                tw`px-3 w-full border-2 border-blue-300 my-2 ${inputTextColor}`,
              ]}
              secureTextEntry={true}
              placeholder="Confirm Password"
            />
            <Button
              onPressHandler={() => handleSubmit}
              title="Sign Up"
              style="w-35"
            />
          </View>
        )}
      </Formik>
    );
  };

  const SignIn = () => {
    return (
      <Formik
        initialValues={{username: '', password: ''}}
        onSubmit={values => console.log(values)}>
        {({handleChange, handleBlur, handleSubmit, values}) => (
          <View
            style={tw`flex justify-center items-center h-full mx-4 place-items-center`}>
            <Text style={[{fontFamily: FontStyle.NunitoBold}, tw`text-3xl`]}>
              Sign in to your Account
            </Text>
            <TextInput
              onChangeText={handleChange('username')}
              onBlur={handleBlur('username')}
              value={values.username}
              style={[
                {fontFamily: FontStyle.NunitoBold},
                tw`px-3 w-full border-2 border-blue-300 my-2 ${inputTextColor}`,
              ]}
              placeholder="Username"
            />
            <TextInput
              onChangeText={handleChange('password')}
              onBlur={handleBlur('password')}
              secureTextEntry={true}
              value={values.password}
              style={[
                {fontFamily: FontStyle.NunitoBold},
                tw`px-3 w-full border-2 border-blue-300 my-2 ${inputTextColor}`,
              ]}
              placeholder="Password"
            />
            <Button
              onPressHandler={() => handleSubmit}
              title="Sign In"
              style="w-35"
            />
          </View>
        )}
      </Formik>
    );
  };
  return (
    <>
      <View style={tw`bg-grey-300`}>
        {/* <Icon name="ArrowBackSharpIcon"
         size={30} /> */}
        <Text style={[{fontFamily: FontStyle.NunitoBold}, tw`text-lg`]}>
          Back
        </Text>
      </View>
      {params.type === Constants.SignIn ? SignIn() : SignUp()}
    </>
  );
};

export default SignInUpScreen;

const styles = StyleSheet.create({});
