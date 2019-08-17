import React  from 'react';
import { StyleSheet, View, FlatList} from 'react-native';
import CategoryListitem from '../components/CategoryListitem';
export default class Categories extends React.Component {
  static navigationOptions = {
    title: 'Home',
  };
  constructor(props) {
    super(props)
    this.state = {
      category: [
        {id: 1,name:'Áo Vest'},
        {id: 1,name:'Áo Vest'},
        {id: 1,name:'Áo Vest'},
        {id: 1,name:'Áo Vest'},
        {id: 1,name:'Áo Vest'}
      ]
    }
  }
  
  render(){
    const {category} = this.state;
    const { navigation } = this.props;
  return (
    <View style={styles.container}>
      <FlatList style={styles.contain}
        data ={category}
        renderItem={({ item }) => <CategoryListitem
         category={item}
         onPress={() => navigation.navigate('Category', {
           title: item.name
         }) } />}
        keyExtractor={item => `${item.id}`}
      />
    </View>
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
    justifyContent: 'center',
    paddingRight: 8,
  },
  contain: {
    paddingTop: 16
  }
});
