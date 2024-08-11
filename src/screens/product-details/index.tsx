import { useEffect, useState } from "react";
import { Hscreen } from "../../containers";
import { Hheader } from "../../presenters";
import { NavigatorScreenProps } from "../../routers/navigation/types";
import { RouteProp } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Button, Image, ScrollView, Text, TouchableOpacity, View } from "react-native";
import styles from "./style";

interface Props {
    navigation: NavigatorScreenProps;
    route: RouteProp<{ ProductDetailsScreen: { product: any } }, 'ProductDetailsScreen'>;
}

const ProductDetailsScreen = ({ route, navigation }: Props) => {
    const product = route.params?.product;
    const [isFavorite, setIsFavorite] = useState(false);

    useEffect(() => {
        checkFavoriteStatus();
      }, []);
    
      const checkFavoriteStatus = async () => {
        const favorites = await AsyncStorage.getItem('favoriteProducts');
        if (favorites) {
          const favoritesArray = JSON.parse(favorites);
          setIsFavorite(favoritesArray.some((p: any) => p.id === product.id));
        }
      };

      const toggleFavorite = async () => {
        const favorites = await AsyncStorage.getItem('favoriteProducts');
        let favoritesArray = favorites ? JSON.parse(favorites) : [];
        
        if (isFavorite) {
          favoritesArray = favoritesArray.filter((p: any) => p.id !== product.id);
        } else {
          favoritesArray.push(product);
        }
        
        await AsyncStorage.setItem('favoriteProducts', JSON.stringify(favoritesArray));
        setIsFavorite(!isFavorite);
      };


      if (!product) {
        return (
          <Hscreen>
            <Hheader
              text="Product Not Found"
              onPressLeftAction={() => navigation.navigation.goBack()}
            />
            <View>
              <Text>Sorry, the product details are not available.</Text>
            </View>
          </Hscreen>
        );
      }
    

    return (
        <ScrollView style={styles.container}>
      <Image source={{ uri: product.thumbnail }} style={styles.productImage} />
      <View style={styles.infoContainer}>
        <Text style={styles.title}>{product.title}</Text>
        <Text style={styles.price}>${product.price}</Text>
        <Text style={styles.description}>{product.description}</Text>
        <TouchableOpacity
          style={[styles.favoriteButton, isFavorite && styles.favoriteButtonActive]}
          onPress={toggleFavorite}
        >
          <Text style={styles.favoriteButtonText}>
            {isFavorite ? 'Remove from Favorites' : 'Add to Favorites'}
          </Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
    );
  };
  
  export default ProductDetailsScreen;