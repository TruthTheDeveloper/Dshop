import React, {FunctionComponent} from 'react';
import {View} from 'react-native';
import AppText from '../app-text';
import {bottomTabStyles} from './styles';
import {TabButtonProps} from './type';

const AppTabButton: FunctionComponent<TabButtonProps> = ({icon, color, name}) => {
  const styles = bottomTabStyles({
    indicatorColor: color,
  });

  return (
    <View style={styles.container}>
      <View style={styles.iconAndLabelContainer}>
        <View style={styles.icon}>{icon}</View>
        <AppText text={name} color="#848A99"/>
      </View>
    </View>
  );
};

export default AppTabButton;
