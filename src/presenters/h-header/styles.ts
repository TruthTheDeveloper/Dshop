// import {StyleSheet} from 'react-native';
// import {palleteTypes} from '../../configs/Colors';
// import {GlobalHeaderBorder, Globalpadding} from '../../configs/GlobalStyles';

// export const HHeaderStyles = (colors: palleteTypes) =>
//   StyleSheet.create({
//     container: {
//       flexDirection: 'row',
//       justifyContent: 'space-between',
//       alignItems: 'center',
//       backgroundColor: colors?.screen,
//       ...Globalpadding,
//       ...GlobalHeaderBorder,
//     },
//     button: {
//       borderWidth: 0,
//       borderRadius: 24,
//       paddingHorizontal: 30,
//       paddingVertical: 6,
//       backgroundColor: colors.dark,
//     },
//   });


import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1B1E26',

  },
  backButton: {
    marginBottom: 20
  },
  
});


const scrollViewStyles = StyleSheet.create({
  contentContainer: {
      flexGrow: 1,
      margin: 20
  }
});

const backIconStyles = StyleSheet.create({
  icon: {
      marginBottom: 10
  }
});

const ratingInputsStyles = StyleSheet.create({
  container: {
      marginVertical: 50
  }
});

const continueButtonStyles = StyleSheet.create({
  button: {
      width: '100%',
      backgroundColor: '#4CA6A8',
      marginTop: 100
  }
});


export{
  styles,
  continueButtonStyles,
  ratingInputsStyles,
  backIconStyles,
  scrollViewStyles,
  
}
