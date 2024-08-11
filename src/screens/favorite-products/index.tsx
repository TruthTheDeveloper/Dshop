import React, { useEffect, useState, useCallback } from "react";
import { NavigatorScreenProps } from "../../routers/navigation/types";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Alert, FlatList, Image, Text, TouchableOpacity, View } from "react-native";
import styles from "./styles";
import { routes } from "../../routers/router-constants/routes";

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
      <Image source={{ uri: item.thumbnail }} style={styles.productImage} />
      <View style={styles.productInfo}>
        <Text style={styles.productTitle}>{item.title}</Text>
        <Text style={styles.productPrice}>${item.price}</Text>
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
        <Text style={styles.noFavoritesText}>No favorite products added yet.</Text>
      )}
    </View>
  );
};

export default React.memo(FavouriteProductsScreen);