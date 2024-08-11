import { StyleSheet } from "react-native";
import { colors, globalStyles } from "../../global-styles/styles";

const styles = StyleSheet.create({
    ...globalStyles,
    productImage: {
      width: '100%',
      height: 300,
      resizeMode: 'cover',
    },
    infoContainer: {
      padding: 20,
    },
    price: {
      fontSize: 20,
      color: colors.secondary,
      fontWeight: 'bold',
      marginBottom: 10,
    },
    description: {
      fontSize: 16,
      color: colors.lightText,
      lineHeight: 24,
      marginBottom: 20,
    },
    favoriteButton: {
      backgroundColor: colors.primary,
      padding: 15,
      borderRadius: 5,
      alignItems: 'center',
    },
    favoriteButtonActive: {
      backgroundColor: colors.secondary,
    },
    favoriteButtonText: {
      color: colors.white,
      fontSize: 16,
      fontWeight: 'bold',
    },
  })

export default styles;