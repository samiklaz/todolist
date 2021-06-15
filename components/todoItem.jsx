import React from 'react'
import { TouchableOpacity, Text, StyleSheet, View } from 'react-native'
import { MaterialIcons } from '@expo/vector-icons'


export default function TodoItem ({item, pressHandler}) {
    return (
        <TouchableOpacity onPress={() => pressHandler(item.key)}>
            <View style={styles.item}>
                <Text>{item.text}</Text>
                <MaterialIcons name='delete' size={18} color={'coral'} />
            </View>
            
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    item : {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: 16,
        marginTop: 16,
        borderColor: '#bbb',
        borderWidth: 1,
        borderStyle: 'dashed',
        borderRadius: 10,
    }
})