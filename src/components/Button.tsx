import {Text, TouchableOpacity} from 'react-native';
import React from 'react';
import tw from 'twrnc';
import {FontStyle} from '../../assets/styles/GlobalStyles';
interface ButtonProps {
  onPressHandler: () => void;
  title: string;
  style: string;
}

const Button = (props: ButtonProps) => {
  const {title, onPressHandler, style} = props;

  return (
    <TouchableOpacity
      style={tw`p-3 my-2 border-blue-400 border-2 rounded-lg ${style}`}
      onPress={() => onPressHandler()}>
      <Text
        style={[
          {fontFamily: FontStyle.NunitoBold},
          tw`text-lg text-blue-400 text-center`,
        ]}>
        {title}
      </Text>
    </TouchableOpacity>
  );
};

export default Button;
