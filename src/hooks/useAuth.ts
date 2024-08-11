import AsyncStorage from "@react-native-async-storage/async-storage";
import { Alert } from "react-native";
import { NavigatorScreenProps } from "../routers/navigation/types";
import { routes } from "../routers/router-constants/routes";

const useAuth = (username: string, password: string, email:string, navigation: NavigatorScreenProps['navigation']) => {

    const handleRegister = async () => {
        if (!username || !password || !email) {
          Alert.alert('Error', 'Please fill in all fields');
          return;
        }
    
        try {
          const userData = { username, password, email};
          await AsyncStorage.setItem('userData', JSON.stringify(userData));
          Alert.alert('Success', 'Registration successful', [
            { text: 'OK', onPress: () => navigation.navigate(routes.LoginScreen) }
          ]);
        } catch (error) {
          Alert.alert('Error', 'Failed to register. Please try again.');
        }
      };

      const handleLogin = async () => {
        try {
          const userData = await AsyncStorage.getItem('userData');
          if (userData) {
            const { username: storedUsername, password: storedPassword } = JSON.parse(userData);
            if (username === storedUsername && password === storedPassword) {
              await AsyncStorage.setItem('isLoggedIn', 'true');
              navigation.navigate(routes.ProductListingScreen);
            } else {
              Alert.alert('Error', 'Invalid credentials');
            }
          } else {
            Alert.alert('Error', 'No user registered');
          }
        } catch (error) {
          Alert.alert('Error', 'Login failed. Please try again.');
        }
    };

    const handleLogout = async () => {
        try {
          await AsyncStorage.removeItem('isLoggedIn');
          navigation.reset({
            index: 0,
            routes: [{ name: routes.LoginScreen}],
          });
        } catch (error) {
          Alert.alert('Error', 'Logout failed. Please try again.');
        }
      };


      return { handleRegister, handleLogin, handleLogout };
};

export default useAuth