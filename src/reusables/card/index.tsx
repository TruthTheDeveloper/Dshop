import React from 'react';
import {TouchableOpacity, View} from 'react-native';
import {InfoSvg, RightArrowSvg} from '../../assets/svg';
import {shadowStyles} from '../../configs/GlobalStyles';
import {fs} from '../../configs/config';
import AppText from '../app-text';
import {pillStyles} from './styles';

const Card = ({
  onPress,
  title,
  quantity,
  iconColor,
}: {
  onPress: () => void;
  quantity: number;
  title?: string;
  iconColor: string | undefined;
}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[pillStyles().cardWrapper, {...shadowStyles}]}>
      {/* <InfoSvg fill={iconColor} height={30} width={30} /> */}

      <View style={{flex: 1}}>
        <AppText text={title} />
        <AppText text={quantity} styles={{fontSize: fs(20)}} />
      </View>
      {/* <RightArrowSvg stroke={'black'} height={20} width={20} /> */}
    </TouchableOpacity>
  );
};

export default Card;
