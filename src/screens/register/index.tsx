import React, { useState } from 'react';
import { View } from 'react-native';
import { NavigatorScreenProps } from '../../routers/navigation/types';
import styles from './style';
import { routes } from '../../routers/router-constants/routes';
import useAuth from '../../hooks/useAuth';
import { AppButton, AppText, AppInput } from '../../reusables';
import { colors } from '../../global-styles/styles';

const Register: React.FC<NavigatorScreenProps> = ({ navigation }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');

  const { handleRegister } = useAuth(username, password, email, navigation);

  return (
    <View style={styles.container}>
      <AppText text="Register" styles={styles.title} fontSize={20} />
      <AppInput value={username} onChangeText={setUsername} placeholder="Username" styles={styles.input} />
      <AppInput value={email} onChangeText={setEmail} placeholder="Email" styles={styles.input} keyboardType="email-address" />
      <AppInput value={password} onChangeText={setPassword} placeholder="Password" styles={styles.input} secureTextEntry />
      <AppButton style={styles.button} text="Register" fontSize={18} textColor={colors.white} onPress={handleRegister} textStyle={styles.buttonText} />
      <AppButton style={styles.loginButton} text="Already have an account? Login" textColor={colors.primary} fontSize={16} onPress={() => navigation.navigate(routes.LoginScreen)} />
    </View>
  );
};

export default Register;