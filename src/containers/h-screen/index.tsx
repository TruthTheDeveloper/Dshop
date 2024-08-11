import React from 'react';
import {KeyboardAvoidingView, Platform, ScrollView, View} from 'react-native';
import {pallete} from '../../configs/Colors';
import {HflatScreenStyles} from '../h-flatscreen/styles';
import {HScreenStyles} from './styles';
import {HScreenTypes} from './type';

const Hscreen = ({children, hasPadding = true}: HScreenTypes) => {
  const colors = pallete;
  return (
    <KeyboardAvoidingView
      style={HflatScreenStyles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      keyboardVerticalOffset={Platform.OS === 'ios' ? 150 : 0}

      >
      <ScrollView
        keyboardShouldPersistTaps="handled"
        contentContainerStyle={{
          // paddingBottom: 100,
        }}
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}>
        <View style={HScreenStyles(colors, hasPadding).container}>
          {children}
        </View>
      </ScrollView>
   </KeyboardAvoidingView>
  );
};

export default Hscreen;
