import React, { useCallback, useEffect, useState } from 'react';
import { ScrollView, View, TouchableOpacity, StyleSheet, Alert, Image, Text, FlatList, ActivityIndicator } from 'react-native';
import { NavigatorScreenProps } from '../../routers/navigation/types';
import { routes } from '../../routers/router-constants/routes';
import styles from './style';
import AsyncStorage from '@react-native-async-storage/async-storage';
import useAuth from '../../hooks/useAuth';
import { AppButton, AppImage, AppText } from '../../reusables';

const ProductListingScreen = ({ navigation }: NavigatorScreenProps) => {

    interface Product {
        id: number;
        title: string;
        description: string;
        price: number;
        thumbnail: string; // Added missing property
        // Add other properties as needed
    }

    const [products, setProducts] = useState<Product[]>([]);
    const [loading, setLoading] = useState(false);
    const [page, setPage] = useState(1);

    const { handleLogout } = useAuth("", "", "", navigation)

    useEffect(() => {
        loadProducts();
    }, []);

    const fetchProducts = async (page = 1, limit = 20): Promise<Product[]> => {
        try {
            const response = await fetch(`https://dummyjson.com/products?skip=${(page - 1) * limit}&limit=${limit}`);
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const data = await response.json();
            return data.products;
        } catch (error) {
            console.error('Error fetching products:', error);
            throw error;
        }
    };



    const loadProducts = useCallback(async () => {
        setLoading(true);
        try {
            const newProducts = await fetchProducts(page);
            setProducts(prevProducts => [...prevProducts, ...newProducts]);
            setPage(prevPage => prevPage + 1);
        } catch (error) {
            Alert.alert('Error', 'Failed to load products');
        }
        setLoading(false);
    }, [page, fetchProducts]);



    const renderProduct = ({ item }: { item: Product }) => (
        <TouchableOpacity style={styles.productItem} onPress={() => navigation.navigate(routes.ProductDetailsScreen, { product: item })}>
            <View style={styles.productInfo}>
                <AppImage uri={item.thumbnail} extraStyles={{ width: 100, height: 100 }} />
                <AppText text={item.title} styles={styles.productTitle} fontSize={14} />
                <AppText text={`${item.price}`} styles={styles.productPrice} fontSize={14} />
            </View>
        </TouchableOpacity>
    );



    return (
        <View style={styles.container}>
            <AppButton
                style={styles.favoriteListButton}
                text="View Favorites"
                textColor={styles.favoriteListButtonText.color}
                fontSize={14}
                onPress={() => navigation.navigate('FavoriteProducts')}
            />


            <FlatList
                data={products}
                renderItem={renderProduct}
                keyExtractor={(item, index) => `${item.id}_${index}`} // Modified keyExtractor
                onEndReached={loadProducts}
                onEndReachedThreshold={0.1}
                ListFooterComponent={loading ? <ActivityIndicator size="large" /> : null}
            />
            <AppButton
                style={styles.logoutButton}
                text="Logout"
                textColor={styles.logoutButtonText.color}
                fontSize={14}
                onPress={handleLogout}
            />
        </View>

    );
};

export default ProductListingScreen;


