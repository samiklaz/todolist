import React from 'react'
import { Text, View, StyleSheet } from 'react-native'


export default function Header() {
    return (
        <View style={styles.header}>
            <Text style={styles.title}>My Todos</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    header: {
        height: 40,
        paddingTop: 'auto',
        backgroundColor: 'coral',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',

    },
    title: {
        textAlign: 'center',
        color: 'white',
        fontSize: 15,
        fontWeight: 'bold',
    }
})