import * as React from 'react';
import { View, Text, StyleSheet } from 'react-native'
import Lista from './List'
import Menu from '../../common/Menu'
function Platos(props) {
    return (

        <View style={styles.container}>
            <Menu title={'Menu'} subtitle ={'Platos'}/>
            <Lista array={lista} titulo={'Platos'} />
        </View>
    )
}



const styles = StyleSheet.create({

    container: {backgroundColor: '#f5fcff' },
    title: {
        fontSize: 30, fontWeight: 'bold'
    },

})


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
    {
        name: 'Bife de Chorizo',
        cant: 2,
        img: 'https://img-global.cpcdn.com/recipes/recipes_69451_v1430852944_receta_foto_00069451-zsbiepdekcovqi7fj3in/1200x630cq70/photo.jpg',
        key: '3'
    },
    {
        name: 'Pizza',
        cant: 2,
        img: 'https://www.recetasdesbieta.com/wp-content/uploads/2018/09/Como-hacer-pizza-casera-rapida-con-masa-de-pizza-sin-repos-1.jpg',
        key: '4'
    },
    {
        name: 'Hamburguesa',
        cant: 2,
        img: 'https://sevilla.abc.es/gurme/wp-content/uploads/sites/24/2012/01/comida-rapida-casera.jpg',
        key: '5'
    },
    {
        name: 'Hamburguesa',
        cant: 2,
        img: 'https://sevilla.abc.es/gurme/wp-content/uploads/sites/24/2012/01/comida-rapida-casera.jpg',
        key: '6'
    },
    {
        name: 'Hamburguesa',
        cant: 2,
        img: 'https://sevilla.abc.es/gurme/wp-content/uploads/sites/24/2012/01/comida-rapida-casera.jpg',
        key: '7'
    },
    {
        name: 'Hamburguesa',
        cant: 2,
        img: 'https://sevilla.abc.es/gurme/wp-content/uploads/sites/24/2012/01/comida-rapida-casera.jpg',
        key: '8'
    },
    {
        name: 'Hamburguesa',
        cant: 2,
        img: 'https://sevilla.abc.es/gurme/wp-content/uploads/sites/24/2012/01/comida-rapida-casera.jpg',
        key: '9'
    },
    {
        name: 'Hamburguesa',
        cant: 2,
        img: 'https://sevilla.abc.es/gurme/wp-content/uploads/sites/24/2012/01/comida-rapida-casera.jpg',
        key: '10'
    }

]

export default Platos