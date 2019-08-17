import React  from 'react';
import { StyleSheet,Text } from 'react-native';
import { createAppContainer } from 'react-navigation';
import AppNavigator from './AppNavigator';
const AppContainer = createAppContainer(AppNavigator);
export default class App extends React.Component {
  render(){
  return (
    <AppContainer />
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
  Scroll: {
    padding: 10,
    marginTop: 20
  },  
});
