import { useEffect, useState } from "react";
import { NavigatorScreenProps } from "../../routers/navigation/types";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Alert, FlatList, Image, Text, TouchableOpacity, View } from "react-native";
import styles from "./styles";
import { routes } from "../../routers/router-constants/routes";


const FavouriteProductsScreen = ({ navigation }:NavigatorScreenProps) => {
    const [favoriteProducts, setFavoriteProducts] = useState([]);

  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      loadFavoriteProducts();
    });

    return unsubscribe;
  }, [navigation]);

  const loadFavoriteProducts = async () => {
    try {
      const favoritesJson = await AsyncStorage.getItem('favoriteProducts');
      if (favoritesJson) {
        const parsedFavorites = JSON.parse(favoritesJson);
        setFavoriteProducts(parsedFavorites);
      }
    } catch (error) {
      console.error('Failed to load favorite products:', error);
      Alert.alert('Error', 'Failed to load favorite products');
    }
  };

  const renderProduct = ({ item }: { item: any }) => (
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
  );

  return (
    <View style={styles.container}>
      {favoriteProducts.length > 0 ? (
        <FlatList
          data={favoriteProducts}
          renderItem={renderProduct}
          keyExtractor={(item) => item.id ? item.id.toString() : Math.random().toString()}
        />
      ) : (
        <Text style={styles.noFavoritesText}>No favorite products added yet.</Text>
      )}
    </View>
  );
}

export default FavouriteProductsScreen;