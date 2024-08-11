import { StyleSheet } from "react-native";
import { colors, globalStyles } from "../../global-styles/styles";

const styles = StyleSheet.create({
    ...globalStyles,
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
    favoriteListButton: {
        backgroundColor: colors.secondary,
        padding: 10,
        borderRadius: 5,
        alignItems: 'center',
        marginVertical: 10,
      },
      favoriteListButtonText: {
        color: colors.white,
        fontSize: 16,
        fontWeight: 'bold',
      },

      logoutButton: {
        backgroundColor: colors.lightText,
        padding: 15,
        borderRadius: 5,
        alignItems: 'center',
      },
      logoutButtonText: {
        color: colors.white,
        fontSize: 16,
        fontWeight: 'bold',
      },
  });

  
  

export default styles;