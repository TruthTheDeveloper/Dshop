import React, { useEffect, useState, useCallback, useMemo } from "react";
import { Hscreen } from "../../containers";
import { Hheader } from "../../presenters";
import { NavigatorScreenProps } from "../../routers/navigation/types";
import { RouteProp } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Image, ScrollView, Text, TouchableOpacity, View } from "react-native";
import styles from "./style";
import { AppText } from "../../reusables";
import { colors } from "../../global-styles/styles";

interface Product {
  id: number;
  title: string;
  description: string;
  price: number;
  thumbnail: string;
}

interface Props {
  navigation: NavigatorScreenProps;
  route: RouteProp<{ ProductDetailsScreen: { product: Product } }, 'ProductDetailsScreen'>;
}

const ProductDetailsScreen: React.FC<Props> = ({ route, navigation }) => {
  const product = useMemo(() => route.params?.product, [route.params?.product]);
  const [isFavorite, setIsFavorite] = useState(false);

  const checkFavoriteStatus = useCallback(async () => {
    try {
      const favorites = await AsyncStorage.getItem('favoriteProducts');
      if (favorites && product) {
        const favoritesArray: Product[] = JSON.parse(favorites);
        setIsFavorite(favoritesArray.some(p => p.id === product.id));
      }
    } catch (error) {
      console.error('Error checking favorite status:', error);
    }
  }, [product]);

  useEffect(() => {
    checkFavoriteStatus();
  }, [checkFavoriteStatus]);

  const toggleFavorite = useCallback(async () => {
    try {
      const favorites = await AsyncStorage.getItem('favoriteProducts');
      let favoritesArray: Product[] = favorites ? JSON.parse(favorites) : [];

      if (isFavorite) {
        favoritesArray = favoritesArray.filter(p => p.id !== product?.id);
      } else if (product) {
        favoritesArray.push(product);
      }

      await AsyncStorage.setItem('favoriteProducts', JSON.stringify(favoritesArray));
      setIsFavorite(!isFavorite);
    } catch (error) {
      console.error('Error toggling favorite:', error);
    }
  }, [isFavorite, product]);

  if (!product) {
    return (
      <Hscreen>
        <Hheader text="Product Not Found" />
        <View>
          <AppText text="Sorry, the product details are not available."  fontSize={16} />
        </View>
      </Hscreen>
    );
  }

  return (
    <ScrollView style={styles.container}>
      <Image source={{ uri: product.thumbnail }} style={styles.productImage} />
      <View style={styles.infoContainer}>
        <AppText text={product.title} styles={styles.title} fontSize={20} />
        <AppText text={`${product.price}`} styles={styles.price} fontSize={16} />
        <AppText text={product.description} styles={styles.description} fontSize={14} />
        <TouchableOpacity
          style={[styles.favoriteButton, isFavorite && styles.favoriteButtonActive]}
          onPress={toggleFavorite}
        >
          <AppText text={isFavorite ? 'Remove from Favorites' : 'Add to Favorites'} styles={styles.favoriteButtonText} fontSize={14} color={colors.white}/>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default React.memo(ProductDetailsScreen);