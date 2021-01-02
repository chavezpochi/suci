import React from 'react'
import { StyleSheet, Text, View, FlatList, Image ,Alert,TouchableOpacity} from 'react-native';



function Lista(props) {

    return (

        <View style={styles.container}>

            <Text style={styles.textSubtitle}>Lista de {props.titulo}</Text>
            <View style={styles.line}></View>


            <FlatList style={{height:540}}
                ListEmptyComponent={() => <Text>No hay elementos</Text>}
                data={props.array}
                extraData={props}
                keyExtractor={item => item.id}
                renderItem={({ item }) => (
                    <TouchableOpacity onPress={()=> {
                        item.cant = item.cant+1;
                        console.log(item.cant);
                        }}> 
                    <View   style={styles.listItem}  >
                        <Image
                            source={{ uri: item.img }}
                            style={styles.coverImage}
                        />
                        <View  style={styles.metaInfo}>
                            
                            <Text style={styles.title} >{item.name}</Text>
                            <Text style={styles.listItemText}>Cantidad:{item.cant}</Text>
                        </View>
                    </View>
                    </TouchableOpacity>
                )}
            />

        </View>
    )

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

export default Lista