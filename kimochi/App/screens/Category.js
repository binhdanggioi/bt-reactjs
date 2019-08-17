import React  from 'react';
import { StyleSheet, FlatList, View } from 'react-native';
import ProductList from '../components/ProductList';

export default class Category extends React.Component {
  static navigationOptions = ({navigation}) => {
    return{
      title: navigation.getParam('title')
    };
  };
  constructor(props){
    super(props);
    this.state = {
      products: [
        {
          id: 1,
          image: [
            {
              url: 'https://res.cloudinary.com/demo/image/upload/c_fill,e_saturation:70,h_100,w_120/dpr_1.0,f_auto/castle.jpg'
            }
          ],
          name: 'skiBluaaaaaae',
          price: 5000
        },
        {
          id: 2,
          image: [
            {
              url: 'https://res.cloudinary.com/demo/image/upload/c_fill,e_saturation:70,h_100,w_120/dpr_1.0,f_auto/castle.jpg'
            }
          ],
          name: 'skiYellowaaaaaaaa',
          price: 10000
        },
        {
          id: 3,
          image: [
            {
              url: 'https://res.cloudinary.com/demo/image/upload/c_fill,e_saturation:70,h_100,w_120/dpr_1.0,f_auto/castle.jpg'
            }
          ],
          name: 'skiBluaaaaaae',
          price: 5000
        },
        {
          id: 4,  
          image: [
            {
              url: 'https://res.cloudinary.com/demo/image/upload/c_fill,e_saturation:70,h_100,w_120/dpr_1.0,f_auto/castle.jpg'
            }
          ],
          name: 'skiBluaaaaaae',
          price: 5000
        }
      ]
    };
  };
  render(){
  return (
   <FlatList
      data={this.state.products}
      contentContainerStyle={styles.container}
      numColumns={2}
      renderItem={({item}) => 
        <View style={styles.wrapper}>
          <ProductList product={item}/>
        </View>
      }
      keyExtractor={(item) => `${item.id}` }
   />
  );
}
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'column',
    flex: 1,
    alignItems: 'stretch',
    backgroundColor: '#fff',
    paddingLeft: 8,
    paddingRight: 8,
  },
 wrapper: {
   flex: 1,
   paddingHorizontal: 8,
   paddingVertical: 8

 }
});
