import { Alert, Button, Text, TextInput, TouchableOpacity, View } from "react-native"
import styles from "./style"
import { NavigatorScreenProps } from "../../routers/navigation/types";
import { useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { routes } from "../../routers/router-constants/routes";
import useAuth from "../../hooks/useAuth";
import { AppButton, AppText } from "../../reusables";
import { Hinput } from "../../presenters";
import { colors } from "../../global-styles/styles";
import AppInput from "../../reusables/app-input";
const Login = ({ navigation }: NavigatorScreenProps) => {

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const { handleLogin } = useAuth(username, password, "", navigation);


  return (
    <View style={styles.container}>
      <AppText text="Login" styles={styles.title} fontSize={20} />
      <AppInput value={username} onChangeText={setUsername} placeholder={"Username"} styles={styles.input} />
      <AppInput value={password} onChangeText={setPassword} placeholder={"Password"} styles={styles.input} secureTextEntry />
      <AppButton style={styles.button} text="Login" fontSize={18} textColor={colors.white} onPress={handleLogin} textStyle={styles.buttonText}/>
      <AppButton style={styles.registerButton} text="Don't have an account? Register" textColor={colors.primary}  fontSize={16} onPress={() => navigation.navigate(routes.RegistrationScreen)} />


    </View>


  );
};

export default Login;