import * as React from 'react';
import { View, Text, StyleSheet } from 'react-native'
import Lista from './List'
import Menu from '../../common/Menu'
function Ensaladas(props) {
    return (

        <View style={styles.container}>
            <Menu title={'Menu'} subtitle ={'Ensaladas'}/>
            <Lista array={lista} titulo={'Ensaladas'} />
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
        name: 'Apio,tomate',
        cant: 2,
        img: 'https://t1.rg.ltmcdn.com/es/images/1/7/7/ensalada_de_apio_tomate_y_aguacate_60771_orig.jpg',
        key: '1'
    },
    {
        name: 'Mixta',
        cant: 2,
        img: 'https://www.laylita.com/recetas/wp-content/uploads/Ensalada-de-lechuga-con-limon-y-cilantro.jpg',
        key: '2'
    },
    {
        name: 'Lechuga,zanahoria',
        cant: 2,
        img: 'https://www.hogarmania.com/archivos/201901/ensalada-aguacate-xl-1280x720x80xX-1.jpg',
        key: '3'
    },
    {
        name: 'Lechuga Tomate',
        cant: 2,
        img: 'https://querecetas.net/wp-content/uploads/2018/08/Ensalada-de-lechuga-y-tomate-fresco.jpg',
        key: '4'
    },{
        name: 'Apio,tomate',
        cant: 2,
        img: 'https://t1.rg.ltmcdn.com/es/images/1/7/7/ensalada_de_apio_tomate_y_aguacate_60771_orig.jpg',
        key: '5'
    },
    {
        name: 'Mixta',
        cant: 2,
        img: 'https://www.laylita.com/recetas/wp-content/uploads/Ensalada-de-lechuga-con-limon-y-cilantro.jpg',
        key: '6'
    },
    {
        name: 'Lechuga,zanahoria',
        cant: 2,
        img: 'https://www.hogarmania.com/archivos/201901/ensalada-aguacate-xl-1280x720x80xX-1.jpg',
        key: '7'
    },
    {
        name: 'Lechuga Tomate',
        cant: 2,
        img: 'https://querecetas.net/wp-content/uploads/2018/08/Ensalada-de-lechuga-y-tomate-fresco.jpg',
        key: '8'
    },{
        name: 'Apio,tomate',
        cant: 2,
        img: 'https://t1.rg.ltmcdn.com/es/images/1/7/7/ensalada_de_apio_tomate_y_aguacate_60771_orig.jpg',
        key: '9'
    },
    {
        name: 'Mixta',
        cant: 2,
        img: 'https://www.laylita.com/recetas/wp-content/uploads/Ensalada-de-lechuga-con-limon-y-cilantro.jpg',
        key: '10'
    }

]

export default Ensaladas