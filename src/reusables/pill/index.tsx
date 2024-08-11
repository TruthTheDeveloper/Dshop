import React from 'react';
import {TouchableOpacity, View} from 'react-native';
import AppText from '../app-text';
import {pillStyles} from './styles';

const Pill = ({
  text,
  showDot,
  dotColor,
  onPress,
}: {
  text: string;
  showDot?: boolean;
  dotColor?: string;
  onPress?: () => void;
}) => {
  const styles = pillStyles();
  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      <View
        style={{
          flexDirection: 'row',
          gap: 10,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        {showDot && (
          <View
            style={{
              height: 5,
              width: 5,
              backgroundColor: dotColor,
              borderRadius: 20,
            }}
          />
        )}
        <AppText text={text} color="black" />
      </View>
    </TouchableOpacity>
  );
};

export default Pill;
