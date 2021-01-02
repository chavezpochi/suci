import React from 'react';
import {
  StyleSheet,
  View
} from 'react-native';
import Tab from './src/components/menu/Tab'
import Comanda from './src/components/comanda/Comanda'

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.menu}>

      </View>
      <View style={styles.container2}>
        <View style={styles.box}>
          <Tab/>
        </View>
        <View style={styles.box}>
          <Comanda list ={lista}/>
        </View>
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column'
  },
  container2: {
    flex: 1,
    flexDirection: 'row'
  },
  box: {
    flex: 1,
    backgroundColor: 'orange',
    fontSize: 20,
    margin: 1
  },
  menu: {
    flex: .1,
    backgroundColor: '#ff2',
  },
});

const lista = [
  {
      name: 'Milanesa de Pollo',
      cant: 2,
      img: 'https://www.recetas360.com/wp-content/uploads/2019/07/Milanesas-de-pollo-al-horno.jpg',
      key: '1'
  },
  {
      name: 'Empanadas de carne',
      cant: 2,
      img: 'https://www.laespanolaaceites.com/wp-content/uploads/2019/05/empanadas-de-matambre-1080x671.jpg',
      key: '2'
  },

]