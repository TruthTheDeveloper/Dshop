import {GestureHandlerRootView} from 'react-native-gesture-handler';
import React, { useEffect } from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Platform, View} from 'react-native';
import {useIgnore} from './src/hooks/useIgnore';
import NavigationProvider from './src/routers/navigation';
import {Host} from 'react-native-portalize';
import Toast from 'react-native-toast-message';

import SplashScreen from 'react-native-splash-screen';
import { ToastProvider } from './src/presenters/h-toast';
import { clearAsyncStorage } from './src/helpers/clearAsyncStorage';





const App = () => {
  const ignore = useIgnore();


  useEffect(() => {
    SplashScreen.hide();
  }, []);

  
  
  // Call the function to clear the storage
  clearAsyncStorage();

  return (
    <SafeAreaView
      style={{flex: 1, paddingTop: Platform.OS === 'android' ? 0 : 50}}>
      <GestureHandlerRootView style={{flex: 1}}>
        <Host>
        <Toast />
        <ToastProvider>
            <NavigationProvider />
          </ToastProvider>
        </Host>
      </GestureHandlerRootView>
    </SafeAreaView>
  );
};

export default App;

