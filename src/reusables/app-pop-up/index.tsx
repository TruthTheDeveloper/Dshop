import React from 'react';
import {TouchableOpacity, View} from 'react-native';
import AppRow from '../app-row';
import {styles} from './styles';
import AppText from '../app-text';
import {CloseSvg} from '../../assets/svg';
import AppImage from '../app-Image';
import {fs} from '../../configs/config';

const PopUp = ({
  description,
  onClose,
  show,
  headerText,
  title,
}: {
  show: boolean;
  onClose: () => void;
  headerText?: string;
  title?: string;
  description: string;
}) => {
  return (
    show && (
      <View style={styles.container}>
        <View style={styles.content}>
          <AppRow>
            <AppText text={headerText} styles={{fontSize: fs(20)}} />
            <TouchableOpacity onPress={onClose}>
              <CloseSvg height={20} width={20} fill={'black'} />
            </TouchableOpacity>
          </AppRow>
          <AppImage
            mode="contain"
            extraStyles={{
              height: 200,
              width: '100%',
              borderRadius: 10,
              overflow: 'hidden',
            }}
            uri="https://cdn.pixabay.com/photo/2022/05/23/08/12/woman-7215527_1280.png"
          />
          <AppText text={title} styles={{fontSize: fs(16)}} />
          <AppText text={description} styles={{fontSize: fs(12)}} />
        </View>
      </View>
    )
  );
};

export default PopUp;
