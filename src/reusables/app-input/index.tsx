import React from 'react';
import { TextInput, TextInputProps, StyleSheet, ViewStyle } from "react-native";

interface AppInputProps extends Omit<TextInputProps, 'style'> {
  value: string;
  onChangeText: (text: string) => void;
  placeholder: string;
  secureTextEntry?: boolean;
  styles?: ViewStyle;
}

const AppInput: React.FC<AppInputProps> = ({ 
  value, 
  onChangeText, 
  placeholder, 
  secureTextEntry = false,
  styles,
  ...props
}) => (
  <TextInput
    style={styles}
    placeholder={placeholder}
    value={value}
    onChangeText={onChangeText}
    secureTextEntry={secureTextEntry}
    {...props}
  />
);


export default AppInput;