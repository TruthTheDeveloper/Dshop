import { StyleSheet } from "react-native";
import { colors, globalStyles } from "../../global-styles/styles";

const styles = StyleSheet.create({
    ...globalStyles,
    registerButton: {
      marginTop: 20,
      alignItems: 'center',
    },
    registerButtonText: {
      color: colors.primary,
      fontSize: 16,
    },
  });

export default styles;