import React, {FunctionComponent} from 'react';
import {TouchableOpacity, View} from 'react-native';
import {AppText} from '../../reusables';
import {styles} from './styles';
import {HheaderTypes} from './type';
import {pallete} from '../../configs/Colors';
import {Typo} from '../../configs/Typography';
import {Back} from '../../assets/svg';

const Hheader: FunctionComponent<HheaderTypes> = ({
  text = 'Sign in',
  title = '',
  onPressLeftAction = () => null,
  showLeftAction = true,
}) => {
  const colors = pallete;
  return (
    <View style={styles.container}>
      <Back style={styles.backButton} onPress={onPressLeftAction} />

      <AppText
        text={text}
        fontSize={20}
        color={pallete.light}
        styles={[Typo(null, null, 25, '600').text, {width: 250}]}
      />
    </View>
  );
};

export default Hheader;
