import React from 'react';
import {Image, StyleSheet,Text,View,TouchableOpacity} from 'react-native';
export default function ProductList(props){
    const {product, onAddToCartClick} = props;
        return(
            <View style={styles.shadow}>
                <View style={styles.container}>
                    <Image style={styles.img} source={{ uri: product.image[0].url }} />
                    <View style={styles.info}>
                        <Text style={styles.name}>{product.name}</Text>
                        <View style={styles.priceRow}>
                            <Text style={styles.price}>{product.price}</Text>
                            <TouchableOpacity onPress={onAddToCartClick}>
                                <Text style={styles.cartText}>MUA +</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </View>
        );
}
const styles = StyleSheet.create({
    shadow: {
        shadowColor: '#000',
        shadowOpacity: 0.1,
        shadowRadius: 10,
        shadowOffset: {width:0, height: 0}
    },
    container: {
        marginBottom: 20,
        borderRadius: 4,
        backgroundColor: '#fff',
        overflow: 'hidden'
    },
    img: {
        height: 150,
        borderTopLeftRadius: 4,
        borderBottomLeftRadius: 4
    },
    info: {
        padding: 8
    },
    name: {
        fontSize: 16,
        marginBottom: 8
    },
    priceRow: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center'
    },
    price: {
        fontSize: 16,
        color: '#888',
        flex: 1
    },
    cartText: {
        textTransform: 'uppercase',
        fontSize: 16,
        color: '#2f95dc'
    },
});