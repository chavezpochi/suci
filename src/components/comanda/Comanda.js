import * as React from 'react';
import { StyleSheet, Text, View, FlatList, Image, Alert, TouchableOpacity } from 'react-native';
import Menu from '../../common/Menu'

function Comanda(props) {
    return (

        <View >
            <Menu title='Comanda:1 - Mesa: 12 - Mozo: Nico - Hora: 21:30' />

            <View style={styles.container}>
                <FlatList style={{ height: 540 }}
                    ListEmptyComponent={() => <Text>No hay elementos</Text>}
                    data={props.list}
                    keyExtractor={item => item.id}
                    renderItem={({ item }) => (
                        <TouchableOpacity onPress={() => {
                            item.cant = item.cant + 1;
                            console.log(item.cant);
                        }}>
                            <View style={styles.listItem}  >
                                <Image
                                    source={{ uri: item.img }}
                                    style={styles.coverImage}
                                />
                                <View style={styles.metaInfo}>

                                    <Text style={styles.title} >{item.name}</Text>
                                    <Text style={styles.listItemText}>Cantidad:{item.cant}</Text>
                                </View>
                            </View>
                        </TouchableOpacity>
                    )}
                />
            </View>

        </View>

    );
}




const styles = StyleSheet.create({
    container: {
        marginVertical: 15,
        alignItems: 'center'
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

    textSubtitle: { fontSize: 18, fontWeight: 'bold', color: 'gray' },

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