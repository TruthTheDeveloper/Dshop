import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { RootStackParamList } from '../navigation/types';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();
const ProductStack = createStackNavigator<RootStackParamList>();


export {Tab, Stack, ProductStack};
