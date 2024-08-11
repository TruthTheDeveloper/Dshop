import {View} from 'react-native';
import {English, Pic, UnitedStates} from '../../assets/svg';
import { Typo } from '../../configs/Typography';
import AppText from '../app-text';
import {styles} from './style';

const AppLeaderBoard = ({high=false}:{high?:boolean}) => {


   
  return (
    <View style={styles.container}>
      <View
        style={[
            !high ?
          {flexDirection: 'row',
          backgroundColor: '#2F3540',
          height: 100,
          borderRadius: 10,
          marginVertical:10}:{flexDirection: 'row',
          backgroundColor: '#EDE2BB',
          height: 100,
          borderRadius: 10,
          marginVertical:10}
        ]}>
        <View>
          <AppText
            text={!high?'1':'607'}
            styles={[!high ? {
                backgroundColor: 'white',
                width:25,
                height:15,
                borderTopLeftRadius: 10,
                borderBottomRightRadius: 8,
                textAlign:'center'
              }:{
                backgroundColor: '#2F3540',
                width:35,
                height:25,
                textAlign:'center',

                borderTopLeftRadius: 10,
                borderBottomRightRadius: 8,
              }]}

              color={!high ? '#2F3540' : "white"}
          />
        <Pic style={{marginLeft:5}} />
        </View>
        <View style={{marginVertical: 'auto', marginLeft: 10}}>
          <AppText text={'Tino Vinus'} color={!high ? 'white':'#1B1E26'} fontSize={15} styles={Typo(null, null, 24, '700').text}/>
          <View style={{flexDirection: 'row', paddingVertical: 10}}>
            <AppText text={'United States'} color={!high ? 'white':'#1B1E26'} fontSize={13} />
            <UnitedStates style={{marginLeft: 10}} />
          </View>
        </View>
        <AppText
          text={'🏆 15,832'}
          color={!high ? '#FF8700': '#1B1E26'}
          fontSize={13}
          styles={{marginLeft: 'auto', marginVertical: 'auto', marginRight: 10}}
        />
      </View>
    </View>
  );
};

export default AppLeaderBoard;
