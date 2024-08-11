import React, {ReactNode} from 'react';
import {View} from 'react-native';
import {CloseSvg} from '../../assets/svg';
import {fs, wp} from '../../configs/config';
import AppRow from '../app-row';
import AppText from '../app-text';

const AppHeader = ({
  leftContent,
  middleContent,
  rightContent,
  middleTitle = 'Locker service',
  backgroundColor = 'green',
  titleColor = 'white',
}: {
  rightContent?: ReactNode;
  leftContent: ReactNode;
  middleContent?: ReactNode;
  middleTitle?: string;
  leftTitle?: string;
  righteTitle?: string;
  backgroundColor?: string;
  titleColor?: string;
}) => {
  return (
    <View
      style={{
        height: 80,
        backgroundColor,
        justifyContent: 'center',
        flexDirection: 'row',
        alignItems: 'center',
        padding: wp(10),
      }}>
      <AppRow>
        <View style={{flex: 0.7}}>{leftContent}</View>
        {middleContent || (
          <AppText text={middleTitle} color={titleColor} fontSize={fs(20)} />
        )}
        {rightContent || (
          <CloseSvg height={30} width={30} fill={'white'} style={{flex: 1}} />
        )}
      </AppRow>
    </View>
  );
};

export default AppHeader;
