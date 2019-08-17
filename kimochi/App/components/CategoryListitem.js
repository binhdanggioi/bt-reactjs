import React from 'react'
import{ View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native'
import ski from '../assets/ski.png'

export default function CategoryListitem(props){
    const { category, onPress } = props;
    return(
        <TouchableOpacity activeOpacity={0.5} onPress={onPress}>
    <View style={styles.container}>
        <Text style={styles.title}>{category.name}</Text>
        <Image style={styles.categoryImage}
         source={ski} />
    </View>
    </TouchableOpacity>
    );
}
const styles = StyleSheet.create({
    categoryImage: {
        width: 64,
        height: 64,
    },
    container: {
        alignItems: 'center',
        padding: 16,
        margin: 16,
        backgroundColor: '#fff',
        shadowColor: '#000',
        shadowOpacity: 0.1,
        shadowRadius: 10,
        shadowOffset: {width:0, height:0},
    },
    title: {
        fontSize: 18,
        textTransform: 'uppercase',
        margin: 8,
        fontWeight: 'bold',
        textAlign: 'center'
    }
});