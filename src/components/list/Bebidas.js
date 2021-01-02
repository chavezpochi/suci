import * as React from 'react';
import { View, Text, StyleSheet } from 'react-native'
import Lista from './List'
import Menu from '../../common/Menu'
function Bebidas(props) {
    return (

        <View style={styles.container}>
            <Menu title={'Menu'} subtitle ={'Bebidas'}/>
            <Lista array={lista} titulo={'Bebidas'} />
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
        name: 'CocaCola',
        cant: 2,
        img: 'https://supermercado.carrefour.com.ar/media/catalog/product/7/7/7790895000997_02.jpg',
        key: '1'
    },
    {
        name: 'Sprite',
        cant: 2,
        img: 'https://i0.wp.com/indrinks.com.ar/wp-content/uploads/2020/05/Gaseosa-Sprite.jpg?fit=1024%2C1024&ssl=1',
        key: '2'
    },
    {
        name: 'Pepsi',
        cant: 2,
        img: 'https://supermaxsa.com.ar/wp-content/uploads/2020/05/1912.png',
        key: '3'
    },
    {
        name: 'Fanta',
        cant: 2,
        img: 'https://supermercado.carrefour.com.ar/media/catalog/product/cache/1/image/1000x/040ec09b1e35df139433887a97daa66f/7/7/7790895001017_02.jpg',
        key: '4'
    },
    {
        name: 'Heineken',
        cant: 2,
        img: 'https://supermercado.carrefour.com.ar/media/catalog/product/cache/1/image/1000x/040ec09b1e35df139433887a97daa66f/7/7/7793147000899_11.jpg',
        key: '5'
    },{
        name: 'CocaCola',
        cant: 2,
        img: 'https://supermercado.carrefour.com.ar/media/catalog/product/7/7/7790895000997_02.jpg',
        key: '6'
    },
    {
        name: 'Sprite',
        cant: 2,
        img: 'https://i0.wp.com/indrinks.com.ar/wp-content/uploads/2020/05/Gaseosa-Sprite.jpg?fit=1024%2C1024&ssl=1',
        key: '7'
    },
    {
        name: 'Pepsi',
        cant: 2,
        img: 'https://supermaxsa.com.ar/wp-content/uploads/2020/05/1912.png',
        key: '8'
    },
    {
        name: 'Fanta',
        cant: 2,
        img: 'https://supermercado.carrefour.com.ar/media/catalog/product/cache/1/image/1000x/040ec09b1e35df139433887a97daa66f/7/7/7790895001017_02.jpg',
        key: '9'
    },
    {
        name: 'Heineken',
        cant: 2,
        img: 'https://supermercado.carrefour.com.ar/media/catalog/product/cache/1/image/1000x/040ec09b1e35df139433887a97daa66f/7/7/7793147000899_11.jpg',
        key: '10'
    }

]


export default Bebidas