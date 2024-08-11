import {NavigationContainer} from '@react-navigation/native';
import {
  FavouriteProductsScreen,
  Login,
  ProductDetailsScreen,
  ProductListingScreen,
  Register
} from "../../screens";
import {routes} from '../router-constants/routes';
import {ProductStack, Stack, Tab} from '../router-constants';
import { colors } from '../../global-styles/styles';



const AuthenticationProviderScreens = () => {
  return (
    <Stack.Navigator screenOptions={{
      headerStyle: {
        backgroundColor: colors.primary,
      },
      headerTintColor: colors.white,
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    }}>
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
        <Stack.Screen name={routes.FavoriteProducts}  component={FavouriteProductsScreen} options={{ title: 'Favorites' }} />
      <ProductStack.Screen 
        name="ProductDetailsScreen"
        component={ProductDetailsScreen}
        initialParams={{ product: null }} 
      />
    </Stack.Navigator>
  );
};

function NavigationProvider() {

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        
          <Stack.Screen
            name={routes.AuthenticationProvider}         
            component={AuthenticationProviderScreens}
          />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default NavigationProvider;
