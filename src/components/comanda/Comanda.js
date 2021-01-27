import useComanda from '../../hooks/useComanda'
import React, { useState,useContext} from 'react';
import { StyleSheet, Text, View, FlatList, Image, Button, TouchableOpacity } from 'react-native';
import Menu from '../../common/Menu'

function Comanda(props) {
    const [count, setCount] = useState(0);
    const [platos, setPlatos] = useComanda();
    

    const addItem = (item) => {
        item.cant += 1;
        setCount(count + 1);
        console.log(item);
    };
    const deleteItem = (item) => {
        if(item.cant != 0){
        item.cant -= 1;
        setCount(count - 1);
        console.log(item);
        }
    };
    return (

        <View >
            <Menu style={styles.menu} title='Comanda:1 - Mesa: 12 - Mozo: Nico - Hora: 21:30' />

            <View style={styles.container}>
                <FlatList style={{ height: 540 }}
                    ListEmptyComponent={() => <Text>No hay elementos</Text>}
                    data={platos}
                    keyExtractor={item => item.key}
                    renderItem={({ item }) => (
                        
                            <View style={styles.listItem}  >
                                <Image
                                    source={{ uri: item.img }}
                                    style={styles.coverImage}
                                />
                                <View style={styles.metaInfo}>

                                    <Text style={styles.title} >{item.name}</Text>
                                    <Text style={styles.listItemText}>Cantidad:{item.cant}</Text>
                                    
                                </View>
                                <TouchableOpacity style={styles.button} onPress={() => deleteItem(item)}>
                                <Text>-</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={styles.button} onPress={() => addItem(item)}>
                                <Text>+</Text>
                                </TouchableOpacity>
                            </View>
                        
                    )}
                />
            </View>

        </View>

    );


}



const styles = StyleSheet.create({
    container: {
        flexGrow:1,
        flex: 1,
        position:'relative',
        margin: 10
    },
    text: {
        fontSize: 20,
        color: '#101010',
        marginTop: 60,
        fontWeight: '700'
    },
    listItem: {
        marginTop: 10,
        paddingHorizontal: 80,
        backgroundColor: '#fff',
        flexDirection: 'row'
    },
    coverImage: {
        width: 80,
        height: 80,
        borderRadius: 100
    },
    metaInfo: {
        marginLeft: 10
    },
    title: {
        fontSize: 18,
        width: 200,
        padding: 10
    },
    listItemText: {
        fontSize: 15,
        padding: 10
    },
    menu: {position:'absolute'},

    textSubtitle: { fontSize: 18, fontWeight: 'bold', color: 'gray' },
    button: {
        alignItems: "center",
        backgroundColor: "#DDDDDD",
        margin: 10,
        padding: 10,
        height:50,
      }

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
export default Comanda