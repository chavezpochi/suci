import * as React from 'react';
import {StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import Platos from '../list/Platos'
import Bebidas from '../list/Bebidas'
import Ensaladas from '../list/Ensaladas'


const Tab = createBottomTabNavigator();

function Tabs() {
    return (
        <NavigationContainer style={styles.container}>
            <Tab.Navigator
                initialRouteName="Platos"
                tabBarOptions={{
                    activeTintColor: '#e91e63',
                }}
            >
                <Tab.Screen
                    name="Platos"
                    component={Platos}
                    options={{
                        tabBarLabel: 'Platos',
                        tabBarIcon: ({ color, size }) => (
                            <MaterialCommunityIcons name="food" color={color} size={size} />
                        ),
                    }}
                />
                <Tab.Screen
                    name="Ensaladas"
                    component={Ensaladas}
                    options={{
                        tabBarLabel: 'Ensaladas',
                        tabBarIcon: ({ color, size }) => (
                            <MaterialCommunityIcons name="fruit-grapes" color={color} size={size} />
                        ),
                    }}
                />
                <Tab.Screen
                    name="Bebidas"
                    component={Bebidas}
                    options={{
                        tabBarLabel: 'Bebidas',
                        tabBarIcon: ({ color, size }) => (
                            <MaterialCommunityIcons name="beer" color={color} size={size} />
                        ),
                    }}
                />
            </Tab.Navigator>
        </NavigationContainer>

    );
}


const styles = StyleSheet.create({
    container: {
    flexGrow:1,
        position:'absolute',
      flexDirection: 'column'
    },
    
  });

export default Tabs
