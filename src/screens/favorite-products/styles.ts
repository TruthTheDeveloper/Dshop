import { StyleSheet } from "react-native";
import { colors, globalStyles } from "../../global-styles/styles";

const styles = StyleSheet.create({
    ...globalStyles,
    container: {
      flex: 1,
      backgroundColor: colors.background,
      padding: 10,
    },
    productItem: {
      flexDirection: 'row',
      backgroundColor: colors.white,
      borderRadius: 10,
      marginBottom: 15,
      overflow: 'hidden',
      elevation: 3,
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.1,
      shadowRadius: 2,
    },
    productImage: {
      width: 100,
      height: 100,
      resizeMode: 'cover',
    },
    productInfo: {
      flex: 1,
      padding: 10,
      justifyContent: 'center',
    },
    productTitle: {
      fontSize: 16,
      fontWeight: 'bold',
      color: colors.text,
      marginBottom: 5,
    },
    productPrice: {
      fontSize: 14,
      color: colors.secondary,
      fontWeight: 'bold',
    },
    noFavoritesText: {
      fontSize: 16,
      color: colors.lightText,
      textAlign: 'center',
      marginTop: 20,
    },
  });


export default styles;