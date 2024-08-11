import { StackNavigationProp } from '@react-navigation/stack';




export type RootStackParamList = {
  ProductDetailsScreen: { product: any } 
  // other routes...
};

export type NavigatorScreenProps = {
  navigation: StackNavigationProp<
    Record<string, object | undefined>,
    'newProduct'
  >;
};