import React, { useState, useCallback, useEffect } from 'react';
import { View, FlatList, TouchableOpacity, Alert } from 'react-native';
import { NavigatorScreenProps } from '../../routers/navigation/types';
import styles from './styles';
import { routes } from '../../routers/router-constants/routes';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { AppText, AppImage } from '../../reusables';

interface Product {
  id: number;
  title: string;
  price: number;
  thumbnail: string;
}

const FavouriteProductsScreen: React.FC<NavigatorScreenProps> = ({ navigation }) => {
  const [favoriteProducts, setFavoriteProducts] = useState<Product[]>([]);

  const loadFavoriteProducts = useCallback(async () => {
    try {
      const favoritesJson = await AsyncStorage.getItem('favoriteProducts');
      if (favoritesJson) {
        const parsedFavorites: Product[] = JSON.parse(favoritesJson);
        setFavoriteProducts(parsedFavorites);
      }
    } catch (error) {
      console.error('Failed to load favorite products:', error);
      Alert.alert('Error', 'Failed to load favorite products');
    }
  }, []);

  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', loadFavoriteProducts);
    return unsubscribe;
  }, [navigation, loadFavoriteProducts]);

  const renderProduct = useCallback(({ item }: { item: Product }) => (
    <TouchableOpacity 
      style={styles.productItem}
      onPress={() => navigation.navigate(routes.ProductDetailsScreen, { product: item })}
    >
      <AppImage uri={item.thumbnail} extraStyles={styles.productImage} />
      <View style={styles.productInfo}>
        <AppText text={item.title} styles={styles.productTitle} fontSize={14} />
        <AppText text={`$${item.price}`} styles={styles.productPrice} fontSize={14} />
      </View>
    </TouchableOpacity>
  ), [navigation]);

  const keyExtractor = useCallback((item: Product) => item.id.toString(), []);

  return (
    <View style={styles.container}>
      {favoriteProducts.length > 0 ? (
        <FlatList
          data={favoriteProducts}
          renderItem={renderProduct}
          keyExtractor={keyExtractor}
        />
      ) : (
        <AppText text="No favorite products added yet." styles={styles.noFavoritesText} fontSize={16} />
      )}
    </View>
  );
};

export default FavouriteProductsScreen;