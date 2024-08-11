// RegisterScreen.js
import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity, Text, StyleSheet, Alert } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { NavigatorScreenProps } from '../../routers/navigation/types';
import styles from './style';
import { routes } from '../../routers/router-constants/routes';

function Register({ navigation }:NavigatorScreenProps) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');

  const handleRegister = async () => {
    if (!username || !password || !email) {
      Alert.alert('Error', 'Please fill in all fields');
      return;
    }

    try {
      const userData = { username, password, email };
      await AsyncStorage.setItem('userData', JSON.stringify(userData));
      Alert.alert('Success', 'Registration successful', [
        { text: 'OK', onPress: () => navigation.navigate(routes.LoginScreen) }
      ]);
    } catch (error) {
      Alert.alert('Error', 'Failed to register. Please try again.');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Register</Text>
      <TextInput
        style={styles.input}
        placeholder="Username"
        value={username}
        onChangeText={setUsername}
      />
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      <TouchableOpacity style={styles.button} onPress={handleRegister}>
        <Text style={styles.buttonText}>Register</Text>
      </TouchableOpacity>
      <TouchableOpacity 
        style={styles.loginButton} 
        onPress={() => navigation.navigate(routes.LoginScreen)}
      >
        <Text style={styles.loginButtonText}>Already have an account? Login</Text>
      </TouchableOpacity>
    </View>
  );
}



export default Register;