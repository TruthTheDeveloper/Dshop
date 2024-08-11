import { Alert, Button, Text, TextInput, TouchableOpacity, View } from "react-native"
import styles from "./style"
import { NavigatorScreenProps } from "../../routers/navigation/types";
import { useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { routes } from "../../routers/router-constants/routes";
import useAuth from "../../hooks/useAuth";
const Login = ({navigation}: NavigatorScreenProps) => {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
  
    const { handleLogin } = useAuth(username, password, "", navigation);
  
  
    return (
        <View style={styles.container}>
        <Text style={styles.title}>Login</Text>
        <TextInput
          style={styles.input}
          placeholder="Username"
          value={username}
          onChangeText={setUsername}
        />
        <TextInput
          style={styles.input}
          placeholder="Password"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
        />
        <TouchableOpacity style={styles.button} onPress={handleLogin}>
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>
        <TouchableOpacity 
          style={styles.registerButton} 
          onPress={() => navigation.navigate(routes.RegistrationScreen)}
        >
          <Text style={styles.registerButtonText}>Don't have an account? Register</Text>
        </TouchableOpacity>
      </View>
    );
  };
  
  export default Login;