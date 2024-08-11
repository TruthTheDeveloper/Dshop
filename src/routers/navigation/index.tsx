import {NavigationContainer} from '@react-navigation/native';
import AppHeader from '../../reusables/app-header';
import AppTabButton from '../../reusables/app-tab-button';
import {
  Login,
  ProductDetailsScreen,
  ProductListingScreen,
  Register
} from "../../screens";
import {routes} from '../router-constants/routes';
import {ProductStack, Stack, Tab} from '../router-constants';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store';

const ApplicationProviderScreens = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen 
        name={routes.ProductListingScreen}
        component={ProductListingScreen} 
      />
      <ProductStack.Screen 
        name="ProductDetailsScreen"
        component={ProductDetailsScreen}
        initialParams={{ product: null }} 
      />
    </Stack.Navigator>

  );
};

const AuthenticationProviderScreens = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={routes.LoginScreen}
        component={Login}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name={routes.RegistrationScreen}
        component={Register}
        options={{headerShown: false}}
      />
       <Stack.Screen 
        name={routes.ProductListingScreen}
        component={ProductListingScreen} 
      />
      <ProductStack.Screen 
        name="ProductDetailsScreen"
        component={ProductDetailsScreen}
        initialParams={{ product: null }} 
      />
    </Stack.Navigator>
  );
};

function NavigationProvider() {
  const {seenAuser} = useSelector((state: RootState) => state.authReducer);

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        {seenAuser ? (
          <Stack.Screen
            name={routes.ApplicationProvider}
            component={ApplicationProviderScreens}
          />
        ) : (
          <Stack.Screen
            name={routes.AuthenticationProvider}         
            component={AuthenticationProviderScreens}
          />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default NavigationProvider;
