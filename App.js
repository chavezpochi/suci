import React, {useState} from 'react';
import {
  StyleSheet,
  View
} from 'react-native';
import Tab from './src/components/menu/Tab'
import Comanda from './src/components/comanda/Comanda'
import dataBase from './src/utiles/database'
import ComandaContext from './src/context/ComandaContext'
export default function App() {
  const [platos, setPlatos] = useState(dataBase);
  return (
    <View style={styles.container}>
      <View style={styles.menu}>
      </View>
      <ComandaContext.Provider value={[platos, setPlatos]}>
      <View style={styles.container2}>
        <View style={styles.box}>
          <Tab/>
        </View>
        <View style={styles.box}>
          <Comanda/>
        </View>
      </View>
      </ComandaContext.Provider>
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
