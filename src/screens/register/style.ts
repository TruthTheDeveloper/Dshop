import { StyleSheet } from "react-native";
import { colors, globalStyles } from "../../global-styles/styles";

const styles = StyleSheet.create({
    ...globalStyles,
    loginButton: {
      marginTop: 20,
      alignItems: 'center',
    },
    loginButtonText: {
      color: colors.primary,
      fontSize: 16,
    },
  });

export default styles;